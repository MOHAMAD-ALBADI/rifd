import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROADMAP, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { StatusBadge, useInitial } from '../components/primitives';
import { EASE, T } from '../lib/motion';

export default function S10Roadmap() {
  const [sel, setSel] = useState(0);
  const initial = useInitial();
  const ph = ROADMAP.phases[sel];
  return (
    <SlideFrame meta={SLIDES[9]} title={ROADMAP.headline} accent={['نتوسع.']}>
      <div className="flex flex-1 flex-col justify-center gap-8 lg:gap-12">
        {/* timeline */}
        <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-5">
          <div className="absolute inset-x-[10%] top-[34px] hidden h-1 rounded-full bg-line lg:block" />
          <motion.div className="absolute right-[10%] top-[34px] hidden h-1 rounded-full bg-rifd-600 lg:block" initial={initial === false ? false : { width: 0 }} animate={{ width: `${(sel + 1) * 20}%` }} transition={T.slow} />

          <motion.div initial={initial === false ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ ...T.base, delay: 0.25 }} className="relative flex flex-col items-center text-center">
            <span className="relative z-10 grid h-[72px] w-[72px] place-items-center rounded-full bg-teal-500 text-[32px] text-white shadow-lift">✓</span>
            <div className="mt-4 text-[22px] font-extrabold lg:text-[28px]">الآن</div>
            <StatusBadge status="achieved" className="mt-2" />
          </motion.div>

          {ROADMAP.phases.map((p, i) => (
            <motion.button key={p.key} onClick={() => setSel(i)}
              initial={initial === false ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: EASE, delay: initial === false ? 0 : 0.35 + i * 0.08 }}
              className="focus-ring relative flex flex-col items-center rounded-2xl text-center">
              <span className={`relative z-10 grid h-[72px] w-[72px] place-items-center rounded-full border-4 text-[28px] font-extrabold transition-colors ${i === sel ? 'border-rifd-600 bg-rifd-600 text-white shadow-lift' : i < sel ? 'border-rifd-600 bg-white text-rifd-600' : 'border-line bg-white text-ink-3'}`}>
                <span className="num">{i + 1}</span>
              </span>
              <div className={`mt-4 text-[22px] font-extrabold lg:text-[28px] ${i === sel ? 'text-rifd-700' : ''}`}>{p.ar}</div>
              <div className="text-[16px] text-ink-3 lg:text-[20px]">{p.window}</div>
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 lg:min-h-[400px] lg:grid-cols-[0.75fr_1.25fr] lg:gap-7">
          <div className="rounded-[28px] border border-teal/40 bg-teal-50 p-6 lg:p-8">
            <div className="text-[18px] font-bold text-teal-700 lg:text-[22px]">ما أنجزناه فعليًا</div>
            <ul className="mt-4 space-y-3">
              {ROADMAP.achieved.map((a) => <li key={a} className="flex items-center gap-3 text-[19px] font-bold lg:text-[25px]"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal-500 text-[16px] text-white">✓</span>{a}</li>)}
            </ul>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={ph.key} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={T.fast} className="card flex flex-col p-6 lg:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-[18px] font-bold text-rifd-600 lg:text-[22px]">المرحلة <span className="num">{sel + 1}</span> · {ph.ar}</div>
                <StatusBadge status="planned" />
              </div>
              <p className="mt-3 text-[22px] font-extrabold leading-snug lg:text-[32px]">{ph.goal}</p>
              <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-[1.3fr_1fr]">
                <ul className="space-y-2.5">
                  {ph.milestones.map((m) => <li key={m} className="flex items-baseline gap-3 text-[18px] lg:text-[23px]"><span className="h-2.5 w-2.5 shrink-0 translate-y-[-3px] rounded-full bg-rifd-500" />{m}</li>)}
                </ul>
                <div className="rounded-2xl bg-surface-2 p-4">
                  <div className="text-[16px] font-bold text-ink-3 lg:text-[19px]">مؤشر الانتقال للمرحلة التالية</div>
                  <div className="mt-1 text-[18px] font-bold leading-relaxed lg:text-[22px]">{ph.metric}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SlideFrame>
  );
}
