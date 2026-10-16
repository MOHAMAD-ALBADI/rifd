import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SlideMeta } from '../data/content';
import { AnimatedHeading, Eyebrow, useInitial } from './primitives';
import { T } from '../lib/motion';

/**
 * Slide grid on the 1920×1080 stage: eyebrow → one headline → one main visual.
 * Mobile (flow mode) uses the base classes; the stage uses lg: classes.
 */
export function SlideFrame({ meta, title, accent, sub, children, titleClass = '', aside }: {
  meta: SlideMeta; title: string; accent?: string[]; sub?: ReactNode; children: ReactNode; titleClass?: string; aside?: ReactNode;
}) {
  const initial = useInitial();
  return (
    <div className="relative flex h-full w-full flex-col px-5 pb-12 pt-20 text-ink lg:px-[120px] lg:pb-[116px] lg:pt-[118px]">
      <header className="relative z-10 flex items-end justify-between gap-8">
        <div className="max-w-[1320px]">
          <Eyebrow no={meta.no} en={meta.en} official={meta.official} />
          <AnimatedHeading text={title} accent={accent} className={`mt-3 text-[30px] font-extrabold leading-[1.3] lg:mt-4 lg:text-[58px] lg:leading-[1.2] ${titleClass}`} />
          {sub && (
            <motion.p initial={initial === false ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ ...T.base, delay: 0.3 }} className="mt-3 text-[18px] text-ink-2 lg:mt-4 lg:text-[26px]">
              {sub}
            </motion.p>
          )}
        </div>
        {aside && <div className="hidden shrink-0 lg:block">{aside}</div>}
      </header>
      <div className="relative z-10 mt-6 flex min-h-0 flex-1 flex-col lg:mt-10">{children}</div>
    </div>
  );
}

/** One quiet background for the whole deck: soft white with a faint brand-blue wash. */
export function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-canvas">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(1400px 700px at 100% -10%, rgba(59,130,246,0.09), transparent 60%), radial-gradient(1000px 600px at -10% 110%, rgba(20,209,200,0.08), transparent 60%)' }} />
    </div>
  );
}
