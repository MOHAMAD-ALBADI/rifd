import { useReducer, useState } from 'react';
import { motion } from 'framer-motion';
import { AppWindow, LogEntry, Narrative, NarrativePanel, Screen, Stars } from './AppChrome';
import { EASE } from '../../lib/motion';

/* المعهد الرقمي — a student learns a skill, completes a project, earns a verified certificate,
   and unlocks a paid opportunity in the Mini Market. Deterministic simulation, illustrative data. */

type K = 'catalog' | 'course' | 'enroll' | 'learn' | 'project' | 'review' | 'certificate';
const ORDER: K[] = ['catalog', 'course', 'enroll', 'learn', 'project', 'review', 'certificate'];
const LESSONS = ['أساسيات الهوية البصرية', 'الألوان والخطوط', 'تصميم الشعار في Figma', 'تجهيز الملفات للطباعة'];
const COURSES = [
  { id: 'c1', title: 'تصميم الهوية البصرية', by: 'سالم الشامسي · مدرب طالب', hours: 6, price: 5, rating: 4.9, match: true },
  { id: 'c2', title: 'أساسيات Python للمبتدئين', by: 'يوسف الحارثي · مدرب طالب', hours: 8, price: 5, rating: 4.8, match: false },
  { id: 'c3', title: 'مونتاج الفيديو القصير', by: 'نور المعمرية · مدربة طالبة', hours: 4, price: 4, rating: 4.7, match: false },
];

interface S { screen: K; agreed: boolean; done: boolean[]; submitted: boolean; approved: boolean; rating: number; log: LogEntry[]; d: number }
const init = (): S => ({ screen: 'catalog', agreed: false, done: LESSONS.map(() => false), submitted: false, approved: false, rating: 0, log: [], d: 0 });
type A = { type: 'go'; screen: K } | { type: 'set'; patch: Partial<S> } | { type: 'enroll' } | { type: 'lesson'; i: number } | { type: 'submit' } | { type: 'approve' } | { type: 'reset' };

function reducer(s: S, a: A): S {
  const log = (who: string, text: string, dd = 1) => ({ d: s.d + dd, log: [...s.log, { t: `يوم ${s.d + dd}`, who, text }] });
  switch (a.type) {
    case 'go': return { ...s, screen: a.screen };
    case 'set': return { ...s, ...a.patch };
    case 'enroll': return s.agreed ? { ...s, screen: 'learn', ...log('وكيل التعلّم', 'سُجّلت ليلى في «تصميم الهوية البصرية» · خطة تعلّم من 4 دروس', 0) } : s;
    case 'lesson': {
      if (s.done[a.i] || (a.i > 0 && !s.done[a.i - 1])) return s; // lessons unlock in order
      const done = s.done.map((v, k) => (k === a.i ? true : v));
      return { ...s, done, ...log('وكيل التعلّم', `أنهت درس: ${LESSONS[a.i]}`) };
    }
    case 'submit': return { ...s, submitted: true, screen: 'review', ...log('وكيل التحقق', 'سُلّم المشروع التطبيقي · بانتظار مراجعة المدرب') };
    case 'approve': return s.rating ? { ...s, approved: true, screen: 'certificate', ...log('وكيل الفرص', `اعتمد المدرب المشروع ★${s.rating} · صدرت الشهادة · فُتحت فرصة مدفوعة في السوق المصغر`) } : s;
    case 'reset': return init();
  }
}

