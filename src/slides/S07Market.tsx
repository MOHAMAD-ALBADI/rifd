import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MARKET, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { Item, StatusBadge, Stagger, useInitial } from '../components/primitives';
import { T, EASE } from '../lib/motion';

function Slider({ label, value, min, max, step = 1, unit, onChange }: { label: string; value: number; min: number; max: number; step?: number; unit: string; onChange: (v: number) => void }) {
  return (
    <label className="block">
      <div className="flex justify-between text-[17px]"><span className="text-white/65">{label}</span><span className="num font-bold text-white">{value.toLocaleString('en-US')}<span className="text-white/50"> {unit}</span></span></div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-1.5 w-full accent-teal" dir="ltr" />
    </label>
  );
}

export default function S07Market({ bare = false }: { bare?: boolean }) {
  const [ring, setRing] = useState(0);
  const [sim, setSim] = useState(MARKET.sim);
  const initial = useInitial();
  const tx = Math.round(sim.students * (sim.active / 100) * sim.perSemester);
  const gmv = tx * sim.ticket;
  const rev = gmv * (sim.commission / 100);
  const r = MARKET.rings[ring];
  const sizes = [100, 66, 36];

  return (
    <SlideFrame bare={bare} meta={SLIDES[5]} title={MARKET.headline} accent={['قابلًا', 'للتوسع.']}>
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* rings */}
        <div className="flex min-h-0 flex-col">
          <div className="grid flex-1 grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_1fr]">
            <div className="relative mx-auto aspect-square w-full max-w-[400px]">
              {MARKET.rings.map((x, i) => (
                <motion.button
                  key={x.key}
                  onMouseEnter={() => setRing(i)}
                  onClick={() => setRing(i)}
                  initial={initial === false ? false : { scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.35 + i * 0.15 }}
                  className="focus-ring absolute rounded-full border transition-colors"
                  style={{
                    width: `${sizes[i]}%`, height: `${sizes[i]}%`, left: `${(100 - sizes[i]) / 2}%`, bottom: 0,
                    borderColor: ring === i ? '#14D1C8' : 'rgba(147,187,251,0.25)',
                    borderStyle: x.status === 'verified' ? 'solid' : 'dashed',
                    background: ring === i ? 'radial-gradient(circle at 50% 70%, rgba(20,209,200,0.18), rgba(20,209,200,0.03))' : 'rgba(19,44,82,0.25)',
                  }}
                  aria-label={x.title}
                >
                  <span className="en absolute left-1/2 top-[7%] -translate-x-1/2 text-[15px] font-bold tracking-[0.2em] text-white/70">{x.code}</span>
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={r.key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={T.fast}>
                <div className="label text-teal">{r.code}</div>
                <div className={`mt-1 text-[2.6rem] font-bold leading-none lg:text-[3.4rem] text-white`}><span className="num">{r.value}</span></div>
                <div className="mt-2 text-lg font-medium">{r.title}</div>
                <div className="mt-1 text-[17px] text-white/55">{r.note}</div>
                <StatusBadge status={r.status} className="mt-3" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-3">
            <span className="text-[17px] text-white/55">مسار التوسع:</span>
            {MARKET.expansion.map((e, i) => (
              <div key={e} className="flex items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-[17px] ${i === 0 ? 'bg-teal text-navy-950 font-bold' : 'border border-white/15 text-white/70'}`}>{e}</span>
                {i < MARKET.expansion.length - 1 && <span className="text-teal/60">←</span>}
              </div>
            ))}
            <span className="ms-auto text-[15px] text-white/40">بعد إثبات القيمة</span>
          </div>
        </div>

        {/* segments + simulator */}
        <div className="flex min-h-0 flex-col gap-4">
          <Stagger className="grid grid-cols-2 gap-3" delay={0.5} step={0.07}>
            {MARKET.segments.map((s) => (
              <Item key={s.title} className="card-d p-3.5">
                <div className="font-bold">{s.title}</div>
                <div className="text-[17px] text-white/55">{s.line}</div>
              </Item>
            ))}
          </Stagger>
          <div className="card-d flex-1 p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="label text-white/45">REVENUE LOGIC SIMULATOR</span>
              <StatusBadge status="assumption" />
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              <Slider label="طلبة يصلهم رِفد" value={sim.students} min={500} max={20000} step={500} unit="طالب" onChange={(v) => setSim({ ...sim, students: v })} />
              <Slider label="نسبة النشطين" value={sim.active} min={1} max={40} unit="%" onChange={(v) => setSim({ ...sim, active: v })} />
              <Slider label="معاملات لكل نشط/فصل" value={sim.perSemester} min={1} max={8} unit="" onChange={(v) => setSim({ ...sim, perSemester: v })} />
              <Slider label="متوسط قيمة المعاملة" value={sim.ticket} min={2} max={40} unit="ر.ع" onChange={(v) => setSim({ ...sim, ticket: v })} />
              <Slider label="العمولة" value={sim.commission} min={5} max={20} unit="%" onChange={(v) => setSim({ ...sim, commission: v })} />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
              <div><div className="text-[15px] text-white/50">معاملات/فصل</div><div className="num text-xl font-bold">{tx.toLocaleString('en-US')}</div></div>
              <div><div className="text-[15px] text-white/50">قيمة المعاملات</div><div className="num text-xl font-bold">{gmv.toLocaleString('en-US')} <span className="text-[17px] text-white/50">ر.ع</span></div></div>
              <div><div className="text-[15px] text-white/50">إيراد العمولة/فصل</div><div className="num text-xl font-bold text-teal-300">{Math.round(rev).toLocaleString('en-US')} <span className="text-[17px] text-white/50">ر.ع</span></div></div>
            </div>
            <p className="mt-2 text-[15px] text-white/40">يوضح منطق الإيراد فقط بافتراضات قابلة للتعديل — ليس توقعًا ماليًا. لا يشمل الاشتراكات المؤسسية.</p>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
