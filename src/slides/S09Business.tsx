import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { Item, StatusBadge, Stagger } from '../components/primitives';
import { EASE, T } from '../lib/motion';

export default function S09Business() {
  const [price, setPrice] = useState(8);
  const [comm, setComm] = useState(12);
  const [open, setOpen] = useState(false);
  const rifd = price * (comm / 100);
  const provider = price - rifd;

  return (
    <SlideFrame meta={SLIDES[8]} title={BUSINESS.headline} accent={['يدفع؟']} aside={<StatusBadge status="assumption" />}>
      <div className="flex flex-1 flex-col gap-6 lg:gap-7">
        {/* who pays */}
        <Stagger className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-7" delay={0.3} step={0.12}>
          {BUSINESS.payers.map((p) => (
            <Item key={p.key} className={`flex flex-col rounded-[28px] p-6 lg:p-8 ${p.key === 'b2c' ? 'bg-rifd-600 text-white' : 'card'}`}>
              <div className="flex items-center gap-3">
                <span className={`en rounded-lg px-3 py-1 text-[16px] font-extrabold lg:text-[20px] ${p.key === 'b2c' ? 'bg-white/15' : 'bg-navy text-white'}`}>{p.tag}</span>
                <span className="text-[24px] font-extrabold lg:text-[34px]">{p.who} يدفع</span>
              </div>
              <div className="mt-4 text-[22px] font-bold lg:text-[30px]">{p.pays}</div>
              <div className={`mt-1 text-[18px] lg:text-[24px] ${p.key === 'b2c' ? 'text-white/90' : 'text-rifd-700'}`}>رِفد يحصل على: <b>{p.rifd}</b></div>
              <p className={`mt-3 text-[16px] leading-relaxed lg:text-[21px] ${p.key === 'b2c' ? 'text-white/80' : 'text-ink-2'}`}>لماذا يدفع؟ {p.why}</p>
            </Item>
          ))}
        </Stagger>

        <div className="grid flex-1 grid-cols-1 gap-5 lg:grid-cols-[1.25fr_1fr] lg:gap-7">
          {/* one session, where the money goes */}
          <div className="card flex flex-col p-6 lg:p-7">
            <h3 className="text-[20px] font-extrabold lg:text-[26px]">مثال: أين تذهب قيمة جلسة واحدة؟</h3>
            <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              <label htmlFor="b-price" className="block">
                <span className="flex justify-between text-[17px] lg:text-[20px]"><span className="text-ink-2">قيمة الجلسة</span><b><span className="num">{price}</span> ر.ع</b></span>
                <input id="b-price" type="range" min={3} max={40} value={price} onChange={(e) => setPrice(Number(e.target.value))} className="mt-2 w-full accent-rifd-600" dir="ltr" />
              </label>
              <label htmlFor="b-comm" className="block">
                <span className="flex justify-between text-[17px] lg:text-[20px]"><span className="text-ink-2">عمولة رِفد</span><b><span className="num">{comm}</span>%</b></span>
                <input id="b-comm" type="range" min={10} max={15} value={comm} onChange={(e) => setComm(Number(e.target.value))} className="mt-2 w-full accent-rifd-600" dir="ltr" />
              </label>
            </div>
            <div className="mt-auto pt-5">
              <div className="flex h-16 overflow-hidden rounded-2xl text-[17px] font-bold lg:text-[21px]">
                <motion.div className="flex items-center justify-center bg-teal-500 text-white" animate={{ width: `${100 - comm}%` }} transition={{ duration: 0.4, ease: EASE }}>
                  الطالب المرشد: <span className="num ms-2">{provider.toFixed(2)}</span><span className="ms-1">ر.ع</span>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-navy text-white" animate={{ width: `${comm}%` }} transition={{ duration: 0.4, ease: EASE }}>
                  <span className="num">{rifd.toFixed(2)}</span>
                </motion.div>
              </div>
              <div className="mt-2 flex justify-between text-[15px] text-ink-3 lg:text-[18px]"><span>يذهب للطالب الذي قدّم الخدمة</span><span>إيراد رِفد</span></div>
            </div>
          </div>

          {/* other streams + full canvas */}
          <div className="flex flex-col gap-4">
            <div className="card flex-1 p-6 lg:p-7">
              <h3 className="text-[20px] font-extrabold lg:text-[26px]">إيرادات إضافية لاحقًا</h3>
              <ul className="mt-3 space-y-2.5">
                {BUSINESS.more.map((m) => (
                  <li key={m.who + m.what} className="flex items-baseline gap-3 text-[17px] lg:text-[21px]"><span className="h-2 w-2 shrink-0 translate-y-[-3px] rounded-full bg-rifd-500" /><b>{m.who}:</b><span className="text-ink-2">{m.what}</span></li>
                ))}
              </ul>
            </div>
            <button onClick={() => setOpen(true)} className="no-print btn-ghost focus-ring py-4 text-[18px] lg:text-[22px]">عرض نموذج العمل الكامل (9 عناصر) والتكاليف</button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="absolute inset-0 z-40 flex items-center justify-center bg-ink/30 p-4 backdrop-blur-sm lg:p-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={T.fast} onClick={() => setOpen(false)}>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={T.base} onClick={(e) => e.stopPropagation()}
              className="scroll-thin max-h-full w-full max-w-[1600px] overflow-y-auto rounded-[28px] bg-white p-6 shadow-app lg:p-10" data-scroll>
              <div className="flex items-center justify-between">
                <h3 className="text-[26px] font-extrabold lg:text-[36px]">نموذج العمل التجاري</h3>
                <button onClick={() => setOpen(false)} className="btn-ghost focus-ring px-6 py-2.5 text-[18px] lg:text-[20px]">إغلاق</button>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {BUSINESS.canvas.map((b) => (
                  <div key={b.ar} className="rounded-[22px] border border-line p-5">
                    <div className="text-[20px] font-extrabold text-rifd-700 lg:text-[24px]">{b.ar}</div>
                    <ul className="mt-2 space-y-1 text-[17px] text-ink-2 lg:text-[20px]">{b.items.map((i) => <li key={i}>• {i}</li>)}</ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideFrame>
  );
}
