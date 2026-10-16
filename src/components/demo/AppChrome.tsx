import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { T } from '../../lib/motion';
import { StatusBadge } from '../primitives';

/* Shared shell for both demo scenarios: an app window + a narrative panel that explains each step. */

export interface Narrative {
  step: number;
  total: number;
  title: string;
  body: string;
  agent?: string;
  human?: string;
  hint?: string;
}

export type LogEntry = { t: string; who: string; text: string };

const NAV_ICONS: Record<string, ReactNode> = {
  home: <path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z" />,
  requests: <path d="M5 4h14v16H5zM8 9h8M8 13h8M8 17h5" />,
  opps: <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" />,
  record: <path d="M6 3h12v18l-6-4-6 4z" />,
  projects: <path d="M3 7h18v13H3zM8 7V4h8v3" />,
  wallet: <path d="M3 7h18v12H3zM16 13h2M3 7l3-3h12" />,
};

export function AppWindow({ user, nav, activeNav, children, onReset }: {
  user: { name: string; initials: string; role: string }; nav: { key: string; label: string }[]; activeNav: string; children: ReactNode; onReset: () => void;
}) {
  return (
    <div className="flex min-h-[640px] flex-col overflow-hidden rounded-[28px] border border-line bg-white text-ink shadow-app lg:h-full lg:min-h-0">
      {/* top bar */}
      <div className="flex items-center justify-between border-b border-line px-5 py-3 lg:px-6">
        <div className="flex items-center gap-3">
          <img src="assets/brand/rifd-icon.png" alt="" className="h-8" />
          <span className="text-[20px] font-extrabold">رِفد</span>
          <span className="en ms-2 hidden rounded-full bg-surface-2 px-3 py-1 text-[16px] text-ink-3 sm:inline">rifd.app</span>
        </div>
        <div className="flex items-center gap-3">
          <StatusBadge status="simulated" />
          <button onClick={onReset} className="no-print btn-ghost focus-ring px-4 py-1.5 text-[16px]">↺ إعادة</button>
          <span className="hidden items-center gap-2 sm:flex">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-rifd-500 to-rifd-700 text-[17px] font-bold text-white">{user.initials}</span>
            <span className="leading-tight"><span className="block text-[17px] font-bold">{user.name}</span><span className="block text-[16px] text-ink-3">{user.role}</span></span>
          </span>
        </div>
      </div>
      <div className="flex min-h-0 flex-1">
        {/* sidebar */}
        <aside className="hidden w-[200px] shrink-0 flex-col gap-1 border-l border-line bg-surface-2/60 p-3 lg:flex">
          {nav.map((n) => (
            <div key={n.key} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[18px] ${activeNav === n.key ? 'bg-white font-bold text-rifd-700 shadow-card' : 'text-ink-2'}`}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">{NAV_ICONS[n.key]}</svg>
              {n.label}
            </div>
          ))}
        </aside>
        <main className="scroll-thin relative min-w-0 flex-1 overflow-y-auto p-5 lg:p-7" data-scroll>{children}</main>
      </div>
    </div>
  );
}

export function NarrativePanel({ n, log, showLog, toggleLog }: { n: Narrative; log: LogEntry[]; showLog: boolean; toggleLog: () => void }) {
  return (
    <div className="flex min-h-0 flex-col">
      <div className="flex items-center justify-between text-[17px] font-bold text-fog lg:text-[20px]">
        <span>الخطوة <span className="num text-snow">{n.step}</span> من <span className="num">{n.total}</span></span>
      </div>
      <div className="mt-2 flex gap-1.5" dir="rtl">
        {Array.from({ length: n.total }, (_, i) => (
          <span key={i} className={`h-2 flex-1 rounded-full transition-colors duration-500 ${i < n.step ? 'bg-teal' : 'bg-white/15'}`} />
        ))}
      </div>
      <AnimatePresence initial={false}>
        <motion.div key={n.step + n.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0 } }} transition={T.fast} className="mt-6">
          <h3 className="text-[26px] font-extrabold leading-tight lg:text-[38px]">{n.title}</h3>
          <p className="mt-3 text-[18px] leading-relaxed text-mist lg:text-[25px]">{n.body}</p>
          {n.agent && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[16px] font-bold text-snow lg:text-[19px]">
              <span className="h-2 w-2 rounded-full bg-teal" /> {n.agent}
            </div>
          )}
          {n.human && (
            <div className="mt-3 rounded-2xl border border-amber-300/40 bg-amber-300/10 px-4 py-3 text-[16px] font-bold text-amber-200 lg:text-[19px]">إنسان في الحلقة: {n.human}</div>
          )}
          {n.hint && <p className="mt-5 text-[17px] font-bold text-teal-300 lg:text-[21px]">{n.hint}</p>}
        </motion.div>
      </AnimatePresence>
      <div className="mt-auto pt-5">
        <button onClick={toggleLog} className="no-print focus-ring text-[16px] font-bold text-fog underline-offset-4 hover:underline lg:text-[18px]">
          {showLog ? 'إخفاء' : 'عرض'} سجل الوكلاء (<span className="num">{log.length}</span>)
        </button>
        <AnimatePresence>
          {showLog && (
            <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={T.fast}
              className="scroll-thin mt-2 max-h-[170px] space-y-1.5 overflow-y-auto rounded-2xl border border-white/10 bg-night-surface p-3 text-mist" data-scroll>
              {log.map((l, k) => (
                <li key={k} className="flex gap-2 text-[15px] leading-snug lg:text-[17px]">
                  <span className="num shrink-0 text-fog">{l.t}</span>
                  <span><b className="text-teal-300">{l.who}:</b> {l.text}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Screen({ k, children }: { k: string; children: ReactNode }) {
  return (
    <AnimatePresence initial={false}>
      <motion.div key={k} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function Stars({ value, size = 20, onPick }: { value: number; size?: number; onPick?: (v: number) => void }) {
  return (
    <span dir="ltr" className="inline-flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        onPick ? (
          <button key={s} aria-label={`${s}`} onClick={() => onPick(s)} className={`focus-ring transition ${s <= value ? 'text-amber-600' : 'text-line-strong hover:text-amber-600/60'}`} style={{ fontSize: size }}>★</button>
        ) : (
          <span key={s} className={s <= Math.round(value) ? 'text-amber-600' : 'text-line-strong'} style={{ fontSize: size }}>★</span>
        )
      ))}
    </span>
  );
}
