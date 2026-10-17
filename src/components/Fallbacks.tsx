import { AGENTS } from '../data/content';

/* Lightweight SVG equivalents of the 3D scenes (no-WebGL, print/PDF, loading state). */

export function CoverFallback() {
  const arcs = [0, 1, 2, 3, 4, 5, 6];
  return (
    <svg viewBox="0 0 800 600" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
      <defs>
        <radialGradient id="cfg" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#14D1C8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#14D1C8" stopOpacity="0" />
        </radialGradient>
      </defs>
      {arcs.map((i) => {
        const rx = 260 * Math.abs(Math.cos((i / 7) * Math.PI)) + 18;
        return <ellipse key={i} cx="400" cy="470" rx={rx} ry={300} fill="none" stroke={i % 2 ? '#3B82F6' : '#14D1C8'} strokeOpacity="0.45" strokeWidth="1.3" clipPath="url(#top)" />;
      })}
      <clipPath id="top"><rect x="0" y="0" width="800" height="470" /></clipPath>
      {[110, 200, 290].map((r, i) => <ellipse key={r} cx="400" cy="470" rx={r} ry={r * 0.22} fill="none" stroke="#93BBFB" strokeOpacity={0.18 - i * 0.04} />)}
      {[[250, 300], [560, 260], [330, 220], [470, 360], [620, 400], [190, 420], [430, 250]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="14" fill="url(#cfg)" />
          <circle cx={x} cy={y} r="3.5" fill={i % 2 ? '#93BBFB' : '#6FE8E1'} />
        </g>
      ))}
      <circle cx="400" cy="168" r="46" fill="url(#cfg)" />
      <path d="M400 140 L406 162 L428 168 L406 174 L400 196 L394 174 L372 168 L394 162 Z" fill="#6FE8E1" />
    </svg>
  );
}

export function ProblemFallback({ connected }: { connected: boolean }) {
  const groups = [
    { c: '#3B82F6', a: [610, 200], j: [530, 230] },
    { c: '#14D1C8', a: [190, 215], j: [270, 230] },
    { c: '#93BBFB', a: [400, 430], j: [400, 380] },
  ];
  const offs = [[0, 0], [-34, -18], [30, -24], [-22, 28], [36, 18], [8, -42], [-44, 10], [18, 40]];
  return (
    <svg viewBox="0 0 800 560" className="h-full w-full" aria-hidden>
      {!connected && (
        <g stroke="#93BBFB" strokeOpacity="0.45" strokeDasharray="6 10" strokeWidth="1.5">
          <line x1="560" y1="210" x2="240" y2="220" />
          <line x1="230" y1="250" x2="380" y2="400" />
          <line x1="420" y1="400" x2="590" y2="240" />
        </g>
      )}
      {connected && groups.map((g, i) => <line key={i} x1="400" y1="270" x2={g.j[0]} y2={g.j[1]} stroke={g.c} strokeWidth="2.4" strokeOpacity="0.85" />)}
      {groups.map((g, i) => {
        const [x, y] = connected ? g.j : g.a;
        return (
          <g key={i} style={{ transition: 'transform .8s cubic-bezier(.22,1,.36,1)' }} transform={`translate(${x} ${y})`}>
            {offs.map(([dx, dy], k) => (
              <g key={k}>
                {k > 0 && <line x1="0" y1="0" x2={dx} y2={dy} stroke={g.c} strokeOpacity="0.35" />}
                <circle cx={dx} cy={dy} r={k === 0 ? 7 : 4} fill={k === 0 ? '#fff' : g.c} />
              </g>
            ))}
          </g>
        );
      })}
      {connected && (
        <g>
          <circle cx="400" cy="270" r="40" fill="#14D1C8" fillOpacity="0.15" />
          <circle cx="400" cy="270" r="22" fill="none" stroke="#14D1C8" strokeWidth="2" />
          <circle cx="400" cy="270" r="9" fill="#fff" />
        </g>
      )}
    </svg>
  );
}

export function AgentFallback({ active, onSelect }: { active: number; onSelect?: (i: number) => void }) {
  const R = 190;
  return (
    <svg viewBox="-280 -260 560 520" className="h-full w-full" role="group" aria-label="AI agents">
      <ellipse cx="0" cy="0" rx={R} ry={R * 0.62} fill="none" stroke="#3B82F6" strokeOpacity="0.4" />
      {AGENTS.map((a, i) => {
        const ang = Math.PI / 2 - (i / AGENTS.length) * Math.PI * 2;
        const x = Math.cos(ang) * R, y = -Math.sin(ang) * R * 0.62;
        const on = i === active;
        return (
          <g key={a.key} onClick={() => onSelect?.(i)} style={{ cursor: onSelect ? 'pointer' : 'default' }}>
            <line x1="0" y1="0" x2={x} y2={y} stroke={on ? a.color : '#1f3a66'} strokeWidth={on ? 2.4 : 1} />
            {on && <circle cx={x} cy={y} r="30" fill={a.color} fillOpacity="0.2" />}
            <circle cx={x} cy={y} r={on ? 16 : 11} fill={on ? '#fff' : i < active ? a.color : '#24406b'} stroke={a.color} strokeWidth="2" />
          </g>
        );
      })}
      <circle cx="0" cy="0" r="54" fill="#14D1C8" fillOpacity="0.12" />
      <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" fill="none" stroke="#14D1C8" strokeOpacity="0.7" />
      <circle cx="0" cy="0" r="16" fill="#e9fffd" />
    </svg>
  );
}
