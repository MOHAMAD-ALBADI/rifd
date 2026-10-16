import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { SLIDES } from '../data/content';
import { SLIDE_COMPONENTS } from '../scenes';
import { EnvCtx, SlideCtx, STAGE_H, STAGE_W, useMode, useReducedMotion, useStageScale } from '../lib/env';
import { DeckCtx } from '../lib/deck';
import { slideVariants } from '../lib/motion';
import { Background } from './SlideFrame';
import { NotesPanel, Overview, PresentationControls, SectionProgress, SlideNavigation, TopChrome } from './PresentationControls';
import { Loader } from './Loader';

const TOTAL = SLIDES.length;

function indexFromHash(): number {
  const m = location.hash.match(/^#s(\d+)$/);
  if (!m) return 0;
  return Math.max(0, Math.min(TOTAL - 1, Number(m[1]) - 1));
}

/** Can the event target scroll further in this direction? Then the wheel belongs to it, not to slide navigation. */
function canScroll(target: EventTarget | null, dy: number): boolean {
  let el = target as HTMLElement | null;
  while (el && el !== document.body) {
    if (el.dataset?.scroll !== undefined || el.tagName === 'TEXTAREA') {
      const max = el.scrollHeight - el.clientHeight;
      if (max > 2 && ((dy > 0 && el.scrollTop < max - 1) || (dy < 0 && el.scrollTop > 0))) return true;
    }
    el = el.parentElement;
  }
  return false;
}

export function PresentationLayout() {
  const mode = useMode();
  const reducedPref = useReducedMotion();
  const reduced = reducedPref || mode === 'print';
  const env = useMemo(() => ({ mode, reduced }), [mode, reduced]);

  const [index, setIndex] = useState(indexFromHash);
  const [dir, setDir] = useState(1);
  const [replay, setReplay] = useState(0);
  const [overview, setOverview] = useState(false);
  const [notes, setNotes] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const [ready, setReady] = useState(mode === 'print');
  const lock = useRef(0);

  const goTo = useCallback((i: number) => {
    const n = Math.max(0, Math.min(TOTAL - 1, i));
    setIndex((cur) => { if (n !== cur) setDir(n > cur ? 1 : -1); return n; });
    if (mode === 'flow') document.getElementById(SLIDES[n].id)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  }, [mode, reduced]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const deck = useMemo(() => ({ index, total: TOTAL, goTo, next, prev }), [index, goTo, next, prev]);

  // hash <-> index
  useEffect(() => {
    if (mode === 'print') return;
    const h = `#${SLIDES[index].id}`;
    if (location.hash !== h) history.replaceState(null, '', h);
  }, [index, mode]);
  useEffect(() => {
    const f = () => { if (/^#s\d+$/.test(location.hash)) goTo(indexFromHash()); };
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, [goTo]);

  useEffect(() => { document.body.classList.toggle('is-flow', mode !== 'stage'); }, [mode]);
  useEffect(() => {
    const f = () => setIsFull(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', f);
    return () => document.removeEventListener('fullscreenchange', f);
  }, []);

  const toggleFull = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.().catch(() => {});
  }, []);

  // keyboard
  useEffect(() => {
    if (mode === 'print') return;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key;
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(k)) { e.preventDefault(); next(); }
      else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(k)) { e.preventDefault(); prev(); }
      else if (k === 'Home') goTo(0);
      else if (k === 'End') goTo(TOTAL - 1);
      else if (k === 'f' || k === 'F') toggleFull();
      else if (k === 'n' || k === 'N') setNotes((v) => !v);
      else if (k === 'g' || k === 'G' || k === 'o' || k === 'O') setOverview((v) => !v);
      else if (k === 'r' || k === 'R') setReplay((v) => v + 1);
      else if (k === 'Escape') { setOverview(false); setNotes(false); }
      else if (/^[1-9]$/.test(k)) goTo(Number(k) - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mode, next, prev, goTo, toggleFull]);

  // wheel + touch (stage mode only; flow mode scrolls natively)
  useEffect(() => {
    if (mode !== 'stage') return;
    let acc = 0;
    const onWheel = (e: WheelEvent) => {
      if (overview) return;
      if (canScroll(e.target, e.deltaY)) return;
      if ((e.target as HTMLElement)?.closest?.('input[type=range]')) return;
      e.preventDefault();
      const now = Date.now();
      if (now < lock.current) return;
      acc += e.deltaY;
      if (Math.abs(acc) > 45) {
        acc > 0 ? next() : prev();
        acc = 0;
        lock.current = now + 850;
      }
    };
    let sx = 0, sy = 0;
    const onStart = (e: TouchEvent) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; };
    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.4) (dx > 0 ? next() : prev()); // RTL: swipe toward the right = forward
      else if (Math.abs(dy) > 90 && !canScroll(e.target, -dy)) (dy < 0 ? next() : prev());
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => { window.removeEventListener('wheel', onWheel); window.removeEventListener('touchstart', onStart); window.removeEventListener('touchend', onEnd); };
  }, [mode, next, prev, overview]);

  // flow mode: active slide follows scroll
  useEffect(() => {
    if (mode !== 'flow') return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { const i = SLIDES.findIndex((s) => s.id === en.target.id); if (i >= 0) setIndex(i); } });
    }, { threshold: 0.45 });
    SLIDES.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el); });
    // honour deep link on first load
    const first = indexFromHash();
    if (first > 0) setTimeout(() => document.getElementById(SLIDES[first].id)?.scrollIntoView(), 50);
    return () => io.disconnect();
  }, [mode]);

  const scale = useStageScale(mode === 'stage');

  return (
    <EnvCtx.Provider value={env}>
      <DeckCtx.Provider value={deck}>
        <MotionConfig reducedMotion={reducedPref ? 'always' : 'never'}>
          {mode === 'stage' ? (
            <div className="fixed inset-0 overflow-hidden" dir="rtl">
              <Background />
              <div className="absolute left-1/2 top-1/2" style={{ width: STAGE_W, height: STAGE_H, transform: `translate(-50%, -50%) scale(${scale})`, perspective: 1600 }}>
                <AnimatePresence initial={false} custom={dir}>
                  {ready && (
                    <motion.section
                      key={`${index}-${replay}`}
                      custom={dir}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute inset-0"
                      aria-roledescription="slide"
                      aria-label={`${SLIDES[index].no} ${SLIDES[index].ar}`}
                    >
                      <SlideCtx.Provider value={{ active: true, index }}>
                        {(() => { const C = SLIDE_COMPONENTS[index]; return <C />; })()}
                      </SlideCtx.Provider>
                    </motion.section>
                  )}
                </AnimatePresence>
              </div>
              <SectionProgress index={index} total={TOTAL} />
              <TopChrome index={index} />
              <SlideNavigation index={index} goTo={goTo} />
              <PresentationControls index={index} total={TOTAL} prev={prev} next={next}
                onOverview={() => setOverview(true)} onNotes={() => setNotes((v) => !v)} onReplay={() => setReplay((v) => v + 1)}
                onFullscreen={toggleFull} isFull={isFull} notesOpen={notes} />
              <NotesPanel open={notes} index={index} />
              <Overview open={overview} index={index} goTo={goTo} close={() => setOverview(false)} />
            </div>
          ) : (
            <FlowDeck index={index} goTo={goTo} openOverview={() => setOverview(true)} overview={overview} closeOverview={() => setOverview(false)} />
          )}
          <Loader onDone={() => setReady(true)} />
        </MotionConfig>
      </DeckCtx.Provider>
    </EnvCtx.Provider>
  );
}

