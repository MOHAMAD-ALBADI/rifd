import { useReducer, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppWindow, LogEntry, Narrative, NarrativePanel, Screen, Stars } from './AppChrome';
import { EASE } from '../../lib/motion';

/* Scenario 2 — a campus club pays a student designer for a real project, with milestone-based execution. Illustrative data. */

type K = 'brief' | 'offers' | 'project' | 'review' | 'portfolio';
const ORDER: K[] = ['brief', 'offers', 'project', 'review', 'portfolio'];

const OFFERS = [
  { id: 'o1', name: 'سالم الشامسي', initials: 'س', major: 'التصميم الجرافيكي', price: 28, days: 5, rating: 4.9, projects: 14, note: '3 مقترحات شعار + دليل هوية مصغّر' },
  { id: 'o2', name: 'نور المعمرية', initials: 'ن', major: 'الوسائط المتعددة', price: 25, days: 4, rating: 4.7, projects: 11, note: 'مقترحان + قوالب لوسائل التواصل' },
];
const MILESTONES = ['اعتماد الموجز', 'مسودات الشعار', 'المراجعة والتعديل', 'التسليم النهائي'];

interface S { screen: K; title: string; budget: number; days: number; offer: string | null; done: number; concept: number | null; rating: number; log: LogEntry[]; clock: number }
const init = (): S => ({ screen: 'brief', title: 'شعار وهوية مصغّرة لـ«أسبوع الابتكار»', budget: 30, days: 7, offer: null, done: 0, concept: null, rating: 0, log: [], clock: 0 });
type A = { type: 'set'; patch: Partial<S> } | { type: 'post' } | { type: 'accept'; id: string } | { type: 'milestone' } | { type: 'toReview' } | { type: 'release' } | { type: 'reset' };

const fmt = (m: number) => `يوم ${1 + Math.floor(m / 10)}`;
function reducer(s: S, a: A): S {
  const log = (who: string, text: string, dt = 10) => ({ clock: s.clock + dt, log: [...s.log, { t: fmt(s.clock + dt), who, text }] });
  const o = OFFERS.find((x) => x.id === s.offer);
  switch (a.type) {
    case 'set': return { ...s, ...a.patch };
    case 'post': return { ...s, screen: 'offers', ...log('وكيل المطابقة', `نُشر الطلب · وصل عرضان من مصممين طلبة ضمن الميزانية`, 0) };
    case 'accept': { const x = OFFERS.find((q) => q.id === a.id)!; return { ...s, screen: 'project', offer: a.id, done: 1, ...log('وكيل التنفيذ', `قبول عرض ${x.name} · حُجز ${x.price} ر.ع · اعتُمد الموجز`) }; }
    case 'milestone': return { ...s, done: Math.min(MILESTONES.length, s.done + 1), ...log('وكيل التنفيذ', `سُلّمت مرحلة: ${MILESTONES[s.done]}`) };
    case 'toReview': return { ...s, screen: 'review' };
    case 'release': return { ...s, screen: 'portfolio', ...log('وكيل التحقق', `اعتمد النادي التسليم ★${s.rating} · حُرّر ${o?.price} ر.ع للمصمم · أُضيف المشروع لسجله`) };
    case 'reset': return init();
  }
}

function narrative(s: S): Narrative {
  const b = { step: ORDER.indexOf(s.screen) + 1, total: ORDER.length };
  switch (s.screen) {
    case 'brief': return { ...b, title: 'النادي ينشر احتياجه', body: 'نادي الابتكار يحتاج هوية لفعاليته، بميزانية وموعد واضحين.', hint: 'اضغط «نشر الطلب»' };
    case 'offers': return { ...b, title: 'عروض من مصممين طلبة', body: 'كل عرض بسعر ومدة ومعرض أعمال موثّق داخل الجامعة.', agent: 'وكيل المطابقة', hint: 'اقبل أحد العروض' };
    case 'project': return { ...b, title: 'تنفيذ على مراحل', body: 'كل مرحلة تُسلَّم وتظهر للنادي. المبلغ محجوز حتى التسليم النهائي.', agent: 'وكيل التنفيذ', hint: s.done < MILESTONES.length ? 'اضغط «تسليم المرحلة التالية»' : 'اضغط «مراجعة التسليم»' };
    case 'review': return { ...b, title: 'النادي يعتمد ويدفع', body: 'لا يُحرَّر المبلغ إلا بقرار النادي.', agent: 'وكيل التحقق', human: 'اعتماد النادي وتحرير الدفع', hint: 'اختر المقترح وقيّم ثم «اعتماد»' };
    case 'portfolio': return { ...b, title: 'دخل وخبرة موثّقة', body: 'المصمم حصل على أجره، والمشروع أصبح جزءًا من سجله المعتمد.', agent: 'وكيل الفرص', hint: 'اضغط «إعادة» للتجربة من جديد' };
  }
}

