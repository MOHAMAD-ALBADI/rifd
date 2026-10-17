import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPETITION, MARK_LABEL, Mark, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { useInitial } from '../components/primitives';
import { T, EASE } from '../lib/motion';

function MarkIcon({ m }: { m: Mark }) {
  const base = 'mx-auto grid h-7 w-7 place-items-center rounded-full text-[17px] font-bold';
  switch (m) {
    case 'core': return <span className={`${base} bg-white text-navy-950`} title={MARK_LABEL[m]}>●</span>;
    case 'partial': return <span className={`${base} border-2 border-white/70`} title={MARK_LABEL[m]} style={{ background: 'linear-gradient(90deg, #ffffff 50%, transparent 50%)' }} />;
    case 'none': return <span className={`${base} border border-white/25`} title={MARK_LABEL[m]} />;
    case 'varies': return <span className={`${base} text-white/60`} title={MARK_LABEL[m]}>~</span>;
    case 'unknown': return <span className={`${base} border border-dashed border-white/30 text-white/45`} title={MARK_LABEL[m]}>?</span>;
    case 'proposed': return <span className={`${base} bg-teal text-navy-950`} title={MARK_LABEL[m]}>◆</span>;
  }
}

const MAP: Record<string, { x: number; y: number }> = {
  uni: { x: 18, y: 18 }, knack: { x: 33, y: 26 }, tutorocean: { x: 28, y: 64 }, riipen: { x: 66, y: 22 }, freelance: { x: 80, y: 78 }, rifd: { x: 84, y: 30 },
};

