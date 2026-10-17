import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS } from '../data/content';
import { T, EASE } from '../lib/motion';
import { StatusBadge, useInitial } from './primitives';
import { useEnv } from '../lib/env';

/* Full nine-block Business Model Canvas (RTL-mirrored). Selecting a block reveals its details. */
const GRID = `
  "kp ka vp cr cs"
  "kp kr vp ch cs"
  "co co co rs rs"
`;

export function BusinessModelCanvas() {
  const [sel, setSel] = useState('revenue');
  const initial = useInitial();
  const { mode } = useEnv();
  const flow = mode === 'flow';
  const block = BUSINESS.canvas.find((b) => b.key === sel)!;
  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[1fr_1.45fr] lg:gap-8">
      {/* who pays (RTL start) */}
      <div className="flex min-h-0 flex-col">
        <div className="mb-3 flex items-center justify-between">
          <span className="label text-white/45">WHO PAYS · AND WHY</span>
          <StatusBadge status="assumption" />
        </div>
        <div className="flex flex-1 flex-col gap-2.5">
          {BUSINESS.revenue.map((r, i) => (
            <motion.div key={r.key} initial={initial === false ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: EASE, delay: 0.45 + i * 0.08 }}
              className="card-d flex items-center gap-4 px-4 py-3">
              <span className={`en w-12 shrink-0 rounded-md py-0.5 text-center text-[15px] font-bold ${r.type === 'B2C' ? 'bg-teal/15 text-teal-300' : 'bg-rifd/15 text-rifd-300'}`}>{r.type}</span>
              <div className="min-w-0 flex-1">
                <div className="font-bold">{r.who} <span className="font-normal text-white/60">· {r.what}</span></div>
                <div className="truncate text-[17px] text-white/45">{r.basis}</div>
              </div>
              <span className="num shrink-0 text-xl font-bold text-teal-300">{r.price}</span>
            </motion.div>
          ))}
        </div>
        <p className="mt-3 text-[15px] text-white/40">أسعار مقترحة لأغراض العرض فقط — تُختبر في مرحلة التجربة. لا توجد إيرادات أو عقود حتى الآن.</p>
      </div>

      {/* canvas */}
      <div className="flex min-h-0 flex-col">
        <div className={`grid flex-1 gap-2 ${flow ? 'grid-cols-2' : 'min-h-[360px]'}`} style={flow ? undefined : { gridTemplateAreas: GRID, gridTemplateColumns: 'repeat(5, minmax(0,1fr))', gridTemplateRows: '1fr 1fr 0.75fr' }}>
          {BUSINESS.canvas.map((b, i) => {
            const on = sel === b.key;
            return (
              <motion.button key={b.key} onClick={() => setSel(b.key)} onMouseEnter={() => setSel(b.key)}
                initial={initial === false ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: EASE, delay: 0.3 + i * 0.04 }}
                className={`focus-ring relative overflow-hidden rounded-xl border p-3 text-right transition-colors ${on ? 'border-teal/60 bg-teal/[0.10]' : 'border-white/10 bg-white/[0.025] hover:border-white/25'}`}
                style={flow ? undefined : { gridArea: b.area }}>
                <div className={`en text-[13px] font-bold tracking-[0.16em] ${on ? 'text-teal' : 'text-white/40'}`}>{b.en}</div>
                <div className="mt-0.5 text-[17px] font-bold leading-tight">{b.ar}</div>
                <ul className="mt-1.5 space-y-0.5 text-[16px] leading-snug text-white/70">
                  {b.items.slice(0, b.area === 'co' || b.area === 'rs' ? 3 : b.area === 'vp' || b.area === 'cs' ? 4 : 2).map((it) => <li key={it} className={b.area === 'co' || b.area === 'rs' ? 'inline-block me-3' : ''}>· {it}</li>)}
                </ul>
              </motion.button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={block.key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={T.fast} className="mt-3 flex flex-wrap items-center gap-2 rounded-xl border border-teal/25 bg-navy-900/70 px-4 py-2.5">
            <span className="font-bold text-teal-300">{block.ar}:</span>
            {block.items.map((it) => <span key={it} className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[17px] text-white/80">{it}</span>)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
