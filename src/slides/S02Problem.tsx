import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROBLEM, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { Item, StatusBadge, Stagger } from '../components/primitives';
import { T } from '../lib/motion';

/* Each friction is shown as the moment a student actually lives it (illustrative mock), not as abstract nodes. */

function ChatMock() {
  return (
    <div className="rounded-2xl bg-surface-2 p-4">
      <div className="flex items-center justify-between text-[16px] text-ink-3 lg:text-[18px]"><span className="font-bold text-ink-2">مجموعة الدفعة</span><span>412 عضو</span></div>
      <div className="mt-3 max-w-[92%] rounded-2xl rounded-tr-sm bg-white p-3.5 text-[17px] leading-snug shadow-card lg:text-[20px]">أحد يقدر يشرح لي Recursion قبل اختبار الخميس؟</div>
      <div className="mt-2 text-[15px] text-ink-3 lg:text-[18px]">شوهدت 38 مرة · <span className="font-bold text-amber-700">بلا رد منذ يومين</span></div>
    </div>
  );
}

function ProfileMock() {
  return (
    <div className="rounded-2xl bg-surface-2 p-4">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-teal-600 text-[18px] font-bold text-white">ن</span>
        <div><div className="text-[17px] font-bold lg:text-[20px]">نور · تصميم ومونتاج</div><div className="text-[15px] text-ink-3 lg:text-[18px]">حساب شخصي</div></div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        {[['0', 'طلبات'], ['0', 'عملاء'], ['—', 'خبرة موثّقة']].map(([v, l]) => (
          <div key={l} className="rounded-xl bg-white py-2"><div className="num text-[22px] font-extrabold text-ink-3 lg:text-[26px]">{v}</div><div className="text-[14px] text-ink-3 lg:text-[16px]">{l}</div></div>
        ))}
      </div>
    </div>
  );
}

function ScatterMock() {
  const items = [['بريد الجامعة', 'ورشة تصميم واجهات'], ['ملصق', 'مسابقة برمجة'], ['إنستغرام', 'تدريب صيفي'], ['واتساب', 'مشروع لنادٍ']];
  return (
    <div className="grid grid-cols-2 gap-2 rounded-2xl bg-surface-2 p-4">
      {items.map(([c, t], i) => (
        <div key={c} className="rounded-xl bg-white p-2.5 shadow-card" style={{ transform: `rotate(${[-2, 1.5, 1, -1.5][i]}deg)` }}>
          <div className="text-[14px] font-bold text-ink-3 lg:text-[16px]">{c}</div>
          <div className="text-[16px] leading-snug lg:text-[19px]">{t}</div>
        </div>
      ))}
    </div>
  );
}

const MOCKS = [ChatMock, ProfileMock, ScatterMock];

export default function S02Problem() {
  const [solved, setSolved] = useState(false);
  return (
    <SlideFrame meta={SLIDES[1]} title={PROBLEM.headline} accent={['يلتقيان.']}
      aside={<StatusBadge status="demo" />}>
      <Stagger className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8" delay={0.35} step={0.12}>
        {PROBLEM.frictions.map((f, i) => {
          const Mock = MOCKS[i];
          return (
            <Item key={f.key} className="card flex flex-col p-6 lg:p-8">
              <div className="text-[16px] font-bold text-rifd-600 lg:text-[20px]">{f.who}</div>
              <div className="relative mt-3">
                <Mock />
                <AnimatePresence>
                  {solved && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={T.fast} className="absolute inset-0 grid place-items-center rounded-2xl bg-white/80 backdrop-blur-[2px]">
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-teal-50 text-[32px] text-teal-700">✓</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <h3 className="mt-6 text-[24px] font-extrabold leading-tight lg:text-[34px]">{f.title}</h3>
              <AnimatePresence mode="wait">
                {solved ? (
                  <motion.p key="fix" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={T.fast} className="mt-3 rounded-2xl bg-rifd-50 p-4 text-[18px] font-bold leading-relaxed text-rifd-700 lg:text-[24px]">
                    مع رِفد: {f.fix}
                  </motion.p>
                ) : (
                  <motion.p key="line" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={T.fast} className="mt-3 text-[18px] leading-relaxed text-ink-2 lg:text-[24px]">
                    {f.line}
                  </motion.p>
                )}
              </AnimatePresence>
            </Item>
          );
        })}
      </Stagger>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 lg:mt-8">
        <p className="text-[18px] font-bold text-ink lg:text-[26px]">
          {solved ? 'احتياج واحد ← مطابقة ← خدمة ← نتيجة موثّقة.' : 'النتيجة اليوم: وقت ضائع، جودة غير مضمونة، ومهارات لا تُستثمر.'}
        </p>
        <button onClick={() => setSolved((s) => !s)} className="no-print btn-primary focus-ring px-7 py-3.5 text-[18px] lg:text-[22px]">
          {solved ? 'العودة إلى الواقع الحالي' : 'كيف يبدو مع رِفد؟'}
        </button>
      </div>
    </SlideFrame>
  );
}
