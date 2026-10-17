import { useState } from 'react';
import { motion } from 'framer-motion';
import { BUSINESS } from '../data/content';
import { EASE } from '../lib/motion';
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
    return (
    <div className="flex min-h-0 flex-1 flex-col justify-between gap-4">
      {/* canvas — all nine blocks, every item visible */}
      <div className={`grid gap-2 ${flow ? 'grid-cols-2' : ''}`} style={flow ? undefined : { gridTemplateAreas: GRID, gridTemplateColumns: 'repeat(5, minmax(0,1fr))', gridTemplateRows: 'auto auto auto' }}>
        {BUSINESS.canvas.map((b, i) => {
          const on = sel === b.key;
          const wide = b.area === 'co' || b.area === 'rs';
          return (
            <motion.button key={b.key} onClick={() => setSel(b.key)} onMouseEnter={() => setSel(b.key)}
              initial={initial === false ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: EASE, delay: 0.3 + i * 0.04 }}
              className={`focus-ring relative flex flex-col overflow-hidden rounded-xl border px-4 py-2.5 text-right transition-colors ${on ? 'border-teal/60 bg-teal/[0.10]' : 'border-white/10 bg-white/[0.025] hover:border-white/25'}`}
              style={flow ? undefined : { gridArea: b.area }}>
              <span className={`text-[19px] font-bold leading-tight ${on ? 'text-teal-300' : ''}`} title={b.en}>{b.ar}</span>
              <ul className={`mt-1 text-[16px] leading-snug text-white/75 ${wide ? 'flex flex-wrap gap-x-5 gap-y-0.5' : 'space-y-0.5'}`}>
                {b.items.map((it) => <li key={it} className="flex items-start gap-2"><span className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${on ? 'bg-teal' : 'bg-white/35'}`} />{it}</li>)}
              </ul>
            </motion.button>
          );
        })}
      </div>

      {/* who pays — pricing assumptions per revenue stream */}
      <div>
        <div className="mb-2 flex items-center gap-3">
          <span className="text-[17px] font-bold text-white/70">من يدفع؟</span>
          <StatusBadge status="assumption" />
          <span className="text-[15px] text-white/40">أسعار مقترحة تُختبر في التجربة — لا توجد إيرادات أو عقود حتى الآن.</span>
        </div>
        <div className={`grid gap-2 ${flow ? 'grid-cols-1' : 'grid-cols-5'}`}>
          {BUSINESS.revenue.map((r, i) => (
            <motion.div key={r.key} initial={initial === false ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE, delay: 0.55 + i * 0.06 }}
              className="card-d px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className={`en rounded-md px-1.5 py-0.5 text-[12px] font-bold ${r.type === 'B2C' ? 'bg-teal/15 text-teal-300' : 'bg-rifd/15 text-rifd-300'}`}>{r.type}</span>
                <span className="text-[17px] font-bold">{r.who}</span>
                <span className="num ms-auto text-[19px] font-bold text-teal-300">{r.price}</span>
              </div>
              <div className="mt-1 text-[15px] leading-snug text-white/60">{r.what} — {r.basis}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
