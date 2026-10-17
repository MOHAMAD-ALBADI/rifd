/* RIFD MVP — application state. One serialisable object, updated immutably via `update(fn)`
   (the draft is a structured clone, so screens can mutate it freely). */
import { useCallback, useEffect, useRef, useState } from 'react';
import { Goal, SessionMode, START_BALANCE } from './data';
import type { Diagnosis, Quality } from './logic';

export type AgentKey = 'needs' | 'learning' | 'matching' | 'execution' | 'verification' | 'opportunity';
export type Module = 'home' | 'support' | 'market' | 'institute' | 'me';

export interface LogEntry { id: number; agent: AgentKey; text: string; at: number; human?: boolean }
export interface Txn { id: number; at: number; label: string; amount: number }
export interface SlotPick { key: string; label: string; time: string }

export interface Booking {
  ref: string; tutorId: number; tutor: string; subject: string; topic: string; when: string; slotKey: string;
  dur: number; mode: SessionMode; total: number; fee: number; tutorShare: number; method: 'wallet' | 'campus';
  status: 'held' | 'released' | 'refunded'; index: number;
}

export interface SupportState {
  step: number; // 1 diagnose · 2 match · 3 book · 4 pay · 5 session · 6 rate · 7 plan
  uni: string; subject: string; topic: string; level: number; days: number; goal: Goal; mode: SessionMode;
  diag: Diagnosis | null; tutorId: number | null; slot: SlotPick | null; consent: boolean; method: 'wallet' | 'campus';
  current: string | null; // ref of the booking being executed
  sessionIndex: number; // 1-based session number in the plan
  remaining: number; // sessions left after the current one
  sessionStarted: boolean; checks: boolean[];
  rating: number; tags: string[]; postLevel: number; quality: Quality | null; error: string;
}

export interface MarketState {
  step: number; // 1 browse · 2 detail · 3 agreement · 4 delivery · 5 approval · 6 earnings
  skills: string[]; oppId: string | null; offer: number; offerDays: number; consent: boolean;
  draft: boolean; feedback: boolean; final: boolean; approved: boolean; rating: number; contractRef: string | null;
}

export interface InstituteState {
  step: number; // 1 catalog · 2 course · 3 learn · 4 quiz · 5 certificate
  courseId: string | null; consent: boolean; lessons: number; answers: (number | null)[]; attempts: number; lastScore: number | null;
}

export interface Cert { id: string; courseId: string; title: string; skill: string; at: number }
export interface PortfolioItem { id: string; title: string; client: string; amount: number; rating: number; at: number }

export interface AppState {
  v: 3; module: Module; balance: number; earnings: number;
  support: SupportState; market: MarketState; institute: InstituteState;
  bookings: Booking[]; certs: Cert[]; portfolio: PortfolioItem[]; txns: Txn[]; log: LogEntry[]; seq: number;
}

export const freshSupport = (): SupportState => ({
  step: 1, uni: '', subject: '', topic: '', level: 0, days: 5, goal: 'understand', mode: 'online',
  diag: null, tutorId: null, slot: null, consent: false, method: 'wallet', current: null, sessionIndex: 1, remaining: 0,
  sessionStarted: false, checks: [], rating: 0, tags: [], postLevel: 0, quality: null, error: '',
});
export const freshMarket = (skills: string[] = ['تصميم جرافيك']): MarketState => ({
  step: 1, skills, oppId: null, offer: 0, offerDays: 0, consent: false, draft: false, feedback: false, final: false, approved: false, rating: 0, contractRef: null,
});
export const freshInstitute = (): InstituteState => ({ step: 1, courseId: null, consent: false, lessons: 0, answers: [], attempts: 0, lastScore: null });

export const initialState = (): AppState => ({
  v: 3, module: 'home', balance: START_BALANCE, earnings: 0,
  support: freshSupport(), market: freshMarket(), institute: freshInstitute(),
  bookings: [], certs: [], portfolio: [], txns: [], log: [], seq: 1,
});

/* helpers used inside update(fn) drafts */
export function log(d: AppState, agent: AgentKey, text: string, human = false) {
  d.log.unshift({ id: d.seq++, agent, text, at: Date.now(), human });
  if (d.log.length > 60) d.log.length = 60;
}
export function txn(d: AppState, label: string, amount: number) {
  d.txns.unshift({ id: d.seq++, at: Date.now(), label, amount });
  d.balance = Math.round((d.balance + amount) * 1000) / 1000;
}

const KEY = 'rifd_mvp_v3';
function load(): AppState | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    return s && s.v === 3 ? (s as AppState) : null;
  } catch { return null; }
}

export interface RifdStore { state: AppState; update: (fn: (d: AppState) => void) => void; reset: () => void }

export function useRifdStore({ persist }: { persist: boolean }): RifdStore {
  const [state, setState] = useState<AppState>(() => (persist && load()) || initialState());
  const first = useRef(true);
  useEffect(() => {
    if (!persist) return;
    if (first.current) { first.current = false; return; }
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage unavailable: keep in memory */ }
  }, [state, persist]);
  const update = useCallback((fn: (d: AppState) => void) => {
    setState((prev) => { const d = structuredClone(prev); fn(d); return d; });
  }, []);
  const reset = useCallback(() => {
    try { if (persist) localStorage.removeItem(KEY); } catch { /* ignore */ }
    setState(initialState());
  }, [persist]);
  return { state, update, reset };
}
