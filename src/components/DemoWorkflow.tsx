import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { analyzeRequest, Analysis, CATEGORY_LABEL, matchProviders, Provider, SAMPLE_REQUESTS } from '../data/demo';
import { AGENTS } from '../data/content';
import { useEnv } from '../lib/env';
import { T } from '../lib/motion';
import { StatusBadge } from './primitives';

/* A real, self-contained state machine: request → analysis → matches → selection → booking → completion → verified record.
   No network calls; every value is synthetic and labelled as such. */

type Match = Provider & { score: number };
type LogEntry = { t: string; agent: number | null; text: string };

interface State {
  stage: number; // 0..6
  text: string;
  analysis: Analysis | null;
  matches: Match[];
  chosen: Match | null;
  slot: string | null;
  authorized: boolean;
  rating: number;
  approved: boolean;
  log: LogEntry[];
  clock: number; // minutes since 09:00 (simulated)
}

const STAGES = ['الطلب', 'التحليل', 'المطابقة', 'الاختيار', 'الحجز', 'الإتمام', 'السجل'];

const init = (text = SAMPLE_REQUESTS[0]): State => ({
  stage: 0, text, analysis: null, matches: [], chosen: null, slot: null, authorized: false, rating: 0, approved: false,
  log: [{ t: '09:00', agent: null, text: 'بدء جلسة العرض التجريبي (بيانات تجريبية).' }], clock: 0,
});

type Action =
  | { type: 'text'; text: string }
  | { type: 'analyze' }
  | { type: 'match' }
  | { type: 'choose'; p: Match }
  | { type: 'slot'; slot: string }
  | { type: 'authorize'; v: boolean }
  | { type: 'book' }
  | { type: 'complete' }
  | { type: 'rate'; v: number }
  | { type: 'approve' }
  | { type: 'back' }
  | { type: 'reset' };

