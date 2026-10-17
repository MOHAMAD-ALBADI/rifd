import { SLIDES, TEAM } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { Item, Stagger } from '../components/primitives';

export default function N06Team() {
  return (
    <SlideFrame meta={SLIDES[8]} title={TEAM.headline} accent={['واقع.']}>
      <div className="flex min-h-0 flex-1 flex-col justify-center">
        <Stagger className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8" delay={0.4} step={0.1}>
          {TEAM.members.map((m) => (
            <Item key={m.name} className="card-d relative flex flex-col items-center overflow-hidden px-7 pb-9 pt-10 text-center">
              <div className="absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-teal/15 blur-3xl" />
              {m.photo
                ? <img src={m.photo} alt={m.name} className="relative h-32 w-32 rounded-full object-cover ring-4 ring-teal/40 ring-offset-4 ring-offset-navy-900" draggable={false} />
                : <span className="relative grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-rifd to-teal text-[52px] font-extrabold text-navy-950 ring-4 ring-teal/40 ring-offset-4 ring-offset-navy-900">{m.initials}</span>}
              <div className="relative mt-6 text-[28px] font-extrabold leading-tight">{m.name}</div>
              <div className="relative mt-2 text-[21px] font-bold text-teal-300">{m.role}</div>
              <div className="en relative mt-1 text-[15px] font-semibold tracking-[0.15em] text-white/45">{m.en.toUpperCase()}</div>
              <span className="relative my-5 h-px w-16 bg-white/15" />
              <p className="relative text-[19px] leading-relaxed text-white/75">{m.duty}</p>
            </Item>
          ))}
        </Stagger>
        <p className="mt-6 text-center text-[16px] text-white/45">{TEAM.allocationNote}</p>
      </div>
    </SlideFrame>
  );
}