/* Original geometric concept marks drawn for the demo (not based on any existing logo). */
function Concept({ i, size = 120 }: { i: number; size?: number }) {
  const c = ['#2563EB', '#0FB3AB', '#0B1F3B'][i];
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
      {i === 0 && (<><circle cx="50" cy="42" r="22" fill="none" stroke={c} strokeWidth="7" /><rect x="40" y="66" width="20" height="8" rx="3" fill={c} /><rect x="43" y="78" width="14" height="6" rx="3" fill={c} /></>)}
      {i === 1 && (<><path d="M50 14 L60 40 L86 50 L60 60 L50 86 L40 60 L14 50 L40 40 Z" fill={c} /><circle cx="50" cy="50" r="7" fill="#fff" /></>)}
      {i === 2 && (<><rect x="18" y="18" width="30" height="30" rx="8" fill={c} /><rect x="52" y="18" width="30" height="30" rx="15" fill="#2563EB" /><rect x="18" y="52" width="30" height="30" rx="15" fill="#0FB3AB" /><rect x="52" y="52" width="30" height="30" rx="8" fill={c} opacity=".35" /></>)}
    </svg>
  );
}

const NAV = [
  { key: 'home', label: 'النادي' },
  { key: 'projects', label: 'المشاريع' },
  { key: 'wallet', label: 'المدفوعات' },
  { key: 'record', label: 'السجل' },
];

