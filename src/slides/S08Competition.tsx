import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPETITION, JOURNEY_STEPS, SLIDES, Coverage } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { Item, Stagger, useInitial } from '../components/primitives';
import { EASE, T } from '../lib/motion';

function Cell({ c, rifd }: { c: Coverage; rifd: boolean }) {
  if (c === 'none') return <div className="h-11 rounded-xl border border-dashed border-line-strong/60 lg:h-12" />;
  return <div className={`h-11 rounded-xl lg:h-12 ${rifd ? 'bg-rifd-600' : c === 'core' ? 'bg-navy/80' : 'bg-navy/25'}`} />;
}

export default function S08Competition() {
  const [sel, setSel] = useState('knack');
  const initial = useInitial();
  const p = COMPETITION.players.find((x) => x.key === sel)!;

  return (
    <SlideFrame meta={SLIDES[7]} title={COMPETITION.headline} accent={['رِفد؟']}>
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        {/* the answer */}
        <Stagger className="flex flex-col gap-4 lg:gap-5" delay={0.3} step={0.1}>
          {COMPETITION.reasons.map((r, i) => (
            <Item key={r.title} className="card flex flex-1 items-start gap-5 p-6 lg:p-7">
              <span className="num grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rifd-600 text-[22px] font-extrabold text-white lg:h-14 lg:w-14 lg:text-[26px]">{i + 1}</span>
              <div>
                <h3 className="text-[22px] font-extrabold leading-tight lg:text-[30px]">{r.title}</h3>
                <p className="mt-2 text-[17px] leading-relaxed text-ink-2 lg:text-[22px]">{r.line}</p>
              </div>
            </Item>
          ))}
        </Stagger>

        {/* journey coverage */}
        <div className="card flex flex-col p-5 lg:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-[20px] font-extrabold lg:text-[26px]">أي جزء من الرحلة يغطيه كل بديل؟</h3>
            <div className="flex items-center gap-4 text-[15px] text-ink-2 lg:text-[18px]">
              <span className="flex items-center gap-2"><i className="h-4 w-6 rounded bg-navy/80" />تركيز معلن</span>
              <span className="flex items-center gap-2"><i className="h-4 w-6 rounded bg-navy/25" />جزئي</span>
              <span className="flex items-center gap-2"><i className="h-4 w-6 rounded bg-rifd-600" />رِفد (مقترح)</span>
            </div>
          </div>
          <div className="mt-5 overflow-x-auto" data-scroll>
            <div className="min-w-[720px]">
              <div className="grid grid-cols-[200px_repeat(6,1fr)] gap-2 lg:grid-cols-[230px_repeat(6,1fr)]">
                <div />
                {JOURNEY_STEPS.map((s) => <div key={s.key} className="pb-1 text-center text-[16px] font-bold text-ink-2 lg:text-[20px]">{s.ar}</div>)}
              </div>
              <div className="mt-1 space-y-2">
                {COMPETITION.players.map((pl, r) => {
                  const isR = pl.key === 'rifd';
                  return (
                    <motion.button key={pl.key} onClick={() => setSel(pl.key)}
                      initial={initial === false ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: EASE, delay: initial === false ? 0 : 0.35 + r * 0.07 }}
                      className={`focus-ring grid w-full grid-cols-[200px_repeat(6,1fr)] items-center gap-2 rounded-2xl p-1.5 text-right transition lg:grid-cols-[230px_repeat(6,1fr)] ${sel === pl.key ? 'bg-rifd-50 ring-2 ring-rifd-200' : 'hover:bg-surface-2'} ${isR ? 'mt-3' : ''}`}>
                      <span className={`px-2 text-[18px] font-extrabold lg:text-[22px] ${isR ? 'text-rifd-700' : ''} ${/[a-z]/i.test(pl.name) ? 'en' : ''}`} style={{ textAlign: 'right' }}>{pl.name}</span>
                      {JOURNEY_STEPS.map((s) => <Cell key={s.key} c={pl.cover[s.key]} rifd={isR} />)}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={p.key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={T.fast} className="mt-5 rounded-2xl bg-surface-2 p-4 lg:p-5">
              <div className="flex flex-wrap items-baseline gap-x-3"><b className="text-[19px] lg:text-[23px]">{p.name}</b><span className="text-[16px] text-ink-3 lg:text-[19px]">{p.kind}</span></div>
              <p className="mt-1 text-[17px] text-ink-2 lg:text-[21px]">{p.evidence} {p.source && <a href={p.source} target="_blank" rel="noreferrer" className="font-bold text-rifd-600 hover:underline">المصدر ↗</a>}</p>
            </motion.div>
          </AnimatePresence>
          <p className="mt-auto pt-3 text-[14px] leading-relaxed text-ink-3 lg:text-[17px]">{COMPETITION.footnote}</p>
        </div>
      </div>
    </SlideFrame>
  );
}
