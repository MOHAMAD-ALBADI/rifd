import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPETITION, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { Reveal, StatusBadge } from '../components/primitives';
import { T } from '../lib/motion';

/* Each alternative solves one part (per its public description). RIFD proposes to connect all four. */
export default function Scene07Competition() {
  const [sel, setSel] = useState<string>('rifd');
  const alt = COMPETITION.alternatives.find((a) => a.key === sel);
  const lit = (p: number) => sel === 'rifd' || alt?.pillar === p;

  return (
    <SlideFrame meta={SLIDES[6]} title={COMPETITION.headline} accent="تحويلها إلى قيمة." sub={COMPETITION.explanation} titleClass="lg:!text-[54px]" subClass="lg:!text-[24px]">
      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* RIFD's intended journey */}
        <div className="flex flex-col">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-[18px] font-bold text-fog lg:text-[21px]">{sel === 'rifd' ? 'رِفد يربط الأربعة في رحلة واحدة' : `${alt?.name}: ${alt && alt.pillar >= 0 ? 'يركّز على جزء من الرحلة' : 'لا توجد معلومات موثّقة'}`}</span>
          </div>
          <div className="flex flex-1 flex-col justify-between gap-3">
            {COMPETITION.pillars.map((p, i) => (
              <motion.div key={p.no} animate={{ opacity: lit(i) ? 1 : 0.3 }} transition={T.base}
                className={`flex items-start gap-5 rounded-[20px] border px-5 py-3 ${lit(i) && sel === 'rifd' ? 'border-teal/40 bg-teal/[0.06]' : lit(i) ? 'border-rifd/50 bg-rifd/[0.08]' : 'border-white/10'}`}>
                <span className="num text-[24px] font-extrabold text-teal lg:text-[30px]">{p.no}</span>
                <div>
                  <h3 className="text-[22px] font-extrabold lg:text-[28px]">{p.title}</h3>
                  <p className="mt-0.5 text-[17px] text-mist lg:text-[21px]">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* alternatives */}
        <div className="flex flex-col">
          <div className="mb-3 text-[18px] font-bold text-fog lg:text-[21px]">البدائل الحالية — اختر لعرض ما تعلنه</div>
          <div className="space-y-1.5">
            {COMPETITION.alternatives.map((a) => (
              <button key={a.key} onClick={() => setSel(a.key)}
                className={`focus-ring flex w-full items-center justify-between gap-4 rounded-[14px] border px-5 py-2 text-right transition ${sel === a.key ? 'border-snow/60 bg-white/[0.08]' : 'border-white/10 hover:border-white/25'}`}>
                <span className={`text-[19px] font-extrabold lg:text-[24px] ${/[a-z]/i.test(a.name) ? 'en' : ''}`} style={{ textAlign: 'right' }}>{a.name}</span>
                <span className="text-[16px] text-mist lg:text-[20px]">{a.focus}</span>
              </button>
            ))}
            <button onClick={() => setSel('rifd')} className={`focus-ring mt-2 flex w-full items-center justify-between gap-4 rounded-[16px] border px-5 py-2.5 text-right transition ${sel === 'rifd' ? 'border-teal bg-teal/[0.12]' : 'border-teal/40 hover:bg-teal/[0.06]'}`}>
              <span className="text-[20px] font-extrabold text-teal-300 lg:text-[26px]">رِفد</span>
              <span className="text-[16px] text-mist lg:text-[20px]">رحلة كاملة داخل الجامعة</span>
            </button>
          </div>
          <AnimatePresence initial={false}>
            <motion.div key={sel} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0 } }} transition={T.fast} className="mt-3 rounded-[18px] bg-white/[0.04] px-4 py-3">
              {sel === 'rifd' ? (
                <div className="flex flex-wrap items-center gap-3"><StatusBadge status="proposed" /><span className="text-[17px] text-mist lg:text-[21px]">قدرات مقترحة سنتحقق منها في التجربة الأولى.</span></div>
              ) : (
                <p className="text-[17px] leading-relaxed text-mist lg:text-[21px]">{alt?.evidence} {alt?.source && <a href={alt.source} target="_blank" rel="noreferrer" className="font-bold text-teal-300 hover:underline">المصدر ↗</a>}</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Reveal delay={0.9} className="mt-4 rounded-[22px] border border-teal/30 bg-teal/[0.07] px-7 py-4">
        <p className="text-[20px] font-extrabold leading-snug lg:text-[27px]">{COMPETITION.central}</p>
      </Reveal>
    </SlideFrame>
  );
}
