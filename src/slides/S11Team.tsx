import { motion } from 'framer-motion';
import { SLIDES, TEAM } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { BrandLogo, Item, SponsorLogoStrip, StatusBadge, Stagger, useInitial } from '../components/primitives';
import { T } from '../lib/motion';

export default function S11Team() {
  const initial = useInitial();
  return (
    <SlideFrame meta={SLIDES[10]} title={TEAM.headline} accent={['واقع.']} titleClass="lg:!text-[2.7rem]">
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
        <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2" delay={0.4} step={0.08}>
          {TEAM.members.map((m, i) => (
            <Item key={i} className={`relative rounded-2xl p-4 lg:p-5 ${m.placeholder ? 'border-2 border-dashed border-white/15 bg-white/[0.02]' : 'card-d'}`}>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-rifd/40 to-teal/40 text-lg font-bold text-white/80">{m.placeholder ? '؟' : m.name.slice(0, 1)}</span>
                <div className="min-w-0">
                  <div className={`text-lg font-bold ${m.placeholder ? 'text-white/45' : ''}`}>{m.name}</div>
                  <div className="text-sm text-teal-300">{m.role}</div>
                </div>
              </div>
              <div className={`mt-3 text-sm ${m.placeholder ? 'text-white/35' : 'text-white/65'}`}>{m.capability}</div>
              <div className="mt-1 text-sm text-white/60"><span className="text-white/40">خلال التنفيذ:</span> {m.duty}</div>
              {m.placeholder && <StatusBadge status="placeholder" className="absolute left-3 top-3" />}
            </Item>
          ))}
        </Stagger>

        <div className="flex min-h-0 flex-col gap-4">
          <div className="card-d p-5">
            <div className="label text-teal">THE ASK</div>
            <div className="mt-1 text-xl font-bold">{TEAM.askTitle}</div>
            <div className="mt-3 space-y-2.5">
              {TEAM.asks.map((a) => (
                <div key={a.title} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
                  <div>
                    <div className="font-bold">{a.title}</div>
                    <div className={`text-sm ${a.placeholder ? 'text-white/40' : 'text-white/60'}`}>{a.line}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div initial={initial === false ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...T.slow, delay: 0.8 }}
            className="relative flex flex-1 flex-col justify-center overflow-hidden rounded-2xl border border-teal/25 bg-gradient-to-br from-navy-700 to-navy-950 p-6">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-teal/20 blur-3xl" />
            <BrandLogo size={54} />
            <p className="relative mt-4 text-[1.55rem] font-extrabold leading-snug lg:text-[1.9rem]">
              <span className="text-grad">رِفد</span> — لأن المهارات لا ينبغي أن تبقى فرصًا ضائعة.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="mt-4">
        <SponsorLogoStrip unit={30} className="justify-between lg:flex-nowrap" />
      </div>
    </SlideFrame>
  );
}