export default function S08Competition({ bare = false }: { bare?: boolean }) {
  const [view, setView] = useState<'table' | 'map'>('table');
  const [sel, setSel] = useState('knack');
  const [row, setRow] = useState<number | null>(null);
  const initial = useInitial();
  const p = COMPETITION.players.find((x) => x.key === sel)!;

  return (
    <SlideFrame bare={bare} meta={SLIDES[4]} title={COMPETITION.headline} accent={['تحويلها', 'قيمة.']}>
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
        <div className="card-d flex min-h-0 flex-col p-4 lg:p-5">
          <div className="mb-3 flex items-center justify-between">
            <div className="no-print inline-flex rounded-full bg-white/[0.06] p-1 text-[17px]">
              {([['table', 'جدول المقارنة'], ['map', 'خريطة التموضع']] as const).map(([k, l]) => (
                <button key={k} onClick={() => setView(k)} className={`focus-ring rounded-full px-4 py-1.5 transition ${view === k ? 'bg-teal text-navy-950 font-bold' : 'text-white/65 hover:text-white'}`}>{l}</button>
              ))}
            </div>
            <div className="hidden flex-wrap items-center gap-x-4 gap-y-1 text-[15px] text-white/60 lg:flex">
              {(['core', 'partial', 'none', 'unknown', 'proposed'] as Mark[]).map((m) => (
                <span key={m} className="flex items-center gap-1.5"><span className="scale-[0.7]"><MarkIcon m={m} /></span>{MARK_LABEL[m]}</span>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {view === 'table' ? (
              <motion.div key="t" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={T.fast} className="min-h-0 flex-1 overflow-x-auto" data-scroll>
                <table className="w-full min-w-[720px] border-separate border-spacing-0 text-white">
                  <thead>
                    <tr>
                      <th className="w-[170px]" />
                      {COMPETITION.players.map((pl) => (
                        <th key={pl.key} className="px-1 pb-2">
                          <button onClick={() => setSel(pl.key)} className={`focus-ring w-full rounded-xl px-2 py-2 text-[17px] font-bold transition ${pl.key === 'rifd' ? 'bg-teal text-navy-950' : sel === pl.key ? 'bg-rifd/25 text-white' : 'text-white/80 hover:bg-white/[0.06]'}`}>
                            <span className={pl.key === 'rifd' ? '' : /[a-z]/i.test(pl.name) ? 'en' : ''}>{pl.name}</span>
                          </button>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMPETITION.criteria.map((c, ri) => (
                      <motion.tr key={c} onMouseEnter={() => setRow(ri)} onMouseLeave={() => setRow(null)}
                        initial={initial === false ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: EASE, delay: 0.4 + ri * 0.06 }}
                        className={row === ri ? 'bg-white/[0.04]' : ''}>
                        <td className="rounded-r-lg border-t border-white/[0.07] py-2.5 pe-3 text-[18px] font-medium">{c}</td>
                        {COMPETITION.players.map((pl, ci) => (
                          <td key={pl.key} className={`border-t border-white/[0.07] py-2.5 ${pl.key === 'rifd' ? 'bg-teal/[0.08]' : ''} ${ci === COMPETITION.players.length - 1 ? 'rounded-l-lg' : ''}`}>
                            <MarkIcon m={pl.marks[ri]} />
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-2 text-[15px] text-white/55">الرموز تعكس الوصف المعلن لكل جهة فقط، ولا تعني غياب الميزة. رِفد: قدرات مقترحة لم تُبنَ بعد.</p>
              </motion.div>
            ) : (
              <motion.div key="m" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={T.fast} className="relative min-h-[320px] flex-1 rounded-xl bg-white/[0.03]">
                <div className="absolute inset-x-6 top-1/2 h-px bg-white/15" />
                <div className="absolute inset-y-6 left-1/2 w-px bg-white/15" />
                <span className="absolute right-3 top-1/2 -translate-y-6 text-[15px] text-white/60">قياس ودعم التعلّم</span>
                <span className="absolute left-3 top-1/2 -translate-y-6 text-[15px] text-white/60">تنفيذ وقيمة عملية</span>
                <span className="absolute left-1/2 top-2 -translate-x-1/2 text-[15px] text-white/60">مؤسسي</span>
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[15px] text-white/60">فردي / سوق مفتوح</span>
                {COMPETITION.players.map((pl, i) => {
                  const pos = MAP[pl.key];
                  const isR = pl.key === 'rifd';
                  return (
                    <motion.button key={pl.key} onClick={() => setSel(pl.key)} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...T.spring, delay: i * 0.06 }}
                      className="focus-ring absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${100 - pos.x}%`, top: `${pos.y}%` }}>
                      <span className={`flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-[17px] font-bold shadow ${isR ? 'bg-teal text-navy-950 ring-4 ring-teal/25' : sel === pl.key ? 'bg-rifd text-white' : 'bg-white/10 text-white'}`}>
                        {isR && <span className="h-2 w-2 rounded-full bg-teal" />}{pl.name}{isR && <span className="text-[15px] font-normal text-navy-950/70">· الموقع المستهدف</span>}
                      </span>
                    </motion.button>
                  );
                })}
                <span className="absolute bottom-2 right-3 text-[14px] text-white/50">خريطة مفاهيمية من تقديرنا</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* evidence + positioning */}
        <div className="flex min-h-0 flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div key={p.key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={T.fast} className="card-d p-5">
              <div className="label text-teal">WHAT THEY PUBLICLY STATE</div>
              <div className="mt-1 text-xl font-bold text-white">{p.name}</div>
              <div className="text-[17px] text-white/60">{p.kind}</div>
              <p className="mt-3 text-[18px] leading-relaxed text-white/85">{p.evidence}</p>
              {p.source && <a href={p.source} target="_blank" rel="noreferrer" className="mt-2 inline-block text-[15px] text-teal hover:underline">المصدر ↗</a>}
            </motion.div>
          </AnimatePresence>
          <div className="relative mt-auto overflow-hidden rounded-2xl border border-teal/30 bg-teal/[0.08] p-5 text-white">
            <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-teal/30 blur-3xl" />
            <div className="label text-teal">OUR POSITIONING</div>
            <p className="relative mt-2 text-lg font-bold leading-relaxed">{COMPETITION.positioning}</p>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
