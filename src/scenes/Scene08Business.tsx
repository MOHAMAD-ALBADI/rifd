import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { Reveal, StatusBadge } from '../components/primitives';
import { T } from '../lib/motion';

/* Primary view: for each revenue stream — who pays → what they receive → how they pay. Canvas is secondary. */
export default function Scene08Business() {
  const [sel, setSel] = useState(0);
  const [canvas, setCanvas] = useState(false);
  const st = BUSINESS.streams[sel];

  return (
    <>
      <SlideFrame meta={SLIDES[7]} title={BUSINESS.headline} accent="ولماذا؟" sub={BUSINESS.explanation} titleClass="lg:!text-[60px]">
        <div className="flex flex-1 flex-col">
          {/* stream selector */}
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-5 lg:gap-3">
            {BUSINESS.streams.map((s, i) => (
              <button key={s.no} onClick={() => setSel(i)}
                className={`focus-ring rounded-[20px] border px-4 py-4 text-right transition-colors ${i === sel ? 'border-teal bg-teal/[0.12]' : 'border-white/10 hover:border-white/30'}`}>
                <div className={`num text-[17px] font-bold lg:text-[20px] ${i === sel ? 'text-teal' : 'text-fog'}`}>{s.no}</div>
                <div className={`mt-1 text-[18px] font-extrabold leading-tight lg:text-[23px] ${i === sel ? 'text-snow' : 'text-mist'}`}>{s.title}</div>
              </button>
            ))}
          </div>

          {/* customer → value → payment */}
          <AnimatePresence initial={false}>
            <motion.div key={sel} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0 } }} transition={T.base}
              className="mt-6 grid flex-1 grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_auto_1.2fr_auto_1fr] lg:gap-5">
              {[
                { k: 'العميل', v: st.customer, cls: 'panel' },
                null,
                { k: 'القيمة التي يحصل عليها', v: st.value, cls: 'panel !border-teal/30' },
                null,
                { k: 'آلية الدفع', v: st.payment, cls: 'rounded-[28px] bg-snow text-night' },
              ].map((b, i) => b === null ? (
                <div key={i} className="hidden items-center justify-center text-[44px] text-teal lg:flex">←</div>
              ) : (
                <div key={i} className={`flex flex-col justify-center p-6 lg:p-8 ${b.cls}`}>
                  <div className={`text-[17px] font-bold lg:text-[21px] ${i === 4 ? 'text-ink-3' : 'text-fog'}`}>{b.k}</div>
                  <div className="mt-3 text-[24px] font-extrabold leading-snug lg:text-[34px]">{b.v}</div>
                  {i === 4 && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-[16px] font-bold text-amber-700 lg:text-[19px]">مقترح: {st.assumption}</span>
                      {st.recurring && <span className="rounded-full bg-teal-50 px-3 py-1 text-[16px] font-bold text-teal-700 lg:text-[19px]">إيراد متكرر</span>}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-[16px] lg:text-[19px]">
              <span className="font-bold text-fog">التكاليف الرئيسية:</span>
              {BUSINESS.costs.map((c) => <span key={c} className="rounded-full border border-white/12 px-3 py-1 text-mist">{c}</span>)}
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status="assumption" />
              <button onClick={() => setCanvas(true)} className="no-print btn-deck-ghost focus-ring px-6 py-3 text-[18px] lg:text-[20px]">نموذج العمل الكامل ←</button>
            </div>
          </div>
          <Reveal delay={0.8} className="mt-5 text-[20px] font-extrabold text-snow lg:text-[28px]">{BUSINESS.message}</Reveal>
        </div>
      </SlideFrame>

      <AnimatePresence>
        {canvas && (
          <motion.div className="absolute inset-0 z-40 flex items-center justify-center bg-night-deep/75 p-4 backdrop-blur-sm lg:p-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0 } }} transition={T.fast} onClick={() => setCanvas(false)}>
            <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} transition={T.base} onClick={(e) => e.stopPropagation()}
              className="scroll-thin max-h-full w-full max-w-[1640px] overflow-y-auto rounded-[30px] border border-white/10 bg-night-surface p-6 shadow-app lg:p-10" data-scroll>
              <div className="flex items-center justify-between">
                <h3 className="text-[28px] font-extrabold lg:text-[40px]">نموذج العمل التجاري</h3>
                <button onClick={() => setCanvas(false)} className="btn-deck-ghost focus-ring px-6 py-2.5 text-[18px] lg:text-[20px]">إغلاق</button>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {BUSINESS.canvas.map((b) => (
                  <div key={b.ar} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-[21px] font-extrabold text-teal-300 lg:text-[26px]">{b.ar}</div>
                    <ul className="mt-2 space-y-1 text-[17px] text-mist lg:text-[21px]">{b.items.map((i) => <li key={i}>• {i}</li>)}</ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
