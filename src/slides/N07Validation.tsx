import { useState } from 'react';
import { SLIDES, VALIDATION, VOICES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { CountUp, Item, SlideTabs, StatusBadge, Stagger } from '../components/primitives';
import S07Market from './S07Market';

const PLAN = [
  { title: 'مقابلات الطلبة', target: '20 طالبًا', measures: 'أين يبحثون عن المساعدة اليوم، كم تستغرق، وكم يدفعون' },
  { title: 'مقابلات أصحاب المهارات', target: '10 طلبة', measures: 'هل قدّموا خدمات سابقًا، وما العائق، وما السعر المقبول' },
  { title: 'استبيان جامعة واحدة', target: '150 مشاركًا', measures: 'حجم المشكلة والاستعداد للدفع بالأرقام' },
  { title: 'جهات الدعم الطلابي', target: '3 جهات', measures: 'كيف تُتابع البرامج والنتائج اليوم' },
];

function ValidationPanel() {
  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
      <div className="flex flex-col">
        <div className="mb-3 flex flex-wrap items-center gap-3"><StatusBadge status="verified" /><a href={VALIDATION.verified.url} target="_blank" rel="noreferrer" className="text-[16px] text-white/60 hover:underline">{VALIDATION.verified.source} ↗</a></div>
        <Stagger className="flex flex-1 flex-col justify-between gap-3" delay={0.35}>
          {VALIDATION.verified.stats.map((s) => (
            <Item key={s.label} className="card-d flex items-center justify-between gap-6 px-6 py-5">
              <span className="text-[20px] text-white/80">{s.label}</span>
              <span className="shrink-0 text-[44px] font-extrabold leading-none" dir="ltr"><CountUp value={s.value} decimals={s.decimals ?? 0} />{s.suffix && <span className="num text-teal">{s.suffix}</span>}</span>
            </Item>
          ))}
        </Stagger>
        <p className="mt-3 text-[16px] text-white/55">هذه الأرقام تصف حجم المجتمع المستهدف — وحجم المشكلة نثبته بالمقابلات والاستبيان.</p>
      </div>
      <div className="flex flex-col">
        <div className="mb-3 flex items-center gap-3"><span className="text-[20px] font-extrabold">خطة إثبات الاحتياج والاستعداد للدفع</span><StatusBadge status="planned" /></div>
        <Stagger className="grid flex-1 grid-cols-2 gap-3" delay={0.5} step={0.07}>
          {PLAN.map((p) => (
            <Item key={p.title} className="card-d p-5">
              <div className="flex items-baseline justify-between gap-2"><span className="text-[20px] font-extrabold">{p.title}</span><span className="num shrink-0 rounded-full bg-teal/15 px-3 py-0.5 text-[16px] font-bold text-teal-300">{p.target}</span></div>
              <p className="mt-2 text-[17px] leading-relaxed text-white/65">{p.measures}</p>
            </Item>
          ))}
        </Stagger>
        <div className="mt-3 space-y-2">
          {VALIDATION.hypotheses.map((h) => (
            <div key={h.code} className="flex items-start gap-3 text-[17px] text-white/80"><span className="num rounded-md bg-teal/15 px-2 py-0.5 text-[15px] font-bold text-teal-300">{h.code}</span>{h.text}</div>
          ))}
        </div>
      </div>
    </div>
  );
}


function VoicesPanel() {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3 text-[16px] text-white/60"><span className="h-2 w-2 rounded-full bg-teal" />{VOICES.note}</div>
      <Stagger className="grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-4" delay={0.3} step={0.05}>
        {VOICES.items.map((v) => (
          <Item key={v.name} className={`card-d flex flex-col px-4 py-3 ${v.tone === 'concern' ? 'border-amber-300/25' : ''}`}>
            <p className="flex-1 text-[15px] leading-[1.6] text-white/85">«{v.text}»</p>
            <div className="mt-2 flex items-end justify-between gap-2 border-t border-white/10 pt-2">
              <div className="min-w-0"><div className="text-[16px] font-extrabold leading-tight">{v.name}</div><div className="truncate text-[13px] text-white/50">{v.org}</div></div>
              {v.tone === 'concern' && <span className="shrink-0 rounded-full bg-amber-300/15 px-2 py-0.5 text-[12px] font-bold text-amber-200">ملاحظة</span>}
            </div>
          </Item>
        ))}
      </Stagger>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-teal/25 bg-teal/[0.06] px-4 py-2.5">
        <span className="text-[16px] font-extrabold text-teal-300">ماذا تعلّمنا:</span>
        {VOICES.learned.map((l) => <span key={l.q} className="text-[15px] text-white/80"><b className="text-white">{l.q}</b> ← {l.a}</span>)}
      </div>
    </div>
  );
}

export default function N07Validation() {
  const [tab, setTab] = useState<'validation' | 'voices' | 'market'>('validation');
  return (
    <SlideFrame meta={SLIDES[5]} title={tab === 'validation' ? 'المشكلة ليست افتراضًا… وهذه خطة إثباتها.' : tab === 'voices' ? VOICES.headline : 'نبدأ من الجامعات العُمانية… ونبني نموذجًا قابلًا للتوسع.'} accent={['إثباتها.', 'قابلًا', 'للتوسع.', 'رِفد؟']}
      aside={<SlideTabs tabs={[['validation', 'التحقق'], ['voices', 'آراء الطلاب'], ['market', 'حجم السوق']] as const} value={tab} onChange={setTab} />}>
      {tab === 'validation' && <ValidationPanel />}
      {tab === 'voices' && <VoicesPanel />}
      {tab === 'market' && <S07Market bare />}
    </SlideFrame>
  );
}
