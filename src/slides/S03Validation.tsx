import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDES, VALIDATION } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { CountUp, Item, StatusBadge, Stagger } from '../components/primitives';
import { T } from '../lib/motion';

const TESTS = [
  'مقابلات مع 15–20 طالبًا: أين يبحثون عن المساعدة اليوم؟ وكم تستغرق؟',
  'مقابلات مع طلبة يملكون مهارات: هل قدّموا خدمات سابقًا؟ وما العائق؟',
  'حديث مع جهات الدعم الطلابي: كيف تُتابع البرامج والنتائج حاليًا؟',
];

export default function S03Validation() {
  const [open, setOpen] = useState<number | null>(0);
  const v = VALIDATION.verified;
  return (
    <SlideFrame meta={SLIDES[2]} title={VALIDATION.headline} accent={['إثبات', 'حجمها.']} sub={VALIDATION.sub}>
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* Verified context */}
        <Stagger className="card-l flex flex-col p-6 lg:p-7" delay={0.4}>
          <div className="flex items-center justify-between">
            <span className="label text-ink-soft">VERIFIED CONTEXT · OMAN</span>
            <StatusBadge status="verified" light />
          </div>
          <div className="mt-5 grid flex-1 grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-ink/10">
            {v.stats.map((s, i) => (
              <Item key={i} className="flex items-baseline justify-between gap-4 lg:py-4">
                <span className="text-base text-ink-soft lg:text-lg">{s.label}</span>
                <span className="shrink-0 text-[2.3rem] font-bold text-ink lg:text-[3.1rem]" dir="ltr">
                  <CountUp value={s.value} decimals={s.decimals ?? 0} />
                  {s.suffix && <span className="num text-teal-700">{s.suffix}</span>}
                </span>
              </Item>
            ))}
          </div>
          <a href={v.url} target="_blank" rel="noreferrer" className="mt-4 text-sm text-rifd-600 underline-offset-4 hover:underline">
            المصدر: {v.source} ↗
          </a>
          <p className="mt-2 text-xs text-ink-soft">هذه الأرقام تصف حجم المجتمع المستهدف، لا حجم المشكلة. حجم المشكلة نثبته بالأدلة المقابلة.</p>
        </Stagger>

        {/* Evidence being collected + hypotheses */}
        <Stagger className="flex min-h-0 flex-col gap-4" delay={0.55}>
          <Item className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {VALIDATION.evidence.map((e) => (
              <div key={e.key} className={`rounded-2xl p-4 ${e.value ? 'card-l' : 'border-2 border-dashed border-ink/15 bg-white/50'}`}>
                <div className="text-sm font-bold text-ink">{e.title}</div>
                <div className={`mt-2 text-2xl font-bold ${e.value ? 'text-ink' : 'text-ink/30'}`}>{e.value ?? '—'}</div>
                <div className="mt-1 text-[0.72rem] leading-snug text-ink-soft">{e.hint}</div>
                {!e.value && <StatusBadge status="placeholder" light className="mt-2" />}
              </div>
            ))}
          </Item>

          <Item className="card-l flex-1 p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="label text-ink-soft">HYPOTHESES · HOW WE TEST</span>
              <span className="text-xs text-ink-soft">اضغط لعرض طريقة الاختبار</span>
            </div>
            <div className="flex flex-col gap-2">
              {VALIDATION.hypotheses.map((h, i) => (
                <button key={h.code} onClick={() => setOpen(open === i ? null : i)} className={`focus-ring rounded-xl border p-3 text-right transition ${open === i ? 'border-rifd/30 bg-rifd/[0.05]' : 'border-ink/10 hover:border-ink/20'}`}>
                  <div className="flex items-start gap-3">
                    <span className="num mt-0.5 rounded-md bg-navy px-1.5 py-0.5 text-xs font-bold text-teal">{h.code}</span>
                    <span className="flex-1 text-[0.98rem] leading-relaxed text-ink">{h.text}</span>
                  </div>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={T.fast} className="overflow-hidden">
                        <div className="mt-2 border-t border-ink/10 pt-2 text-sm text-ink-soft">الاختبار: {TESTS[i]}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </Item>

          <Item className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-bold text-ink">بدائل شائعة نتحقق منها في المقابلات:</span>
            {VALIDATION.alternatives.map((a) => (
              <span key={a} className="rounded-full border border-ink/10 bg-white px-3 py-1 text-sm text-ink-soft">{a}</span>
            ))}
          </Item>
        </Stagger>
      </div>
    </SlideFrame>
  );
}
