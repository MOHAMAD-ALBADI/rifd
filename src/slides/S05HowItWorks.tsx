import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AGENTS, JOURNEY_STEPS, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { JourneyRail, StatusBadge, useInitial } from '../components/primitives';
import { useSlide } from '../lib/env';
import { EASE, T } from '../lib/motion';

/* Six agents explained through one real request: each shows what it receives, what it does, what it produces. */
export default function S05HowItWorks() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const { active } = useSlide();
  const initial = useInitial();
  const n = AGENTS.length;
  const a = AGENTS[i];
  const stepAr = JOURNEY_STEPS.find((s) => s.key === a.step)?.ar;

  useEffect(() => {
    if (!playing || !active) return;
    const t = window.setTimeout(() => (i < n - 1 ? setI(i + 1) : setPlaying(false)), 2800);
    return () => window.clearTimeout(t);
  }, [playing, i, active, n]);

  const go = (k: number) => { setPlaying(false); setI(Math.max(0, Math.min(n - 1, k))); };

  return (
    <SlideFrame meta={SLIDES[4]} title="ستة وكلاء أذكياء. رحلة واحدة." accent={['رحلة', 'واحدة.']} aside={<StatusBadge status="proposed" />}>
      {/* agent tabs along the journey */}
      <div className="relative grid grid-cols-3 gap-3 lg:grid-cols-6 lg:gap-4">
        {AGENTS.map((ag, k) => {
          const on = k === i;
          const done = k < i;
          return (
            <motion.button key={ag.key} onClick={() => go(k)}
              initial={initial === false ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE, delay: initial === false ? 0 : 0.25 + k * 0.06 }}
              className={`focus-ring relative rounded-[20px] border p-4 text-right transition-colors lg:p-5 ${on ? 'border-rifd-600 bg-rifd-600 text-white shadow-lift' : done ? 'border-rifd-200 bg-rifd-50' : 'border-line bg-white hover:border-rifd-200'}`}>
              <div className="flex items-center justify-between">
                <span className={`num text-[16px] font-bold lg:text-[18px] ${on ? 'text-white/80' : 'text-ink-3'}`}>{k + 1}</span>
                {'human' in ag && <span className={`text-[14px] font-bold lg:text-[16px] ${on ? 'text-white' : 'text-amber-700'}`}>تأكيد بشري</span>}
              </div>
              <div className="mt-2 text-[18px] font-extrabold leading-tight lg:text-[24px]">{ag.ar}</div>
              <div className={`en mt-1 text-[14px] lg:text-[17px] ${on ? 'text-white/80' : 'text-ink-3'}`} style={{ textAlign: 'right' }}>{ag.en}</div>
            </motion.button>
          );
        })}
      </div>

      {/* input → action → output */}
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={T.base}
          className="mt-6 grid grid-cols-1 items-stretch gap-4 lg:mt-8 lg:min-h-[300px] lg:grid-cols-[1fr_auto_1.15fr_auto_1fr] lg:gap-5">
          <div className="card flex flex-col p-6 lg:p-8">
            <div className="text-[16px] font-bold text-ink-3 lg:text-[20px]">يستقبل</div>
            <p className="mt-3 text-[20px] font-bold leading-relaxed lg:text-[28px]">{a.input}</p>
          </div>
          <div className="hidden items-center text-[40px] text-rifd-300 lg:flex">←</div>
          <div className="flex flex-col rounded-[24px] bg-navy p-6 text-white lg:p-8">
            <div className="flex items-center justify-between">
              <span className="text-[16px] font-bold text-teal-300 lg:text-[20px]">يفعل · {a.ar}</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[14px] lg:text-[18px]">مرحلة: {stepAr}</span>
            </div>
            <p className="mt-3 text-[20px] font-bold leading-relaxed lg:text-[28px]">{a.action}</p>
            {'human' in a && (
              <div className="mt-auto pt-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-[16px] font-bold text-amber-700 lg:text-[20px]">إنسان في الحلقة: {a.human}</span>
              </div>
            )}
          </div>
          <div className="hidden items-center text-[40px] text-rifd-300 lg:flex">←</div>
          <div className="card flex flex-col !border-teal/50 bg-teal-50 p-6 lg:p-8">
            <div className="text-[16px] font-bold text-teal-700 lg:text-[20px]">ينتج</div>
            <p className="mt-3 text-[20px] font-extrabold leading-relaxed lg:text-[28px]">{a.output}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex flex-wrap items-center gap-4 lg:mt-auto">
        <span className="text-[16px] font-bold text-ink-3 lg:text-[20px]">موقعه في الرحلة:</span>
        <JourneyRail active={AGENTS.slice(0, i + 1).map((x) => x.step)} current={a.step} size="sm" />
      </div>
      <div className="no-print mt-5 flex flex-wrap items-center gap-3 lg:mt-6">
        <button onClick={() => go(i - 1)} disabled={i === 0} className="btn-ghost focus-ring px-6 py-3 text-[18px] lg:text-[20px]">→ السابق</button>
        <button onClick={() => go(i + 1)} disabled={i === n - 1} className="btn-primary focus-ring px-7 py-3 text-[18px] lg:text-[20px]">الوكيل التالي ←</button>
        <button onClick={() => { if (i === n - 1) setI(0); setPlaying((p) => !p); }} className="btn-ghost focus-ring px-6 py-3 text-[18px] lg:text-[20px]">{playing ? '❚❚ إيقاف' : '▶ تشغيل الرحلة'}</button>
        <span className="ms-auto text-[16px] text-ink-3 lg:text-[20px]">كل وكيل يمرّر نتيجته للتالي — منظومة واحدة، لا ستة روبوتات منفصلة.</span>
      </div>
    </SlideFrame>
  );
}