/** Phones / small windows: natural vertical scroll, each section lazily activated. */
function FlowDeck({ index, goTo, openOverview, overview, closeOverview }: { index: number; goTo: (i: number) => void; openOverview: () => void; overview: boolean; closeOverview: () => void }) {
  return (
    <div dir="rtl">
      <SectionProgress index={index} total={TOTAL} />
      <button onClick={openOverview} className="no-print focus-ring fixed left-4 top-4 z-40 rounded-full border border-white/15 bg-night-deep/80 px-3 py-1.5 text-sm text-snow backdrop-blur">
        <span className="num">{SLIDES[index].no}</span> · الأقسام
      </button>
      {SLIDES.map((s, i) => {
        const C = SLIDE_COMPONENTS[i];
        return (
          <section key={s.id} id={s.id} className="relative min-h-[100svh] overflow-hidden">
            <div className="absolute inset-0"><Background /></div>
            <FlowSlide active={i === index} index={i}><C /></FlowSlide>
          </section>
        );
      })}
      <Overview open={overview} index={index} goTo={goTo} close={closeOverview} />
    </div>
  );
}

function FlowSlide({ active, index, children }: { active: boolean; index: number; children: React.ReactNode }) {
  const [seen, setSeen] = useState(active);
  useEffect(() => { if (active) setSeen(true); }, [active]);
  return (
    <div className="relative">
      <SlideCtx.Provider value={{ active, index }}>{seen ? children : <div className="h-[100svh]" />}</SlideCtx.Provider>
    </div>
  );
}

