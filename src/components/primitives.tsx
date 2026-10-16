import { motion, useInView, animate } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useEnv } from '../lib/env';
import { rise, stagger, T, EASE } from '../lib/motion';
import { STATUS_LABEL, Status, EVENT_LOGO, PARTNER_LOGOS } from '../data/content';

/** `initial` value for motion trees: skip entrance animations in print mode. */
export function useInitial(): false | 'hidden' {
  const { mode } = useEnv();
  return mode === 'print' ? false : 'hidden';
}

export function Stagger({ children, className, step = 0.08, delay = 0.2, as = 'div' }: { children: ReactNode; className?: string; step?: number; delay?: number; as?: 'div' | 'ul' }) {
  const initial = useInitial();
  const C = as === 'ul' ? motion.ul : motion.div;
  return (
    <C className={className} variants={stagger(step, delay)} initial={initial} animate="show">
      {children}
    </C>
  );
}

export function Item({ children, className, variants = rise, ...rest }: { children: ReactNode; className?: string; variants?: typeof rise } & Record<string, unknown>) {
  return (
    <motion.div className={className} variants={variants} {...rest}>
      {children}
    </motion.div>
  );
}

/** Word-level kinetic heading. Arabic is split by WORD only so letter shaping never breaks. */
export function AnimatedHeading({ text, accent = [], className = '', delay = 0.05, as = 'h2' }: { text: string; accent?: string[]; className?: string; delay?: number; as?: 'h1' | 'h2' }) {
  const initial = useInitial();
  const words = text.split(' ');
  const H = as === 'h1' ? motion.h1 : motion.h2;
  return (
    <H className={className} initial={initial} animate="show" variants={stagger(0.055, delay)} aria-label={text}>
      {words.map((w, i) => {
        const isAccent = accent.some((a) => w.includes(a));
        return (
          <motion.span
            key={i}
            aria-hidden
            className={`inline-block ${isAccent ? 'text-grad' : ''}`}
            variants={{ hidden: { opacity: 0, y: '0.45em', filter: 'blur(8px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } } }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        );
      })}
    </H>
  );
}

export function StatusBadge({ status, light = false, className = '' }: { status: Status; light?: boolean; className?: string }) {
  const tone: Record<Status, string> = {
    verified: light ? 'bg-teal/10 text-teal-700 border-teal/30' : 'bg-teal/10 text-teal-300 border-teal/30',
    achieved: light ? 'bg-teal/10 text-teal-700 border-teal/30' : 'bg-teal/10 text-teal-300 border-teal/30',
    proposed: light ? 'bg-rifd/10 text-rifd-600 border-rifd/25' : 'bg-rifd/10 text-rifd-300 border-rifd/30',
    planned: light ? 'bg-rifd/10 text-rifd-600 border-rifd/25' : 'bg-rifd/10 text-rifd-300 border-rifd/30',
    assumption: light ? 'bg-amber-500/10 text-amber-700 border-amber-500/30' : 'bg-amber-300/10 text-amber-200 border-amber-300/30',
    demo: light ? 'bg-violet-500/10 text-violet-700 border-violet-500/25' : 'bg-violet-300/10 text-violet-200 border-violet-300/30',
    placeholder: light ? 'bg-ink/5 text-ink-soft border-ink/20 border-dashed' : 'bg-white/5 text-white/70 border-white/25 border-dashed',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[0.72rem] font-medium leading-5 ${tone[status]} ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {STATUS_LABEL[status].ar}
    </span>
  );
}

/** Animated number that counts up when visible. */
export function CountUp({ value, decimals = 0, className = '' }: { value: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const { mode, reduced } = useEnv();
  const fmt = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  const [txt, setTxt] = useState(mode === 'print' || reduced ? fmt(value) : fmt(0));
  useEffect(() => {
    if (!inView || mode === 'print' || reduced) { setTxt(fmt(value)); return; }
    const c = animate(0, value, { duration: 1.6, ease: EASE, onUpdate: (v) => setTxt(fmt(v)) });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);
  return <span ref={ref} className={`num ${className}`}>{txt}</span>;
}

export function BrandLogo({ variant = 'dark', size = 48, className = '' }: { variant?: 'dark' | 'light'; size?: number; className?: string }) {
  // Original artwork extracted from the RIFD brand sheet (icon + wordmark), never redrawn.
  return (
    <div dir="ltr" className={`flex items-center ${className}`} style={{ gap: size * 0.22 }}>
      <img src="assets/brand/rifd-icon.png" alt="" style={{ height: size }} draggable={false} />
      <img
        src={variant === 'dark' ? 'assets/brand/rifd-wordmark-white.png' : 'assets/brand/rifd-wordmark-navy.png'}
        alt="رِفد | RIFD"
        style={{ height: size * 0.82 }}
        draggable={false}
      />
    </div>
  );
}

export function EventChip({ height = 30, className = '' }: { height?: number; className?: string }) {
  return (
    <div className={`inline-flex items-center rounded-xl bg-white px-3 py-1.5 shadow-sm ${className}`}>
      <img src={EVENT_LOGO.src} alt={EVENT_LOGO.alt} style={{ height }} draggable={false} />
    </div>
  );
}

/** Official partner & sponsor logos — untouched originals on a light surface so their colours stay authentic. */
export function SponsorLogoStrip({ unit = 52, className = '', withEvent = true }: { unit?: number; className?: string; withEvent?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-7 gap-y-3 rounded-2xl bg-white px-6 py-3 ${className}`}>
      {withEvent && (
        <>
          <img src={EVENT_LOGO.src} alt={EVENT_LOGO.alt} style={{ height: unit * 1.15 }} draggable={false} />
          <span className="h-10 w-px bg-ink/10" />
        </>
      )}
      {PARTNER_LOGOS.map((l) => (
        <img key={l.src} src={l.src} alt={l.alt} style={{ height: unit * l.h }} className="object-contain" draggable={false} />
      ))}
    </div>
  );
}

export function Eyebrow({ no, en, light, official }: { no: string; en: string; light?: boolean; official?: string }) {
  const initial = useInitial();
  return (
    <motion.div initial={initial === false ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={T.base} className="flex items-center gap-3">
      <span className={`label ${light ? 'text-rifd-600' : 'text-teal'}`}>
        {no} — {en}
      </span>
      <span className={`h-px w-10 ${light ? 'bg-ink/15' : 'bg-white/20'}`} />
      {official && (
        <span className={`text-[0.72rem] ${light ? 'text-ink-soft' : 'text-white/55'}`}>محور رسمي: {official}</span>
      )}
    </motion.div>
  );
}
