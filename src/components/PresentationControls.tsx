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

function IconBtn({ k, label, onClick, light, active }: { k: keyof typeof Ico; label: string; onClick: () => void; light: boolean; active?: boolean }) {
  return (
    <button onClick={onClick} aria-label={label} title={label}
      className={`focus-ring grid h-9 w-9 place-items-center rounded-full transition ${active ? (light ? 'bg-navy text-white' : 'bg-white text-navy-950') : light ? 'text-ink/70 hover:bg-ink/5 hover:text-ink' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{Ico[k]}</svg>
    </button>
  );
}

export function SectionProgress({ index, total, light }: { index: number; total: number; light: boolean }) {
  return (
    <div className={`fixed inset-x-0 top-0 z-40 h-[3px] ${light ? 'bg-ink/5' : 'bg-white/5'}`}>
      <motion.div className="absolute right-0 top-0 h-full bg-gradient-to-l from-teal to-rifd" animate={{ width: `${((index + 1) / total) * 100}%` }} transition={T.base} />
    </div>
  );
}

export function TopChrome({ index, light }: { index: number; light: boolean }) {
  const id = SLIDES[index].id;
  return (
    <div className="no-print pointer-events-none fixed inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-5 lg:px-8">
      <AnimatePresence>
        {id !== 's1' && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={T.fast}>
            <BrandLogo size={34} variant={light ? 'light' : 'dark'} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {id !== 's1' && id !== 's11' && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={T.fast}>
            <EventChip height={42} className={light ? 'border border-ink/10' : ''} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SlideNavigation({ index, goTo, light }: { index: number; goTo: (i: number) => void; light: boolean }) {
  return (
    <nav aria-label="الأقسام" className="no-print fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex">
      {SLIDES.map((s, i) => (
        <button key={s.id} onClick={() => goTo(i)} aria-label={`${s.no} ${s.ar}`} aria-current={i === index}
          className="focus-ring group relative flex h-4 w-4 items-center justify-center">
          <span className={`block rounded-full transition-all ${i === index ? 'h-3 w-3 bg-teal shadow-[0_0_14px_rgba(20,209,200,0.8)]' : light ? 'h-1.5 w-1.5 bg-ink/30 group-hover:bg-ink/60' : 'h-1.5 w-1.5 bg-white/30 group-hover:bg-white/70'}`} />
          <span className={`pointer-events-none absolute left-7 whitespace-nowrap rounded-md px-2 py-1 text-xs opacity-0 transition group-hover:opacity-100 ${light ? 'bg-navy text-white' : 'bg-white text-navy-950'}`}>
            <span className="num me-1 opacity-60">{s.no}</span>{s.ar}
          </span>
        </button>
      ))}
    </nav>
  );
}

export function PresentationControls({
  index, total, light, prev, next, onOverview, onNotes, onReplay, onFullscreen, isFull, notesOpen,
}: {
  index: number; total: number; light: boolean; prev: () => void; next: () => void; onOverview: () => void; onNotes: () => void; onReplay: () => void; onFullscreen: () => void; isFull: boolean; notesOpen: boolean;
}) {
  const s = SLIDES[index];
  return (
    <div className="no-print fixed bottom-4 left-1/2 z-30 -translate-x-1/2">
      <div className={`flex items-center gap-1 rounded-full border px-2 py-1.5 backdrop-blur-md ${light ? 'border-ink/10 bg-white/80' : 'border-white/10 bg-navy-950/60'}`}>
        <IconBtn k="prev" label="السابق" onClick={prev} light={light} />
        <div className={`min-w-[150px] px-2 text-center text-sm ${light ? 'text-ink' : 'text-white'}`}>
          <span dir="ltr" className="num inline-block">
            <span className="font-bold">{String(index + 1).padStart(2, '0')}</span>
            <span className={light ? 'text-ink/40' : 'text-white/40'}> / {String(total).padStart(2, '0')}</span>
          </span>
          <span className={`ms-2 ${light ? 'text-ink/60' : 'text-white/60'}`}>{s.ar}</span>
        </div>
        <IconBtn k="next" label="التالي" onClick={next} light={light} />
        <span className={`mx-1 h-5 w-px ${light ? 'bg-ink/10' : 'bg-white/15'}`} />
        <IconBtn k="grid" label="كل الأقسام (G)" onClick={onOverview} light={light} />
        <IconBtn k="notes" label="ملاحظات المتحدث (N)" onClick={onNotes} light={light} active={notesOpen} />
        <IconBtn k="replay" label="إعادة الحركة (R)" onClick={onReplay} light={light} />
        <IconBtn k={isFull ? 'exit' : 'full'} label="ملء الشاشة (F)" onClick={onFullscreen} light={light} />
      </div>
    </div>
  );
}

export function Overview({ open, index, goTo, close }: { open: boolean; index: number; goTo: (i: number) => void; close: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="no-print fixed inset-0 z-50 overflow-y-auto bg-navy-950/90 p-6 backdrop-blur-xl lg:p-14" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={T.fast} onClick={close}>
          <div className="mx-auto max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <div className="label text-teal">ALL SECTIONS</div>
              <button onClick={close} className="focus-ring rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/80 hover:border-white/50">إغلاق (Esc)</button>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SLIDES.map((s, i) => (
                <motion.button key={s.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ ...T.fast, delay: i * 0.025 }}
                  onClick={() => { goTo(i); close(); }}
                  className={`focus-ring group relative aspect-[16/9] overflow-hidden rounded-2xl border p-4 text-right transition ${i === index ? 'border-teal bg-teal/10' : 'border-white/10 bg-white/[0.03] hover:border-white/30'} ${s.theme === 'light' ? 'ring-1 ring-inset ring-white/5' : ''}`}>
                  <div className="num text-3xl font-bold text-white/25 group-hover:text-teal">{s.no}</div>
                  <div className="mt-1 text-xl font-bold text-white">{s.ar}</div>
                  <div className="label mt-1 !text-[0.6rem] text-white/45">{s.en}</div>
                  {s.official && <div className="absolute bottom-3 right-4 text-[0.7rem] text-teal-300">محور رسمي</div>}
                  <div className="absolute bottom-3 left-4 en text-[0.7rem] text-white/30">#{s.id}</div>
                </motion.button>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-white/55 lg:grid-cols-4">
              <span><kbd className="en text-white">→ ← Space</kbd> تنقل</span>
              <span><kbd className="en text-white">F</kbd> ملء الشاشة</span>
              <span><kbd className="en text-white">N</kbd> ملاحظات المتحدث</span>
              <span><kbd className="en text-white">R</kbd> إعادة الحركة</span>
              <span><kbd className="en text-white">G</kbd> كل الأقسام</span>
              <span><kbd className="en text-white">Home / End</kbd> البداية / النهاية</span>
              <a className="text-teal-300 hover:underline" href="#print" onClick={() => setTimeout(() => location.reload(), 30)}>نسخة الطباعة / PDF</a>
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
        <motion.aside initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={T.fast}
          className="no-print fixed bottom-20 right-6 z-40 w-[min(440px,calc(100vw-48px))] rounded-2xl border border-white/10 bg-navy-950/95 p-5 text-white shadow-2xl backdrop-blur-xl">
          <div className="label mb-2 text-teal">SPEAKER NOTES · {s.no}</div>
          <ul className="space-y-2 text-[0.95rem] leading-relaxed text-white/85">
            {s.notes.map((n, i) => <li key={i} className="flex gap-2"><span className="text-teal">•</span>{n}</li>)}
          </ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
