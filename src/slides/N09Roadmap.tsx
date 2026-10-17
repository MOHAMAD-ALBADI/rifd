import { useState } from 'react';
import { motion } from 'framer-motion';
import { FINANCE, ROADMAP, SLIDES, TEAM, VISION } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { BrandLogo, Item, SlideTabs, SponsorLogoStrip, StatusBadge, Stagger } from '../components/primitives';
import { T } from '../lib/motion';
import S10Roadmap from './S10Roadmap';

type Tab = 'plan' | 'vision' | 'ask';

function Vision() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="relative grid flex-1 grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="absolute inset-x-[10%] top-[34px] hidden h-0.5 bg-gradient-to-l from-teal to-rifd lg:block" />
        {VISION.map((v, i) => (
          <motion.div key={v.year} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ ...T.base, delay: 0.3 + i * 0.1 }} className="relative flex flex-col items-center text-center">
            <span className={`relative z-10 grid h-[68px] w-[68px] place-items-center rounded-full text-[24px] font-extrabold ${i === 0 ? 'bg-teal text-navy-950' : 'border-2 border-white/25 bg-navy-900 text-white'}`}><span className="num">{i + 1}</span></span>
            <div className="num mt-3 text-[17px] font-bold text-teal-300">{v.year}</div>
            <div className="card-d mt-3 flex w-full flex-1 flex-col p-5">
              <div className="text-[24px] font-extrabold">{v.title}</div>
              <p className="mt-2 text-[18px] leading-relaxed text-white/75">{v.body}</p>
              <div className="mt-auto pt-4 text-[17px] text-white/60"><span className="num font-bold text-white">{FINANCE.universities[i]}</span> {FINANCE.universities[i] === 1 ? 'مؤسسة شريكة' : 'مؤسسات شريكة'} (هدف)</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 text-[17px] text-white/65"><StatusBadge status="planned" />أهداف مرتبطة بنتائج كل مرحلة — لا ننتقل لمرحلة قبل تحقق مؤشرات سابقتها.</div>
    </div>
  );
}

function Ask() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Stagger className="flex flex-col gap-4" delay={0.3}>
          {TEAM.asks.map((a, i) => (
            <Item key={a.title} className="card-d flex items-center gap-5 p-6">
              <span className="num grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-teal text-[24px] font-extrabold text-navy-950">{i + 1}</span>
              <div><div className="text-[26px] font-extrabold">{a.title}</div><div className="text-[19px] text-white/70">{a.line}</div></div>
            </Item>
          ))}
        </Stagger>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...T.slow, delay: 0.5 }}
          className="relative flex flex-col justify-center overflow-hidden rounded-[28px] border border-teal/25 bg-gradient-to-br from-navy-700 to-navy-950 p-8">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-teal/20 blur-3xl" />
          <BrandLogo size={70} />
          <p className="relative mt-6 text-[36px] font-extrabold leading-snug"><span className="text-grad">رِفد</span> — لأن المهارات لا ينبغي أن تبقى فرصًا ضائعة.</p>
        </motion.div>
      </div>
      <div className="mt-5"><SponsorLogoStrip unit={34} className="justify-between lg:flex-nowrap" /></div>
    </div>
  );
}

export default function N09Roadmap() {
  const [tab, setTab] = useState<Tab>('plan');
  const titles: Record<Tab, string> = { plan: ROADMAP.headline, vision: 'رؤيتنا خلال خمس سنوات.', ask: 'ما نطلبه للخطوة التالية.' };
  return (
    <SlideFrame meta={SLIDES[7]} title={titles[tab]} accent={['نتوسع.', 'خمس', 'سنوات.', 'التالية.']}
      aside={<SlideTabs tabs={[['plan', 'خطة التنفيذ'], ['vision', 'الرؤية · 5 سنوات'], ['ask', 'الطلب']] as const} value={tab} onChange={setTab} />}>
      {tab === 'plan' && <S10Roadmap bare />}
      {tab === 'vision' && <Vision />}
      {tab === 'ask' && <Ask />}
    </SlideFrame>
  );
}
