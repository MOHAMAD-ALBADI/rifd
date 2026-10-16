import { motion, useInView, animate } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useEnv } from '../lib/env';
import { rise, stagger, T, EASE } from '../lib/motion';
import { STATUS_LABEL, Status, EVENT_LOGO, PARTNER_LOGOS } from '../data/content';

export function useInitial(): false | 'hidden' {
  const { reduced } = useEnv();
  return reduced ? false : 'hidden';
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

/** Headline reveal: one controlled movement for the whole line (no per-word choreography). */
export function Headline({ text, accent, className = '', delay = 0.1, as = 'h2' }: { text: string; accent?: string; className?: string; delay?: number; as?: 'h1' | 'h2' }) {
  const initial = useInitial();
  const H = as === 'h1' ? motion.h1 : motion.h2;
  const parts = accent && text.includes(accent) ? text.split(accent) : null;
  return (
    <div className="overflow-hidden pb-2">
      <H className={className} initial={initial === false ? false : { y: '60%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: EASE, delay }}>
        {parts ? (<>{parts[0]}<span className="text-teal">{accent}</span>{parts[1]}</>) : text}
      </H>
    </div>
  );
}

export function Reveal({ children, delay = 0.25, className = '', y = 16 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const initial = useInitial();
  return (
    <motion.div className={className} initial={initial === false ? false : { opacity: 0, y }} animate={{ opacity: 1, y: 0 }} transition={{ ...T.base, delay }}>
      {children}
    </motion.div>
  );
}

const TONE: Record<Status, string> = {
  verified: 'border-teal/40 bg-teal/10 text-teal-300',
  achieved: 'border-teal/40 bg-teal/10 text-teal-300',
  proposed: 'border-rifd/40 bg-rifd/10 text-rifd-300',
  planned: 'border-rifd/40 bg-rifd/10 text-rifd-300',
  assumption: 'border-amber-300/40 bg-amber-300/10 text-amber-200',
  simulated: 'border-mist/30 bg-white/5 text-mist',
};

export function StatusBadge({ status, className = '' }: { status: Status; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-1 text-[16px] font-bold leading-7 lg:text-[19px] ${TONE[status]} ${className}`}>
      <span className="h-2 w-2 rounded-full bg-current" />
      {STATUS_LABEL[status]}
    </span>
  );
}

export function CountUp({ value, decimals = 0, className = '' }: { value: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const { reduced } = useEnv();
  const fmt = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  const [txt, setTxt] = useState(reduced ? fmt(value) : fmt(0));
  useEffect(() => {
    if (!inView || reduced) { setTxt(fmt(value)); return; }
    const c = animate(0, value, { duration: 1.4, ease: EASE, onUpdate: (v) => setTxt(fmt(v)) });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);
  return <span ref={ref} className={`num ${className}`}>{txt}</span>;
}

/** Original RIFD artwork (icon + wordmark) from the brand sheet — never redrawn. */
export function BrandLogo({ size = 48, variant = 'dark', className = '' }: { size?: number; variant?: 'light' | 'dark'; className?: string }) {
  return (
    <div dir="ltr" className={`flex items-center ${className}`} style={{ gap: size * 0.22 }}>
      <img src="assets/brand/rifd-icon.png" alt="" style={{ height: size }} draggable={false} />
      <img src={variant === 'light' ? 'assets/brand/rifd-wordmark-navy.png' : 'assets/brand/rifd-wordmark-white.png'} alt="رِفد | RIFD" style={{ height: size * 0.82 }} draggable={false} />
    </div>
  );
}

export function EventChip({ height = 40, className = '' }: { height?: number; className?: string }) {
  return (
    <div className={`inline-flex items-center rounded-2xl bg-white px-3 py-2 ${className}`}>
      <img src={EVENT_LOGO.src} alt={EVENT_LOGO.alt} style={{ height }} draggable={false} />
    </div>
  );
}

/** Official partner logos — untouched originals on a white band so their colours stay authentic. */
export function SponsorLogoStrip({ unit = 52, className = '', withEvent = true }: { unit?: number; className?: string; withEvent?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-[22px] bg-white px-8 py-4 ${className}`}>
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
    <motion.div initial={initial === false ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={T.base} className="flex flex-wrap items-center gap-4">
      <span className="label text-[15px] text-teal lg:text-[19px]">{no} · {en}</span>
      {official && <span className="text-[15px] text-fog lg:text-[19px]">محور رسمي: {official}</span>}
    </motion.div>
  );
}

export { EASE };
