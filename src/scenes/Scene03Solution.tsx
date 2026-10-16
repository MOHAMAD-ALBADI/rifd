import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDES, SOLUTION } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { Reveal, StatusBadge } from '../components/primitives';
import { useEnv, useSlide } from '../lib/env';
import { EASE, T } from '../lib/motion';

/* Four product modules. Selecting one brings its representative interface forward. */

function Avatar({ t, tone = 'teal', size = 48 }: { t: string; tone?: 'teal' | 'blue'; size?: number }) {
  return <span className={`grid shrink-0 place-items-center rounded-full font-bold text-white ${tone === 'teal' ? 'bg-gradient-to-br from-teal-500 to-teal-700' : 'bg-gradient-to-br from-rifd-500 to-rifd-700'}`} style={{ width: size, height: size, fontSize: size * 0.4 }}>{t}</span>;
}

function SupportUI() {
  return (
    <div className="grid h-full grid-cols-1 gap-5 sm:grid-cols-[1.1fr_1fr]">
      <div className="rounded-[20px] border border-line p-5">
        <div className="flex items-center gap-4"><Avatar t="ي" size={64} /><div><div className="text-[24px] font-extrabold">يوسف الحارثي</div><div className="text-[18px] text-ink-3">مرشد أقران · علوم الحاسوب</div></div></div>
        <div className="mt-4 flex flex-wrap gap-2 text-[18px]"><span className="chip">Python</span><span className="chip">الدوال العودية</span><span className="chip">★ 4.9</span></div>
        <div className="mt-4 rounded-2xl bg-surface-2 p-4 text-[18px] leading-relaxed text-ink-2">«أبدأ من مستوى الطالب، وأشرح بأمثلة عملية.»</div>
      </div>
      <div className="flex flex-col rounded-[20px] border border-line p-5">
        <div className="text-[20px] font-extrabold">المواعيد المتاحة</div>
        <div className="mt-3 space-y-2">
          {['الثلاثاء 6:00 م', 'الأربعاء 4:00 م', 'الخميس 10:00 ص'].map((s, i) => (
            <div key={s} className={`flex justify-between rounded-2xl border px-4 py-3 text-[19px] font-bold ${i === 1 ? 'border-rifd-600 bg-rifd-600 text-white' : 'border-line'}`}>{s}<span className="num">6 ر.ع</span></div>
          ))}
        </div>
        <div className="btn-primary mt-auto py-3 text-[19px]">احجز الجلسة</div>
      </div>
    </div>
  );
}
function MarketUI() {
  const items = [['تصميم شعار لنادٍ', 'سالم · ★ 4.9', '25'], ['صفحة ويب لفعالية', 'مريم · ★ 4.8', '60'], ['مونتاج فيديو قصير', 'نور · ★ 4.7', '15']];
  return (
    <div className="flex h-full flex-col">
      <div className="flex gap-2 text-[18px]"><span className="rounded-full bg-navy px-4 py-1.5 font-bold text-white">الكل</span><span className="chip">تصميم</span><span className="chip">برمجة</span><span className="chip">مونتاج</span></div>
      <div className="mt-4 grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map(([t, by, p], i) => (
          <div key={t} className="flex flex-col rounded-[20px] border border-line p-4">
            <div className="h-24 rounded-2xl" style={{ background: ['linear-gradient(135deg,#DCE8FE,#BFD5FD)', 'linear-gradient(135deg,#C9F5F2,#8BE4DD)', 'linear-gradient(135deg,#E6ECF6,#C9D3E3)'][i] }} />
            <div className="mt-3 text-[20px] font-extrabold leading-tight">{t}</div>
            <div className="mt-1 text-[18px] text-ink-3">{by}</div>
            <div className="mt-auto flex items-center justify-between pt-3"><b className="num text-[22px]">{p} ر.ع</b><span className="rounded-full bg-teal-50 px-3 py-1 text-[15px] font-bold text-teal-700">دفع آمن</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
function LearnUI() {
  return (
    <div className="grid h-full grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="rounded-[20px] border border-line p-5">
        <div className="text-[18px] font-bold text-rifd-600">دورة</div>
        <div className="mt-1 text-[22px] font-extrabold">أساسيات تصميم الهوية</div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-surface-2"><div className="h-full w-[60%] rounded-full bg-rifd-500" /></div>
        <div className="mt-2 text-[18px] text-ink-3">3 من 5 وحدات</div>
      </div>
      <div className="rounded-[20px] border border-line p-5">
        <div className="text-[18px] font-bold text-teal-700">مشروع عملي</div>
        <div className="mt-1 text-[22px] font-extrabold">هوية لشركة محلية ناشئة</div>
        <div className="mt-3 text-[18px] text-ink-3">مطلوب: هوية بصرية · 10 أيام</div>
      </div>
      <div className="flex items-center sm:col-span-2 justify-between rounded-[20px] bg-rifd-50 p-5">
        <div><div className="text-[18px] font-bold text-rifd-700">مناسب لقدراتك وأهدافك</div><div className="text-[21px] font-extrabold">3 فرص جديدة هذا الأسبوع</div></div>
        <span className="btn-primary px-5 py-2.5 text-[18px]">استعرض</span>
      </div>
    </div>
  );
}
function InstUI() {
  const bars = [42, 55, 49, 66, 80, 72];
  return (
    <div className="flex h-full flex-col">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[['طلبات الدعم', '278'], ['معدل الإتمام', '91%'], ['مرشدون نشطون', '46']].map(([l, v]) => (
          <div key={l} className="rounded-[20px] border border-line p-4"><div className="text-[18px] text-ink-3">{l}</div><div className="num mt-1 text-[32px] font-extrabold">{v}</div></div>
        ))}
      </div>
      <div className="mt-4 flex flex-1 items-end gap-3 rounded-[20px] border border-line p-5" dir="ltr">
        {bars.map((b, i) => <div key={i} className={`flex-1 rounded-t-lg ${i === bars.length - 1 ? 'bg-rifd-600' : 'bg-rifd-200'}`} style={{ height: `${b}%` }} />)}
      </div>
    </div>
  );
}
const UIS: Record<string, () => JSX.Element> = { support: SupportUI, market: MarketUI, learn: LearnUI, inst: InstUI };

export default function Scene03Solution() {
  const [sel, setSel] = useState(0);
  const [auto, setAuto] = useState(true);
  const { active } = useSlide();
  const { reduced } = useEnv();
  useEffect(() => {
    if (!auto || !active || reduced) return;
    const t = window.setInterval(() => setSel((s) => (s + 1) % 4), 4500);
    return () => window.clearInterval(t);
  }, [auto, active, reduced]);
  const m = SOLUTION.modules[sel];
  const UI = UIS[m.key];

  return (
    <SlideFrame meta={SLIDES[2]} title={SOLUTION.headline} accent="منظومة واحدة" sub={SOLUTION.explanation} titleClass="lg:!text-[58px]">
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
        {/* module selector */}
        <div className="flex flex-col gap-2">
          {SOLUTION.modules.map((mod, i) => {
            const on = i === sel;
            return (
              <button key={mod.key} onClick={() => { setAuto(false); setSel(i); }}
                className={`focus-ring rounded-[22px] border px-6 py-4 text-right transition-colors duration-300 ${on ? 'border-teal/50 bg-white/[0.06]' : 'border-transparent hover:bg-white/[0.03]'}`}>
                <div className="flex items-baseline gap-4">
                  <span className={`num text-[20px] font-bold lg:text-[22px] ${on ? 'text-teal' : 'text-fog'}`}>{mod.no}</span>
                  <span className={`text-[22px] font-extrabold lg:text-[30px] ${on ? 'text-snow' : 'text-mist/70'}`}>{mod.title}</span>
                </div>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden pe-2 ps-10 pt-2 text-[17px] leading-relaxed text-mist lg:text-[22px]">{mod.body}</motion.p>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {/* representative interface */}
        <div className="relative flex flex-col overflow-hidden rounded-[28px] bg-white text-ink shadow-app">
          <div className="flex items-center justify-between border-b border-line px-6 py-3">
            <div className="flex items-center gap-3"><img src="assets/brand/rifd-icon.png" alt="" className="h-8" /><span className="text-[20px] font-extrabold">{m.title}</span></div>
            <span className="text-[18px] font-bold text-ink-3">واجهة توضيحية</span>
          </div>
          <div className="min-h-[300px] flex-1 p-6">
            <AnimatePresence initial={false}>
              <motion.div key={m.key} className="h-full" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0 } }} transition={T.base}><UI /></motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <Reveal delay={0.9} className="text-[20px] font-bold text-snow lg:text-[28px]">{SOLUTION.takeaway}</Reveal>
        <StatusBadge status="proposed" />
      </div>
    </SlideFrame>
  );
}
