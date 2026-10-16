import { motion } from 'framer-motion';
import { CLOSING, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { Item, Reveal, Stagger, StatusBadge } from '../components/primitives';
import { ThreeStage } from '../three/ThreeStage';
import { FinaleFallback } from '../components/Fallbacks';
import { T } from '../lib/motion';

/* Roadmap, team, the ask — and a calm finale where the product resolves into the RIFD mark. */
export default function Scene09Closing() {
  const hasTeam = CLOSING.team.length > 0;
  return (
    <SlideFrame meta={SLIDES[8]} title={CLOSING.headline} accent="قابلة للقياس." titleClass="lg:!text-[60px]">
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="flex flex-col gap-6">
          {/* roadmap */}
          <div>
            <div className="mb-3 flex items-center gap-3"><span className="text-[18px] font-bold text-fog lg:text-[21px]">خارطة التنفيذ</span><StatusBadge status="planned" /></div>
            <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4" delay={0.35} step={0.1}>
              {CLOSING.roadmap.map((r, i) => (
                <Item key={r.no} className="relative">
                  <div className="flex items-center gap-2">
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-[18px] font-extrabold ${i === 0 ? 'bg-teal text-night' : 'border-2 border-white/25 text-mist'}`}><span className="num">{i + 1}</span></span>
                    {i < 3 && <span className="hidden h-0.5 flex-1 bg-white/15 lg:block" />}
                  </div>
                  <h4 className="mt-3 text-[20px] font-extrabold lg:text-[26px]">{r.title}</h4>
                  <p className="mt-1 text-[16px] leading-relaxed text-mist lg:text-[20px]">{r.body}</p>
                </Item>
              ))}
            </Stagger>
          </div>

          {/* team + achieved */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Reveal delay={0.6} className="panel p-5 lg:p-6">
              <div className="text-[17px] font-bold text-fog lg:text-[20px]">{hasTeam ? 'الفريق' : 'أدوار الفريق خلال التنفيذ'}</div>
              <ul className="mt-3 space-y-2">
                {hasTeam
                  ? CLOSING.team.map((m) => <li key={m.name} className="text-[18px] lg:text-[22px]"><b>{m.name}</b> <span className="text-mist">· {m.role}</span></li>)
                  : CLOSING.roles.map((r) => <li key={r} className="flex items-center gap-3 text-[18px] font-bold lg:text-[22px]"><span className="h-2 w-2 rounded-full bg-teal" />{r}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={0.7} className="panel !border-teal/30 p-5 lg:p-6">
              <div className="flex items-center justify-between"><span className="text-[17px] font-bold text-fog lg:text-[20px]">ما أنجزناه فعليًا</span><StatusBadge status="achieved" /></div>
              <ul className="mt-3 space-y-2">
                {CLOSING.achieved.map((a) => <li key={a} className="flex items-center gap-3 text-[18px] font-bold lg:text-[22px]"><span className="text-teal">✓</span>{a}</li>)}
              </ul>
            </Reveal>
          </div>

          {/* the ask */}
          <Reveal delay={0.85} className="rounded-[24px] bg-snow px-6 py-4 text-night">
            <div className="text-[16px] font-bold text-ink-3 lg:text-[19px]">ما نطلبه</div>
            <p className="mt-1 text-[19px] font-extrabold leading-snug lg:text-[26px]">{CLOSING.ask}</p>
          </Reveal>
        </div>

        {/* finale */}
        <div className="relative flex min-h-[360px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
          <ThreeStage scene="finale" fallback={<FinaleFallback />} className="relative min-h-[300px] flex-1" />
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ ...T.slow, delay: 2.6 }}
            className="relative z-10 px-6 pb-4 text-center text-[24px] font-extrabold leading-snug lg:text-[34px]">
            <span className="text-teal">رِفد</span> — لأن المهارات لا ينبغي أن تبقى فرصًا ضائعة.
          </motion.p>
        </div>
      </div>
    </SlideFrame>
  );
}
