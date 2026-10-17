import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAUSES, PROBLEM, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { Item, Stagger } from '../components/primitives';
import { ThreeScene } from '../three/ThreeScene';
import { ProblemFallback } from '../components/Fallbacks';
import { T } from '../lib/motion';

export default function S02Problem({ bare = false }: { bare?: boolean }) {
  const [connected, setConnected] = useState(false);
  const [focus, setFocus] = useState<number | null>(null);
  return (
    <SlideFrame bare={bare} meta={SLIDES[1]} title={PROBLEM.headline} accent={['تصل', 'أصحابها']} titleClass="lg:max-w-[1100px] lg:!text-[2.7rem]">
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
        {/* problem cards (RTL: right column) */}
        <Stagger className="flex flex-col justify-center gap-3" delay={0.5} step={0.12}>
          {PROBLEM.problems.map((p, i) => (
            <Item key={p.key}>
              <button
                onMouseEnter={() => setFocus(i)}
                onMouseLeave={() => setFocus(null)}
                onFocus={() => setFocus(i)}
                onBlur={() => setFocus(null)}
                className={`focus-ring card-d relative w-full overflow-hidden px-5 py-4 text-right transition ${focus === i ? 'border-white/30 bg-white/[0.04]' : ''}`}
              >
                <span className="absolute inset-y-0 right-0 w-1" style={{ background: p.color }} />
                                <div className="text-xl font-bold lg:text-[1.6rem]">{p.title}</div>
                <p className="mt-1 text-[17px] text-white/70">{p.body}</p>
                <AnimatePresence>
                  {connected && (
                    <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={T.fast}
                      className="absolute left-4 top-4 rounded-full bg-teal/15 px-2.5 py-0.5 text-[15px] text-teal-300">
                      متصل عبر رِفد
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Item>
          ))}
        </Stagger>

        {/* spatial visual */}
        <div className="relative min-h-[300px] overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
          <ThreeScene scene="problem" props={{ connected }} fallback={<ProblemFallback connected={connected} />} />
          <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-4 text-[15px] text-white/60 lg:p-5 lg:text-[17px]">
            <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-rifd" />طلبة يحتاجون دعمًا</span>
            <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-teal" />طلبة موهوبون</span>
          </div>
          <div className="pointer-events-none absolute bottom-[72px] left-4 text-[15px] text-white/60 lg:left-5 lg:text-[17px]">
            <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-rifd-300" />برامج ومشاريع متفرقة</span>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-white/10 bg-navy-950/60 p-3 backdrop-blur lg:p-4">
            <span className="text-[17px] text-white/60">
              {connected ? 'منظومة واحدة: كل مجموعة تصل إلى الأخرى عبر نواة مشتركة.' : 'روابط مقطوعة: الاحتكاك يضيّع الفرص.'}
            </span>
            <button onClick={() => setConnected((c) => !c)} className="no-print focus-ring shrink-0 rounded-full bg-teal px-4 py-2 text-[17px] font-bold text-navy-950 transition hover:bg-teal-300">
              {connected ? PROBLEM.toggleOn : PROBLEM.toggleOff}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-stretch gap-3">
        <span className="self-center text-[19px] font-extrabold text-white/80">لماذا يحدث؟</span>
        {CAUSES.map((c) => (
          <div key={c.title} className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2.5">
            <div className="text-[18px] font-bold text-teal-300">{c.title}</div>
            <div className="text-[16px] leading-snug text-white/70">{c.body}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
