import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FINANCE } from '../data/content';
import { StatusBadge } from './primitives';
import { EASE } from '../lib/motion';

/* Five-year model computed live from the stated assumptions in data/content.ts.
   It explains how the business can become sustainable — it is NOT revenue history or a validated forecast. */

const f = (n: number) => Math.round(n).toLocaleString('en-US');

export function useFinance(ticket: number, commission: number) {
  return useMemo(() => FINANCE.years.map((y, i) => {
    const students = FINANCE.universities[i] * FINANCE.studentsPerUni;
    const active = students * FINANCE.activeRate[i];
    const services = active * FINANCE.servicesPerActive * FINANCE.semesters;
    const gmv = services * ticket;
    const market = gmv * commission;
    const subs = FINANCE.universities[i] * FINANCE.paidUniShare[i] * FINANCE.subscription[i];
    const institute = FINANCE.institute[i];
    const revenue = market + subs + institute;
    const cost = FINANCE.costs[i];
    return { y, unis: FINANCE.universities[i], active, services, market, subs, institute, revenue, cost, net: revenue - cost };
  }), [ticket, commission]);
}

export function FinancePanel() {
  const [ticket, setTicket] = useState(FINANCE.avgTicket);
  const [comm, setComm] = useState(Math.round(FINANCE.commission * 100));
  const rows = useFinance(ticket, comm / 100);
  const max = Math.max(...rows.map((r) => Math.max(r.revenue, r.cost)));
  const breakeven = rows.findIndex((r) => r.net >= 0);
  const H = 300;

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-[1.35fr_1fr]">
      {/* chart */}
      <div className="card-d flex flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-[22px] font-extrabold">الإيرادات مقابل التكاليف (ر.ع)</div>
          <div className="flex flex-wrap items-center gap-4 text-[16px] text-white/75">
            <span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded bg-teal" />عمولة السوق المصغر</span>
            <span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded bg-rifd" />اشتراكات الجامعات</span>
            <span className="flex items-center gap-2"><i className="h-3.5 w-3.5 rounded bg-rifd-300" />المعهد الرقمي</span>
            <span className="flex items-center gap-2"><i className="h-0.5 w-5 bg-amber-300" />التكاليف</span>
          </div>
        </div>
        <div className="relative mt-6 flex flex-1 items-end gap-6 px-2" style={{ minHeight: H }} dir="rtl" data-chart>
          {rows.map((r, i) => {
            const seg = (v: number) => `${(v / max) * H}px`;
            return (
              <div key={r.y} className="relative flex flex-1 flex-col items-center">
                <div className={`num mb-2 text-[17px] font-bold ${r.net >= 0 ? 'text-teal-300' : 'text-white/70'}`}>{f(r.revenue)}</div>
                <div className="relative flex w-full justify-center" style={{ height: H }}>
                  <div className="flex h-full w-full max-w-[86px] flex-col-reverse overflow-hidden rounded-t-xl">
                    <motion.div className="shrink-0 bg-teal" animate={{ height: seg(r.market) }} transition={{ duration: 0.6, ease: EASE }} />
                    <motion.div className="shrink-0 bg-rifd" animate={{ height: seg(r.subs) }} transition={{ duration: 0.6, ease: EASE }} />
                    <motion.div className="shrink-0 bg-rifd-300" animate={{ height: seg(r.institute) }} transition={{ duration: 0.6, ease: EASE }} />
                  </div>
                  <motion.div className="absolute inset-x-0 h-[3px] rounded bg-amber-300" animate={{ bottom: (r.cost / max) * H }} transition={{ duration: 0.6, ease: EASE }} />
                </div>
                <div className="mt-3 text-[18px] font-bold">{r.y}</div>
                <div className="text-[15px] text-white/60"><span className="num">{r.unis}</span> {r.unis === 1 ? 'جامعة' : 'جامعات'}</div>
                {i === breakeven && <div className="absolute -top-10 whitespace-nowrap rounded-full bg-teal px-3 py-0.5 text-[15px] font-bold text-navy-950">نقطة التعادل</div>}
              </div>
            );
          })}
        </div>
      </div>

      {/* table + sensitivity */}
      <div className="flex min-h-0 flex-col gap-4">
        <div className="card-d p-5">
          <div className="flex items-center justify-between"><span className="text-[20px] font-extrabold">صافي النتيجة السنوية</span><StatusBadge status="assumption" /></div>
          <div className="mt-3 space-y-1.5">
            {rows.map((r) => (
              <div key={r.y} className="flex items-center justify-between rounded-xl bg-white/[0.04] px-4 py-2 text-[18px]">
                <span>{r.y}</span>
                <span className="text-white/60">إيراد <b className="num text-white">{f(r.revenue)}</b> · تكلفة <b className="num text-white">{f(r.cost)}</b></span>
                <b className={`num ${r.net >= 0 ? 'text-teal-300' : 'text-amber-200'}`}>{r.net >= 0 ? '+' : '−'}{f(Math.abs(r.net))}</b>
              </div>
            ))}
          </div>
        </div>
        <div className="card-d p-5">
          <div className="text-[19px] font-extrabold">اختبار الحساسية</div>
          <label htmlFor="fin-ticket" className="mt-3 flex justify-between text-[17px]"><span className="text-white/70">متوسط قيمة الخدمة</span><b><span className="num">{ticket}</span> ر.ع</b></label>
          <input id="fin-ticket" type="range" min={5} max={20} value={ticket} onChange={(e) => setTicket(Number(e.target.value))} className="w-full accent-teal" dir="ltr" />
          <label htmlFor="fin-comm" className="mt-2 flex justify-between text-[17px]"><span className="text-white/70">عمولة رِفد</span><b><span className="num">{comm}</span>%</b></label>
          <input id="fin-comm" type="range" min={10} max={15} value={comm} onChange={(e) => setComm(Number(e.target.value))} className="w-full accent-teal" dir="ltr" />
          <p className="mt-2 text-[15px] leading-relaxed text-white/60">
            {breakeven >= 0 ? <>التعادل في <b className="text-teal-300">{rows[breakeven].y}</b> بهذه الافتراضات.</> : 'لا يتحقق التعادل خلال 5 سنوات بهذه الافتراضات.'} الأرقام نموذج للتخطيط قابل للتعديل — وليست إيرادات محققة.
          </p>
        </div>
      </div>
    </div>
  );
}
