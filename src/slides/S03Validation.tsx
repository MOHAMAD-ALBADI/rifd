import { SLIDES, VALIDATION } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { CountUp, Item, StatusBadge, Stagger } from '../components/primitives';

export default function S03Validation() {
  const hasEvidence = VALIDATION.evidence.length > 0;
  return (
    <SlideFrame meta={SLIDES[2]} title={VALIDATION.headline} accent={['بالأدلة.']}>
      <div className="flex flex-1 flex-col gap-6 lg:gap-8">
        {/* verified facts */}
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <StatusBadge status="verified" />
            <a href={VALIDATION.sourceUrl} target="_blank" rel="noreferrer" className="text-[16px] text-ink-2 underline-offset-4 hover:underline lg:text-[20px]">{VALIDATION.source} ↗</a>
          </div>
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6" delay={0.3}>
            {VALIDATION.stats.map((s) => (
              <Item key={s.label} className="card p-6 lg:p-8">
                <div className="text-[48px] font-extrabold leading-none text-ink lg:text-[88px]" dir="ltr" style={{ textAlign: 'right' }}>
                  <CountUp value={s.value} decimals={s.decimals ?? 0} />
                  {s.suffix && <span className="num text-rifd-600">{s.suffix}</span>}
                </div>
                <div className="mt-3 text-[18px] text-ink-2 lg:mt-4 lg:text-[26px]">{s.label}</div>
              </Item>
            ))}
          </Stagger>
        </div>

        {/* evidence (appears automatically once collected) */}
        {hasEvidence && (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {VALIDATION.evidence.map((e) => (
              <div key={e.label} className="card p-5"><div className="num text-[40px] font-extrabold text-rifd-600">{e.value}</div><div className="text-[20px] text-ink-2">{e.label}</div></div>
            ))}
          </div>
        )}

        {/* how we prove the problem */}
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-[22px] font-extrabold lg:text-[30px]">كيف نثبت المشكلة</h3>
            <StatusBadge status="planned" />
          </div>
          <Stagger className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6" delay={0.55}>
            {VALIDATION.hypotheses.map((h) => (
              <Item key={h.code} className="rounded-[24px] border border-line bg-white/70 p-6">
                <span className="num rounded-lg bg-navy px-2.5 py-1 text-[16px] font-bold text-white lg:text-[18px]">{h.code}</span>
                <p className="mt-4 text-[19px] font-bold leading-relaxed lg:text-[25px]">{h.text}</p>
                <p className="mt-3 text-[16px] text-ink-3 lg:text-[20px]">الطريقة: {h.method}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </div>
    </SlideFrame>
  );
}
