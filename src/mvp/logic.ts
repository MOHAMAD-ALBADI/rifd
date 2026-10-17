/* RIFD MVP — pure decision logic for the agents (rule-based in the prototype).
   No React here, so it can be unit-tested directly. */
import { COURSES, Course, FEE, Goal, LEVELS, OPPORTUNITIES, Opportunity, SessionMode, TUTORS, Tutor } from './data';

/* ---------- formatting ---------- */
/** Omani rial has 3 decimal places (baisa). */
export const omr = (n: number) => `${(Math.round(n * 1000) / 1000).toFixed(3)} ر.ع`;
export function time12(h: string) {
  const [hh, mm] = h.split(':').map(Number);
  const suffix = hh >= 12 ? 'م' : 'ص';
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${h12}:${String(mm).padStart(2, '0')} ${suffix}`;
}
export function hash(str: string) { let h = 0; for (const c of str) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; }
/** Local calendar date key (YYYY-MM-DD). toISOString() would shift to UTC and give yesterday in Oman before 04:00. */
export function localKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
export function dayLabel(d: Date) {
  try { return d.toLocaleDateString('ar-OM', { weekday: 'long', day: 'numeric', month: 'long' }); }
  catch { return localKey(d); }
}
export function makeRef(prefix: string, seed = Date.now()) {
  return `${prefix}-${String(seed % 1_000_000).padStart(6, '0')}`;
}

/* ---------- 1) Needs Agent: diagnosis ---------- */
export type Urgency = 'high' | 'mid' | 'low';
export interface Diagnosis { gap: number; urgency: Urgency; sessions: number; dur: number; lvl: string; plan: string[] }
export interface DiagInput { topic: string; level: number; days: number; goal: Goal }

export function analyze({ topic, level, days, goal }: DiagInput): Diagnosis {
  const gap = 6 - level; // 5 = largest gap
  const urgency: Urgency = days <= 2 ? 'high' : days <= 5 ? 'mid' : 'low';
  let sessions = Math.min(4, Math.max(1, Math.round(gap * 0.8)));
  if (days <= 2) sessions = Math.min(sessions, 2); // little time: fewer, longer sessions
  if (goal === 'review') sessions = Math.max(1, sessions - 1);
  const dur = days <= 2 || level <= 2 ? 90 : 60;
  const lvl = LEVELS[level - 1][1];
  const plan: string[] = [];
  plan.push(level <= 2 ? `جلسة 1: شرح «${topic}» من الأساس بأمثلة بسيطة` : `جلسة 1: تحديد الثغرات في «${topic}» وتصحيحها`);
  if (sessions >= 2) plan.push('جلسة 2: تمارين موجّهة مع تصحيح فوري للأخطاء');
  if (sessions >= 3) plan.push('جلسة 3: مسائل بمستوى الاختبار وإدارة الوقت');
  if (sessions >= 4) plan.push('جلسة 4: مراجعة نهائية وتثبيت');
  if (sessions === 1) plan.push('بعد الجلسة: تمارين ذاتية قصيرة وتقييم تقدمك');
  return { gap, urgency, sessions, dur, lvl, plan };
}

/* ---------- 3) Execution Agent: availability ---------- */
export interface Slot { time: string; key: string; taken: boolean }
export interface Day { key: string; label: string; times: Slot[] }

export function slotsFor(t: Tutor, horizon: number, booked: string[] = [], now = new Date()): Day[] {
  const out: Day[] = [];
  for (let i = 1; i <= horizon; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    const key = localKey(d);
    const times = t.hours.map((h) => {
      const k = `${t.id}|${key} ${h}`;
      return { time: h, key: k, taken: hash(t.id + key + h) % 4 === 0 || booked.includes(k) };
    });
    out.push({ key, label: dayLabel(d), times });
  }
  return out;
}
export const horizonFor = (days: number) => Math.max(1, Math.min(days, 7));

/* ---------- 2) Matching Agent: tutor ranking ---------- */
export interface Match { t: Tutor; score: number; why: string[]; free: number; modeOk: boolean }
export interface MatchInput { subject: string; topic: string; mode: SessionMode; uni: string; days: number; booked?: string[]; now?: Date }

export function matchTutors({ subject, topic, mode, uni, days, booked = [], now }: MatchInput): Match[] {
  const horizon = horizonFor(days);
  return TUTORS.filter((t) => t.sub.includes(subject)).map((t) => {
    let score = 40; const why: string[] = [];
    if (t.topics.includes(topic)) { score += 25; why.push('متخصص في موضوعك: ' + topic); }
    score += (t.rating - 4) * 20;
    if (t.rating >= 4.8) why.push(`تقييم ${t.rating} من ${t.n} طالبًا`);
    if (t.modes.includes(mode)) { score += 8; why.push(mode === 'online' ? 'متاح عن بُعد' : 'متاح حضوريًا'); }
    else score -= 15;
    if (uni && t.uni === uni) { score += 6; why.push('من جامعتك: ' + t.uni); }
    const free = slotsFor(t, horizon, booked, now).reduce((a, d) => a + d.times.filter((x) => !x.taken).length, 0);
    if (free >= 4) { score += 6; why.push('مواعيد كافية قبل اختبارك'); }
    if (free === 0) score -= 40;
    score += Math.max(0, 8 - t.rate) * 0.8;
    return { t, score: Math.max(5, Math.min(98, Math.round(score))), why, free, modeOk: t.modes.includes(mode) };
  }).sort((a, b) => b.score - a.score);
}

/* ---------- 4) pricing (escrow) ---------- */
export function price(rate: number, durMin: number) {
  const total = rate * (durMin / 60);
  const fee = total * FEE;
  return { total, fee, tutor: total - fee };
}

/* ---------- 5) Verification / quality: progress after a session ---------- */
export interface Quality { improvement: number; remaining: number; note: string; suggestCourse: boolean }
export function assessProgress(preLevel: number, postLevel: number, remainingPlanned: number): Quality {
  const improvement = postLevel - preLevel;
  let remaining = remainingPlanned;
  let note: string;
  if (postLevel >= 4 || improvement >= 2) {
    remaining = Math.max(0, remainingPlanned - 1);
    note = 'تقدّم ممتاز — قلّلنا الجلسات المتبقية.';
  } else if (improvement <= 0) {
    note = 'لم يظهر تحسّن واضح بعد — نوصي بإكمال الخطة ودورة قصيرة داعمة.';
  } else {
    note = 'تقدّم جيد — نكمل الخطة كما هي.';
  }
  return { improvement, remaining, note, suggestCourse: improvement <= 1 };
}

/* ---------- Learning Agent: course recommendation ---------- */
export function recommendCourse(subject?: string, topic?: string): Course | undefined {
  if (!subject) return undefined;
  return COURSES.find((c) => c.subject === subject && (!topic || c.topics?.includes(topic))) ?? COURSES.find((c) => c.subject === subject);
}

export function gradeQuiz(c: Course, answers: (number | null)[]) {
  const correct = c.quiz.reduce((a, q, i) => a + (answers[i] === q.answer ? 1 : 0), 0);
  return { correct, total: c.quiz.length, passed: correct >= Math.ceil(c.quiz.length * 0.66) };
}

/* ---------- Opportunity Agent: ranking market opportunities ---------- */
export interface OppMatch { o: Opportunity; score: number; why: string[] }
export function rankOpportunities(skills: string[], certSkills: string[]): OppMatch[] {
  return OPPORTUNITIES.map((o) => {
    if (o.blocked) return { o, score: 0, why: [] };
    let score = 30; const why: string[] = [];
    if (skills.includes(o.skill)) { score += 40; why.push('يطابق مهارتك: ' + o.skill); }
    if (certSkills.includes(o.skill)) { score += 20; why.push('لديك شهادة موثّقة من المعهد الرقمي'); }
    if (o.days >= 4) { score += 5; why.push(`مهلة مريحة: ${o.days} أيام`); }
    if (o.clientType !== 'طالب') { score += 3; why.push('جهة جامعية موثّقة'); }
    return { o, score: Math.min(98, score), why };
  }).sort((a, b) => (a.o.blocked ? 1 : 0) - (b.o.blocked ? 1 : 0) || b.score - a.score);
}
