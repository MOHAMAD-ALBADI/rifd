import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MARKET, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { CountUp, Item, Reveal, Stagger, StatusBadge } from '../components/primitives';
import { T } from '../lib/motion';

type Sim = { students: number; active: number; perSemester: number; ticket: number; commission: number };
type PresetKey = keyof typeof MARKET.presets;
const strip = (k: PresetKey): Sim => { const { label, ...v } = MARKET.presets[k]; void label; return v; };

function Slider({ id, label, value, min, max, step = 1, unit, onChange }: { id: string; label: string; value: number; min: number; max: number; step?: number; unit: string; onChange: (v: number) => void }) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between text-[18px] lg:text-[21px]">
        <span className="text-mist">{label}</span>
        <b className="text-snow"><span className="num">{value.toLocaleString('en-US')}</span> {unit}</b>
      </label>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-2 w-full accent-teal" dir="ltr" />
    </div>
  );
}

function RevenueLogic({ onClose }: { onClose: () => void }) {
  const [preset, setPreset] = useState<PresetKey | null>('base');
  const [sim, setSim] = useState<Sim>(strip('base'));
  const set = (p: Partial<Sim>) => { setPreset(null); setSim((s) => ({ ...s, ...p })); };
  const activeStudents = Math.round(sim.students * (sim.active / 100));
  const services = activeStudents * sim.perSemester;
  const gmv = services * sim.ticket;
  const revenue = gmv * (sim.commission / 100);
  const f = (n: number) => Math.round(n).toLocaleString('en-US');
  return (
    <motion.div className="absolute inset-0 z-40 flex items-center justify-center bg-night-deep/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={T.fast} onClick={onClose}>
      <motion.div onClick={(e) => e.stopPropagation()} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} transition={T.base}
        className="w-full max-w-[1320px] rounded-[30px] border border-white/10 bg-night-surface p-6 shadow-app lg:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-[26px] font-extrabold lg:text-[36px]">منطق الإيراد في جامعة واحدة</h3>
            <p className="mt-1 text-[17px] text-mist lg:text-[21px]">عمولة رِفد على الخدمات المكتملة خلال فصل دراسي — حساب من الأسفل للأعلى.</p>
          </div>
          <div className="flex items-center gap-3"><StatusBadge status="assumption" /><button onClick={onClose} className="btn-deck-ghost focus-ring px-6 py-2.5 text-[18px] lg:text-[20px]">إغلاق</button></div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {(Object.keys(MARKET.presets) as PresetKey[]).map((k) => (
            <button key={k} onClick={() => { setPreset(k); setSim(strip(k)); }} className={`focus-ring rounded-full border px-6 py-2.5 text-[18px] font-bold transition lg:text-[20px] ${preset === k ? 'border-snow bg-snow text-night' : 'border-white/20 text-mist hover:border-white/40'}`}>{MARKET.presets[k].label}</button>
          ))}
          {preset === null && <span className="self-center text-[17px] text-fog lg:text-[19px]">قيم مخصصة</span>}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
          <Slider id="m-students" label="طلبة الجامعة" value={sim.students} min={500} max={10000} step={500} unit="طالب" onChange={(v) => set({ students: v })} />
          <Slider id="m-active" label="نسبة النشطين" value={sim.active} min={1} max={40} unit="%" onChange={(v) => set({ active: v })} />
          <Slider id="m-per" label="خدمات لكل نشط/فصل" value={sim.perSemester} min={1} max={6} unit="" onChange={(v) => set({ perSemester: v })} />
          <Slider id="m-ticket" label="متوسط قيمة الخدمة" value={sim.ticket} min={3} max={40} unit="ر.ع" onChange={(v) => set({ ticket: v })} />
          <Slider id="m-comm" label="عمولة رِفد" value={sim.commission} min={5} max={20} unit="%" onChange={(v) => set({ commission: v })} />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[['طلبة نشطون', f(activeStudents), ''], ['خدمات مكتملة/فصل', f(services), ''], ['قيمة الخدمات', f(gmv), 'ر.ع'], ['إيراد رِفد/فصل', f(revenue), 'ر.ع']].map(([l, v, u], i) => (
            <div key={l} data-metric={l} className={`rounded-[22px] p-5 ${i === 3 ? 'bg-teal text-night' : 'bg-white/[0.05]'}`}>
              <div className={`text-[16px] font-bold lg:text-[19px] ${i === 3 ? 'text-night/75' : 'text-fog'}`}>{l}</div>
              <div className="mt-1 text-[30px] font-extrabold lg:text-[40px]"><span className="num">{v}</span> {u && <span className="text-[18px] lg:text-[22px]">{u}</span>}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[16px] text-fog lg:text-[19px]">الناتج يوضح كيف يُحسب الإيراد فقط — ليس توقعًا ماليًا. لا يشمل الاشتراكات المؤسسية التي تُسعَّر بعد التجربة.</p>
      </motion.div>
    </motion.div>
  );
}

export default function Scene06Market() {
  const [open, setOpen] = useState(false);
  const c = MARKET.context;
  return (
    <>
    <SlideFrame meta={SLIDES[5]} title={MARKET.headline} accent="ونثبت القيمة" sub={MARKET.explanation} titleClass="lg:!text-[58px]">
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12">
        {/* customers */}
        <Stagger className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 sm:content-start" delay={0.4} step={0.08}>
          {MARKET.groups.map((g, i) => (
            <Item key={g.title} className="border-r-2 border-teal/60 pe-2 ps-6">
              <div className="num text-[18px] font-bold text-teal lg:text-[20px]">0{i + 1}</div>
              <h3 className="mt-1 text-[24px] font-extrabold lg:text-[32px]">{g.title}</h3>
              <p className="mt-2 text-[17px] leading-relaxed text-mist lg:text-[23px]">{g.body}</p>
            </Item>
          ))}
        </Stagger>

        {/* context + go-to-market */}
        <div className="flex flex-col gap-6">
          <Reveal delay={0.5} className="panel p-5 lg:px-7 lg:py-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-[52px] font-extrabold leading-none lg:text-[68px]" dir="ltr" style={{ textAlign: 'right' }}><CountUp value={c.value} /></div>
                <div className="mt-3 text-[19px] lg:text-[25px]">{c.label}</div>
                <div className="mt-1 text-[16px] text-fog lg:text-[19px]">{c.note}</div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <StatusBadge status="verified" />
                <a href={c.url} target="_blank" rel="noreferrer" className="text-[15px] text-fog underline-offset-4 hover:underline lg:text-[18px]">{c.source} ↗</a>
              </div>
            </div>
          </Reveal>
          <div className="relative grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3">
            {MARKET.phases.map((p, i) => (
              <Reveal key={p.no} delay={0.7 + i * 0.12} className="relative flex flex-col">
                <div className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-full text-[18px] font-extrabold ${i === 0 ? 'bg-teal text-night' : 'border-2 border-white/25 text-mist'}`}><span className="num">{i + 1}</span></span>
                  {i < 2 && <span className="h-0.5 flex-1 bg-white/15" />}
                </div>
                <h4 className="mt-3 text-[20px] font-extrabold lg:text-[26px]">{p.title}</h4>
                <p className="mt-1 text-[16px] leading-relaxed text-mist lg:text-[21px]">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
        <Reveal delay={1} className="max-w-[1250px] text-[20px] font-bold text-snow lg:text-[27px]">{MARKET.key}</Reveal>
        <button onClick={() => setOpen(true)} className="no-print btn-deck-ghost focus-ring px-6 py-3 text-[18px] lg:text-[21px]">منطق الإيراد (افتراضات) ←</button>
      </div>
    </SlideFrame>
    <AnimatePresence>{open && <RevenueLogic onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}
