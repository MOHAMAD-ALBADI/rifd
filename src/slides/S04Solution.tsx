import { motion } from 'framer-motion';
import { SLIDES, SOLUTION } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { EcosystemVisualization } from '../components/EcosystemVisualization';
import { useInitial } from '../components/primitives';
import { EASE } from '../lib/motion';

export default function S04Solution() {
  const initial = useInitial();
  return (
    <SlideFrame meta={SLIDES[3]} title={SOLUTION.headline} accent={['منظومة', 'واحدة']}>
      {/* value chain — reads right to left */}
      <div className="mb-5 flex flex-wrap items-center gap-2 lg:mb-6 lg:flex-nowrap lg:gap-3">
        {SOLUTION.chain.map((c, i) => (
          <motion.div
            key={c}
            initial={initial === false ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.45 + i * 0.1 }}
            className="flex items-center gap-2 lg:gap-3"
          >
            <span className={`rounded-full border px-3.5 py-1.5 text-sm font-medium lg:px-4 lg:text-base ${i === SOLUTION.chain.length - 1 ? 'border-teal/50 bg-teal/15 text-teal-300' : 'border-white/15 bg-white/[0.03] text-white/80'}`}>
              {c}
            </span>
            {i < SOLUTION.chain.length - 1 && <span className="text-teal/60">←</span>}
          </motion.div>
        ))}
      </div>
      <EcosystemVisualization />
    </SlideFrame>
  );
}