const fmt = (m: number) => `${String(9 + Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;

function reducer(s: State, a: Action): State {
  const add = (agent: number | null, text: string, dt = 1): Pick<State, 'log' | 'clock'> => {
    const clock = s.clock + dt;
    return { clock, log: [...s.log, { t: fmt(clock), agent, text }] };
  };
  switch (a.type) {
    case 'text': return { ...s, text: a.text };
    case 'analyze': {
      const analysis = analyzeRequest(s.text);
      const flag = analysis.integrityFlag ? ' · تنبيه نزاهة أكاديمية: سيُقدَّم كإرشاد لفهم المادة فقط' : '';
      return { ...s, stage: 1, analysis, ...add(0, `صُنّف الطلب: ${CATEGORY_LABEL[analysis.category]} · ${analysis.topic} · ${analysis.urgency}${flag}`) };
    }
    case 'match': {
      if (!s.analysis) return s;
      const matches = matchProviders(s.analysis);
      const l1 = add(1, `اقتُرح مسار مراجعة قصير قبل الجلسة (${s.analysis.topic}).`);
      const s2 = { ...s, ...l1 };
      const l2 = { clock: s2.clock + 1, log: [...s2.log, { t: fmt(s2.clock + 1), agent: 2, text: `وُجد ${matches.length} مقدمين مؤهلين · أفضل تطابق ${matches[0]?.score ?? 0}%` }] };
      return { ...s, stage: 2, matches, ...l2 };
    }
    case 'choose': return { ...s, stage: 3, chosen: a.p, slot: a.p.slots[0], authorized: false, ...add(2, `اختار الطالب: ${a.p.name} (${a.p.score}%)`) };
    case 'slot': return { ...s, slot: a.slot };
    case 'authorize': return { ...s, authorized: a.v };
    case 'book':
      if (!s.authorized || !s.chosen) return s;
      return { ...s, stage: 4, ...add(3, `تأكيد بشري ✓ — حُجز «${s.slot}» مع ${s.chosen.name} · جُدولت التذكيرات`, 3) };
    case 'complete': return { ...s, stage: 5, ...add(4, 'اكتملت الجلسة: حضور الطرفين ✓ · المدة 60 دقيقة ✓ · بانتظار تقييم الطالب', 60) };
    case 'rate': return { ...s, rating: a.v };
    case 'approve': {
      if (!s.rating || !s.chosen) return s;
      const l1 = add(4, `تقييم الطالب ${s.rating}/5 · اعتمد المشرف البشري الأدلة ✓`, 5);
      const s2 = { ...s, ...l1 };
      const l2 = { clock: s2.clock + 1, log: [...s2.log, { t: fmt(s2.clock + 1), agent: 5, text: `صدر سجل خبرة موثّق لـ ${s.chosen.name} · رُشّحت فرص تالية للطرفين` }] };
      return { ...s, stage: 6, approved: true, ...l2 };
    }
    case 'back': return { ...s, stage: Math.max(0, s.stage - 1) };
    case 'reset': return init();
  }
}

function finalState(): State {
  let s = init();
  s = reducer(s, { type: 'analyze' });
  s = reducer(s, { type: 'match' });
  s = reducer(s, { type: 'choose', p: s.matches[0] });
  s = reducer(s, { type: 'authorize', v: true });
  s = reducer(s, { type: 'book' });
  s = reducer(s, { type: 'complete' });
  s = reducer(s, { type: 'rate', v: 5 });
  return reducer(s, { type: 'approve' });
}

function Btn({ children, onClick, disabled, ghost }: { children: React.ReactNode; onClick: () => void; disabled?: boolean; ghost?: boolean }) {
  return (
    <button onClick={onClick} disabled={disabled}
      className={`focus-ring rounded-full px-5 py-2.5 text-[0.95rem] font-bold transition disabled:cursor-not-allowed disabled:opacity-35 ${ghost ? 'border border-white/15 text-white/80 hover:border-white/40' : 'bg-teal text-navy-950 hover:bg-teal-300'}`}>
      {children}
    </button>
  );
}

function Thinking({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 text-white/70">
      <span className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span key={i} className="h-2 w-2 rounded-full bg-teal" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }} />
        ))}
      </span>
      {label}
    </div>
  );
}

export function DemoWorkflow() {
  const { mode } = useEnv();
  const [s, dispatch] = useReducer(reducer, undefined, () => (mode === 'print' ? finalState() : init()));
  const [busy, setBusy] = useState<string | null>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => { logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' }); }, [s.log.length]);

  /** Short, honest "processing" beat so the audience sees the agent working. */
  const run = (label: string, a: Action, ms = 850) => {
    setBusy(label);
    window.setTimeout(() => { dispatch(a); setBusy(null); }, mode === 'print' ? 0 : ms);
  };

  const a = s.analysis;

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-5 lg:grid-cols-[1fr_340px]">
      {/* app window */}
      <div className="card-d flex min-h-0 flex-col overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-3">
            <img src="assets/brand/rifd-icon.png" alt="" className="h-6" />
            <span className="en text-sm text-white/60">rifd.app · prototype</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status="demo" />
            <button onClick={() => { setBusy(null); dispatch({ type: 'reset' }); }} className="no-print focus-ring rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 hover:border-white/40">↺ إعادة</button>
          </div>
        </div>

        {/* stepper */}
        <div className="flex items-center gap-1 border-b border-white/10 px-5 py-3">
          {STAGES.map((st, i) => (
            <div key={st} className="flex flex-1 items-center gap-1">
              <div className={`flex items-center gap-1.5 whitespace-nowrap text-xs lg:text-sm ${i === s.stage ? 'text-white' : i < s.stage ? 'text-teal-300' : 'text-white/35'}`}>
                <span className={`grid h-5 w-5 place-items-center rounded-full text-[0.65rem] font-bold ${i < s.stage ? 'bg-teal text-navy-950' : i === s.stage ? 'bg-white text-navy-950' : 'border border-white/20'}`}>
                  {i < s.stage ? '✓' : <span className="num">{i + 1}</span>}
                </span>
                <span className="hidden sm:inline">{st}</span>
              </div>
              {i < STAGES.length - 1 && <span className={`h-px flex-1 ${i < s.stage ? 'bg-teal/60' : 'bg-white/10'}`} />}
            </div>
          ))}
        </div>

        <div className="relative min-h-0 flex-1 overflow-y-auto p-5 scroll-thin lg:p-6" data-scroll>
          <AnimatePresence mode="wait">
            <motion.div key={s.stage + (busy ? '-b' : '')} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={T.fast}>
              {busy ? (
                <div className="grid h-[260px] place-items-center"><Thinking label={busy} /></div>
              ) : s.stage === 0 ? (
                <div>
                  <label className="text-sm text-white/60" htmlFor="req">اكتب طلبك كما يكتبه الطالب — أو اختر مثالًا:</label>
                  <textarea id="req" value={s.text} onChange={(e) => dispatch({ type: 'text', text: e.target.value })} rows={3}
                    className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-navy-950/70 p-4 text-lg leading-relaxed text-white outline-none placeholder:text-white/30 focus:border-teal/60" placeholder="مثال: أحتاج مساعدة في…" />
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SAMPLE_REQUESTS.map((r, i) => (
                      <button key={i} onClick={() => dispatch({ type: 'text', text: r })} className={`focus-ring rounded-full border px-3 py-1.5 text-sm transition ${s.text === r ? 'border-teal/50 bg-teal/10 text-teal-300' : 'border-white/10 text-white/60 hover:border-white/30'}`}>
                        {['برمجة', 'رياضيات', 'تصميم لنادٍ'][i]}
                      </button>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <Btn onClick={() => run('وكيل الاحتياج يحلل الطلب…', { type: 'analyze' })} disabled={s.text.trim().length < 6}>حلّل الطلب</Btn>
                    <span className="text-xs text-white/40">تحليل محلي بالكلمات المفتاحية — لا اتصال بخدمات خارجية.</span>
                  </div>
                </div>
              ) : s.stage === 1 && a ? (
                <div>
                  <div className="label mb-3 text-white/40">NEEDS AGENT · ANALYSIS</div>
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {[['المجال', CATEGORY_LABEL[a.category]], ['الموضوع', a.topic], ['الأولوية', a.urgency], ['نوع الدعم', a.mode]].map(([k, v], i) => (
                      <motion.div key={k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ ...T.fast, delay: i * 0.08 }} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                        <div className="text-xs text-white/50">{k}</div>
                        <div className="mt-1 text-lg font-bold">{v}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-white/60"><span>ثقة التصنيف</span><span className="num">{Math.round(a.confidence * 100)}%</span></div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-gradient-to-l from-teal to-rifd" initial={{ width: 0 }} animate={{ width: `${a.confidence * 100}%` }} transition={T.slow} /></div>
                  </div>
                  {a.integrityFlag && (
                    <div className="mt-4 rounded-xl border border-amber-300/30 bg-amber-300/10 p-3 text-sm text-amber-100">
                      تنبيه نزاهة أكاديمية: رِفد لا يُنجز الأعمال المقيّمة نيابةً عن الطالب. سيُحوَّل الطلب إلى جلسة إرشاد لفهم المادة.
                    </div>
                  )}
                  <div className="mt-5 flex gap-3">
                    <Btn onClick={() => run('وكيلا التعلّم والمطابقة يبحثان…', { type: 'match' }, 1000)}>اعثر على مطابقات</Btn>
                    <Btn ghost onClick={() => dispatch({ type: 'back' })}>تعديل الطلب</Btn>
                  </div>
                </div>
              ) : s.stage === 2 ? (
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="label text-white/40">MATCHING AGENT · RANKED</span>
                    <span className="text-xs text-white/45">مرتبة حسب المهارة والتقييم والخبرة</span>
                  </div>
                  <div className="grid gap-3">
                    {s.matches.map((p, i) => (
                      <motion.div key={p.id} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ ...T.fast, delay: i * 0.1 }} className={`flex items-center gap-4 rounded-xl border p-3.5 ${i === 0 ? 'border-teal/40 bg-teal/[0.06]' : 'border-white/10 bg-white/[0.02]'}`}>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-rifd to-teal text-sm font-bold text-navy-950">{p.initials}</span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2"><span className="font-bold">{p.name}</span>{i === 0 && <span className="rounded-full bg-teal/20 px-2 text-xs text-teal-300">الأنسب</span>}</div>
                          <div className="truncate text-sm text-white/55">{p.major} · {p.year} · {p.tags.join('، ')}</div>
                        </div>
                        <div className="hidden text-center sm:block">
                          <div className="num text-sm text-white/70">★ {p.rating}</div>
                          <div className="text-xs text-white/40"><span className="num">{p.sessions}</span> جلسة</div>
                        </div>
                        <div className="w-20 text-center">
                          <div className="num text-xl font-bold text-teal-300">{p.score}%</div>
                          <div className="mt-1 h-1 rounded-full bg-white/10"><div className="h-full rounded-full bg-teal" style={{ width: `${p.score}%` }} /></div>
                        </div>
                        <Btn onClick={() => dispatch({ type: 'choose', p })}>اختر</Btn>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : s.stage === 3 && s.chosen ? (
                <div className="grid gap-5 lg:grid-cols-2">
                  <div>
                    <div className="label mb-3 text-white/40">EXECUTION AGENT · BOOKING</div>
                    <div className="text-xl font-bold">{s.chosen.name}</div>
                    <div className="text-sm text-white/55">{s.chosen.major} · ★ {s.chosen.rating}</div>
                    <div className="mt-4 text-sm text-white/60">اختر الموعد:</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {s.chosen.slots.map((sl) => (
                        <button key={sl} onClick={() => dispatch({ type: 'slot', slot: sl })} className={`focus-ring rounded-lg border px-3 py-2 text-sm transition ${s.slot === sl ? 'border-teal bg-teal/15 text-teal-200' : 'border-white/15 text-white/70 hover:border-white/40'}`}>{sl}</button>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-navy-950/60 p-4">
                    <div className="flex justify-between text-sm"><span className="text-white/60">الموعد</span><span>{s.slot}</span></div>
                    <div className="mt-2 flex justify-between text-sm"><span className="text-white/60">القيمة (تجريبية)</span><span><span className="num">{s.chosen.rate}</span> ر.ع</span></div>
                    <div className="mt-2 flex justify-between text-sm"><span className="text-white/60">الدفع</span><span>يُحجز ويُحرَّر بعد الاعتماد</span></div>
                    <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-lg border border-amber-300/30 bg-amber-300/[0.07] p-3 text-sm text-amber-100">
                      <input type="checkbox" checked={s.authorized} onChange={(e) => dispatch({ type: 'authorize', v: e.target.checked })} className="mt-1 h-4 w-4 accent-teal" />
                      أؤكد الحجز والدفع بنفسي — الوكيل لا يتخذ قرارًا ماليًا دون تفويض بشري.
                    </label>
                    <div className="mt-4 flex gap-2">
                      <Btn onClick={() => run('وكيل التنفيذ ينسّق الحجز…', { type: 'book' }, 700)} disabled={!s.authorized}>تأكيد الحجز</Btn>
                      <Btn ghost onClick={() => dispatch({ type: 'back' })}>رجوع</Btn>
                    </div>
                  </div>
                </div>
              ) : s.stage === 4 && s.chosen ? (
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-teal/15 text-2xl text-teal">✓</span>
                    <div>
                      <div className="text-2xl font-bold">تم الحجز</div>
                      <div className="text-white/60">{s.slot} · مع {s.chosen.name}</div>
                    </div>
                  </div>
                  <div className="mt-5 grid w-full gap-2 sm:grid-cols-3">
                    {['تذكير قبل 24 ساعة', 'تذكير قبل ساعة', 'مسار مراجعة مُرسل'].map((x) => (
                      <div key={x} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/70">⏱ {x}</div>
                    ))}
                  </div>
                  <div className="mt-6"><Btn onClick={() => run('محاكاة انعقاد الجلسة…', { type: 'complete' }, 1100)}>محاكاة إتمام الجلسة</Btn></div>
                </div>
              ) : s.stage === 5 ? (
                <div className="grid gap-5 lg:grid-cols-2">
                  <div>
                    <div className="label mb-3 text-white/40">VERIFICATION AGENT · EVIDENCE</div>
                    {['حضور الطرفين مؤكد', 'مدة الجلسة: 60 دقيقة', 'ملخص الجلسة مرفوع من المرشد'].map((x) => (
                      <div key={x} className="mb-2 flex items-center gap-2 text-white/80"><span className="text-teal">✓</span>{x}</div>
                    ))}
                    <div className="mt-4 text-sm text-white/60">تقييم الطالب:</div>
                    <div className="mt-1 flex gap-1" dir="ltr">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button key={n} aria-label={`${n}`} onClick={() => dispatch({ type: 'rate', v: n })} className={`focus-ring text-3xl transition ${n <= s.rating ? 'text-teal' : 'text-white/20 hover:text-white/50'}`}>★</button>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-amber-300/25 bg-amber-300/[0.06] p-4">
                    <div className="text-sm font-bold text-amber-100">اعتماد بشري</div>
                    <p className="mt-1 text-sm text-white/65">الوكيل يجهّز الأدلة؛ مشرف الدعم الأكاديمي يعتمد قبل إصدار السجل وتحرير الدفع.</p>
                    <div className="mt-4"><Btn onClick={() => run('بانتظار اعتماد المشرف…', { type: 'approve' }, 900)} disabled={!s.rating}>اعتماد المشرف (محاكاة)</Btn></div>
                  </div>
                </div>
              ) : s.stage === 6 && s.chosen ? (
                <ExperienceRecord p={s.chosen} rating={s.rating} slot={s.slot ?? ''} topic={a?.topic ?? ''} onReset={() => dispatch({ type: 'reset' })} />
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* activity log */}
      <div className="card-d flex min-h-[220px] flex-col overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <span className="label text-white/45">ACTIVITY LOG</span>
          <span className="num text-xs text-white/40">{s.log.length}</span>
        </div>
        <div ref={logRef} className="min-h-0 flex-1 space-y-2.5 overflow-y-auto p-4 scroll-thin" data-scroll>
          <AnimatePresence initial={false}>
            {s.log.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={T.fast} className="flex gap-2.5 text-[0.82rem] leading-relaxed">
                <span className="num shrink-0 pt-px text-white/35">{l.t}</span>
                <span className="min-w-0">
                  {l.agent !== null && <span className="en ml-1.5 font-semibold" style={{ color: AGENTS[l.agent].color }}>{AGENTS[l.agent].en.replace(' Agent', '')}</span>}
                  <span className="text-white/75">{l.text}</span>
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function ExperienceRecord({ p, rating, slot, topic, onReset }: { p: Match; rating: number; slot: string; topic: string; onReset: () => void }) {
  const id = useMemo(() => `RFD-DEMO-${(p.id + topic).length.toString(16).toUpperCase()}${p.sessions + 1}`, [p, topic]);
  return (
    <div className="grid gap-4 lg:grid-cols-[1.25fr_1fr]">
      <motion.div initial={{ opacity: 0, rotateX: 20, y: 20 }} animate={{ opacity: 1, rotateX: 0, y: 0 }} transition={T.slow} className="relative overflow-hidden rounded-2xl border border-teal/30 bg-gradient-to-br from-navy-700 to-navy-900 p-5" style={{ transformPerspective: 900 }}>
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-teal/20 blur-3xl" />
        <div className="flex items-center justify-between">
          <span className="label text-teal">VERIFIED EXPERIENCE RECORD</span>
          <img src="assets/brand/rifd-icon.png" alt="" className="h-7" />
        </div>
        <div className="mt-3 text-2xl font-bold">{p.name}</div>
        <div className="text-white/60">مرشد أقران · {p.major}</div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-white/[0.05] p-2"><div className="text-xs text-white/50">المهارة</div><div className="font-bold">{topic}</div></div>
          <div className="rounded-lg bg-white/[0.05] p-2"><div className="text-xs text-white/50">الجلسات الموثّقة</div><div className="num font-bold">{p.sessions + 1}</div></div>
          <div className="rounded-lg bg-white/[0.05] p-2"><div className="text-xs text-white/50">آخر تقييم</div><div className="num font-bold">{rating}/5</div></div>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-white/45">
          <span>اعتماد: مشرف الدعم الأكاديمي (توضيحي)</span>
          <span className="num">{id}</span>
        </div>
      </motion.div>
      <div className="flex flex-col gap-3">
        <div className="label text-white/40">OPPORTUNITY AGENT</div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm"><span className="text-teal-300">للطالبة:</span> ورشة تطبيقية لاحقة في {topic} — {slot ? 'بعد جلستها' : ''}</div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm"><span className="text-teal-300">للمرشد:</span> طلبان مشابهان مفتوحان + مؤهل لمشروع نادٍ طلابي</div>
        <div className="mt-auto"><Btn onClick={onReset}>↺ إعادة العرض</Btn></div>
      </div>
    </div>
  );
}
