import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROADMAP, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { StatusBadge, useInitial } from '../components/primitives';
import { T, EASE } from '../lib/motion';

export default function S10Roadmap({ bare = false }: { bare?: boolean }) {
  const [sel, setSel] = useState(0);
  const initial = useInitial();
  const ph = ROADMAP.phases[sel];
  return (
    <SlideFrame bare={bare} meta={SLIDES[7]} title={ROADMAP.headline} accent={['نتوسع.']}>
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-7">
        {/* timeline */}
        <div className="relative grid grid-cols-1 gap-3 lg:grid-cols-[1fr_repeat(4,1.2fr)] lg:gap-4">
          <div className="absolute inset-x-6 top-[30px] hidden h-px bg-white/10 lg:block" />
          <motion.div className="absolute right-6 top-[30px] hidden h-px bg-gradient-to-l from-teal to-rifd lg:block"
            initial={initial === false ? false : { width: 0 }} animate={{ width: `calc(${(sel + 1) / 4.6 * 100}%)` }} transition={T.slow} />

          {/* achieved */}
          <motion.div initial={initial === false ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...T.base, delay: 0.3 }} className="relative p-2">
            <div className="relative z-10 mb-3 grid h-[60px] w-[60px] place-items-center rounded-full border border-teal/50 bg-teal/15 text-2xl text-teal">✓</div>
            <div className="label text-teal">NOW · STARTUP WEEKEND</div>
            <ul className="mt-2 space-y-1 text-[17px] text-white/75">
              {ROADMAP.achieved.map((a) => <li key={a}>✓ {a}</li>)}
            </ul>
            <StatusBadge status="achieved" className="mt-2" />
          </motion.div>

          {ROADMAP.phases.map((p, i) => (
            <motion.button key={p.key} onClick={() => setSel(i)} onMouseEnter={() => setSel(i)}
              initial={initial === false ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.4 + i * 0.1 }}
              className={`focus-ring relative rounded-2xl p-2 text-right transition ${sel === i ? '' : 'opacity-70 hover:opacity-100'}`}>
              <div className={`relative z-10 mb-3 grid h-[60px] w-[60px] place-items-center rounded-full border text-xl font-bold transition ${sel === i ? 'border-transparent bg-white text-navy-950 shadow-[0_0_40px_rgba(20,209,200,0.45)]' : i < sel ? 'border-teal/40 bg-navy-700 text-teal' : 'border-white/20 bg-navy-900 text-white/60'}`}>
                <span className="num">{i + 1}</span>
              </div>
              <div className="label text-white/45">{p.en}</div>
              <div className="mt-1 text-2xl font-bold">{p.ar}</div>
              <div className="text-[17px] text-white/50">{p.window}</div>
            </motion.button>
          ))}
        </div>

        {/* phase detail */}
        <AnimatePresence mode="wait">
          <motion.div key={ph.key} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={T.fast} className="card-d grid grid-cols-1 gap-6 p-6 text-lg lg:grid-cols-[1.2fr_1fr_1fr_0.9fr] lg:p-8">
            <div>
              <div className="flex items-center gap-2"><span className="label text-teal">GOAL</span><StatusBadge status="planned" /></div>
              <p className="mt-2 text-xl font-bold leading-relaxed lg:text-[1.45rem]">{ph.goal}</p>
            </div>
            <div>
              <div className="label text-white/45">MILESTONES</div>
              <ul className="mt-2 space-y-2">{ph.milestones.map((m) => <li key={m} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />{m}</li>)}</ul>
            </div>
            <div>
              <div className="label text-white/45">SUCCESS METRICS</div>
              <ul className="mt-2 space-y-2">{ph.metrics.map((m) => <li key={m} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rifd" />{m}</li>)}</ul>
            </div>
            <div>
              <div className="label text-white/45">KEY RISKS</div>
              <ul className="mt-2 space-y-2">{ph.risks.map((m) => <li key={m} className="flex items-start gap-2 text-amber-100/90"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />{m}</li>)}</ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* phase gates */}
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
          <span className="label text-teal">PHASE GATES</span>
          <span className="text-white/75">لا ننتقل إلى المرحلة التالية إلا بعد تحقق مؤشرات المرحلة الحالية.</span>
          <span className="ms-auto flex items-center gap-2 text-[17px] text-white/50">
            <span className="h-2 w-2 rounded-full bg-teal" />منجز
            <span className="ms-3 h-2 w-2 rounded-full bg-rifd" />مخطط
          </span>
        </div>
      </div>
    </SlideFrame>
  );
}
