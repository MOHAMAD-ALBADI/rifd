import { motion } from 'framer-motion';
import { COVER, SLIDES, TEAM } from '../data/content';
import { AnimatedHeading, BrandLogo, SponsorLogoStrip, useInitial } from '../components/primitives';
import { ThreeScene } from '../three/ThreeScene';
import { CoverFallback } from '../components/Fallbacks';
import { T } from '../lib/motion';
import { useDeck } from '../lib/deck';

export default function S01Cover({ bare = false }: { bare?: boolean }) {
  const initial = useInitial();
  const { goTo } = useDeck();
  const demoIndex = SLIDES.findIndex((s) => s.id === 's7');
  const show = (delay: number) => ({ initial: initial === false ? false : { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { ...T.slow, delay } });

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden text-paper">
      {/* 3D opportunity dome — occupies the physical left (RTL end) */}
      <div className="relative order-2 h-[340px] w-full lg:absolute lg:inset-y-0 lg:left-0 lg:order-none lg:h-full lg:w-[56%]">
        <div className="absolute inset-0" style={{ maskImage: 'linear-gradient(to left, transparent 0%, black 22%)', WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 22%)' }}>
          <ThreeScene scene="cover" fallback={<CoverFallback />} />
        </div>
      </div>

      <div className="relative z-10 order-1 flex flex-col px-5 pt-20 lg:order-none lg:h-full lg:w-[52%] lg:justify-center lg:pb-[150px] lg:pe-0 lg:ps-[96px] lg:pt-0">
        <motion.div {...show(0.05)}>
          <div className="hidden lg:block"><BrandLogo size={118} /></div>
          <div className="lg:hidden"><BrandLogo size={72} /></div>
        </motion.div>
        <motion.div {...show(0.25)} className="label mt-8 text-teal/90 lg:mt-12" style={{ textAlign: 'right' }}>
          {COVER.kicker}
        </motion.div>
        <AnimatedHeading
          as="h1"
          text={COVER.headline}
          accent={['الفرص']}
          delay={0.35}
          className="mt-3 text-[2.6rem] font-extrabold leading-[1.15] lg:text-[5.4rem] lg:leading-[1.08]"
        />
        <motion.p {...show(0.75)} className="mt-5 max-w-[620px] text-lg leading-relaxed text-white/75 lg:text-[1.55rem] lg:leading-[1.6]">
          {COVER.statement}
        </motion.p>
        <motion.div {...show(0.85)} className="mt-5 flex items-center gap-3 text-[18px] text-white/70"><span className="h-2 w-2 rounded-full bg-teal" />فريق رِفد: {TEAM.members.map((m) => m.name.split(' ')[0] + ' ' + m.name.split(' ').slice(-1)[0]).join(' · ')}</motion.div>
        <motion.div {...show(0.95)} className="no-print mt-8 flex flex-wrap gap-3">
          <button onClick={() => goTo(1)} className="focus-ring group inline-flex items-center gap-3 rounded-full bg-teal px-6 py-3 text-lg font-bold text-navy-950 transition hover:bg-teal-300">
            ابدأ العرض
            <span className="transition group-hover:-translate-x-1">←</span>
          </button>
          <button onClick={() => goTo(demoIndex)} className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-lg text-white/85 transition hover:border-teal/60 hover:text-white">
            <span className="h-2 w-2 rounded-full bg-teal" /> العرض التجريبي الحي
          </button>
        </motion.div>
      </div>

      <motion.div {...show(1.1)} className="relative z-10 order-3 px-5 pb-8 lg:absolute lg:bottom-[92px] lg:left-[88px] lg:right-[88px] lg:px-0 lg:pb-0">
        <div className="mb-2 flex items-center justify-between text-[15px] text-white/50">
          <span>الشركاء والداعمون</span>
          <span className="en">{COVER.event}</span>
        </div>
        <SponsorLogoStrip unit={44} className="justify-between lg:flex-nowrap" />
      </motion.div>
    </div>
  );
}
