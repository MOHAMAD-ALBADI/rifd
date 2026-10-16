import { motion, AnimatePresence } from 'framer-motion';
import { SLIDES } from '../data/content';
import { BrandLogo, EventChip } from './primitives';
import { T } from '../lib/motion';

const Ico = {
  next: <path d="M15 6l-6 6 6 6" />,
  prev: <path d="M9 6l6 6-6 6" />,
  grid: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
  notes: <path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5" />,
  replay: <path d="M4 12a8 8 0 1 0 2.5-5.8M4 4v4h4" />,
  full: <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />,
  exit: <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />,
};

function IconBtn({ k, label, onClick, active }: { k: keyof typeof Ico; label: string; onClick: () => void; active?: boolean }) {
  return (
    <button onClick={onClick} aria-label={label} title={label}
      className={`focus-ring grid h-10 w-10 place-items-center rounded-full transition ${active ? 'bg-navy text-white' : 'text-ink-2 hover:bg-surface-2 hover:text-ink'}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{Ico[k]}</svg>
    </button>
  );
}

export function SectionProgress({ index, total }: { index: number; total: number }) {
  return (
    <div className="fixed inset-x-0 top-0 z-40 h-1 bg-line/60">
      <motion.div className="absolute right-0 top-0 h-full bg-rifd-600" animate={{ width: `${((index + 1) / total) * 100}%` }} transition={T.base} />
    </div>
  );
}

export function TopChrome({ index }: { index: number }) {
  const id = SLIDES[index].id;
  return (
    <div className="no-print pointer-events-none fixed inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-5 lg:px-8">
      <AnimatePresence>
        {id !== 's1' && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={T.fast}>
            <BrandLogo size={38} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {id !== 's1' && id !== 's11' && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={T.fast}>
            <EventChip height={40} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SlideNavigation({ index, goTo }: { index: number; goTo: (i: number) => void }) {
  return (
    <nav aria-label="الأقسام" className="no-print fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {SLIDES.map((s, i) => (
        <button key={s.id} onClick={() => goTo(i)} aria-label={`${s.no} ${s.ar}`} aria-current={i === index}
          className="focus-ring group relative flex h-4 w-4 items-center justify-center">
          <span className={`block rounded-full transition-all ${i === index ? 'h-3 w-3 bg-rifd-600' : 'h-2 w-2 bg-ink/20 group-hover:bg-ink/50'}`} />
          <span className="pointer-events-none absolute left-7 whitespace-nowrap rounded-lg bg-navy px-2.5 py-1 text-sm text-white opacity-0 transition group-hover:opacity-100">
            <span className="num me-1 opacity-60">{s.no}</span>{s.ar}
          </span>
        </button>
      ))}
    </nav>
  );
}

export function PresentationControls({ index, total, prev, next, onOverview, onNotes, onReplay, onFullscreen, isFull, notesOpen }: {
  index: number; total: number; prev: () => void; next: () => void; onOverview: () => void; onNotes: () => void; onReplay: () => void; onFullscreen: () => void; isFull: boolean; notesOpen: boolean;
}) {
  const s = SLIDES[index];
  return (
    <div className="no-print fixed bottom-4 left-1/2 z-30 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-line bg-white/90 px-2 py-1.5 shadow-card backdrop-blur-md">
        <IconBtn k="prev" label="السابق" onClick={prev} />
        <div className="min-w-[170px] px-2 text-center text-[15px] text-ink">
          <span dir="ltr" className="num inline-block">
            <span className="font-bold">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-ink-3"> / {String(total).padStart(2, '0')}</span>
          </span>
          <span className="ms-2 text-ink-2">{s.ar}</span>
        </div>
        <IconBtn k="next" label="التالي" onClick={next} />
        <span className="mx-1 h-5 w-px bg-line" />
        <IconBtn k="grid" label="كل الأقسام (G)" onClick={onOverview} />
        <IconBtn k="notes" label="ملاحظات المتحدث (N)" onClick={onNotes} active={notesOpen} />
        <IconBtn k="replay" label="إعادة الحركة (R)" onClick={onReplay} />
        <IconBtn k={isFull ? 'exit' : 'full'} label="ملء الشاشة (F)" onClick={onFullscreen} />
      </div>
    </div>
  );
}

export function Overview({ open, index, goTo, close }: { open: boolean; index: number; goTo: (i: number) => void; close: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="no-print fixed inset-0 z-50 overflow-y-auto bg-canvas/95 p-6 backdrop-blur-xl lg:p-14" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={T.fast} onClick={close}>
          <div className="mx-auto max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <BrandLogo size={36} />
              <button onClick={close} className="btn-ghost focus-ring px-5 py-2 text-base">إغلاق (Esc)</button>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SLIDES.map((s, i) => (
                <motion.button key={s.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ ...T.fast, delay: i * 0.025 }}
                  onClick={() => { goTo(i); close(); }}
                  className={`focus-ring relative aspect-[16/9] rounded-2xl border p-4 text-right transition ${i === index ? 'border-rifd-600 bg-rifd-50' : 'border-line bg-white hover:border-rifd-300'}`}>
                  <div className="num text-3xl font-extrabold text-ink/20">{s.no}</div>
                  <div className="mt-1 text-xl font-bold text-ink">{s.ar}</div>
                  <div className="label mt-1 text-[11px] text-ink-3">{s.en}</div>
                  {s.official && <div className="absolute bottom-3 right-4 text-[13px] font-bold text-rifd-600">محور رسمي</div>}
                  <div className="en absolute bottom-3 left-4 text-[12px] text-ink-3">#{s.id}</div>
                </motion.button>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2 text-[15px] text-ink-2 lg:grid-cols-4">
              <span><kbd className="en font-bold text-ink">→ ← Space</kbd> تنقل</span>
              <span><kbd className="en font-bold text-ink">F</kbd> ملء الشاشة</span>
              <span><kbd className="en font-bold text-ink">N</kbd> ملاحظات المتحدث</span>
              <span><kbd className="en font-bold text-ink">R</kbd> إعادة الحركة</span>
              <span><kbd className="en font-bold text-ink">G</kbd> كل الأقسام</span>
              <span><kbd className="en font-bold text-ink">Home / End</kbd> البداية / النهاية</span>
              <a className="font-bold text-rifd-600 hover:underline" href="#print" onClick={() => setTimeout(() => location.reload(), 30)}>نسخة الطباعة / PDF</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function NotesPanel({ open, index }: { open: boolean; index: number }) {
  const s = SLIDES[index];
  return (
    <AnimatePresence>
      {open && (
        <motion.aside initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} transition={T.fast}
          className="no-print fixed bottom-20 right-6 z-40 w-[min(460px,calc(100vw-48px))] rounded-2xl bg-navy p-5 text-white shadow-app">
          <div className="label mb-2 text-[12px] text-teal-300">SPEAKER NOTES · {s.no}</div>
          <ul className="space-y-2 text-[16px] leading-relaxed text-white/90">
            {s.notes.map((n, i) => <li key={i} className="flex gap-2"><span className="text-teal-300">•</span>{n}</li>)}
          </ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
