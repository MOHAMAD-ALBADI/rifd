import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AGENTS, JOURNEY } from '../data/content';
import { ThreeScene } from '../three/ThreeScene';
import { AgentFallback } from './Fallbacks';
import { useEnv, useSlide } from '../lib/env';
import { T } from '../lib/motion';
import { StatusBadge } from './primitives';

/* Journey stepper bound to a 3D orchestration network: each step activates its agent. */
export function AgentNetwork() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const { active } = useSlide();
  const { mode } = useEnv();
  const n = JOURNEY.steps.length;
  const s = JOURNEY.steps[step];
  const agentIdx = s.agent;

  useEffect(() => {
    if (!playing || !active) return;
    const t = window.setTimeout(() => {
      if (step < n - 1) setStep(step + 1); else setPlaying(false);
    }, 2600);
    return () => window.clearTimeout(t);
  }, [playing, step, active, n]);

  const go = (i: number) => { setPlaying(false); setStep(Math.max(0, Math.min(n - 1, i))); };
  const selectAgent = (i: number) => { const k = JOURNEY.steps.findIndex((x) => x.agent === i); if (k >= 0) go(k); };

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
      {/* journey (RTL start) */}
      <div className="flex min-h-0 flex-col">
        <div className="mb-3 flex items-center justify-between text-[17px] text-white/55">
          <span>{JOURNEY.persona}</span>
          <span className="num">{String(step + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
        </div>

        {/* timeline */}
        <div className="relative mb-5 flex items-center justify-between">
          <div className="absolute inset-x-3 top-1/2 h-px -translate-y-1/2 bg-white/10" />
          <motion.div className="absolute right-3 top-1/2 h-px -translate-y-1/2 bg-teal" animate={{ width: `calc(${(step / (n - 1)) * 100}% - ${(step / (n - 1)) * 24}px)` }} transition={T.base} />
          {JOURNEY.steps.map((x, i) => (
            <button key={i} onClick={() => go(i)} aria-label={x.title} className="focus-ring relative z-10 grid h-8 w-8 place-items-center rounded-full border text-[15px] font-bold transition"
              style={{ background: i <= step ? AGENTS[x.agent].color : '#0B1F3B', borderColor: i <= step ? 'transparent' : 'rgba(255,255,255,.2)', color: i <= step ? '#030B1A' : 'rgba(255,255,255,.6)' }}>
              <span className="num">{i + 1}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={T.fast} className="card-d relative flex-1 overflow-hidden p-6 lg:p-7">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full opacity-25 blur-3xl" style={{ background: AGENTS[agentIdx].color }} />
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: AGENTS[agentIdx].color }} />
              <span className="en text-[17px] font-semibold" style={{ color: AGENTS[agentIdx].color }}>{AGENTS[agentIdx].en}</span>
              <span className="text-[17px] text-white/50">· {AGENTS[agentIdx].ar}</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold lg:text-[2rem]">{s.title}</h3>
            <p className="mt-2 text-lg leading-relaxed text-white/70">{s.detail}</p>
            <div className="mt-5 rounded-xl border border-white/10 bg-navy-950/60 p-4">
              <div className="label mb-1.5 text-white/40">AGENT OUTPUT</div>
              <div className="text-lg font-medium text-teal-300">{s.output}</div>
            </div>
            {s.human && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[17px] text-amber-200">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
                إنسان في الحلقة: {s.human}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="no-print mt-4 flex items-center gap-2">
          <button onClick={() => go(step - 1)} disabled={step === 0} className="focus-ring rounded-full border border-white/15 px-4 py-2 text-[17px] text-white/80 transition hover:border-white/40 disabled:opacity-30">→ السابق</button>
          <button onClick={() => go(step + 1)} disabled={step === n - 1} className="focus-ring rounded-full bg-teal px-5 py-2 text-[17px] font-bold text-navy-950 transition hover:bg-teal-300 disabled:opacity-40">التالي ←</button>
          <button onClick={() => { if (step === n - 1) setStep(0); setPlaying((p) => !p); }} className="focus-ring ms-auto rounded-full border border-teal/40 px-4 py-2 text-[17px] text-teal-300 transition hover:bg-teal/10">
            {playing ? '❚❚ إيقاف' : '▶ تشغيل الرحلة'}
          </button>
        </div>
      </div>

      {/* 3D orchestration */}
      <div className="flex min-h-0 flex-col">
        <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
          <ThreeScene scene="agents" props={{ active: agentIdx, onSelect: selectAgent }} fallback={<AgentFallback active={agentIdx} onSelect={selectAgent} />} />
          <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-2">
            <span className="label text-white/45">ONE ORCHESTRATED SYSTEM</span>
          </div>
          <div className="pointer-events-none absolute bottom-3 left-4 text-[15px] text-white/40">{mode === 'print' ? '' : 'اضغط على أي وكيل'}</div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-3">
          {AGENTS.map((a, i) => (
            <button key={a.key} onClick={() => selectAgent(i)} className={`focus-ring flex items-center gap-2 rounded-xl border px-3 py-2 text-right transition ${i === agentIdx ? 'border-white/30 bg-white/[0.07]' : 'border-white/10 hover:border-white/20'}`}>
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: i <= agentIdx ? a.color : 'rgba(255,255,255,.2)' }} />
              <span className="min-w-0">
                <span className="block text-[17px] font-bold leading-tight">{a.ar}</span>
                <span className="block truncate text-[15px] text-white/50">{a.role}</span>
              </span>
            </button>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2 text-[15px] text-white/45">
          <StatusBadge status="proposed" />
          القرارات المالية والاعتماد تتطلب تفويضًا بشريًا دائمًا.
        </div>
      </div>
    </div>
  );
}
