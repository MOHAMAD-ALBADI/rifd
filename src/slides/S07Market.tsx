import { useState } from 'react';
import { motion } from 'framer-motion';
import { MARKET, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { CountUp, Item, StatusBadge, Stagger } from '../components/primitives';
import { EASE } from '../lib/motion';

type Sim = { students: number; active: number; perSemester: number; ticket: number; commission: number };
type PresetKey = keyof typeof MARKET.presets;

function Slider({ id, label, value, min, max, step = 1, unit, onChange }: { id: string; label: string; value: number; min: number; max: number; step?: number; unit: string; onChange: (v: number) => void }) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between text-[17px] lg:text-[20px]">
        <span className="text-ink-2">{label}</span>
        <b className="text-ink"><span className="num">{value.toLocaleString('en-US')}</span> {unit}</b>
      </label>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-2 w-full accent-rifd-600" dir="ltr" />
    </div>
  );
}

export default function S07Market() {
  const [preset, setPreset] = useState<PresetKey | null>('base');
  const [sim, setSim] = useState<Sim>(() => { const { label, ...v } = MARKET.presets.base; void label; return v; });
  const set = (patch: Partial<Sim>) => { setPreset(null); setSim((s) => ({ ...s, ...patch })); };
  const pick = (k: PresetKey) => { const { label, ...v } = MARKET.presets[k]; void label; setPreset(k); setSim(v); };

  const activeStudents = Math.round(sim.students * (sim.active / 100));
  const services = activeStudents * sim.perSemester;
  const gmv = services * sim.ticket;
  const revenue = gmv * (sim.commission / 100);
  const fmt = (n: number) => Math.round(n).toLocaleString('en-US');

  return (
    <SlideFrame meta={SLIDES[6]} title={MARKET.headline} accent={['البريمي،']}>
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
        {/* verified + entry strategy */}
        <div className="flex flex-col gap-5">
          <div className="card flex flex-wrap items-end justify-between gap-4 p-6 lg:p-7">
            <div>
              <div className="text-[52px] font-extrabold leading-none lg:text-[80px]" dir="ltr" style={{ textAlign: 'right' }}><CountUp value={MARKET.verified.value} /></div>
              <div className="mt-3 text-[19px] text-ink-2 lg:text-[25px]">{MARKET.verified.label}</div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <StatusBadge status="verified" />
              <span className="text-[15px] text-ink-3 lg:text-[18px]">{MARKET.verified.source}</span>
            </div>
          </div>
          <Stagger className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3" delay={0.35}>
            {MARKET.entry.map((e, i) => (
              <Item key={e.key} className="relative flex flex-col rounded-[24px] border border-line bg-white p-5 lg:p-6">
                <span className="num text-[16px] font-bold text-rifd-600 lg:text-[18px]">{i + 1}</span>
                <div className="mt-1 text-[16px] text-ink-3 lg:text-[19px]">{e.title}</div>
                <div className="mt-1 text-[22px] font-extrabold leading-tight lg:text-[28px]">{e.value}</div>
                <p className="mt-2 text-[16px] leading-relaxed text-ink-2 lg:text-[19px]">{e.line}</p>
              </Item>
            ))}
          </Stagger>
          <div className="rounded-[24px] bg-navy p-5 text-white lg:p-6">
            <div className="text-[16px] font-bold text-teal-300 lg:text-[19px]">التوسع حسب الأدلة</div>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {MARKET.expansion.map((x, i) => (
                <div key={x.stage} className="flex items-start gap-3">
                  <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ${i === 0 ? 'bg-teal-300' : 'bg-white/30'}`} />
                  <div><div className="text-[20px] font-extrabold lg:text-[24px]">{x.where}</div><div className="text-[15px] text-white/75 lg:text-[18px]">بعد: {x.trigger}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom-up revenue logic */}
        <div className="card flex flex-col p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-[22px] font-extrabold lg:text-[30px]">حساب من الأسفل للأعلى — جامعة واحدة</h3>
            <StatusBadge status="assumption" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {(Object.keys(MARKET.presets) as PresetKey[]).map((k) => (
              <button key={k} onClick={() => pick(k)} className={`focus-ring rounded-full border px-5 py-2 text-[17px] font-bold transition lg:text-[19px] ${preset === k ? 'border-navy bg-navy text-white' : 'border-line bg-white text-ink-2 hover:border-rifd-300'}`}>{MARKET.presets[k].label}</button>
            ))}
            {preset === null && <span className="self-center text-[16px] text-ink-3 lg:text-[18px]">قيم مخصصة</span>}
          </div>
          <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <Slider id="m-students" label="طلبة الجامعة الشريكة" value={sim.students} min={500} max={10000} step={500} unit="طالب" onChange={(v) => set({ students: v })} />
            <Slider id="m-active" label="نسبة الطلبة النشطين" value={sim.active} min={1} max={40} unit="%" onChange={(v) => set({ active: v })} />
            <Slider id="m-per" label="خدمات لكل طالب نشط/فصل" value={sim.perSemester} min={1} max={6} unit="" onChange={(v) => set({ perSemester: v })} />
            <Slider id="m-ticket" label="متوسط قيمة الخدمة" value={sim.ticket} min={3} max={40} unit="ر.ع" onChange={(v) => set({ ticket: v })} />
            <Slider id="m-comm" label="عمولة رِفد" value={sim.commission} min={5} max={20} unit="%" onChange={(v) => set({ commission: v })} />
          </div>
          <div className="mt-auto grid grid-cols-2 gap-3 pt-6 lg:grid-cols-4">
            {[
              ['طلبة نشطون', fmt(activeStudents), ''],
              ['خدمات مكتملة/فصل', fmt(services), ''],
              ['قيمة الخدمات', fmt(gmv), 'ر.ع'],
              ['إيراد رِفد/فصل', fmt(revenue), 'ر.ع'],
            ].map(([l, v, u], i) => (
              <motion.div key={l} layout transition={{ duration: 0.3, ease: EASE }} className={`rounded-[20px] p-4 ${i === 3 ? 'bg-rifd-600 text-white' : 'bg-surface-2'}`}>
                <div className={`text-[15px] lg:text-[18px] ${i === 3 ? 'text-white/85' : 'text-ink-3'}`}>{l}</div>
                <div className="mt-1 text-[26px] font-extrabold lg:text-[34px]"><span className="num">{v}</span> {u && <span className="text-[16px] lg:text-[20px]">{u}</span>}</div>
              </motion.div>
            ))}
          </div>
          <p className="mt-3 text-[15px] text-ink-3 lg:text-[18px]">منطق إيراد بافتراضات قابلة للتعديل — ليس توقعًا ماليًا. الاشتراك المؤسسي يُسعَّر بعد التجربة.</p>
        </div>
      </div>
    </SlideFrame>
  );
}
