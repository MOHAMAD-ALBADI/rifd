import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useEnv, useSlide } from '../lib/env';
import { EASE } from '../lib/motion';

/* Cover visual: three real product moments in a 3D stack, cycling request → match → verified outcome. */

function Avatar({ t, tone = 'blue' }: { t: string; tone?: 'blue' | 'teal' }) {
  return <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-[22px] font-bold text-white ${tone === 'blue' ? 'bg-gradient-to-br from-rifd-500 to-rifd-700' : 'bg-gradient-to-br from-teal-500 to-teal-700'}`}>{t}</span>;
}

const CARDS = [
  {
    key: 'need', step: '1 · احتياج',
    body: (
      <>
        <div className="flex items-center gap-4"><Avatar t="س" /><div><div className="text-[24px] font-bold">سارة · علوم الحاسوب</div><div className="text-[18px] text-ink-3">طلب جديد</div></div></div>
        <p className="mt-5 text-[26px] font-medium leading-snug">«أحتاج أفهم الدوال العودية في Python قبل الاختبار»</p>
        <div className="mt-5 flex gap-2 text-[18px]"><span className="chip">برمجة</span><span className="chip">خلال 5 أيام</span></div>
      </>
    ),
  },
  {
    key: 'match', step: '2 · مطابقة',
    body: (
      <>
        <div className="flex items-center gap-4">
          <Avatar t="ي" tone="teal" />
          <div className="flex-1"><div className="text-[24px] font-bold">يوسف الحارثي</div><div className="text-[18px] text-ink-3">مرشد أقران · 23 جلسة · ★ 4.9</div></div>
          <div className="text-center"><div className="num text-[34px] font-extrabold text-rifd-600">94%</div><div className="text-[16px] text-ink-3">تطابق</div></div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 text-[18px]"><span className="chip">Python</span><span className="chip">الدوال العودية</span></div>
        <div className="mt-5 rounded-2xl bg-rifd-50 px-4 py-3 text-[20px] font-bold text-rifd-700">متاح الأربعاء 4:00 م</div>
      </>
    ),
  },
  {
    key: 'outcome', step: '3 · نتيجة موثّقة',
    body: (
      <>
        <div className="flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-teal-50 text-[28px] text-teal-700">✓</span>
          <div><div className="text-[24px] font-bold">جلسة مكتملة</div><div className="text-[18px] text-ink-3">تقييم سارة ★ 5.0</div></div>
        </div>
        <div className="mt-5 rounded-2xl border border-teal/40 bg-teal-50 p-4">
          <div className="text-[18px] text-teal-700">سجل خبرة يوسف</div>
          <div className="mt-1 text-[24px] font-bold">24 جلسة موثّقة</div>
          <div className="text-[18px] text-ink-3">اعتمدها مشرف الدعم الأكاديمي</div>
        </div>
      </>
    ),
  },
];

export function JourneyStack({ className = '' }: { className?: string }) {
  const { mode, reduced } = useEnv();
  const { active } = useSlide();
  const [cur, setCur] = useState(mode === 'print' ? 1 : 0);
  useEffect(() => {
    if (mode === 'print' || reduced || !active) return;
    const t = window.setInterval(() => setCur((c) => (c + 1) % CARDS.length), 2600);
    return () => window.clearInterval(t);
  }, [mode, reduced, active]);

  if (mode === 'flow') {
    // phones: a single flat card that still cycles through the journey
    const c = CARDS[cur];
    return (
      <div className={`relative ${className}`}>
        <motion.div key={c.key} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }} className="card p-6">
          <div className="mb-3 text-[16px] font-bold text-rifd-600">{c.step}</div>
          {c.body}
        </motion.div>
        <div className="mt-4 flex justify-center gap-2">
          {CARDS.map((x, i) => <button key={x.key} onClick={() => setCur(i)} aria-label={x.step} className={`focus-ring h-2.5 rounded-full transition-all ${i === cur ? 'w-10 bg-rifd-600' : 'w-2.5 bg-ink/20'}`} />)}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ perspective: 1800 }}>
      <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(14deg) rotateX(6deg)' }}>
        {CARDS.map((c, i) => {
          const d = (i - cur + CARDS.length) % CARDS.length; // 0 = front
          return (
            <motion.div
              key={c.key}
              className="card absolute inset-x-0 top-1/2 mx-auto w-[min(600px,100%)] p-8"
              animate={{ y: `calc(-50% + ${d * -78}px)`, x: d * -26, z: d * -140, scale: 1 - d * 0.07, opacity: d === 0 ? 1 : 0.7 - d * 0.15, rotateZ: d * -2 }}
              transition={{ duration: 0.9, ease: EASE }}
              style={{ zIndex: 10 - d, transformStyle: 'preserve-3d', boxShadow: d === 0 ? '0 40px 80px -30px rgba(11,31,59,.35)' : undefined }}
            >
              <div className="mb-4 text-[18px] font-bold text-rifd-600">{c.step}</div>
              {c.body}
            </motion.div>
          );
        })}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
        {CARDS.map((c, i) => (
          <button key={c.key} onClick={() => setCur(i)} aria-label={c.step} className={`focus-ring h-2.5 rounded-full transition-all ${i === cur ? 'w-10 bg-rifd-600' : 'w-2.5 bg-ink/20'}`} />
        ))}
      </div>
    </div>
  );
}
