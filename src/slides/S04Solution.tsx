import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SLIDES, SOLUTION } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { JourneyRail, StatusBadge, useInitial } from '../components/primitives';
import { useEnv, useSlide } from '../lib/env';
import { EASE, T } from '../lib/motion';

/* Four modules, each with a representative interface. Selecting a module lights the journey steps it covers. */

function MiniSupport() {
  return (
    <div className="rounded-2xl bg-surface-2 p-4">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-teal-600 font-bold text-white">ي</span>
        <div className="flex-1"><div className="text-[18px] font-bold lg:text-[20px]">جلسة Python</div><div className="text-[15px] text-ink-3 lg:text-[18px]">مع يوسف · 60 دقيقة</div></div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-white px-3 py-2 text-[16px] lg:text-[18px]"><span className="font-bold">الأربعاء 4:00 م</span><span className="text-teal-700">● مؤكدة</span></div>
    </div>
  );
}
function MiniMarket() {
  return (
    <div className="rounded-2xl bg-surface-2 p-4">
      <div className="text-[18px] font-bold lg:text-[20px]">تصميم شعار لنادٍ طلابي</div>
      <div className="mt-1 text-[15px] text-ink-3 lg:text-[18px]">سالم · مصمم · ★ 4.9</div>
      <div className="mt-3 flex gap-2">
        <span className="rounded-xl bg-white px-3 py-2 text-[16px] font-bold lg:text-[18px]"><span className="num">25</span> ر.ع</span>
        <span className="rounded-xl bg-white px-3 py-2 text-[16px] lg:text-[18px]">5 أيام</span>
        <span className="rounded-xl bg-teal-50 px-3 py-2 text-[16px] text-teal-700 lg:text-[18px]">دفع آمن</span>
      </div>
    </div>
  );
}
function MiniLearn() {
  return (
    <div className="rounded-2xl bg-surface-2 p-4">
      <div className="text-[18px] font-bold lg:text-[20px]">مسار: أساسيات Python</div>
      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white"><div className="h-full w-[60%] rounded-full bg-rifd-500" /></div>
      <div className="mt-1 text-[15px] text-ink-3 lg:text-[18px]">3 من 5 وحدات</div>
      <div className="mt-3 rounded-xl bg-white px-3 py-2 text-[16px] lg:text-[18px]">فرصة: مشروع تطبيقي من شركة محلية</div>
    </div>
  );
}
function MiniInst() {
  const bars = [38, 52, 46, 64, 78];
  return (
    <div className="rounded-2xl bg-surface-2 p-4">
      <div className="flex items-end justify-between">
        <div><div className="text-[15px] text-ink-3 lg:text-[18px]">طلبات الدعم شهريًا</div><div className="num text-[26px] font-extrabold">278</div></div>
        <div className="text-left"><div className="text-[15px] text-ink-3 lg:text-[18px]">معدل الإتمام</div><div className="num text-[26px] font-extrabold text-teal-700">91%</div></div>
      </div>
      <div className="mt-3 flex h-14 items-end gap-2" dir="ltr">
        {bars.map((b, i) => <div key={i} className={`flex-1 rounded-t-md ${i === bars.length - 1 ? 'bg-rifd-600' : 'bg-rifd-200'}`} style={{ height: `${b}%` }} />)}
      </div>
    </div>
  );
}
const MINIS: Record<string, () => JSX.Element> = { support: MiniSupport, market: MiniMarket, learn: MiniLearn, inst: MiniInst };

export default function S04Solution() {
  const [sel, setSel] = useState(0);
  const [auto, setAuto] = useState(true);
  const { active } = useSlide();
  const { mode, reduced } = useEnv();
  const initial = useInitial();
  useEffect(() => {
    if (!auto || !active || mode === 'print' || reduced) return;
    const t = window.setInterval(() => setSel((s) => (s + 1) % 4), 3400);
    return () => window.clearInterval(t);
  }, [auto, active, mode, reduced]);
  const m = SOLUTION.modules[sel];

  return (
    <SlideFrame meta={SLIDES[3]} title={SOLUTION.headline} accent={['الرحلة', 'كاملة.']} aside={<StatusBadge status="demo" />}>
      <div className="card mb-6 flex flex-wrap items-center gap-4 p-4 lg:mb-8 lg:p-6">
        <span className="text-[16px] font-bold text-ink-3 lg:text-[22px]">تغطي «{m.title}»:</span>
        <JourneyRail active={m.covers} size="md" />
      </div>
      <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {SOLUTION.modules.map((mod, i) => {
          const Mini = MINIS[mod.key];
          const on = i === sel;
          return (
            <motion.button
              key={mod.key}
              onClick={() => { setAuto(false); setSel(i); }}
              initial={initial === false ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: on ? -8 : 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: initial === false ? 0 : 0.3 + i * 0.08 }}
              className={`focus-ring card flex flex-col p-6 text-right transition-colors lg:p-7 ${on ? '!border-rifd-500 shadow-lift ring-4 ring-rifd-100' : 'hover:!border-rifd-200'}`}
            >
              <span className={`label text-[13px] lg:text-[16px] ${on ? 'text-rifd-600' : 'text-ink-3'}`}>{mod.en}</span>
              <span className="mt-2 text-[24px] font-extrabold leading-tight lg:text-[30px]">{mod.title}</span>
              <span className="mt-2 text-[17px] leading-relaxed text-ink-2 lg:text-[21px]">{mod.line}</span>
              <span className="mt-auto pt-5"><Mini /></span>
            </motion.button>
          );
        })}
      </div>
      <motion.p initial={false} animate={{ opacity: 1 }} transition={T.base} className="mt-5 text-[16px] text-ink-3 lg:text-[20px]">{SOLUTION.integrity}</motion.p>
    </SlideFrame>
  );
}