function narrative(s: S): Narrative {
  const b = { step: ORDER.indexOf(s.screen) + 1, total: ORDER.length };
  const n = s.done.filter(Boolean).length;
  switch (s.screen) {
    case 'catalog': return { ...b, title: 'دورة مقترحة لهدف ليلى', body: 'ليلى تريد أن تعمل في التصميم. المعهد الرقمي يقترح دورة قصيرة يقدّمها طالب متمكّن.', agent: 'وكيل التعلّم', hint: 'افتح الدورة المقترحة' };
    case 'course': return { ...b, title: 'محتوى واضح ونتيجة واضحة', body: 'دروس قصيرة، مشروع تطبيقي، وشهادة موثّقة تفتح فرصًا حقيقية.', hint: 'اضغط «سجّل في الدورة»' };
    case 'enroll': return { ...b, title: 'تأكيد التسجيل', body: 'رسوم رمزية تذهب للمدرب الطالب، ورِفد يحصل على نسبة منها.', human: 'ليلى تؤكد التسجيل والدفع بنفسها', hint: 'فعّل التأكيد ثم «تأكيد التسجيل»' };
    case 'learn': return { ...b, title: `التقدّم ${n} من 4`, body: 'الدروس تُفتح بالترتيب، والتقدّم يُسجَّل تلقائيًا.', agent: 'وكيل التعلّم', hint: n < 4 ? 'أكمل الدرس التالي' : 'اضغط «ابدأ المشروع التطبيقي»' };
    case 'project': return { ...b, title: 'مشروع تطبيقي حقيقي', body: 'الشهادة لا تُمنح بالحضور فقط؛ ليلى تسلّم شعارًا لفعالية تجريبية.', hint: 'اضغط «تسليم المشروع»' };
    case 'review': return { ...b, title: 'مراجعة المدرب', body: 'المدرب يقيّم المشروع ويعتمد الشهادة — اعتماد بشري.', agent: 'وكيل التحقق', human: 'اعتماد المدرب', hint: 'اختر التقييم ثم «اعتماد المشروع»' };
    case 'certificate': return { ...b, title: 'شهادة موثّقة + فرصة مدفوعة', body: 'المهارة الجديدة أصبحت في سجل ليلى، وفُتح لها مشروع مدفوع في السوق المصغر.', agent: 'وكيل الفرص', hint: 'اضغط «إعادة» للتجربة من جديد' };
  }
}

const NAV = [
  { key: 'home', label: 'الرئيسية' },
  { key: 'courses', label: 'دوراتي' },
  { key: 'cert', label: 'شهاداتي' },
  { key: 'opps', label: 'الفرص' },
];
const navFor = (k: K) => (k === 'catalog' ? 'home' : k === 'certificate' ? 'cert' : 'courses');

