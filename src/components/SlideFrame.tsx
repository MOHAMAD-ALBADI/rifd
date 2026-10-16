import { ReactNode } from 'react';
import { SlideMeta } from '../data/content';
import { Eyebrow, Headline, Reveal } from './primitives';

/** Scene grid on the 1920×1080 stage: eyebrow → headline → (statement) → one centrepiece. */
export function SlideFrame({ meta, title, accent, sub, children, titleClass = '', subClass = '', aside }: {
  meta: SlideMeta; title: string; accent?: string; sub?: ReactNode; children: ReactNode; titleClass?: string; subClass?: string; aside?: ReactNode;
}) {
  return (
    <div className="relative flex h-full w-full flex-col px-5 pb-12 pt-20 text-snow lg:px-[120px] lg:pb-[112px] lg:pt-[116px]">
      <header className="relative z-10 flex items-end justify-between gap-10">
        <div className="max-w-[1680px]">
          <Eyebrow no={meta.no} en={meta.en} official={meta.official} />
          <Headline text={title} accent={accent} className={`mt-3 text-[32px] font-extrabold leading-[1.28] lg:mt-4 lg:text-[64px] lg:leading-[1.18] ${titleClass}`} />
          {sub && <Reveal delay={0.3} className={`mt-2 max-w-[1560px] text-[18px] leading-relaxed text-mist lg:mt-3 lg:text-[28px] lg:leading-[1.5] ${subClass}`}>{sub}</Reveal>}
        </div>
        {aside && <div className="hidden shrink-0 lg:block">{aside}</div>}
      </header>
      <div className="relative z-10 mt-6 flex min-h-0 flex-1 flex-col lg:mt-10">{children}</div>
    </div>
  );
}

/** One disciplined backdrop: deep navy with a soft brand-blue light from above. No patterns. */
export function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-night-deep">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(1600px 900px at 70% -20%, rgba(59,130,246,0.16), transparent 60%), radial-gradient(1200px 700px at 0% 120%, rgba(20,209,200,0.07), transparent 60%), linear-gradient(180deg, #0B1F3B 0%, #071629 70%)' }} />
    </div>
  );
}
