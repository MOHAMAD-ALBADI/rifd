import { SLIDES, TEAM } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { Item, Stagger } from '../components/primitives';

export default function N06Team() {
  return (
    <SlideFrame meta={SLIDES[5]} title={TEAM.headline} accent={['واقع.']}>
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <Stagger className="flex flex-col gap-4" delay={0.4}>
          {TEAM.members.map((m) => (
            <Item key={m.name} className="card-d relative overflow-hidden p-7">
              <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-teal/20 blur-3xl" />
              <div className="flex items-center gap-5">
                <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-gradient-to-br from-rifd to-teal text-[34px] font-extrabold text-navy-950">{m.initials}</span>
                <div>
                  <div className="text-[30px] font-extrabold">{m.name}</div>
                  <div className="text-[20px] font-bold text-teal-300">{m.role}</div>
                </div>
              </div>
              <p className="mt-5 text-[20px] leading-relaxed text-white/80">{m.capability}</p>
              <ul className="mt-4 space-y-2">
                {m.achievements.map((a) => <li key={a} className="flex items-start gap-3 text-[18px] text-white/75"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />{a}</li>)}
              </ul>
            </Item>
          ))}
        </Stagger>
        <div className="flex flex-col">
          <div className="mb-3 text-[18px] font-bold text-white/60">الأدوار خلال التنفيذ</div>
          <Stagger className="grid flex-1 grid-cols-2 gap-4" delay={0.55} step={0.07}>
            {TEAM.roles.map((r, i) => (
              <Item key={r.role} className="card-d p-5">
                <div className="num text-[18px] font-bold text-teal">0{i + 1}</div>
                <div className="mt-2 text-[22px] font-extrabold leading-tight">{r.role}</div>
                <p className="mt-2 text-[17px] leading-relaxed text-white/65">{r.duty}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </div>
    </SlideFrame>
  );
}
