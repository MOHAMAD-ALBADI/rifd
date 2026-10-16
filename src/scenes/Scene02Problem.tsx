import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROBLEM, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { Item, Reveal, Stagger, StatusBadge } from '../components/primitives';
import { EASE, T } from '../lib/motion';

/* Three mini product scenarios showing the friction as students actually live it (illustrative). */

function SearchingMock() {
  const msgs = [['مجموعة الدفعة', 'أحد يقدر يشرح Recursion؟', 'بلا رد'], ['مجموعة المادة', 'مين عنده ملخص Python؟', 'رد غير مؤكد'], ['رسالة خاصة', 'تعرف أحد يدرّس برمجة؟', 'لم تُقرأ']];
  return (
    <div className="h-full space-y-2 rounded-[22px] bg-white p-4">
      {msgs.map(([g, m, s], i) => (
        <div key={g} className="flex items-center justify-between gap-3 rounded-xl bg-surface-2 px-3 py-2.5" style={{ opacity: 1 - i * 0.12 }}>
          <div className="min-w-0"><div className="text-[15px] font-bold text-ink-3 lg:text-[18px]">{g}</div><div className="truncate text-[17px] text-ink lg:text-[20px]">{m}</div></div>
          <span className="shrink-0 rounded-full bg-amber-50 px-2.5 py-0.5 text-[14px] font-bold text-amber-700 lg:text-[18px]">{s}</span>
        </div>
      ))}
    </div>
  );
}

function PortfolioMock() {
  return (
    <div className="h-full rounded-[22px] bg-white p-4">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-[20px] font-bold text-white">س</span>
        <div><div className="text-[18px] font-bold text-ink lg:text-[21px]">سالم · مصمم هويات</div><div className="text-[15px] text-ink-3 lg:text-[18px]">معرض أعمال شخصي</div></div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">{[0, 1, 2].map((k) => <div key={k} className="h-14 rounded-xl" style={{ background: ['#DCE8FE', '#C9F5F2', '#E6ECF6'][k] }} />)}</div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-surface-2 px-3 py-2 text-[16px] lg:text-[19px]"><span className="text-ink-3">طلبات هذا الشهر</span><b className="num text-ink-3">0</b></div>
    </div>
  );
}

function InstitutionMock() {
  const rows = [['بريد', 'ورشة تصميم واجهات'], ['ملصق', 'مسابقة برمجة'], ['نموذج', 'طلب دعم أكاديمي'], ['إنستغرام', 'تدريب صيفي']];
  return (
    <div className="h-full rounded-[22px] bg-white p-4">
      <div className="flex items-center justify-between text-[16px] lg:text-[19px]"><b className="text-ink">صندوق الخدمات الطلابية</b><span className="rounded-full bg-amber-50 px-2.5 text-[14px] font-bold text-amber-700 lg:text-[18px]">12 غير مصنّف</span></div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {rows.map(([c, t], i) => (
          <div key={c} className="rounded-xl bg-surface-2 px-3 py-2" style={{ transform: `rotate(${[-1.5, 1, 1.2, -1][i]}deg)` }}>
            <div className="text-[14px] font-bold text-ink-3 lg:text-[18px]">{c}</div><div className="text-[16px] leading-snug text-ink lg:text-[18px]">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const MOCKS = [SearchingMock, PortfolioMock, InstitutionMock];
const RESOLVED = ['طلب واحد يصل إلى مرشد مؤهل وموثّق', 'طلبات مدفوعة تصل إلى مهارته مباشرة', 'كل الخدمات في نظام واحد قابل للقياس'];

export default function Scene02Problem() {
  const [unified, setUnified] = useState(false);
  return (
    <SlideFrame meta={SLIDES[1]} title={PROBLEM.headline} accent="غير منظّم." sub={PROBLEM.statement} titleClass="lg:!text-[60px]">
      <div className="relative flex flex-1 flex-col">
        <Stagger className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10" delay={0.45} step={0.14}>
          {PROBLEM.items.map((p, i) => {
            const Mock = MOCKS[i];
            return (
              <Item key={p.no} className="flex flex-col">
                <div className="relative">
                  <motion.div className="lg:h-[262px]" animate={{ opacity: unified ? 0.35 : 1, scale: unified ? 0.97 : 1 }} transition={T.base}><Mock /></motion.div>
                  <AnimatePresence>
                    {unified && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0 } }} transition={{ ...T.base, delay: i * 0.12 }}
                        className="absolute inset-0 flex items-center justify-center rounded-[22px] border border-teal/50 bg-night/85 p-5 text-center backdrop-blur-sm">
                        <span className="text-[20px] font-extrabold leading-snug text-teal-300 lg:text-[26px]">{RESOLVED[i]}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="num text-[20px] font-bold text-teal lg:text-[24px]">{p.no}</span>
                  <h3 className="text-[26px] font-extrabold lg:text-[34px]">{p.title}</h3>
                </div>
                <p className="mt-2 text-[18px] leading-relaxed text-mist lg:text-[24px] lg:leading-[1.6]">{p.body}</p>
              </Item>
            );
          })}
        </Stagger>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-6 pt-6">
          <Reveal delay={1.1} className="max-w-[1220px]">
            <AnimatePresence initial={false}>
              <motion.p key={String(unified)} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0 } }} transition={{ duration: 0.4, ease: EASE }}
                className="text-[20px] font-bold leading-snug text-snow lg:text-[30px]">
                {unified ? 'رِفد: منظومة واحدة تجمع الطالب، وصاحب المهارة، والمؤسسة.' : PROBLEM.result}
              </motion.p>
            </AnimatePresence>
          </Reveal>
          <div className="flex items-center gap-4">
            <StatusBadge status="simulated" />
            <button onClick={() => setUnified((u) => !u)} className="no-print btn-deck focus-ring px-7 py-3.5 text-[19px] lg:text-[22px]">
              {unified ? 'العودة إلى الواقع' : 'منظومة واحدة ←'}
            </button>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
