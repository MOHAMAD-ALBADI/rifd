import { createContext, useContext, useEffect, useState } from 'react';

export const STAGE_W = 1920;
export const STAGE_H = 1080;

export type Mode = 'stage' | 'flow' | 'print';

export interface Env {
  mode: Mode;
  reduced: boolean; // prefers-reduced-motion or print
}

export const EnvCtx = createContext<Env>({ mode: 'stage', reduced: false });
export const useEnv = () => useContext(EnvCtx);

/** Per-slide context: is this slide on screen (for lazy 3D, autoplay) */
export const SlideCtx = createContext<{ active: boolean; index: number }>({ active: true, index: 0 });
export const useSlide = () => useContext(SlideCtx);

export function useReducedMotion(): boolean {
  const [r, setR] = useState(() => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const m = matchMedia('(prefers-reduced-motion: reduce)');
    const f = () => setR(m.matches);
    m.addEventListener('change', f);
    return () => m.removeEventListener('change', f);
  }, []);
  return r;
}

function computeMode(): Mode {
  if (location.hash === '#print' || new URLSearchParams(location.search).has('print')) return 'print';
  return window.innerWidth >= 1024 && window.innerHeight >= 540 ? 'stage' : 'flow';
}

export function useMode(): Mode {
  const [m, setM] = useState<Mode>(computeMode);
  useEffect(() => {
    const f = () => setM(computeMode());
    window.addEventListener('resize', f);
    window.addEventListener('hashchange', f);
    return () => { window.removeEventListener('resize', f); window.removeEventListener('hashchange', f); };
  }, []);
  return m;
}

/** Scale factor that fits the 1600×900 stage inside the viewport. */
export function useStageScale(enabled: boolean) {
  const [s, setS] = useState(1);
  useEffect(() => {
    if (!enabled) return;
    const f = () => setS(Math.min(window.innerWidth / STAGE_W, window.innerHeight / STAGE_H));
    f();
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, [enabled]);
  return s;
}
