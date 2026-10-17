import { ReactNode } from 'react';
import { SlideMeta } from '../data/content';
import { AnimatedHeading, Eyebrow, useInitial } from './primitives';
import { motion } from 'framer-motion';
import { T } from '../lib/motion';

/** Shared slide grid: eyebrow, one central message, then a single strong visual. */
export function SlideFrame({
  meta, title, accent, sub, children, className = '', headClass = '', titleClass = '', aside, bare = false,
}: {
  meta: SlideMeta; title: string; accent?: string[]; sub?: ReactNode; children: ReactNode; className?: string; headClass?: string; titleClass?: string; aside?: ReactNode; bare?: boolean;
}) {
  const light = meta.theme === 'light';
  const initial = useInitial();
  if (bare) return <div className="flex min-h-0 flex-1 flex-col">{children}</div>;
  return (
    <div className={`relative flex h-full w-full flex-col px-5 pb-10 pt-20 lg:px-[88px] lg:pb-[92px] lg:pt-[92px] ${light ? 'text-ink' : 'text-paper'} ${className}`}>
      {aside && <div className="no-print relative z-20 mb-4 lg:absolute lg:left-[140px] lg:top-[26px] lg:mb-0">{aside}</div>}
      <header className={`relative z-10 max-w-[1180px] ${headClass}`}>
        <Eyebrow no={meta.no} en={meta.en} light={light} official={meta.official} />
        <AnimatedHeading
          text={title}
          accent={accent}
          className={`mt-3 text-[1.75rem] font-extrabold leading-[1.3] lg:mt-4 lg:text-[3.1rem] lg:leading-[1.22] ${titleClass}`}
        />
        {sub && (
          <motion.p initial={initial === false ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ ...T.base, delay: 0.35 }} className={`mt-3 max-w-[1000px] text-[18px] lg:text-[22px] ${light ? 'text-ink-soft' : 'text-white/65'}`}>
            {sub}
          </motion.p>
        )}
      </header>
      <div className="relative z-10 mt-6 flex min-h-0 flex-1 flex-col lg:mt-8">{children}</div>
    </div>
  );
}

/** Persistent background: deep navy with subtle brand arcs, or soft paper. Deliberately static. */
export function Background({ theme }: { theme: 'dark' | 'light' }) {
  if (theme === 'light') {
    return (
      <div className="absolute inset-0 overflow-hidden bg-paper">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(1200px 600px at 85% -10%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(900px 500px at 0% 110%, rgba(20,209,200,0.10), transparent 60%)' }} />
        <Arcs stroke="rgba(11,31,59,0.07)" />
      </div>
    );
  }
  return (
    <div className="absolute inset-0 overflow-hidden bg-navy-950">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(1400px 800px at 80% -20%, #12305e 0%, transparent 60%), radial-gradient(1000px 700px at -10% 120%, rgba(20,209,200,0.13), transparent 60%), linear-gradient(180deg, #061329, #030b1a)' }} />
      <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'linear-gradient(rgba(147,187,251,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(147,187,251,0.05) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)' }} />
      <Arcs stroke="rgba(147,187,251,0.08)" />
    </div>
  );
}

/** Brand graphic motif: overlapping arcs (people · connections · pathways · opportunities). */
export function Arcs({ stroke, className = '' }: { stroke: string; className?: string }) {
  return (
    <svg className={`pointer-events-none absolute bottom-0 left-1/2 h-[70%] w-[130%] -translate-x-1/2 ${className}`} viewBox="0 0 1600 600" preserveAspectRatio="xMidYMax slice" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M ${120 + i * 260} 600 A ${420} ${470 - i * 12} 0 0 1 ${960 + i * 260} 600`} fill="none" stroke={stroke} strokeWidth={1.2} />
      ))}
    </svg>
  );
}
