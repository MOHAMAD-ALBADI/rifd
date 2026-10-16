import { useReducer, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppWindow, LogEntry, Narrative, NarrativePanel, Screen, Stars } from './AppChrome';
import { EASE } from '../../lib/motion';

/* Scenario B — a design student turns a skill into a paid project for a university club.
   Deterministic simulation with illustrative data: no real payments or verification. */

type K = 'opps' | 'details' | 'match' | 'accept' | 'project' | 'approval' | 'portfolio';
const ORDER: K[] = ['opps', 'details', 'match', 'accept', 'project', 'approval', 'portfolio'];
const MILESTONES = ['اعتماد الموجز', 'مسودات الشعار', 'المراجعة والتعديل', 'التسليم النهائي'];
const PRICE = 28;

interface S { screen: K; agreed: boolean; done: number; pick: number | null; rating: number; approved: boolean; log: LogEntry[]; day: number }
const init = (): S => ({ screen: 'opps', agreed: false, done: 0, pick: null, rating: 0, approved: false, log: [], day: 1 });
type A = { type: 'go'; screen: K } | { type: 'set'; patch: Partial<S> } | { type: 'accept' } | { type: 'deliver' } | { type: 'approve' } | { type: 'reset' };

function reducer(s: S, a: A): S {
  const log = (who: string, text: string, dd = 1) => ({ day: s.day + dd, log: [...s.log, { t: `يوم ${s.day + dd}`, who, text }] });
  switch (a.type) {
    case 'go': return { ...s, screen: a.screen };
    case 'set': return { ...s, ...a.patch };
    case 'accept':
      if (!s.agreed) return s;
      return { ...s, screen: 'project', done: 1, ...log('وكيل التنفيذ', `قبل سالم المشروع · حُجز ${PRICE} ر.ع لدى المنصة · اعتُمد الموجز`, 0) };
    case 'deliver': {
      if (s.done >= MILESTONES.length) return s;
      const done = s.done + 1;
      return { ...s, done, ...log('وكيل التنفيذ', `سُلّمت مرحلة: ${MILESTONES[s.done]}`) };
    }
    case 'approve':
      if (!s.rating || s.pick === null) return s;
      return { ...s, approved: true, screen: 'portfolio', ...log('وكيل التحقق', `اعتمد النادي التسليم ★${s.rating} · حُرّر ${PRICE} ر.ع لسالم · أُضيف المشروع إلى سجله`) };
    case 'reset': return init();
  }
}

function narrative(s: S): Narrative {
  const b = { step: ORDER.indexOf(s.screen) + 1, total: ORDER.length };
  switch (s.screen) {
    case 'opps': return { ...b, title: 'فرصة تناسب مهارة سالم', body: 'سالم طالب تصميم. نادي الابتكار نشر طلبًا مدفوعًا، فظهر له ضمن الفرص المناسبة.', agent: 'وكيل الفرص', hint: 'افتح المشروع' };
    case 'details': return { ...b, title: 'المهارات والمخرجات واضحة', body: 'ما المطلوب، ما يُسلَّم، الميزانية والمدة — قبل أي التزام.', agent: 'وكيل الاحتياج', hint: 'اضغط «لماذا رُشّحت؟»' };
    case 'match': return { ...b, title: 'ترشيح مبني على أدلة', body: 'المطابقة تعتمد على أعمال سابقة موثّقة داخل الجامعة، لا على ادعاءات.', agent: 'وكيل المطابقة', hint: 'اضغط «قبول المشروع»' };
    case 'accept': return { ...b, title: 'اتفاق واضح قبل البدء', body: 'المبلغ يُحجز لدى المنصة ولا يُحرَّر إلا بعد اعتماد النادي.', human: 'سالم يقبل الشروط بنفسه', hint: 'أكّد الشروط ثم «قبول»' };
    case 'project': return { ...b, title: 'تنفيذ على مراحل', body: 'كل مرحلة تُسلَّم وتظهر للنادي. لا يكتمل المشروع قبل التسليم النهائي.', agent: 'وكيل التنفيذ', hint: s.done < MILESTONES.length ? 'اضغط «تسليم المرحلة التالية»' : 'اضغط «إرسال للاعتماد»' };
    case 'approval': return { ...b, title: 'النادي يراجع ويعتمد', body: 'يختار النادي المقترح النهائي ويقيّم العمل، ثم يقرر تحرير الدفع.', agent: 'وكيل التحقق', human: 'اعتماد النادي وتحرير الدفع', hint: 'اختر مقترحًا وقيّم ثم «اعتماد»' };
    case 'portfolio': return { ...b, title: 'مهارة تحوّلت إلى دخل وخبرة', body: 'أُضيف المشروع المعتمد إلى سجل سالم المهني، مع فرص تالية مقترحة.', agent: 'وكيل الفرص', hint: 'اضغط «إعادة» للتجربة من جديد' };
  }
}

