import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLUB_PROJECT } from '../data/demo';
import { StatusBadge } from './primitives';
import { T } from '../lib/motion';

/* Mini-demo 2: a student club commissions a design project with milestone-based execution. */
export function ClubDemo() {
  const [offer, setOffer] = useState<string | null>(null);
  const [done, setDone] = useState(0); // milestones completed
  const [released, setReleased] = useState(false);
  const o = CLUB_PROJECT.offers.find((x) => x.id === offer);
  const total = CLUB_PROJECT.milestones.length;
  const reset = () => { setOffer(null); setDone(0); setReleased(false); };

  return (
    <div className="card-d flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div>
          <div className="font-bold">{CLUB_PROJECT.club}</div>
          <div className="text-sm text-white/55">{CLUB_PROJECT.brief} · الميزانية <span className="num">{CLUB_PROJECT.budget}</span> ر.ع</div>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge status="demo" />
          <button onClick={reset} className="no-print focus-ring rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 hover:border-white/40">↺ إعادة</button>
        </div>
      </div>
      <div className="grid min-h-0 flex-1 gap-5 overflow-y-auto p-5 lg:grid-cols-2 lg:p-6" data-scroll>
        <div>
          <div className="label mb-3 text-white/40">OFFERS FROM STUDENT DESIGNERS</div>
          <div className="space-y-3">
            {CLUB_PROJECT.offers.map((x) => (
              <button key={x.id} disabled={!!offer} onClick={() => setOffer(x.id)} className={`focus-ring w-full rounded-xl border p-4 text-right transition ${offer === x.id ? 'border-teal/50 bg-teal/[0.08]' : 'border-white/10 hover:border-white/30 disabled:opacity-40'}`}>
                <div className="flex items-center justify-between"><span className="font-bold">{x.name}</span><span className="num text-teal-300">{x.price} ر.ع</span></div>
                <div className="mt-1 text-sm text-white/60">{x.note} · <span className="num">{x.days}</span> أيام · ★ <span className="num">{x.rating}</span></div>
              </button>
            ))}
          </div>
          {o && <div className="mt-3 rounded-lg border border-white/10 bg-navy-950/60 p-3 text-sm text-white/70">المبلغ <span className="num">{o.price}</span> ر.ع {released ? 'حُرِّر للمصمم ✓' : 'محجوز بأمان حتى اعتماد النادي'}</div>}
        </div>
        <div>
          <div className="label mb-3 text-white/40">MILESTONES · EXECUTION AGENT</div>
          <div className="relative space-y-3 pe-1">
            {CLUB_PROJECT.milestones.map((m, i) => (
              <div key={m} className="flex items-center gap-3">
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold transition ${i < done ? 'bg-teal text-navy-950' : i === done && offer ? 'border-2 border-teal text-teal' : 'border border-white/20 text-white/40'}`}>{i < done ? '✓' : <span className="num">{i + 1}</span>}</span>
                <span className={i < done ? 'text-white' : 'text-white/55'}>{m}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <button disabled={!offer || done >= total} onClick={() => setDone((d) => d + 1)} className="focus-ring rounded-full bg-teal px-5 py-2.5 font-bold text-navy-950 transition hover:bg-teal-300 disabled:opacity-35">إنجاز المرحلة التالية</button>
            <button disabled={done < total || released} onClick={() => setReleased(true)} className="focus-ring rounded-full border border-amber-300/40 px-5 py-2.5 text-amber-100 transition hover:bg-amber-300/10 disabled:opacity-35">اعتماد النادي وتحرير الدفع</button>
          </div>
          <AnimatePresence>
            {released && o && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={T.base} className="mt-4 rounded-xl border border-teal/30 bg-teal/[0.08] p-4">
                <div className="label text-teal">PROJECT RECORD ISSUED</div>
                <div className="mt-1 font-bold">{o.name} · هوية بصرية لنادٍ طلابي</div>
                <div className="text-sm text-white/60"><span className="num">{total}</span> مراحل موثّقة · اعتماد النادي ✓ · يُضاف إلى ملف الخبرة</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
