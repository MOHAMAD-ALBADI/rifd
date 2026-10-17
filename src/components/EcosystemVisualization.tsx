import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AI_LINE, SOLUTION } from '../data/content';
import { useEnv, useSlide } from '../lib/env';
import { T } from '../lib/motion';
import { useInitial, StatusBadge } from './primitives';

/* Four product areas orbit the RIFD core. Auto-tours every few seconds until the presenter takes over. */

const POS = [
  { x: 78, y: 22 }, // top-right  (RTL first)
  { x: 22, y: 22 }, // top-left
  { x: 78, y: 78 }, // bottom-right
  { x: 22, y: 78 }, // bottom-left
];

const ICONS: Record<string, JSX.Element> = {
  support: <path d="M4 19V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 3Zm5-9h6M9 13h4" />,
  market: <path d="M3 9l1.5-5h15L21 9M3 9h18M3 9v10h18V9M9 13h6" />,
  learn: <path d="M12 4 2 9l10 5 10-5-10-5Zm-6 7.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />,
  inst: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
};

export function Icon({ k, className = '' }: { k: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {ICONS[k]}
    </svg>
  );
}

export function EcosystemVisualization() {
  const [sel, setSel] = useState(0);
  const [auto, setAuto] = useState(true);
  const { active } = useSlide();
  const { mode, reduced } = useEnv();
  const initial = useInitial();
  const timer = useRef<number>();

  useEffect(() => {
    if (!auto || !active || mode === 'print' || reduced) return;
    timer.current = window.setInterval(() => setSel((s) => (s + 1) % 4), 3600);
    return () => window.clearInterval(timer.current);
  }, [auto, active, mode, reduced]);

  const pick = (i: number) => { setAuto(false); setSel(i); };
  const area = SOLUTION.areas[sel];

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
      {/* detail panel (RTL start) */}
      <div className="flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div key={area.key} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={T.fast} className="card-d relative overflow-hidden p-6 lg:p-8">
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full opacity-25 blur-3xl" style={{ background: area.color }} />
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: `${area.color}22`, color: area.color }}>
                <Icon k={area.key} className="h-6 w-6" />
              </span>
              <div>
                <div className="label" style={{ color: area.color }}>{area.en}</div>
                <div className="text-2xl font-bold lg:text-[2rem]">{area.title}</div>
              </div>
            </div>
            <p className="mt-4 text-lg text-white/70">{area.line}</p>
            <ul className="mt-5 space-y-3">
              {area.points.map((p, i) => (
                <motion.li key={p} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ ...T.fast, delay: 0.08 * i + 0.1 }} className="flex items-center gap-3 text-lg">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: area.color }} />
                  {p}
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between">
              <StatusBadge status="proposed" />
              <div className="flex gap-1.5">
                {SOLUTION.areas.map((a, i) => (
                  <button key={a.key} aria-label={a.title} onClick={() => pick(i)} className={`focus-ring h-1.5 rounded-full transition-all ${i === sel ? 'w-8 bg-teal' : 'w-3 bg-white/25 hover:bg-white/50'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 rounded-2xl border border-teal/25 bg-teal/[0.07] p-4"><div className="text-[17px] font-extrabold text-teal-300">كيف يدخل الذكاء الاصطناعي؟</div><p className="mt-1 text-[17px] leading-relaxed text-white/80">{AI_LINE}</p><p className="mt-2 text-[15px] text-white/55">{SOLUTION.integrity}</p></div>
      </div>

      {/* mobile: simple 2×2 selector */}
      <div className="grid grid-cols-2 gap-2 lg:hidden">
        {SOLUTION.areas.map((a, i) => (
          <button key={a.key} onClick={() => pick(i)} className={`focus-ring flex items-center gap-2 rounded-xl border p-3 text-right ${i === sel ? 'bg-navy-700/80' : 'border-white/10 bg-navy-900/70'}`} style={{ borderColor: i === sel ? `${a.color}88` : undefined }}>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg" style={{ background: `${a.color}22`, color: a.color }}><Icon k={a.key} className="h-4 w-4" /></span>
            <span className="text-[17px] font-bold leading-tight">{a.title}</span>
          </button>
        ))}
      </div>

      {/* orbit diagram */}
      <div className="relative hidden min-h-[380px] lg:block" style={{ perspective: 1400 }}>
        <motion.div
          initial={initial === false ? false : { opacity: 0, rotateX: 30, scale: 0.9 }}
          animate={{ opacity: 1, rotateX: 12, scale: 1 }}
          transition={{ ...T.slow, delay: 0.3 }}
          className="absolute inset-0"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            {[18, 30, 42].map((r) => (
              <ellipse key={r} cx="50" cy="50" rx={r} ry={r * 0.9} fill="none" stroke="rgba(147,187,251,0.10)" strokeWidth="0.15" />
            ))}
            {POS.map((p, i) => (
              <g key={i}>
                <path d={`M50 50 Q ${(50 + p.x) / 2} ${p.y > 50 ? 50 : 50} ${p.x} ${p.y}`} fill="none" stroke={i === sel ? SOLUTION.areas[i].color : 'rgba(147,187,251,0.25)'} strokeWidth={i === sel ? 0.45 : 0.2} vectorEffect="non-scaling-stroke" style={{ transition: 'stroke .4s' }} />
                {i === sel && <path d={`M50 50 Q ${(50 + p.x) / 2} 50 ${p.x} ${p.y}`} fill="none" stroke="#fff" strokeWidth="2" className="flow-dash" vectorEffect="non-scaling-stroke" opacity="0.8" />}
              </g>
            ))}
          </svg>

          {/* core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative grid h-[150px] w-[150px] place-items-center rounded-full border border-teal/30 bg-navy-900/90 shadow-[0_0_80px_rgba(20,209,200,0.25)] lg:h-[176px] lg:w-[176px]">
              <span className="pulse-ring absolute inset-0 rounded-full border border-teal/40" />
              <img src="assets/brand/rifd-icon.png" alt="" className="h-[74px] lg:h-[88px]" />
              <span className="absolute -bottom-8 whitespace-nowrap text-[17px] font-bold text-teal">نواة رِفد الذكية</span>
            </div>
          </div>

          {/* area nodes */}
          {SOLUTION.areas.map((a, i) => (
            <button
              key={a.key}
              onClick={() => pick(i)}
              onMouseEnter={() => pick(i)}
              className="focus-ring absolute w-[44%] max-w-[270px] -translate-x-1/2 -translate-y-1/2 text-right"
              style={{ left: `${POS[i].x}%`, top: `${POS[i].y}%` }}
            >
              <motion.div
                animate={{ scale: i === sel ? 1.06 : 1, opacity: i === sel ? 1 : 0.72 }}
                transition={T.spring}
                className={`rounded-2xl border p-3.5 backdrop-blur lg:p-4 ${i === sel ? 'bg-navy-700/80' : 'border-white/10 bg-navy-900/70'}`}
                style={{ borderColor: i === sel ? `${a.color}88` : undefined, boxShadow: i === sel ? `0 18px 50px -20px ${a.color}` : undefined }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl" style={{ background: `${a.color}22`, color: a.color }}>
                    <Icon k={a.key} className="h-5 w-5" />
                  </span>
                  <span className="text-base font-bold leading-tight lg:text-lg">{a.title}</span>
                </div>
              </motion.div>
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
