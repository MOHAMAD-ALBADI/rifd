import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AGENTS, AGENTS_SCENE, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { StatusBadge } from '../components/primitives';
import { ThreeStage } from '../three/ThreeStage';
import { JourneyFallback } from '../components/Fallbacks';
import { useSlide } from '../lib/env';
import { T } from '../lib/motion';

/* A club's design request travels through six product objects; the responsible agent is highlighted. */
export default function Scene04Agents() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const { active } = useSlide();
  const n = AGENTS.length;
  const a = AGENTS[i];
  const go = useCallback((k: number) => { setPlaying(false); setI(Math.max(0, Math.min(n - 1, k))); }, [n]);

  useEffect(() => {
    if (!playing || !active) return;
    const t = window.setTimeout(() => (i < n - 1 ? setI(i + 1) : setPlaying(false)), 2800);
    return () => window.clearTimeout(t);
  }, [playing, i, active, n]);

  return (
    <SlideFrame meta={SLIDES[3]} title={AGENTS_SCENE.headline} accent="رحلة كاملة." sub={AGENTS_SCENE.explanation} titleClass="lg:!text-[56px]">
      <div className="flex flex-1 flex-col">
        <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
          <ThreeStage scene="journey" props={{ active: i, onSelect: go }} fallback={<JourneyFallback active={i} onSelect={go} />} className="absolute inset-0" />
          <div className="pointer-events-none absolute right-6 top-5 flex items-center gap-3">
            <span className="rounded-full bg-night-deep/80 px-4 py-1.5 text-[17px] font-bold text-mist lg:text-[20px]">المثال: {AGENTS_SCENE.scenario}</span>
          </div>
          <div className="pointer-events-none absolute bottom-4 left-6"><StatusBadge status="simulated" /></div>
        </div>

        <div className="mt-6 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          <AnimatePresence initial={false}>
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0 } }} transition={T.fast} className="flex items-start gap-6">
              <div className="shrink-0 text-center">
                <div className="num text-[44px] font-extrabold leading-none text-teal lg:text-[56px]">{String(i + 1).padStart(2, '0')}</div>
                <div className="mt-1 text-[16px] text-fog lg:text-[18px]">من 06</div>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <h3 className="text-[26px] font-extrabold lg:text-[36px]">{a.ar}</h3>
                  <span className="en text-[18px] text-fog lg:text-[22px]">{a.en}</span>
                </div>
                <p className="mt-1 text-[18px] leading-relaxed text-mist lg:text-[24px]">{a.role}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-[17px] lg:text-[22px]">
                  <span className="text-fog">{a.object}:</span><b className="text-snow">{a.outcome}</b>
                  {'human' in a && <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-0.5 text-[16px] font-bold text-amber-200 lg:text-[19px]">اعتماد بشري: {a.human}</span>}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="no-print flex flex-wrap gap-3">
              <button onClick={() => go(i - 1)} disabled={i === 0} className="btn-deck-ghost focus-ring px-6 py-3 text-[18px] lg:text-[21px]">→ السابق</button>
              <button onClick={() => go(i + 1)} disabled={i === n - 1} className="btn-deck focus-ring px-7 py-3 text-[18px] lg:text-[21px]">الخطوة التالية ←</button>
              <button onClick={() => { if (i === n - 1) setI(0); setPlaying((p) => !p); }} className="btn-deck-ghost focus-ring px-6 py-3 text-[18px] lg:text-[21px]">{playing ? '❚❚' : '▶ تشغيل'}</button>
            </div>
            <p className="text-[18px] font-bold text-teal-300 lg:text-[24px]">{AGENTS_SCENE.final}</p>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