export function InstituteApp() {
  const [s, dispatch] = useReducer(reducer, undefined, init);
  const [showLog, setShowLog] = useState(false);
  const n = s.done.filter(Boolean).length;
  const c = COURSES[0];

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[400px_1fr] lg:gap-8">
      <NarrativePanel n={narrative(s)} log={s.log} showLog={showLog} toggleLog={() => setShowLog((v) => !v)} />
      <AppWindow user={{ name: 'ليلى', initials: 'ل', role: 'إدارة أعمال · سنة ثانية' }} nav={NAV} activeNav={navFor(s.screen)} onReset={() => { setShowLog(false); dispatch({ type: 'reset' }); }}>
        <Screen k={s.screen}>
          {s.screen === 'catalog' && (
            <div>
              <h4 className="text-[26px] font-extrabold">المعهد الرقمي</h4>
              <p className="mt-1 text-[18px] text-ink-3">هدفك: العمل في التصميم · مقترح لك</p>
              <div className="mt-5 space-y-3">
                {COURSES.map((x) => (
                  <button key={x.id} disabled={!x.match} onClick={() => dispatch({ type: 'go', screen: 'course' })}
                    className={`focus-ring flex w-full items-center gap-5 rounded-[22px] border p-4 text-right transition ${x.match ? 'border-2 border-rifd-300 bg-rifd-50/60 hover:border-rifd-500' : 'border-line opacity-60'}`}>
                    <span className="h-16 w-20 shrink-0 rounded-2xl" style={{ background: x.match ? 'linear-gradient(135deg,#C9F5F2,#8BE4DD)' : 'linear-gradient(135deg,#E6ECF6,#C9D3E3)' }} />
                    <div className="min-w-0 flex-1">
                      {x.match && <div className="text-[15px] font-bold text-rifd-600">الأنسب لهدفك</div>}
                      <div className="text-[21px] font-extrabold">{x.title}</div>
                      <div className="text-[16px] text-ink-3">{x.by} · <span className="num">{x.hours}</span> ساعات · ★ <span className="num">{x.rating}</span></div>
                    </div>
                    <b className="num text-[22px]">{x.price} ر.ع</b>
                  </button>
                ))}
              </div>
            </div>
          )}

          {s.screen === 'course' && (
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_1fr]">
              <div>
                <button onClick={() => dispatch({ type: 'go', screen: 'catalog' })} className="focus-ring text-[17px] font-bold text-ink-3 hover:text-ink">→ الدورات</button>
                <h4 className="mt-2 text-[26px] font-extrabold">{c.title}</h4>
                <p className="mt-1 text-[18px] text-ink-3">{c.by}</p>
                <div className="mt-4 text-[18px] font-bold">ماذا ستتعلمين</div>
                <ul className="mt-2 space-y-2">{LESSONS.map((l, i) => <li key={l} className="flex items-center gap-3 text-[19px]"><span className="num grid h-7 w-7 place-items-center rounded-full bg-surface-2 text-[15px] font-bold">{i + 1}</span>{l}</li>)}</ul>
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-[20px] bg-surface-2 p-5"><div className="text-[17px] text-ink-3">المخرجات</div><div className="mt-1 text-[20px] font-bold">مشروع تطبيقي + شهادة موثّقة</div></div>
                <div className="rounded-[20px] bg-surface-2 p-5"><div className="text-[17px] text-ink-3">المدة والرسوم</div><div className="mt-1 text-[20px] font-bold"><span className="num">{c.hours}</span> ساعات · <span className="num">{c.price}</span> ر.ع</div></div>
                <button onClick={() => dispatch({ type: 'go', screen: 'enroll' })} className="btn-primary focus-ring mt-auto py-3.5 text-[20px]">سجّل في الدورة</button>
              </div>
            </div>
          )}

          {s.screen === 'enroll' && (
            <div className="mx-auto max-w-[620px]">
              <h4 className="text-[26px] font-extrabold">تأكيد التسجيل</h4>
              <div className="mt-5 divide-y divide-line rounded-[22px] border border-line px-5 text-[19px]">
                <div className="flex justify-between py-3"><span className="text-ink-3">الدورة</span><b>{c.title}</b></div>
                <div className="flex justify-between py-3"><span className="text-ink-3">الرسوم</span><b><span className="num">{c.price}.00</span> ر.ع</b></div>
                <div className="flex justify-between py-3"><span className="text-ink-3">الشهادة</span><b className="text-teal-700">بعد اعتماد المشروع</b></div>
              </div>
              <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-[20px] border border-amber-600/25 bg-amber-50 p-4 text-[18px] text-amber-700">
                <input type="checkbox" checked={s.agreed} onChange={(e) => dispatch({ type: 'set', patch: { agreed: e.target.checked } })} className="mt-1 h-5 w-5 accent-rifd-600" />
                <span><b>أؤكد التسجيل والدفع بنفسي.</b></span>
              </label>
              <div className="mt-5 flex gap-3">
                <button onClick={() => dispatch({ type: 'enroll' })} disabled={!s.agreed} className="btn-primary focus-ring px-8 py-3.5 text-[20px]">تأكيد التسجيل</button>
                <button onClick={() => dispatch({ type: 'go', screen: 'course' })} className="btn-ghost focus-ring px-6 py-3.5 text-[18px]">رجوع</button>
              </div>
            </div>
          )}

          {s.screen === 'learn' && (
            <div>
              <div className="flex items-end justify-between gap-4">
                <h4 className="text-[26px] font-extrabold">{c.title}</h4>
                <b className="num text-[22px] text-rifd-600">{Math.round((n / 4) * 100)}%</b>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-surface-2"><motion.div className="h-full rounded-full bg-rifd-600" animate={{ width: `${(n / 4) * 100}%` }} transition={{ duration: 0.5, ease: EASE }} /></div>
              <div className="mt-5 space-y-2.5">
                {LESSONS.map((l, i) => {
                  const done = s.done[i]; const open = i === 0 || s.done[i - 1];
                  return (
                    <div key={l} className={`flex items-center gap-4 rounded-[18px] border p-4 ${done ? 'border-teal/40 bg-teal-50' : open ? 'border-rifd-300' : 'border-line opacity-50'}`}>
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-[16px] font-bold ${done ? 'bg-teal-500 text-white' : 'bg-surface-2'}`}>{done ? '✓' : <span className="num">{i + 1}</span>}</span>
                      <span className="flex-1 text-[19px] font-bold">{l}</span>
                      {!done && open && <button onClick={() => dispatch({ type: 'lesson', i })} className="btn-primary focus-ring px-5 py-2 text-[17px]">إكمال الدرس</button>}
                      {!open && <span className="text-[16px] text-ink-3">مقفل</span>}
                    </div>
                  );
                })}
              </div>
              <button onClick={() => dispatch({ type: 'go', screen: 'project' })} disabled={n < 4} className="btn-primary focus-ring mt-5 px-8 py-3.5 text-[20px]">ابدأ المشروع التطبيقي</button>
            </div>
          )}

          {s.screen === 'project' && (
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1fr]">
              <div>
                <h4 className="text-[26px] font-extrabold">المشروع التطبيقي</h4>
                <p className="mt-2 text-[19px] leading-relaxed text-ink-2">صمّمي شعارًا ولوحة ألوان لفعالية طلابية تجريبية، وارفعي الملفات للمراجعة.</p>
                <ul className="mt-4 space-y-2 text-[18px]">{['ملف الشعار', 'لوحة الألوان', 'نموذج منشور'].map((x) => <li key={x} className="flex items-center gap-3"><span className="text-teal-700">✓</span>{x} — جاهز</li>)}</ul>
                <button onClick={() => dispatch({ type: 'submit' })} className="btn-primary focus-ring mt-5 px-8 py-3.5 text-[20px]">تسليم المشروع</button>
              </div>
              <div className="grid place-items-center rounded-[22px] bg-surface-2 p-6">
                <svg viewBox="0 0 100 100" width="150" height="150" aria-hidden><circle cx="50" cy="44" r="24" fill="none" stroke="#2563EB" strokeWidth="7" /><path d="M38 44l8 8 16-16" fill="none" stroke="#0FB3AB" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /><rect x="30" y="76" width="40" height="8" rx="4" fill="#0B1F3B" /></svg>
                <div className="mt-2 flex gap-2">{['#0B1F3B', '#2563EB', '#0FB3AB', '#F5F7FC'].map((col) => <span key={col} className="h-7 w-7 rounded-full border border-line" style={{ background: col }} />)}</div>
              </div>
            </div>
          )}

          {s.screen === 'review' && (
            <div className="mx-auto max-w-[680px]">
              <div className="flex flex-wrap items-center justify-between gap-3"><h4 className="text-[26px] font-extrabold">مراجعة المدرب</h4><span className="rounded-full bg-surface-2 px-3 py-1 text-[16px] font-bold text-ink-3">عرض المدرب (محاكاة)</span></div>
              <div className="mt-5 rounded-[22px] border border-line p-5">
                <div className="text-[19px]">مشروع ليلى: شعار ولوحة ألوان لفعالية طلابية</div>
                <div className="mt-3 flex items-center gap-3"><span className="text-[18px] font-bold">التقييم:</span><Stars value={s.rating} size={36} onPick={(v) => dispatch({ type: 'set', patch: { rating: v } })} /></div>
              </div>
              <button onClick={() => dispatch({ type: 'approve' })} disabled={!s.rating} className="btn-primary focus-ring mt-5 px-8 py-3.5 text-[20px]">اعتماد المشروع وإصدار الشهادة</button>
            </div>
          )}

          {s.screen === 'certificate' && s.approved && (
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.2fr_1fr]">
              <motion.div initial={{ opacity: 0, rotateX: 18, y: 16 }} animate={{ opacity: 1, rotateX: 0, y: 0 }} transition={{ duration: 0.7, ease: EASE }} style={{ transformPerspective: 900 }}
                className="rounded-[24px] border-2 border-teal/50 bg-gradient-to-br from-teal-50 to-white p-6">
                <div className="flex items-center justify-between"><span className="text-[17px] font-bold text-teal-700">شهادة موثّقة · المعهد الرقمي</span><img src="assets/brand/rifd-icon.png" alt="" className="h-9" /></div>
                <div className="mt-4 text-[28px] font-extrabold">ليلى</div>
                <div className="text-[20px]">أتمّت «{c.title}» بمشروع تطبيقي معتمد</div>
                <div className="mt-3 flex items-center gap-2 text-[17px]"><Stars value={s.rating} size={18} /><span className="text-ink-3">اعتماد المدرب: {c.by.split(' · ')[0]}</span></div>
              </motion.div>
              <div className="flex flex-col gap-3">
                <div className="rounded-[20px] bg-rifd-50 p-5">
                  <div className="text-[17px] font-bold text-rifd-700">فُتحت لكِ فرصة في السوق المصغر</div>
                  <div className="mt-1 text-[20px] font-extrabold">ملصق لفعالية نادي الفنون · <span className="num">12</span> ر.ع</div>
                </div>
                <div className="rounded-[20px] border border-line p-5"><div className="text-[17px] text-ink-3">للمدرب سالم</div><div className="mt-1 text-[19px] font-bold">حصل على رسوم الدورة + تقييم جديد</div></div>
              </div>
            </div>
          )}
        </Screen>
      </AppWindow>
    </div>
  );
}
