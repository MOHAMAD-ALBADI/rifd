import type { ReactNode } from 'react';
import type { AgentKey, LogEntry } from './store';

export const AGENT_META: Record<AgentKey, { ar: string; color: string }> = {
  needs: { ar: 'وكيل الاحتياج', color: '#5b9cff' },
  learning: { ar: 'وكيل التعلّم', color: '#8fb4ff' },
  matching: { ar: 'وكيل المطابقة', color: '#1fc4b3' },
  execution: { ar: 'وكيل التنفيذ', color: '#6fe8e1' },
  verification: { ar: 'وكيل التحقق', color: '#b9e769' },
  opportunity: { ar: 'وكيل الفرص', color: '#f5c86b' },
};

export function Steps({ names, step }: { names: string[]; step: number }) {
  return (
    <ol className="rf-steps" aria-label="مراحل الرحلة">
      {names.map((n, i) => {
        const k = i + 1;
        return <li key={n} className={step === k ? 'on' : step > k ? 'done' : ''} aria-current={step === k ? 'step' : undefined}>{k}. {n}</li>;
      })}
    </ol>
  );
}

export function Stars({ value, onPick, label = 'التقييم' }: { value: number; onPick: (v: number) => void; label?: string }) {
  return (
    <span className="rf-stars" role="radiogroup" aria-label={label}>
      {[1, 2, 3, 4, 5].map((s) => (
        <button key={s} type="button" role="radio" aria-checked={value === s} aria-label={`${s} من 5`} className={s <= value ? 'on' : ''} onClick={() => onPick(s)}>★</button>
      ))}
    </span>
  );
}

export function Seg<T extends string | number>({ options, value, onChange, label }: { options: [T, string][]; value: T; onChange: (v: T) => void; label: string }) {
  return (
    <div className="rf-seg" role="radiogroup" aria-label={label}>
      {options.map(([v, t]) => (
        <button key={String(v)} type="button" role="radio" aria-checked={v === value} className={v === value ? 'sel' : ''} onClick={() => onChange(v)}>{t}</button>
      ))}
    </div>
  );
}

export function Check({ checked, onChange, children, id }: { checked: boolean; onChange: (v: boolean) => void; children: ReactNode; id: string }) {
  return (
    <label className="rf-check" htmlFor={id}>
      <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span>{children}</span>
    </label>
  );
}

const clock = (t: number) => new Date(t).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

export function AgentLog({ log, limit }: { log: LogEntry[]; limit?: number }) {
  const items = limit ? log.slice(0, limit) : log;
  if (!items.length) return <p className="rf-empty" style={{ color: 'rgba(255,255,255,.55)' }}>ابدأ أي رحلة وسترى هنا ما يفعله كل وكيل لحظة بلحظة.</p>;
  return (
    <ul className="rf-log" aria-live="polite">
      {items.map((e) => (
        <li key={e.id}>
          <span className="ag" style={{ color: AGENT_META[e.agent].color }}>{AGENT_META[e.agent].ar}</span>
          <span style={{ flex: 1 }}>{e.text}{e.human && <span className="rf-pill p-demo" style={{ marginInlineStart: 6 }}>قرار بشري</span>}</span>
          <span className="t">{clock(e.at)}</span>
        </li>
      ))}
    </ul>
  );
}