export function ClubApp() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const [showLog, setShowLog] = useState(false);
  const o = OFFERS.find((x) => x.id === s.offer);
  const nav = s.screen === 'brief' ? 'home' : s.screen === 'portfolio' ? 'record' : s.screen === 'review' ? 'wallet' : 'projects';

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[440px_1fr] lg:gap-10">
      <NarrativePanel n={narrative(s)} log={s.log} showLog={showLog} toggleLog={() => setShowLog((v) => !v)} />
      <AppWindow user={{ name: 'نادي الابتكار', initials: 'ن', role: 'نادٍ طلابي' }} nav={NAV} activeNav={nav} onReset={() => { setShowLog(false); dispatch({ type: 'reset' }); }}>
        <Screen k={s.screen}>
          {s.screen === 'brief' && (
            <div className="mx-auto max-w-[720px]">
              <h4 className="text-[28px] font-extrabold">طلب مشروع جديد</h4>
              <div className="mt-5 space-y-5">
                <div>
                  <label htmlFor="club-title" className="mb-2 block text-[18px] font-bold">المشروع</label>
                  <input id="club-title" value={s.title} onChange={(e) => dispatch({ type: 'set', patch: { title: e.target.value } })} className="w-full rounded-2xl border border-line-strong bg-surface-2/50 px-4 py-3 text-[20px] outline-none focus:border-rifd-500 focus:bg-white" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <div className="mb-2 text-[18px] font-bold">الميزانية</div>
                    <div className="flex items-center gap-3"><input type="range" min={15} max={60} step={5} value={s.budget} onChange={(e) => dispatch({ type: 'set', patch: { budget: Number(e.target.value) } })} className="flex-1 accent-rifd-600" dir="ltr" /><b className="num w-20 text-[22px]">{s.budget} ر.ع</b></div>
                  </div>
                  <div>
                    <div className="mb-2 text-[18px] font-bold">المدة</div>
                    <div className="flex gap-2">{[5, 7, 10].map((d) => <button key={d} onClick={() => dispatch({ type: 'set', patch: { days: d } })} className={`focus-ring rounded-full border px-4 py-2 text-[18px] font-bold ${s.days === d ? 'border-rifd-600 bg-rifd-600 text-white' : 'border-line'}`}><span className="num">{d}</span> أيام</button>)}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-[17px]"><span className="chip">شعار</span><span className="chip">ألوان وخطوط</span><span className="chip">قالب منشور</span></div>
              </div>
              <button onClick={() => dispatch({ type: 'post' })} disabled={s.title.trim().length < 4} className="btn-primary focus-ring mt-6 px-8 py-3.5 text-[20px]">نشر الطلب</button>
            </div>
          )}

          {s.screen === 'offers' && (
            <div>
              <h4 className="text-[28px] font-extrabold">عروض المصممين</h4>
              <p className="mt-1 text-[18px] text-ink-3">{s.title} · حتى <span className="num">{s.budget}</span> ر.ع</p>
              <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
                {OFFERS.map((x, i) => (
                  <motion.div key={x.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: EASE, delay: i * 0.12 }} className="flex flex-col rounded-[22px] border border-line p-5">
                    <div className="flex items-center gap-4">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-[20px] font-bold text-white">{x.initials}</span>
                      <div className="flex-1"><div className="text-[22px] font-extrabold">{x.name}</div><div className="text-[17px] text-ink-3">{x.major} · <span className="num">{x.projects}</span> مشروعًا</div></div>
                      <div className="text-center"><div className="num text-[28px] font-extrabold text-rifd-600">{x.price}</div><div className="text-[15px] text-ink-3">ر.ع</div></div>
                    </div>
                    <div className="mt-4 flex gap-2 rounded-2xl bg-surface-2 p-3">{[0, 1, 2].map((k) => <div key={k} className="grid flex-1 place-items-center rounded-xl bg-white py-2"><Concept i={(k + i) % 3} size={56} /></div>)}</div>
                    <p className="mt-3 text-[18px]">{x.note}</p>
                    <div className="mt-2 flex items-center gap-2 text-[17px]"><Stars value={x.rating} size={17} /><span className="num font-bold">{x.rating}</span><span className="text-ink-3">· <span className="num">{x.days}</span> أيام</span></div>
                    <button onClick={() => dispatch({ type: 'accept', id: x.id })} className={`${i === 0 ? 'btn-primary' : 'btn-ghost'} focus-ring mt-4 py-3 text-[18px]`}>قبول العرض</button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {s.screen === 'project' && o && (
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1.1fr]">
              <div>
                <h4 className="text-[26px] font-extrabold">{s.title}</h4>
                <p className="mt-1 text-[18px] text-ink-3">مع {o.name} · <span className="num">{o.price}</span> ر.ع محجوزة</p>
                <div className="mt-5">
                  {MILESTONES.map((m, k) => (
                    <div key={m} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className={`grid h-9 w-9 place-items-center rounded-full text-[16px] font-bold transition-colors ${k < s.done ? 'bg-teal-500 text-white' : k === s.done ? 'border-2 border-rifd-600 text-rifd-600' : 'border-2 border-line-strong text-ink-3'}`}>{k < s.done ? '✓' : k + 1}</span>
                        {k < MILESTONES.length - 1 && <span className={`w-0.5 flex-1 ${k < s.done - 1 ? 'bg-teal-500' : 'bg-line'}`} style={{ minHeight: 26 }} />}
                      </div>
                      <div className={`pb-4 text-[20px] ${k < s.done ? 'font-bold' : 'text-ink-3'}`}>{m}</div>
                    </div>
                  ))}
                </div>
                {s.done < MILESTONES.length ? (
                  <button onClick={() => dispatch({ type: 'milestone' })} className="btn-primary focus-ring mt-2 px-7 py-3.5 text-[19px]">تسليم المرحلة التالية</button>
                ) : (
                  <button onClick={() => dispatch({ type: 'toReview' })} className="btn-primary focus-ring mt-2 px-7 py-3.5 text-[19px]">مراجعة التسليم</button>
                )}
              </div>
              <div className="rounded-[22px] bg-surface-2 p-5">
                <div className="text-[18px] font-bold">آخر تسليم</div>
                <AnimatePresence mode="wait">
                  <motion.div key={s.done} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: EASE }} className="mt-3">
                    {s.done <= 1 && <div className="rounded-2xl bg-white p-5 text-[18px] leading-relaxed"><b>الموجز المعتمد:</b> هوية حديثة لفعالية ابتكار طلابية، بألوان الجامعة، تصلح للمنشورات والملصقات.</div>}
                    {s.done === 2 && <div className="grid grid-cols-3 gap-3">{[0, 1, 2].map((k) => <div key={k} className="grid place-items-center rounded-2xl bg-white py-5"><Concept i={k} size={84} /><span className="mt-2 text-[16px] text-ink-3">مقترح <span className="num">{k + 1}</span></span></div>)}</div>}
                    {s.done === 3 && <div className="grid grid-cols-[auto_1fr] items-center gap-5 rounded-2xl bg-white p-5"><Concept i={1} size={100} /><div className="text-[18px] leading-relaxed"><b>تعديل بناءً على ملاحظات النادي:</b> تكبير المركز وتبسيط الأطراف.</div></div>}
                    {s.done === 4 && <div className="rounded-2xl bg-white p-5"><div className="flex items-center gap-5"><Concept i={1} size={100} /><div><div className="text-[22px] font-extrabold">أسبوع الابتكار</div><div className="mt-2 flex gap-2">{['#0B1F3B', '#2563EB', '#0FB3AB', '#F5F7FC'].map((c) => <span key={c} className="h-7 w-7 rounded-full border border-line" style={{ background: c }} />)}</div></div></div><div className="mt-3 text-[17px] text-ink-3">ملفات نهائية + قالب منشور</div></div>}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}

          {s.screen === 'review' && o && (
            <div className="mx-auto max-w-[760px]">
              <h4 className="text-[28px] font-extrabold">مراجعة واعتماد</h4>
              <div className="mt-5 flex items-center gap-6 rounded-[22px] border border-line p-5">
                <Concept i={1} size={110} />
                <div className="flex-1">
                  <div className="text-[22px] font-extrabold">التسليم النهائي من {o.name}</div>
                  <div className="mt-2 text-[18px] text-ink-3">تقييم النادي:</div>
                  <Stars value={s.rating} size={36} onPick={(v) => dispatch({ type: 'set', patch: { rating: v } })} />
                </div>
              </div>
              <div className="mt-4 rounded-[20px] bg-amber-50 p-4 text-[18px] text-amber-700"><b>قرار النادي:</b> عند الاعتماد يُحرَّر <span className="num font-bold">{o.price}</span> ر.ع للمصمم.</div>
              <button onClick={() => dispatch({ type: 'release' })} disabled={!s.rating} className="btn-primary focus-ring mt-5 px-8 py-3.5 text-[20px]">اعتماد وتحرير الدفع</button>
            </div>
          )}

          {s.screen === 'portfolio' && o && (
            <div>
              <h4 className="text-[28px] font-extrabold">سجل {o.name} المعتمد</h4>
              <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-3">
                <div className="rounded-[22px] border border-teal/50 bg-teal-50 p-5"><div className="text-[17px] text-teal-700">مشروع موثّق جديد</div><div className="mt-1 text-[22px] font-extrabold">هوية «أسبوع الابتكار»</div><div className="mt-2"><Stars value={s.rating} size={18} /></div></div>
                <div className="rounded-[22px] border border-line p-5"><div className="text-[17px] text-ink-3">المشاريع المكتملة</div><div className="mt-1 text-[30px] font-extrabold"><span className="num">{o.projects + 1}</span></div></div>
                <div className="rounded-[22px] border border-line p-5"><div className="text-[17px] text-ink-3">الدخل من هذا المشروع</div><div className="mt-1 text-[30px] font-extrabold"><span className="num">{o.price}</span> <span className="text-[20px]">ر.ع</span></div></div>
              </div>
              <div className="mt-4 flex items-center gap-5 rounded-[22px] bg-surface-2 p-5"><Concept i={1} size={80} /><div className="text-[18px] leading-relaxed">أُضيف إلى معرض الأعمال مع اعتماد <b>نادي الابتكار</b>. <span className="text-ink-3">الفرصة التالية: طلبان من ناديين آخرين.</span></div></div>
            </div>
          )}
        </Screen>
      </AppWindow>
    </div>
  );
}
