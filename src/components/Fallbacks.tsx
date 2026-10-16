import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AGENTS } from '../data/content';
import { EASE } from '../lib/motion';
import { useEnv } from '../lib/env';

/* Interactive 2D equivalents of the WebGL scenes (no WebGL / GPU blocked). Still a working website. */

function MiniCard({ title, line, tone = 'blue' }: { title: string; line: string; tone?: 'blue' | 'teal' | 'amber' }) {
  const c = tone === 'blue' ? 'text-rifd-600' : tone === 'teal' ? 'text-teal-700' : 'text-amber-700';
  return (
    <div className="card w-full p-6">
      <div className={`text-[18px] font-extrabold ${c}`}>{title}</div>
      <div className="mt-2 text-[22px] font-bold leading-snug text-ink">{line}</div>
    </div>
  );
}

export function HeroFallback() {
  return (
    <div className="flex h-full items-center justify-center lg:p-8">
      <div className="grid w-full max-w-[560px] gap-4">
        <MiniCard title="طلب دعم أكاديمي" line="«أحتاج شرحًا في الدوال العودية بمادة Python قبل الاختبار»" />
        <MiniCard title="ملف المهارة" line="سالم الشامسي · هوية بصرية · 14 مشروعًا موثّقًا" tone="teal" />
        <MiniCard title="فرصة مناسبة لك" line="مشروع مدفوع: هوية بصرية لفعالية جامعية" tone="amber" />
      </div>
    </div>
  );
}

export function FinaleFallback() {
  return (
    <div className="flex h-full items-center justify-center">
      <motion.img src="assets/brand/rifd-icon.png" alt="" className="h-48" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: EASE }} />
    </div>
  );
}

export function JourneyFallback({ active, onSelect }: { active: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex h-full items-center gap-3 overflow-x-auto px-2" data-scroll>
      {AGENTS.map((a, i) => (
        <button key={a.key} onClick={() => onSelect(i)} className={`focus-ring card min-w-[220px] flex-1 p-5 text-right transition ${i === active ? 'scale-105 ring-4 ring-teal' : i < active ? 'opacity-80' : 'opacity-50'}`}>
          <div className="text-[16px] font-bold text-rifd-600">{i < active ? '✓ ' : ''}{a.object}</div>
          <div className="mt-1 text-[18px] font-bold text-ink">{a.outcome}</div>
        </button>
      ))}
    </div>
  );
}

export function useCycle(n: number, ms = 2600) {
  const { reduced } = useEnv();
  const [i, setI] = useState(0);
  useEffect(() => { if (reduced) return; const t = setInterval(() => setI((x) => (x + 1) % n), ms); return () => clearInterval(t); }, [n, ms, reduced]);
  return i;
}
export { AnimatePresence };
