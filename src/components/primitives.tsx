import { motion, useInView, animate } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useEnv } from '../lib/env';
import { rise, stagger, T, EASE } from '../lib/motion';
import { STATUS_LABEL, Status, EVENT_LOGO, PARTNER_LOGOS, JOURNEY_STEPS } from '../data/content';

/** `initial` for motion trees: skip entrance animations in print mode. */
export function useInitial(): false | 'hidden' {
  const { mode } = useEnv();
  return mode === 'print' ? false : 'hidden';
}

export function Stagger({ children, className, step = 0.08, delay = 0.2 }: { children: ReactNode; className?: string; step?: number; delay?: number }) {
  const initial = useInitial();
  return (
    <motion.div className={className} variants={stagger(step, delay)} initial={initial} animate="show">
      {children}
    </motion.div>
  );
}

export function Item({ children, className, ...rest }: { children: ReactNode; className?: string } & Record<string, unknown>) {
  return (
    <motion.div className={className} variants={rise} {...rest}>
      {children}
    </motion.div>
  );
}

/** Word-level kinetic heading — Arabic is split by word only, so letter shaping never breaks. */
export function AnimatedHeading({ text, accent = [], className = '', delay = 0.05, as = 'h2' }: { text: string; accent?: string[]; className?: string; delay?: number; as?: 'h1' | 'h2' }) {
  const initial = useInitial();
  const words = text.split(' ');
  const H = as === 'h1' ? motion.h1 : motion.h2;
  return (
    <H className={className} initial={initial} animate="show" variants={stagger(0.05, delay)} aria-label={text}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={`inline-block ${accent.some((a) => w.includes(a)) ? 'accent-text' : ''}`}
          variants={{ hidden: { opacity: 0, y: '0.4em' }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
        >
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </H>
  );
}

const TONE: Record<Status, string> = {
  verified: 'bg-teal-50 text-teal-700 border-teal/40',
  achieved: 'bg-teal-50 text-teal-700 border-teal/40',
  proposed: 'bg-rifd-50 text-rifd-700 border-rifd-200',
  planned: 'bg-rifd-50 text-rifd-700 border-rifd-200',
  assumption: 'bg-amber-50 text-amber-700 border-amber-600/25',
  demo: 'bg-surface-2 text-ink-2 border-line-strong',
};

export function StatusBadge({ status, className = '' }: { status: Status; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3.5 py-1 text-[15px] font-bold leading-6 lg:text-[18px] ${TONE[status]} ${className}`}>
      <span className="h-2 w-2 rounded-full bg-current opacity-80" />
      {STATUS_LABEL[status]}
    </span>
  );
}

export function CountUp({ value, decimals = 0, className = '' }: { value: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const { mode, reduced } = useEnv();
  const fmt = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  const [txt, setTxt] = useState(mode === 'print' || reduced ? fmt(value) : fmt(0));
  useEffect(() => {
    if (!inView || mode === 'print' || reduced) { setTxt(fmt(value)); return; }
    const c = animate(0, value, { duration: 1.4, ease: EASE, onUpdate: (v) => setTxt(fmt(v)) });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);
  return <span ref={ref} className={`num ${className}`}>{txt}</span>;
}

/** Original RIFD artwork (icon + wordmark) from the brand sheet — never redrawn. */
export function BrandLogo({ size = 48, variant = 'light', className = '' }: { size?: number; variant?: 'light' | 'dark'; className?: string }) {
  return (
    <div dir="ltr" className={`flex items-center ${className}`} style={{ gap: size * 0.22 }}>
      <img src="assets/brand/rifd-icon.png" alt="" style={{ height: size }} draggable={false} />
      <img src={variant === 'light' ? 'assets/brand/rifd-wordmark-navy.png' : 'assets/brand/rifd-wordmark-white.png'} alt="رِفد | RIFD" style={{ height: size * 0.82 }} draggable={false} />
    </div>
  );
}

export function EventChip({ height = 40, className = '' }: { height?: number; className?: string }) {
  return (
    <div className={`inline-flex items-center rounded-2xl border border-line bg-white px-3 py-2 ${className}`}>
      <img src={EVENT_LOGO.src} alt={EVENT_LOGO.alt} style={{ height }} draggable={false} />
    </div>
  );
}

/** Official partner logos — untouched originals on white. */
export function SponsorLogoStrip({ unit = 52, className = '', withEvent = true }: { unit?: number; className?: string; withEvent?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-[24px] border border-line bg-white px-8 py-4 ${className}`}>
      {withEvent && (
        <>
          <img src={EVENT_LOGO.src} alt={EVENT_LOGO.alt} style={{ height: unit * 1.15 }} draggable={false} />
          <span className="h-10 w-px bg-line" />
        </>
      )}
      {PARTNER_LOGOS.map((l) => (
        <img key={l.src} src={l.src} alt={l.alt} style={{ height: unit * l.h }} className="object-contain" draggable={false} />
      ))}
    </div>
  );
}

export function Eyebrow({ no, en, official }: { no: string; en: string; official?: string }) {
  const initial = useInitial();
  return (
    <motion.div initial={initial === false ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={T.base} className="flex flex-wrap items-center gap-4">
      <span className="label text-[14px] text-rifd-600 lg:text-[18px]">{no} · {en}</span>
      {official && <span className="rounded-full bg-surface-2 px-3 py-0.5 text-[14px] text-ink-3 lg:text-[18px]">محور رسمي: {official}</span>}
    </motion.div>
  );
}

/** The journey rail: the deck's recurring visual language. `active` keys are highlighted. */
export function JourneyRail({ active = [], current, size = 'md', onPick, className = '' }: { active?: readonly string[]; current?: string; size?: 'sm' | 'md' | 'lg'; onPick?: (k: string) => void; className?: string }) {
  const initial = useInitial();
  const pad = size === 'lg' ? 'px-6 py-3 text-[18px] lg:text-[26px]' : size === 'md' ? 'px-5 py-2.5 text-[16px] lg:text-[22px]' : 'px-4 py-2 text-[14px] lg:text-[18px]';
  return (
    <div className={`flex flex-wrap items-center gap-2 lg:flex-nowrap lg:gap-3 ${className}`}>
      {JOURNEY_STEPS.map((s, i) => {
        const on = active.includes(s.key);
        const cur = current === s.key;
        const El = onPick ? motion.button : motion.div;
        return (
          <div key={s.key} className="flex items-center gap-2 lg:gap-3">
            <El
              onClick={onPick ? () => onPick(s.key) : undefined}
              initial={initial === false ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.2 + i * 0.07 }}
              className={`focus-ring rounded-full border font-bold transition-colors duration-300 ${pad} ${cur ? 'border-rifd-600 bg-rifd-600 text-white shadow-lift' : on ? 'border-rifd-200 bg-rifd-50 text-rifd-700' : 'border-line bg-white text-ink-3'}`}
            >
              {s.ar}
            </El>
            {i < JOURNEY_STEPS.length - 1 && <span className={`text-[18px] lg:text-[24px] ${on && active.includes(JOURNEY_STEPS[i + 1].key) ? 'text-rifd-500' : 'text-line-strong'}`}>←</span>}
          </div>
        );
      })}
    </div>
  );
}
