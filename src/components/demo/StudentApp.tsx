import { useEffect, useReducer, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { analyzeRequest, Analysis, CATEGORY_LABEL, matchProviders, Provider, PROVIDER_PROFILE, SAMPLE_REQUESTS } from '../../data/demo';
import { AppWindow, LogEntry, Narrative, NarrativePanel, Screen, Stars } from './AppChrome';
import { useEnv } from '../../lib/env';
import { EASE } from '../../lib/motion';

/* A stateful simulation of the student experience. Every button changes state; nothing is pre-completed.
   All data is illustrative and processed locally. */

type Match = Provider & { score: number };
type ScreenKey = 'dashboard' | 'request' | 'analysis' | 'matches' | 'profile' | 'booking' | 'progress' | 'feedback' | 'record';
const ORDER: ScreenKey[] = ['dashboard', 'request', 'analysis', 'matches', 'profile', 'booking', 'progress', 'feedback', 'record'];

interface S {
  screen: ScreenKey;
  subject: string;
  text: string;
  when: string;
  format: string;
  analysis: Analysis | null;
  matches: Match[];
  chosen: Match | null;
  slot: string | null;
  authorized: boolean;
  session: 'booked' | 'live' | 'done';
  rating: number;
  tags: string[];
  approved: boolean;
  log: LogEntry[];
  clock: number;
}

const fmt = (m: number) => `${String(9 + Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;

const init = (): S => ({
  screen: 'dashboard', subject: 'برمجة', text: SAMPLE_REQUESTS[0], when: 'هذا الأسبوع', format: 'عن بُعد',
  analysis: null, matches: [], chosen: null, slot: null, authorized: false, session: 'booked', rating: 0, tags: [], approved: false,
  log: [], clock: 0,
});

type A =
  | { type: 'go'; screen: ScreenKey }
  | { type: 'set'; patch: Partial<S> }
  | { type: 'submit' }
  | { type: 'showMatches' }
  | { type: 'open'; p: Match }
  | { type: 'book' }
  | { type: 'confirm' }
  | { type: 'start' }
  | { type: 'finish' }
  | { type: 'rate' }
  | { type: 'approve' }
  | { type: 'reset' };

function reducer(s: S, a: A): S {
  const log = (who: string, text: string, dt = 1) => ({ clock: s.clock + dt, log: [...s.log, { t: fmt(s.clock + dt), who, text }] });
  switch (a.type) {
    case 'go': return { ...s, screen: a.screen };
    case 'set': return { ...s, ...a.patch };
    case 'submit': {
      const analysis = analyzeRequest(s.text);
      return { ...s, screen: 'analysis', analysis, ...log('وكيل الاحتياج', `صُنّف الطلب: ${CATEGORY_LABEL[analysis.category]} · ${analysis.topic} · ${analysis.urgency}`) };
    }
    case 'showMatches': {
      if (!s.analysis) return s;
      const matches = matchProviders(s.analysis);
      return { ...s, screen: 'matches', matches, ...log('وكيل المطابقة', `${matches.length} مرشدين مؤهلين · أفضل تطابق ${matches[0]?.score ?? 0}%`) };
    }
    case 'open': return { ...s, screen: 'profile', chosen: a.p, slot: null };
    case 'book': return { ...s, screen: 'booking', authorized: false };
    case 'confirm':
      if (!s.authorized || !s.chosen) return s;
      return { ...s, screen: 'progress', session: 'booked', ...log('وكيل التنفيذ', `تأكيد سارة ✓ — حُجز ${s.slot} مع ${s.chosen.name} وحُجز المبلغ`, 2) };
    case 'start': return { ...s, session: 'live', ...log('وكيل التنفيذ', 'بدأت الجلسة · حضور الطرفين مؤكد', 60) };
    case 'finish': return { ...s, session: 'done', screen: 'feedback', ...log('وكيل التحقق', 'اكتملت الجلسة · 60 دقيقة · بانتظار تقييم سارة', 60) };
    case 'rate':
      if (!s.rating) return s;
      return { ...s, screen: 'record', ...log('وكيل التحقق', `تقييم ${s.rating}/5 · الأدلة جاهزة لاعتماد المشرف`, 3) };
    case 'approve':
      return { ...s, approved: true, ...log('وكيل الفرص', 'اعتمد المشرف ✓ · سجل خبرة محدّث · رُشّحت فرص تالية للطرفين', 5) };
    case 'reset': return init();
  }
}

function printState(): S {
  let s = init();
  s = reducer(s, { type: 'submit' });
  s = reducer(s, { type: 'showMatches' });
  return s;
}

const NAV = [
  { key: 'home', label: 'الرئيسية' },
  { key: 'requests', label: 'طلباتي' },
  { key: 'opps', label: 'الفرص' },
  { key: 'record', label: 'سجلي' },
];

function navFor(sc: ScreenKey) {
  return sc === 'dashboard' ? 'home' : sc === 'record' ? 'record' : 'requests';
}

function narrative(s: S): Narrative {
  const step = ORDER.indexOf(s.screen) + 1;
  const total = ORDER.length;
  const b = { step, total };
  switch (s.screen) {
    case 'dashboard': return { ...b, title: 'لوحة سارة', body: 'سارة طالبة علوم حاسوب. اختبارها الأسبوع القادم وتحتاج شرحًا لموضوع صعب.', hint: 'اضغط «اطلب دعمًا» داخل التطبيق' };
    case 'request': return { ...b, title: 'تكتب احتياجها بلغتها', body: 'لا قوائم معقدة: تصف ما تحتاجه، وتحدد الوقت وطريقة الجلسة.', hint: 'جرّب تعديل النص، ثم «إرسال الطلب»' };
    case 'analysis': return { ...b, title: 'رِفد يفهم الطلب', body: 'يُستخرج المجال والموضوع والمستوى والأولوية، ويُقترح تحضير قصير قبل الجلسة.', agent: 'وكيل الاحتياج + وكيل التعلّم', hint: 'اضغط «عرض المرشدين المناسبين»' };
    case 'matches': return { ...b, title: 'أفضل المرشدين لها', body: 'مرتّبون حسب المهارة الموثّقة والتقييم والتوفر — لا حسب من يرد أسرع.', agent: 'وكيل المطابقة', hint: 'افتح ملف أحد المرشدين' };
    case 'profile': return { ...b, title: 'ثقة قبل الحجز', body: 'أدلة مهارة، تقييمات حقيقية من طلبة، ومواعيد متاحة فعلًا.', hint: 'اختر موعدًا ثم «احجز»' };
    case 'booking': return { ...b, title: 'تأكيد بشري للدفع', body: 'المبلغ يُحجز ولا يُحرَّر للمرشد إلا بعد إتمام الجلسة.', agent: 'وكيل التنفيذ', human: 'سارة تؤكد الحجز والدفع بنفسها', hint: 'فعّل التأكيد ثم «تأكيد الحجز»' };
    case 'progress': return { ...b, title: s.session === 'live' ? 'الجلسة جارية' : 'حجز مؤكد', body: s.session === 'live' ? 'الحضور مسجّل تلقائيًا كدليل إتمام.' : 'تذكيرات مجدولة ومسار مراجعة مرسل قبل الموعد.', agent: 'وكيل التنفيذ', hint: s.session === 'live' ? 'اضغط «إنهاء الجلسة»' : 'اضغط «بدء الجلسة»' };
    case 'feedback': return { ...b, title: 'تقييم الجلسة', body: 'تقييم سارة جزء من أدلة الإتمام التي يراجعها المشرف.', agent: 'وكيل التحقق', hint: 'اختر التقييم ثم «إرسال»' };
    case 'record': return { ...b, title: s.approved ? 'نتيجة موثّقة وفرصة تالية' : 'بانتظار اعتماد المشرف', body: s.approved ? 'سجل تعلّم سارة وسجل خبرة يوسف تحدّثا، والمبلغ حُرّر للمرشد.' : 'الوكيل جهّز الأدلة؛ القرار النهائي لمشرف الدعم الأكاديمي.', agent: s.approved ? 'وكيل الفرص' : 'وكيل التحقق', human: s.approved ? undefined : 'اعتماد مشرف الدعم الأكاديمي', hint: s.approved ? 'اضغط «إعادة» لتجربة طلب آخر' : 'اضغط «اعتماد المشرف»' };
  }
}

function Avatar({ t, size = 48, tone = 'teal' }: { t: string; size?: number; tone?: 'teal' | 'blue' }) {
  return <span className={`grid shrink-0 place-items-center rounded-full font-bold text-white ${tone === 'teal' ? 'bg-gradient-to-br from-teal-500 to-teal-700' : 'bg-gradient-to-br from-rifd-500 to-rifd-700'}`} style={{ width: size, height: size, fontSize: size * 0.36 }}>{t}</span>;
}

function Choice({ options, value, onPick }: { options: string[]; value: string; onPick: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button key={o} onClick={() => onPick(o)} className={`focus-ring rounded-full border px-4 py-2 text-[17px] font-bold transition lg:text-[18px] ${value === o ? 'border-rifd-600 bg-rifd-600 text-white' : 'border-line bg-white text-ink-2 hover:border-rifd-300'}`}>{o}</button>
      ))}
    </div>
  );
}

export function StudentApp() {
  const { mode } = useEnv();
  const [s, dispatch] = useReducer(reducer, undefined, () => (mode === 'print' ? printState() : init()));
  const [showLog, setShowLog] = useState(false);
  const [revealed, setRevealed] = useState(mode === 'print' ? 5 : 0);

  // staged reveal of the analysis so the audience sees understanding happen
  useEffect(() => {
    if (s.screen !== 'analysis' || mode === 'print') return;
    setRevealed(0);
    const ids = [1, 2, 3, 4, 5].map((k) => window.setTimeout(() => setRevealed(k), 380 * k));
    return () => ids.forEach(clearTimeout);
  }, [s.screen, mode]);

  const a = s.analysis;
  const p = s.chosen;
  const prof = p ? PROVIDER_PROFILE[p.id] : null;

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[440px_1fr] lg:gap-10">
      <NarrativePanel n={narrative(s)} log={s.log} showLog={showLog} toggleLog={() => setShowLog((v) => !v)} />
      <AppWindow user={{ name: 'سارة', initials: 'س', role: 'علوم الحاسوب · سنة أولى' }} nav={NAV} activeNav={navFor(s.screen)} onReset={() => { setShowLog(false); dispatch({ type: 'reset' }); }}>
        <Screen k={s.screen + (s.screen === 'progress' ? s.session : '') + (s.screen === 'record' ? String(s.approved) : '')}>
          {s.screen === 'dashboard' && (
            <div>
              <h4 className="text-[28px] font-extrabold">مرحبًا سارة</h4>
              <p className="mt-1 text-[19px] text-ink-3">ماذا تحتاجين اليوم؟</p>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-[1.3fr_1fr]">
                <div className="rounded-[22px] bg-gradient-to-bl from-rifd-600 to-rifd-700 p-6 text-white">
                  <div className="text-[24px] font-extrabold">اطلبي دعمًا من طالب متمكّن</div>
                  <p className="mt-2 text-[18px] text-white/85">مرشدون من جامعتك، مهاراتهم موثّقة.</p>
                  <button onClick={() => dispatch({ type: 'go', screen: 'request' })} className="focus-ring mt-5 rounded-full bg-white px-6 py-3 text-[19px] font-extrabold text-rifd-700 transition hover:bg-rifd-50">اطلب دعمًا ←</button>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-[22px] border border-line p-5"><div className="text-[17px] text-ink-3">سجل التعلّم</div><div className="mt-1 text-[24px] font-extrabold"><span className="num">3</span> جلسات مكتملة</div></div>
                  <div className="rounded-[22px] border border-line p-5"><div className="text-[17px] text-ink-3">جلساتي القادمة</div><div className="mt-1 text-[20px] font-bold text-ink-3">لا توجد جلسات بعد</div></div>
                </div>
              </div>
              <div className="mt-5 rounded-[22px] border border-line p-5">
                <div className="text-[17px] text-ink-3">مقترح لكِ</div>
                <div className="mt-2 flex flex-wrap gap-3 text-[18px]"><span className="chip">ورشة: أساسيات Python</span><span className="chip">مسابقة برمجة النادي</span></div>
              </div>
            </div>
          )}

          {s.screen === 'request' && (
            <div>
              <h4 className="text-[28px] font-extrabold">طلب دعم جديد</h4>
              <div className="mt-5 space-y-5">
                <div><div className="mb-2 text-[18px] font-bold">المجال</div><Choice options={['برمجة', 'رياضيات', 'تصميم', 'كتابة']} value={s.subject} onPick={(v) => dispatch({ type: 'set', patch: { subject: v } })} /></div>
                <div>
                  <label htmlFor="req-text" className="mb-2 block text-[18px] font-bold">ماذا تحتاجين؟</label>
                  <textarea id="req-text" rows={3} value={s.text} onChange={(e) => dispatch({ type: 'set', patch: { text: e.target.value } })}
                    className="w-full resize-none rounded-2xl border border-line-strong bg-surface-2/50 p-4 text-[20px] leading-relaxed outline-none transition focus:border-rifd-500 focus:bg-white" />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {SAMPLE_REQUESTS.map((r, k) => (
                      <button key={k} onClick={() => dispatch({ type: 'set', patch: { text: r, subject: k === 0 ? 'برمجة' : 'رياضيات' } })} className="focus-ring rounded-full bg-surface-2 px-3 py-1 text-[16px] text-ink-2 hover:bg-rifd-50">مثال {k + 1}</button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div><div className="mb-2 text-[18px] font-bold">الموعد المفضّل</div><Choice options={['خلال 3 أيام', 'هذا الأسبوع', 'مرن']} value={s.when} onPick={(v) => dispatch({ type: 'set', patch: { when: v } })} /></div>
                  <div><div className="mb-2 text-[18px] font-bold">طريقة الجلسة</div><Choice options={['عن بُعد', 'في الحرم']} value={s.format} onPick={(v) => dispatch({ type: 'set', patch: { format: v } })} /></div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button onClick={() => dispatch({ type: 'submit' })} disabled={s.text.trim().length < 8} className="btn-primary focus-ring px-8 py-3.5 text-[20px]">إرسال الطلب</button>
                <button onClick={() => dispatch({ type: 'go', screen: 'dashboard' })} className="btn-ghost focus-ring px-6 py-3.5 text-[18px]">إلغاء</button>
              </div>
            </div>
          )}

          {s.screen === 'analysis' && a && (
            <div>
              <h4 className="text-[28px] font-extrabold">فهمنا طلبك</h4>
              <p className="mt-1 line-clamp-1 text-[18px] text-ink-3">«{s.text}»</p>
              <div className="mt-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
                {[['المجال', CATEGORY_LABEL[a.category]], ['الموضوع', a.topic], ['الأولوية', a.urgency], ['نوع الدعم', a.mode]].map(([k, v], i) => (
                  <motion.div key={k} animate={{ opacity: revealed > i ? 1 : 0.15, y: revealed > i ? 0 : 8 }} transition={{ duration: 0.4, ease: EASE }} className="rounded-[20px] border border-line p-4">
                    <div className="text-[16px] text-ink-3">{k}</div>
                    <div className="mt-1 text-[22px] font-extrabold">{v}</div>
                  </motion.div>
                ))}
              </div>
              {a.integrityFlag && revealed > 3 && (
                <div className="mt-4 rounded-2xl bg-amber-50 p-4 text-[18px] font-bold text-amber-700">تنبيه نزاهة: رِفد لا يُنجز الأعمال المقيّمة. سيُقدَّم الطلب كجلسة إرشاد لفهم المادة.</div>
              )}
              <motion.div animate={{ opacity: revealed > 4 ? 1 : 0 }} transition={{ duration: 0.4 }} className="mt-5 rounded-[20px] bg-rifd-50 p-5">
                <div className="text-[17px] font-bold text-rifd-700">تحضير مقترح قبل الجلسة · 15 دقيقة</div>
                <div className="mt-2 flex flex-wrap gap-2 text-[17px]"><span className="chip">فيديو: فكرة الاستدعاء الذاتي</span><span className="chip">3 تمارين قصيرة</span></div>
              </motion.div>
              <button onClick={() => dispatch({ type: 'showMatches' })} disabled={revealed < 5} className="btn-primary focus-ring mt-6 px-8 py-3.5 text-[20px]">عرض المرشدين المناسبين</button>
            </div>
          )}

          {s.screen === 'matches' && (
            <div>
              <div className="flex items-end justify-between gap-4">
                <div><h4 className="text-[28px] font-extrabold">مرشدون مناسبون لكِ</h4><p className="mt-1 text-[18px] text-ink-3">{a ? `${CATEGORY_LABEL[a.category]} · ${a.topic}` : ''}</p></div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-3">
                {s.matches.map((m, i) => (
                  <motion.div key={m.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: EASE, delay: i * 0.1 }}
                    className={`flex flex-col rounded-[22px] border p-5 ${i === 0 ? 'border-rifd-300 bg-rifd-50/50' : 'border-line'}`}>
                    <div className="flex items-start justify-between">
                      <Avatar t={m.initials.split(' ')[0]} size={56} />
                      <div className="text-center"><div className="num text-[30px] font-extrabold text-rifd-600">{m.score}%</div><div className="text-[15px] text-ink-3">تطابق</div></div>
                    </div>
                    <div className="mt-3 text-[22px] font-extrabold">{m.name}</div>
                    <div className="text-[17px] text-ink-3">{m.major} · {m.year}</div>
                    <div className="mt-2 flex items-center gap-2 text-[17px]"><Stars value={m.rating} size={18} /><span className="num font-bold">{m.rating}</span><span className="text-ink-3">· <span className="num">{m.sessions}</span> جلسة</span></div>
                    <div className="mt-3 flex flex-wrap gap-1.5">{m.tags.slice(0, 2).map((t) => <span key={t} className="rounded-full bg-surface-2 px-3 py-1 text-[15px]">{t}</span>)}</div>
                    <div className="mt-3 text-[17px]"><span className="text-ink-3">أقرب موعد: </span><b>{m.slots[0]}</b></div>
                    <button onClick={() => dispatch({ type: 'open', p: m })} className={`${i === 0 ? 'btn-primary' : 'btn-ghost'} focus-ring mt-4 py-3 text-[18px]`}>الملف الشخصي</button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {s.screen === 'profile' && p && prof && (
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_1fr]">
              <div>
                <button onClick={() => dispatch({ type: 'go', screen: 'matches' })} className="focus-ring text-[17px] font-bold text-ink-3 hover:text-ink">→ كل المرشدين</button>
                <div className="mt-3 flex items-center gap-4">
                  <Avatar t={p.initials.split(' ')[0]} size={72} />
                  <div><div className="text-[26px] font-extrabold">{p.name}</div><div className="text-[18px] text-ink-3">{p.major} · {p.year}</div>
                    <div className="mt-1 flex items-center gap-2 text-[17px]"><Stars value={p.rating} size={18} /><span className="num font-bold">{p.rating}</span><span className="text-ink-3">· إتمام <span className="num">{prof.completion}%</span></span></div></div>
                </div>
                <p className="mt-4 text-[19px] leading-relaxed text-ink-2">{prof.bio}</p>
                <div className="mt-4 text-[18px] font-bold">أدلة المهارة</div>
                <div className="mt-2 space-y-2">
                  {prof.evidence.map((e) => (
                    <div key={e.title} className="flex items-center gap-3 rounded-2xl border border-line p-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-teal-50 text-teal-700">✓</span><div><div className="text-[18px] font-bold">{e.title}</div><div className="text-[15px] text-ink-3">{e.sub}</div></div></div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[18px] font-bold">تقييمات الطلبة</div>
                <div className="mt-2 space-y-2">
                  {prof.reviews.map((r, k) => (
                    <div key={k} className="rounded-2xl bg-surface-2 p-3.5"><div className="flex items-center justify-between text-[16px]"><b>{r.by}</b><Stars value={r.stars} size={15} /></div><p className="mt-1 text-[17px] leading-snug">{r.text}</p></div>
                  ))}
                </div>
                <div className="mt-4 text-[18px] font-bold">المواعيد المتاحة</div>
                <div className="mt-2 grid grid-cols-1 gap-2">
                  {p.slots.map((sl) => (
                    <button key={sl} onClick={() => dispatch({ type: 'set', patch: { slot: sl } })} className={`focus-ring flex items-center justify-between rounded-2xl border px-4 py-3 text-[18px] font-bold transition ${s.slot === sl ? 'border-rifd-600 bg-rifd-600 text-white' : 'border-line hover:border-rifd-300'}`}>
                      {sl}<span className={`num text-[16px] ${s.slot === sl ? 'text-white/80' : 'text-ink-3'}`}>{p.rate} ر.ع</span>
                    </button>
                  ))}
                </div>
                <button onClick={() => dispatch({ type: 'book' })} disabled={!s.slot} className="btn-primary focus-ring mt-4 w-full py-3.5 text-[20px]">احجز هذا الموعد</button>
              </div>
            </div>
          )}

          {s.screen === 'booking' && p && (
            <div className="mx-auto max-w-[640px]">
              <h4 className="text-[28px] font-extrabold">تأكيد الحجز</h4>
              <div className="mt-5 rounded-[22px] border border-line p-5">
                <div className="flex items-center gap-4"><Avatar t={p.initials.split(' ')[0]} size={56} /><div><div className="text-[22px] font-extrabold">{p.name}</div><div className="text-[17px] text-ink-3">{a?.topic} · 60 دقيقة · {s.format}</div></div></div>
                <div className="mt-4 divide-y divide-line text-[19px]">
                  <div className="flex justify-between py-2.5"><span className="text-ink-3">الموعد</span><b>{s.slot}</b></div>
                  <div className="flex justify-between py-2.5"><span className="text-ink-3">قيمة الجلسة</span><b><span className="num">{p.rate.toFixed(2)}</span> ر.ع</b></div>
                  <div className="flex justify-between py-2.5"><span className="text-ink-3">الدفع</span><b className="text-teal-700">محجوز حتى الإتمام</b></div>
                </div>
              </div>
              <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-[20px] border border-amber-600/25 bg-amber-50 p-4 text-[18px] text-amber-700">
                <input type="checkbox" checked={s.authorized} onChange={(e) => dispatch({ type: 'set', patch: { authorized: e.target.checked } })} className="mt-1 h-5 w-5 accent-rifd-600" />
                <span><b>أؤكد الحجز والدفع بنفسي.</b> لا يتخذ أي وكيل قرارًا ماليًا دون موافقتي.</span>
              </label>
              <div className="mt-5 flex gap-3">
                <button onClick={() => dispatch({ type: 'confirm' })} disabled={!s.authorized} className="btn-primary focus-ring px-8 py-3.5 text-[20px]">تأكيد الحجز</button>
                <button onClick={() => dispatch({ type: 'go', screen: 'profile' })} className="btn-ghost focus-ring px-6 py-3.5 text-[18px]">رجوع</button>
              </div>
            </div>
          )}

          {s.screen === 'progress' && p && (
            <div className="mx-auto max-w-[720px]">
              <div className="flex items-center gap-4">
                <span className={`grid h-14 w-14 place-items-center rounded-full text-[26px] ${s.session === 'live' ? 'bg-rifd-50 text-rifd-600' : 'bg-teal-50 text-teal-700'}`}>{s.session === 'live' ? <span className="pulse-soft">●</span> : '✓'}</span>
                <div><h4 className="text-[28px] font-extrabold">{s.session === 'live' ? 'الجلسة جارية الآن' : 'تم الحجز'}</h4><p className="text-[18px] text-ink-3">{s.slot} · مع {p.name}</p></div>
              </div>
              <div className="mt-6 space-y-0">
                {[
                  { t: 'تم الحجز وحُجز المبلغ', done: true },
                  { t: 'أُرسل التذكير ومسار المراجعة', done: true },
                  { t: 'الجلسة', done: s.session === 'live', live: s.session === 'live' },
                  { t: 'الإتمام والتقييم', done: false },
                ].map((r, k, arr) => (
                  <div key={k} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className={`grid h-9 w-9 place-items-center rounded-full text-[16px] font-bold ${r.done ? (r.live ? 'bg-rifd-600 text-white' : 'bg-teal-500 text-white') : 'border-2 border-line-strong text-ink-3'}`}>{r.done ? (r.live ? '●' : '✓') : k + 1}</span>
                      {k < arr.length - 1 && <span className={`w-0.5 flex-1 ${r.done ? 'bg-teal-500' : 'bg-line'}`} style={{ minHeight: 28 }} />}
                    </div>
                    <div className={`pb-5 text-[20px] ${r.done ? 'font-bold' : 'text-ink-3'}`}>{r.t}{r.live && <span className="ms-2 text-[17px] font-bold text-rifd-600">جارية</span>}</div>
                  </div>
                ))}
              </div>
              {s.session === 'booked' ? (
                <button onClick={() => dispatch({ type: 'start' })} className="btn-primary focus-ring px-8 py-3.5 text-[20px]">بدء الجلسة (محاكاة)</button>
              ) : (
                <button onClick={() => dispatch({ type: 'finish' })} className="btn-primary focus-ring px-8 py-3.5 text-[20px]">إنهاء الجلسة</button>
              )}
            </div>
          )}

          {s.screen === 'feedback' && p && (
            <div className="mx-auto max-w-[680px]">
              <h4 className="text-[28px] font-extrabold">كيف كانت جلستك مع {p.name.split(' ')[0]}؟</h4>
              <div className="mt-5 rounded-[22px] border border-line p-6 text-center">
                <Stars value={s.rating} size={48} onPick={(v) => dispatch({ type: 'set', patch: { rating: v } })} />
                <div className="mt-2 text-[18px] text-ink-3">{s.rating ? ['', 'ضعيفة', 'مقبولة', 'جيدة', 'جيدة جدًا', 'ممتازة'][s.rating] : 'اختاري التقييم'}</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['شرح واضح', 'أمثلة عملية', 'ملتزم بالوقت', 'صبور'].map((t) => {
                  const on = s.tags.includes(t);
                  return <button key={t} onClick={() => dispatch({ type: 'set', patch: { tags: on ? s.tags.filter((x) => x !== t) : [...s.tags, t] } })} className={`focus-ring rounded-full border px-4 py-2 text-[18px] font-bold transition ${on ? 'border-teal-600 bg-teal-50 text-teal-700' : 'border-line text-ink-2 hover:border-teal/50'}`}>{on ? '✓ ' : ''}{t}</button>;
                })}
              </div>
              <button onClick={() => dispatch({ type: 'rate' })} disabled={!s.rating} className="btn-primary focus-ring mt-6 px-8 py-3.5 text-[20px]">إرسال التقييم</button>
            </div>
          )}

          {s.screen === 'record' && p && (
            <div>
              <h4 className="text-[28px] font-extrabold">{s.approved ? 'تم تحديث السجلات' : 'الأدلة جاهزة للاعتماد'}</h4>
              <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
                <div className="rounded-[22px] border border-line p-5">
                  <div className="text-[17px] text-ink-3">سجل تعلّم سارة</div>
                  <div className="mt-1 text-[24px] font-extrabold"><Counter from={3} to={s.approved ? 4 : 3} /> جلسات مكتملة</div>
                  <div className="mt-3 flex items-center justify-between rounded-2xl bg-surface-2 px-4 py-3 text-[18px]"><span>{a?.topic}</span><b className={s.approved ? 'text-teal-700' : 'text-ink-3'}>{s.approved ? 'مكتمل ✓' : 'قيد الاعتماد'}</b></div>
                </div>
                <div className={`rounded-[22px] border p-5 transition-colors ${s.approved ? 'border-teal/50 bg-teal-50' : 'border-line'}`}>
                  <div className="flex items-center justify-between"><span className="text-[17px] text-ink-3">سجل خبرة {p.name}</span>{s.approved && <span className="rounded-full bg-teal-600 px-3 py-0.5 text-[15px] font-bold text-white">موثّق</span>}</div>
                  <div className="mt-1 text-[24px] font-extrabold"><Counter from={p.sessions} to={s.approved ? p.sessions + 1 : p.sessions} /> جلسة موثّقة</div>
                  <div className="mt-3 flex items-center gap-2 text-[18px]"><span className="text-ink-3">آخر تقييم</span><Stars value={s.rating} size={18} />{s.tags.length > 0 && <span className="text-ink-3">· {s.tags.join('، ')}</span>}</div>
                  <div className="mt-2 text-[17px]"><span className="text-ink-3">المبلغ: </span><b className={s.approved ? 'text-teal-700' : ''}>{s.approved ? `حُرّر ${p.rate} ر.ع للمرشد` : 'محجوز'}</b></div>
                </div>
              </div>
              <AnimatePresence mode="wait">
                {s.approved ? (
                  <motion.div key="opp" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-[22px] bg-rifd-50 p-5">
                    <div className="text-[18px] font-bold text-rifd-700">الفرصة التالية</div>
                    <div className="mt-2 flex flex-wrap gap-2 text-[17px]"><span className="chip">لسارة: ورشة تطبيقية في Python</span><span className="chip">ليوسف: طلبان مشابهان مفتوحان</span></div>
                  </motion.div>
                ) : (
                  <motion.div key="approve" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-[22px] bg-amber-50 p-5">
                    <span className="text-[18px] font-bold text-amber-700">حضور ✓ · 60 دقيقة ✓ · تقييم {s.rating}/5 ✓</span>
                    <button onClick={() => dispatch({ type: 'approve' })} className="btn-primary focus-ring px-6 py-3 text-[19px]">اعتماد المشرف (محاكاة)</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </Screen>
      </AppWindow>
    </div>
  );
}

function Counter({ from, to }: { from: number; to: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span key={to} className="num inline-block" initial={{ y: from === to ? 0 : 14, opacity: from === to ? 1 : 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: EASE }}>{to}</motion.span>
    </AnimatePresence>
  );
}
