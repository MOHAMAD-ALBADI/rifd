import { motion } from 'framer-motion';
import { COVER, SLIDES } from '../data/content';
import { AnimatedHeading, BrandLogo, SponsorLogoStrip, StatusBadge, useInitial } from '../components/primitives';
import { JourneyStack } from '../components/JourneyStack';
import { T } from '../lib/motion';
import { useDeck } from '../lib/deck';

export default function S01Cover() {
  const initial = useInitial();
  const { goTo } = useDeck();
  const demoIndex = SLIDES.findIndex((s) => s.id === 's6');
  const show = (delay: number) => ({ initial: initial === false ? false : { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { ...T.slow, delay } });

  return (
    <div className="relative flex h-full w-full flex-col px-5 pb-8 pt-16 text-ink lg:px-[120px] lg:pb-[240px] lg:pt-[96px]">
      <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.div {...show(0.05)}>
            <div className="hidden lg:block"><BrandLogo size={128} /></div>
            <div className="lg:hidden"><BrandLogo size={72} /></div>
          </motion.div>
          <motion.div {...show(0.2)} className="label mt-8 text-[14px] text-rifd-600 lg:mt-12 lg:text-[20px]">{COVER.kicker}</motion.div>
          <AnimatedHeading as="h1" text={COVER.headline} accent={['الفرص']} delay={0.3}
            className="mt-3 text-[44px] font-extrabold leading-[1.12] lg:mt-4 lg:text-[108px] lg:leading-[1.08]" />
          <motion.p {...show(0.65)} className="mt-5 max-w-[820px] text-[20px] leading-relaxed text-ink-2 lg:mt-7 lg:text-[32px] lg:leading-[1.55]">
            {COVER.statement}
          </motion.p>
          <motion.div {...show(0.85)} className="no-print mt-8 flex flex-wrap gap-4 lg:mt-10">
            <button onClick={() => goTo(1)} className="btn-primary focus-ring px-8 py-4 text-[20px] lg:text-[24px]">ابدأ العرض <span>←</span></button>
            <button onClick={() => goTo(demoIndex)} className="btn-ghost focus-ring px-8 py-4 text-[20px] lg:text-[24px]">جرّب المنتج</button>
          </motion.div>
        </div>
        <motion.div {...show(0.5)} className="relative lg:h-[600px]">
          <JourneyStack className="h-full" />
          <StatusBadge status="demo" className="mt-3 lg:absolute lg:bottom-0 lg:left-0 lg:mt-0" />
        </motion.div>
      </div>
      <motion.div {...show(1)} className="mt-8 lg:absolute lg:bottom-[100px] lg:left-[120px] lg:right-[120px] lg:mt-0">
        <SponsorLogoStrip unit={46} className="justify-between lg:flex-nowrap" />
      </motion.div>
    </div>
  );
}
