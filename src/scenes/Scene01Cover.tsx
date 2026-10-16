import { motion } from 'framer-motion';
import { COVER, SLIDES } from '../data/content';
import { BrandLogo, Headline, Reveal, SponsorLogoStrip, StatusBadge, useInitial } from '../components/primitives';
import { ThreeStage } from '../three/ThreeStage';
import { HeroFallback } from '../components/Fallbacks';
import { useDeck } from '../lib/deck';
import { useEnv } from '../lib/env';
import { EASE } from '../lib/motion';

export default function Scene01Cover() {
  const { goTo } = useDeck();
  const { mode } = useEnv();
  const initial = useInitial();
  const demo = SLIDES.findIndex((s) => s.id === 's5');
  return (
    <div className="relative flex h-full w-full flex-col text-snow lg:block">
      {/* 3D product hero occupies the physical left (RTL end) */}
      {mode === 'flow' ? <div className="order-last px-5 pt-6"><HeroFallback /></div> : <ThreeStage scene="hero" fallback={<HeroFallback />} className="relative h-[420px] w-full lg:absolute lg:bottom-[230px] lg:left-[40px] lg:top-[40px] lg:h-auto lg:w-[54%]" />}
      <div className="absolute bottom-[262px] left-[120px] z-10 hidden lg:block"><StatusBadge status="simulated" /></div>

      <div className="relative z-10 flex flex-col px-5 pt-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[46%] lg:justify-center lg:pb-[190px] lg:pe-0 lg:ps-[120px] lg:pt-0">
        <motion.div initial={initial === false ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: EASE }}>
          <div className="hidden lg:block"><BrandLogo size={120} /></div>
          <div className="lg:hidden"><BrandLogo size={72} /></div>
        </motion.div>
        <Headline as="h1" text={COVER.headline} accent="الفرص" delay={0.35} className="mt-10 text-[46px] font-extrabold leading-[1.12] lg:mt-14 lg:text-[100px] lg:leading-[1.06]" />
        <Reveal delay={0.7} className="mt-6 max-w-[760px] text-[20px] leading-relaxed text-mist lg:text-[30px] lg:leading-[1.6]">{COVER.statement}</Reveal>
        <Reveal delay={0.95} className="mt-10 flex flex-wrap items-center gap-4">
          <button onClick={() => goTo(1)} className="btn-deck focus-ring px-8 py-4 text-[20px] lg:text-[24px]">ابدأ العرض <span>←</span></button>
          <button onClick={() => goTo(demo)} className="btn-deck-ghost focus-ring px-8 py-4 text-[20px] lg:text-[24px]">جرّب المنتج</button>
        </Reveal>
      </div>

      <Reveal delay={1.2} className="relative z-10 px-5 pb-8 pt-10 lg:absolute lg:bottom-[92px] lg:left-[120px] lg:right-[120px] lg:p-0">
        <div className="mb-3 flex items-center justify-between text-[15px] text-fog lg:text-[18px]">
          <span>الشركاء والداعمون</span>
          <span className="en">{COVER.event}</span>
        </div>
        <SponsorLogoStrip unit={44} className="justify-between lg:flex-nowrap" />
      </Reveal>
    </div>
  );
}