/* Original geometric concept marks drawn for this demo. */
export function Concept({ i, size = 96 }: { i: number; size?: number }) {
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
  { key: 'opps', label: 'الفرص' },
  { key: 'projects', label: 'مشاريعي' },
  { key: 'wallet', label: 'الأرباح' },
  { key: 'record', label: 'سجلي المهني' },
];
const navFor = (k: K) => (k === 'opps' || k === 'details' || k === 'match' ? 'opps' : k === 'portfolio' ? 'record' : 'projects');

export function DesignerApp() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const [showLog, setShowLog] = useState(false);

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[440px_1fr] lg:gap-10">
      <NarrativePanel n={narrative(s)} log={s.log} showLog={showLog} toggleLog={() => setShowLog((v) => !v)} />
      <AppWindow user={{ name: 'سالم', initials: 'س', role: 'التصميم الجرافيكي · سنة رابعة' }} nav={NAV} activeNav={navFor(s.screen)} onReset={() => { setShowLog(false); dispatch({ type: 'reset' }); }}>
        <Screen k={s.screen}>
          {s.screen === 'opps' && (
            <div>
              <h4 className="text-[28px] font-extrabold">فرص مناسبة لمهاراتك</h4>
              <p className="mt-1 text-[18px] text-ink-3">هوية بصرية · Figma · طباعة</p>
              <div className="mt-5 space-y-3">
                <button onClick={() => dispatch({ type: 'go', screen: 'details' })} className="focus-ring flex w-full items-center gap-5 rounded-[22px] border-2 border-rifd-300 bg-rifd-50/60 p-5 text-right transition hover:border-rifd-500">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-rifd-500 to-rifd-700 text-[24px] font-bold text-white">ن</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[15px] font-bold text-rifd-600">نادي الابتكار · منذ ساعة</div>
                    <div className="text-[22px] font-extrabold leading-snug">«نحتاج مصممًا لإعداد الهوية البصرية لفعالية جامعية»</div>
                  </div>
                  <div className="text-center"><div className="num text-[30px] font-extrabold text-rifd-600">{PRICE}</div><div className="text-[15px] text-ink-3">ر.ع</div></div>
                </button>
                {[['قالب عرض لمشروع تخرج', 'طالبة هندسة', '15'], ['ملصق لمعرض فني', 'نادي الفنون', '12']].map(([t, by, p]) => (
                  <div key={t} className="flex items-center gap-5 rounded-[22px] border border-line p-5 opacity-60">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-surface-2 text-[20px] font-bold text-ink-3">{by[0]}</span>
                    <div className="flex-1"><div className="text-[15px] text-ink-3">{by}</div><div className="text-[20px] font-bold">{t}</div></div>
                    <b className="num text-[22px] text-ink-3">{p} ر.ع</b>
                  </div>
                ))}
              </div>
            </div>
          )}

          {s.screen === 'details' && (
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_1fr]">
              <div>
                <button onClick={() => dispatch({ type: 'go', screen: 'opps' })} className="focus-ring text-[17px] font-bold text-ink-3 hover:text-ink">→ الفرص</button>
                <h4 className="mt-2 text-[26px] font-extrabold leading-snug">الهوية البصرية لفعالية «أسبوع الابتكار»</h4>
                <p className="mt-1 text-[18px] text-ink-3">نادي الابتكار الطلابي</p>
                <div className="mt-5 text-[18px] font-bold">المهارات المطلوبة</div>
                <div className="mt-2 flex flex-wrap gap-2 text-[17px]"><span className="chip">هوية بصرية</span><span className="chip">Figma</span><span className="chip">تجهيز للطباعة</span></div>
                <div className="mt-5 text-[18px] font-bold">المخرجات</div>
                <ul className="mt-2 space-y-2 text-[19px]">
                  {['شعار بثلاثة مقترحات', 'لوحة ألوان وخطوط', 'قالب منشور لوسائل التواصل'].map((d) => <li key={d} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-rifd-500" />{d}</li>)}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-[20px] bg-surface-2 p-5"><div className="text-[17px] text-ink-3">الميزانية</div><div className="text-[30px] font-extrabold"><span className="num">{PRICE}</span> ر.ع</div></div>
                <div className="rounded-[20px] bg-surface-2 p-5"><div className="text-[17px] text-ink-3">المدة</div><div className="text-[26px] font-extrabold"><span className="num">7</span> أيام</div></div>
                <button onClick={() => dispatch({ type: 'go', screen: 'match' })} className="btn-primary focus-ring mt-auto py-3.5 text-[20px]">لماذا رُشّحت؟</button>
              </div>
            </div>
          )}

          {s.screen === 'match' && (
            <div>
              <div className="flex items-center gap-5">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-[30px] font-bold text-white">س</span>
                <div className="flex-1"><div className="text-[15px] font-bold text-rifd-600">ترشيح رِفد للنادي</div><div className="text-[28px] font-extrabold">سالم الشامسي</div><div className="mt-1 flex items-center gap-2 text-[18px]"><Stars value={4.9} size={18} /><b className="num">4.9</b><span className="text-ink-3">· <span className="num">14</span> مشروعًا موثّقًا</span></div></div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
                {['يطابق المهارات الثلاث المطلوبة', 'نفّذ 6 هويات لأندية طلابية', 'متاح هذا الأسبوع'].map((r) => (
                  <div key={r} className="flex items-center gap-3 rounded-[18px] border border-line p-4 text-[18px] font-bold"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">✓</span>{r}</div>
                ))}
              </div>
              <div className="mt-5 text-[18px] font-bold">من معرض أعماله الموثّق</div>
              <div className="mt-2 grid grid-cols-3 gap-3">
                {[['نادي التصوير', 0], ['ملتقى الريادة', 2], ['نادي البرمجة', 1]].map(([t, k]) => (
                  <div key={t as string} className="flex flex-col items-center rounded-[18px] bg-surface-2 py-4"><Concept i={k as number} size={72} /><span className="mt-2 text-[16px] text-ink-2">{t}</span></div>
                ))}
              </div>
              <button onClick={() => dispatch({ type: 'go', screen: 'accept' })} className="btn-primary focus-ring mt-5 px-8 py-3.5 text-[20px]">قبول المشروع</button>
            </div>
          )}

          {s.screen === 'accept' && (
            <div className="mx-auto max-w-[660px]">
              <h4 className="text-[28px] font-extrabold">تأكيد قبول المشروع</h4>
              <div className="mt-5 divide-y divide-line rounded-[22px] border border-line px-5 text-[19px]">
                <div className="flex justify-between py-3"><span className="text-ink-3">العميل</span><b>نادي الابتكار</b></div>
                <div className="flex justify-between py-3"><span className="text-ink-3">القيمة</span><b><span className="num">{PRICE}.00</span> ر.ع</b></div>
                <div className="flex justify-between py-3"><span className="text-ink-3">التسليم</span><b>خلال 7 أيام · 4 مراحل</b></div>
                <div className="flex justify-between py-3"><span className="text-ink-3">الدفع</span><b className="text-teal-700">يُحجز ويُحرَّر بعد الاعتماد</b></div>
              </div>
              <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-[20px] border border-amber-600/25 bg-amber-50 p-4 text-[18px] text-amber-700">
                <input type="checkbox" checked={s.agreed} onChange={(e) => dispatch({ type: 'set', patch: { agreed: e.target.checked } })} className="mt-1 h-5 w-5 accent-rifd-600" />
                <span><b>أوافق على المخرجات والمدة.</b> العمل أصلي ويُسلَّم عبر المنصة.</span>
              </label>
              <div className="mt-5 flex gap-3">
                <button onClick={() => dispatch({ type: 'accept' })} disabled={!s.agreed} className="btn-primary focus-ring px-8 py-3.5 text-[20px]">قبول وبدء المشروع</button>
                <button onClick={() => dispatch({ type: 'go', screen: 'match' })} className="btn-ghost focus-ring px-6 py-3.5 text-[18px]">رجوع</button>
              </div>
            </div>
          )}

          {s.screen === 'project' && (
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1.1fr]">
              <div>
                <h4 className="text-[26px] font-extrabold">مشروع «أسبوع الابتكار»</h4>
                <p className="mt-1 text-[18px] text-ink-3"><span className="num">{PRICE}</span> ر.ع محجوزة · <span className="num">{s.done}</span> من <span className="num">4</span> مراحل</p>
                <div className="mt-5">
                  {MILESTONES.map((m, k) => (
                    <div key={m} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className={`grid h-9 w-9 place-items-center rounded-full text-[16px] font-bold transition-colors ${k < s.done ? 'bg-teal-500 text-white' : k === s.done ? 'border-2 border-rifd-600 text-rifd-600' : 'border-2 border-line-strong text-ink-3'}`}>{k < s.done ? '✓' : k + 1}</span>
                        {k < MILESTONES.length - 1 && <span className={`w-0.5 flex-1 ${k < s.done - 1 ? 'bg-teal-500' : 'bg-line'}`} style={{ minHeight: 24 }} />}
                      </div>
                      <div className={`pb-4 text-[20px] ${k < s.done ? 'font-bold' : 'text-ink-3'}`}>{m}</div>
                    </div>
                  ))}
                </div>
                {s.done < MILESTONES.length ? (
                  <button onClick={() => dispatch({ type: 'deliver' })} className="btn-primary focus-ring px-7 py-3.5 text-[19px]">تسليم المرحلة التالية</button>
                ) : (
                  <button onClick={() => dispatch({ type: 'go', screen: 'approval' })} className="btn-primary focus-ring px-7 py-3.5 text-[19px]">إرسال للاعتماد</button>
                )}
              </div>
              <div className="rounded-[22px] bg-surface-2 p-5">
                <div className="text-[18px] font-bold">آخر تسليم</div>
                <AnimatePresence mode="wait">
                  <motion.div key={s.done} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: EASE }} className="mt-3">
                    {s.done <= 1 && <div className="rounded-2xl bg-white p-5 text-[19px] leading-relaxed"><b>الموجز المعتمد:</b> هوية حديثة لفعالية ابتكار طلابية، بألوان الجامعة، تصلح للمنشورات والملصقات.</div>}
                    {s.done === 2 && <div className="grid grid-cols-3 gap-3">{[0, 1, 2].map((k) => <div key={k} className="grid place-items-center rounded-2xl bg-white py-5"><Concept i={k} size={84} /><span className="mt-2 text-[16px] text-ink-3">مقترح <span className="num">{k + 1}</span></span></div>)}</div>}
                    {s.done === 3 && <div className="grid grid-cols-[auto_1fr] items-center gap-5 rounded-2xl bg-white p-5"><Concept i={1} size={100} /><div className="text-[19px] leading-relaxed"><b>تعديل حسب ملاحظات النادي:</b> تكبير المركز وتبسيط الأطراف.</div></div>}
                    {s.done === 4 && <div className="rounded-2xl bg-white p-5"><div className="flex items-center gap-5"><Concept i={1} size={100} /><div><div className="text-[22px] font-extrabold">أسبوع الابتكار</div><div className="mt-2 flex gap-2">{['#0B1F3B', '#2563EB', '#0FB3AB', '#F5F7FC'].map((c) => <span key={c} className="h-7 w-7 rounded-full border border-line" style={{ background: c }} />)}</div></div></div><div className="mt-3 text-[17px] text-ink-3">ملفات نهائية + قالب منشور</div></div>}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}

          {s.screen === 'approval' && (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3"><h4 className="text-[28px] font-extrabold">مراجعة النادي</h4><span className="rounded-full bg-surface-2 px-3 py-1 text-[15px] font-bold text-ink-3">عرض النادي (محاكاة)</span></div>
              <p className="mt-1 text-[18px] text-ink-3">اختر المقترح المعتمد للفعالية:</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[0, 1, 2].map((k) => (
                  <button key={k} onClick={() => dispatch({ type: 'set', patch: { pick: k } })} className={`focus-ring flex flex-col items-center rounded-[20px] border-2 py-5 transition ${s.pick === k ? 'border-rifd-600 bg-rifd-50' : 'border-line hover:border-rifd-300'}`}>
                    <Concept i={k} size={90} /><span className="mt-2 text-[17px] font-bold">{s.pick === k ? '✓ ' : ''}مقترح <span className="num">{k + 1}</span></span>
                  </button>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-[20px] border border-line p-4">
                <div className="flex items-center gap-3"><span className="text-[18px] font-bold">تقييم العمل:</span><Stars value={s.rating} size={34} onPick={(v) => dispatch({ type: 'set', patch: { rating: v } })} /></div>
                <button onClick={() => dispatch({ type: 'approve' })} disabled={!s.rating || s.pick === null} className="btn-primary focus-ring px-7 py-3 text-[19px]">اعتماد وتحرير الدفع</button>
              </div>
            </div>
          )}

          {s.screen === 'portfolio' && s.approved && (
            <div>
              <h4 className="text-[28px] font-extrabold">سجلك المهني</h4>
              <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-[1.4fr_1fr_1fr]">
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }} className="flex items-center gap-5 rounded-[22px] border border-teal/50 bg-teal-50 p-5">
                  <Concept i={s.pick ?? 1} size={88} />
                  <div><div className="text-[16px] font-bold text-teal-700">مشروع معتمد جديد</div><div className="text-[22px] font-extrabold">هوية «أسبوع الابتكار»</div><div className="mt-1 flex items-center gap-2 text-[16px]"><Stars value={s.rating} size={16} /><span className="text-ink-3">نادي الابتكار</span></div></div>
                </motion.div>
                <div className="rounded-[22px] border border-line p-5"><div className="text-[17px] text-ink-3">مشاريع موثّقة</div><div className="num mt-1 text-[34px] font-extrabold">15</div></div>
                <div className="rounded-[22px] border border-line p-5"><div className="text-[17px] text-ink-3">دخل هذا المشروع</div><div className="mt-1 text-[34px] font-extrabold"><span className="num">{PRICE}</span> <span className="text-[20px]">ر.ع</span></div></div>
              </div>
              <div className="mt-4 rounded-[22px] bg-rifd-50 p-5">
                <div className="text-[18px] font-bold text-rifd-700">فرص تالية مقترحة</div>
                <div className="mt-2 flex flex-wrap gap-2 text-[17px]"><span className="chip">هوية لملتقى الريادة</span><span className="chip">قوالب لنادي الإعلام</span></div>
              </div>
            </div>
          )}
        </Screen>
      </AppWindow>
    </div>
  );
}
