import { motion } from 'framer-motion';
import { SLIDES, TEAM } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { BrandLogo, Item, SponsorLogoStrip, Stagger, useInitial } from '../components/primitives';
import { T } from '../lib/motion';

export default function S11Team() {
  const initial = useInitial();
  const hasTeam = TEAM.members.length > 0;
  return (
    <SlideFrame meta={SLIDES[10]} title={TEAM.headline} accent={['التالية']}>
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div className="flex flex-col gap-5">
          <h3 className="text-[20px] font-extrabold text-ink-2 lg:text-[26px]">{hasTeam ? 'الفريق' : 'الأدوار خلال التنفيذ'}</h3>
          <Stagger className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5" delay={0.3} step={0.08}>
            {hasTeam
              ? TEAM.members.map((m) => (
                  <Item key={m.name} className="card flex flex-col p-6">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-rifd-500 to-rifd-700 text-[26px] font-bold text-white">{m.name.slice(0, 1)}</span>
                    <div className="mt-4 text-[24px] font-extrabold lg:text-[30px]">{m.name}</div>
                    <div className="text-[18px] font-bold text-rifd-600 lg:text-[22px]">{m.role}</div>
                    <p className="mt-2 text-[17px] text-ink-2 lg:text-[20px]">{m.capability}</p>
                  </Item>
                ))
              : TEAM.roles.map((r, i) => (
                  <Item key={r.role} className="card flex flex-col p-6 lg:p-7">
                    <span className="num text-[18px] font-bold text-rifd-600 lg:text-[20px]">0{i + 1}</span>
                    <div className="mt-2 text-[22px] font-extrabold leading-tight lg:text-[30px]">{r.role}</div>
                    <p className="mt-2 text-[17px] leading-relaxed text-ink-2 lg:text-[22px]">{r.duty}</p>
                  </Item>
                ))}
          </Stagger>
        </div>

        <div className="flex flex-col gap-5">
          <div className="card p-6 lg:p-7">
            <h3 className="text-[20px] font-extrabold lg:text-[26px]">ما نطلبه للخطوة التالية</h3>
            <div className="mt-4 space-y-4">
              {TEAM.asks.map((a) => (
                <div key={a.title} className="flex items-start gap-3">
                  <span className="mt-2.5 h-3 w-3 shrink-0 rounded-full bg-rifd-600" />
                  <div><div className="text-[20px] font-extrabold lg:text-[26px]">{a.title}</div><div className="text-[17px] text-ink-2 lg:text-[21px]">{a.line}</div></div>
                </div>
              ))}
            </div>
          </div>
          <motion.div initial={initial === false ? false : { opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...T.slow, delay: 0.6 }}
            className="flex flex-1 flex-col justify-center rounded-[28px] bg-navy p-7 text-white lg:p-9">
            <BrandLogo size={64} variant="dark" />
            <p className="mt-5 text-[28px] font-extrabold leading-snug lg:text-[40px]">{TEAM.closing}</p>
          </motion.div>
        </div>
      </div>
      <div className="mt-6"><SponsorLogoStrip unit={34} className="justify-between lg:flex-nowrap" /></div>
    </SlideFrame>
  );
}
