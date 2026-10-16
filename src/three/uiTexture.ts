import * as THREE from 'three';

/* Draws real product UI (Arabic, RTL) onto canvases and returns textures for 3D surfaces.
   Fonts are bundled (Tajawal/Manrope) and already loaded before any scene mounts. */

const W = 1024;
const H = 640;
const NAVY = '#0B1F3B';
const INK2 = '#4A5B78';
const BLUE = '#2563EB';
const TEAL = '#0FB3AB';
const LINE = '#E1E7F1';
const SOFT = '#F0F4FA';

type Ctx = CanvasRenderingContext2D;
const AR = (w: number, s: number) => `${w} ${s}px Tajawal, Manrope, sans-serif`;

function rr(c: Ctx, x: number, y: number, w: number, h: number, r: number) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

function txt(c: Ctx, s: string, x: number, y: number, size: number, color = NAVY, weight = 700, align: CanvasTextAlign = 'right') {
  c.font = AR(weight, size);
  c.fillStyle = color;
  c.textAlign = align;
  c.direction = 'rtl';
  c.textBaseline = 'alphabetic';
  c.fillText(s, x, y);
}

function wrap(c: Ctx, s: string, x: number, y: number, maxW: number, size: number, lh: number, color = NAVY, weight = 700) {
  c.font = AR(weight, size);
  const words = s.split(' ');
  let line = '';
  let yy = y;
  for (const w of words) {
    const t = line ? `${line} ${w}` : w;
    if (c.measureText(t).width > maxW && line) { txt(c, line, x, yy, size, color, weight); line = w; yy += lh; } else line = t;
  }
  if (line) txt(c, line, x, yy, size, color, weight);
  return yy;
}

function chip(c: Ctx, s: string, xRight: number, y: number, size = 30, fg = INK2, bg = SOFT) {
  c.font = AR(700, size);
  const w = c.measureText(s).width + size * 1.2;
  rr(c, xRight - w, y, w, size * 1.8, size * 0.9);
  c.fillStyle = bg; c.fill();
  txt(c, s, xRight - size * 0.6, y + size * 1.25, size, fg, 700);
  return xRight - w - 14;
}

function avatar(c: Ctx, ch: string, cx: number, cy: number, r: number, from = '#14D1C8', to = '#0A7F7A') {
  const g = c.createLinearGradient(cx - r, cy - r, cx + r, cy + r);
  g.addColorStop(0, from); g.addColorStop(1, to);
  c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.fillStyle = g; c.fill();
  txt(c, ch, cx, cy + r * 0.38, r * 1.05, '#fff', 800, 'center');
}

function header(c: Ctx, label: string, color = BLUE) {
  txt(c, label, W - 56, 92, 34, color, 800);
}

function base(c: Ctx) {
  c.clearRect(0, 0, W, H);
  rr(c, 4, 4, W - 8, H - 8, 44);
  c.fillStyle = '#FFFFFF'; c.fill();
  c.lineWidth = 3; c.strokeStyle = LINE; c.stroke();
}

function check(c: Ctx, cx: number, cy: number, r: number, on: boolean, current = false) {
  c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2);
  if (on) { c.fillStyle = TEAL; c.fill(); c.strokeStyle = '#fff'; c.lineWidth = r * 0.22; c.beginPath(); c.moveTo(cx - r * 0.42, cy); c.lineTo(cx - r * 0.1, cy + r * 0.32); c.lineTo(cx + r * 0.45, cy - r * 0.32); c.stroke(); }
  else { c.lineWidth = r * 0.18; c.strokeStyle = current ? BLUE : '#C9D3E3'; c.stroke(); if (current) { c.beginPath(); c.arc(cx, cy, r * 0.4, 0, Math.PI * 2); c.fillStyle = BLUE; c.fill(); } }
}

function concept(c: Ctx, i: number, cx: number, cy: number, s: number) {
  c.save(); c.translate(cx, cy); c.scale(s / 100, s / 100); c.translate(-50, -50);
  if (i === 0) { c.lineWidth = 7; c.strokeStyle = BLUE; c.beginPath(); c.arc(50, 42, 22, 0, Math.PI * 2); c.stroke(); c.fillStyle = BLUE; rr(c, 40, 66, 20, 8, 3); c.fill(); rr(c, 43, 78, 14, 6, 3); c.fill(); }
  if (i === 1) { c.fillStyle = TEAL; c.beginPath(); const p = [[50, 14], [60, 40], [86, 50], [60, 60], [50, 86], [40, 60], [14, 50], [40, 40]]; p.forEach(([x, y], k) => (k ? c.lineTo(x, y) : c.moveTo(x, y))); c.closePath(); c.fill(); c.fillStyle = '#fff'; c.beginPath(); c.arc(50, 50, 7, 0, Math.PI * 2); c.fill(); }
  if (i === 2) { c.fillStyle = NAVY; rr(c, 18, 18, 30, 30, 8); c.fill(); c.fillStyle = BLUE; rr(c, 52, 18, 30, 30, 15); c.fill(); c.fillStyle = TEAL; rr(c, 18, 52, 30, 30, 15); c.fill(); c.globalAlpha = 0.35; c.fillStyle = NAVY; rr(c, 52, 52, 30, 30, 8); c.fill(); c.globalAlpha = 1; }
  c.restore();
}

export type CardKind =
  | 'request-tutor' | 'skill' | 'opportunity'
  | 'request-club' | 'match' | 'milestones' | 'deliverable' | 'record' | 'dashboard';

const DRAW: Record<CardKind, (c: Ctx) => void> = {
  'request-tutor': (c) => {
    base(c); header(c, 'طلب دعم أكاديمي');
    avatar(c, 'س', W - 110, 190, 52, '#5E9AF8', '#1D4ED8');
    txt(c, 'سارة · علوم الحاسوب', W - 186, 182, 40); txt(c, 'منذ دقيقة', W - 186, 230, 28, INK2, 500);
    wrap(c, '«أحتاج شرحًا في الدوال العودية بمادة Python قبل الاختبار»', W - 56, 345, W - 112, 44, 62);
    let x = chip(c, 'برمجة', W - 56, 470); x = chip(c, 'Python', x, 470); chip(c, 'هذا الأسبوع', x, 470);
  },
  skill: (c) => {
    base(c); header(c, 'ملف المهارة', TEAL);
    avatar(c, 'س', W - 110, 190, 52);
    txt(c, 'سالم الشامسي', W - 186, 182, 42); txt(c, 'التصميم الجرافيكي · السنة الرابعة', W - 186, 230, 28, INK2, 500);
    let x = chip(c, 'هوية بصرية', W - 56, 300); x = chip(c, 'Figma', x, 300); chip(c, 'طباعة', x, 300);
    rr(c, 56, 420, W - 112, 120, 28); c.fillStyle = SOFT; c.fill();
    txt(c, '14 مشروعًا موثّقًا', W - 92, 495, 38); txt(c, '★ 4.9', 120, 495, 38, '#B45309', 800, 'left');
  },
  opportunity: (c) => {
    base(c); header(c, 'فرصة مناسبة لك', '#B45309');
    wrap(c, 'مشروع مدفوع: هوية بصرية لفعالية جامعية', W - 56, 190, W - 112, 46, 64);
    let x = chip(c, 'تصميم', W - 56, 330); chip(c, '7 أيام', x, 330);
    rr(c, 56, 430, W - 112, 120, 28); c.fillStyle = '#E8FBFA'; c.fill();
    txt(c, 'تُضاف إلى سجل خبرتك عند الاعتماد', W - 92, 505, 34, '#0A7F7A', 800);
  },
  'request-club': (c) => {
    base(c); header(c, 'طلب خدمة · نادٍ جامعي');
    avatar(c, 'ن', W - 110, 190, 52, '#5E9AF8', '#1D4ED8');
    txt(c, 'نادي الابتكار', W - 186, 182, 40); txt(c, 'الميزانية 30 ر.ع · 7 أيام', W - 186, 230, 28, INK2, 500);
    wrap(c, '«نحتاج مصممًا لإعداد الهوية البصرية لفعالية جامعية»', W - 56, 345, W - 112, 44, 62);
    let x = chip(c, 'شعار', W - 56, 470); x = chip(c, 'ألوان وخطوط', x, 470); chip(c, 'قالب منشور', x, 470);
  },
  match: (c) => {
    base(c); header(c, 'ترشيح رِفد');
    avatar(c, 'س', W - 120, 220, 64);
    txt(c, 'سالم الشامسي', W - 210, 210, 46); txt(c, 'هوية بصرية · Figma', W - 210, 262, 30, INK2, 500);
    rr(c, 56, 160, 250, 130, 30); c.fillStyle = '#EEF4FF'; c.fill();
    txt(c, 'ملاءمة عالية', 181, 240, 34, BLUE, 800, 'center');
    rr(c, 56, 380, W - 112, 130, 28); c.fillStyle = SOFT; c.fill();
    txt(c, 'متاح هذا الأسبوع', W - 92, 460, 36); txt(c, '6 هويات طلابية', 100, 460, 34, INK2, 600, 'left');
  },
  milestones: (c) => {
    base(c); header(c, 'مراحل المشروع');
    const rows = ['اعتماد الموجز', 'مسودات الشعار', 'المراجعة والتعديل', 'التسليم النهائي'];
    rows.forEach((r, i) => {
      const y = 175 + i * 105;
      check(c, W - 100, y, 28, i < 2, i === 2);
      txt(c, r, W - 150, y + 14, 38, i < 3 ? NAVY : '#8A98B0', i < 3 ? 800 : 600);
    });
    rr(c, 56, 150, 300, 70, 35); c.fillStyle = '#EEF4FF'; c.fill(); txt(c, 'المرحلة 3 من 4', 206, 196, 28, BLUE, 800, 'center');
  },
  deliverable: (c) => {
    base(c); header(c, 'التسليم النهائي', TEAL);
    [0, 1, 2].forEach((i) => { rr(c, 56 + i * 310, 140, 290, 260, 28); c.fillStyle = SOFT; c.fill(); concept(c, i, 201 + i * 310, 270, 170); });
    rr(c, 56, 440, W - 112, 120, 28); c.fillStyle = '#FFF7E8'; c.fill();
    txt(c, 'بانتظار اعتماد النادي', W - 92, 515, 36, '#92400E', 800);
  },
  record: (c) => {
    base(c); header(c, 'سجل الخبرة الموثّق', TEAL);
    concept(c, 1, 160, 230, 190);
    txt(c, 'هوية «أسبوع الابتكار»', W - 56, 200, 46);
    txt(c, 'اعتماد نادي الابتكار ✓', W - 56, 262, 32, '#0A7F7A', 800);
    txt(c, '★★★★★', W - 56, 320, 36, '#B45309', 800);
    rr(c, 56, 410, W - 112, 140, 28); c.fillStyle = '#EEF4FF'; c.fill();
    txt(c, 'فرصتان تاليتان من ناديين آخرين', W - 92, 495, 36, BLUE, 800);
  },
  dashboard: (c) => {
    c.fillStyle = '#F5F7FC'; c.fillRect(0, 0, W, H);
    c.fillStyle = '#FFFFFF'; c.fillRect(0, 0, W, 86); c.fillStyle = LINE; c.fillRect(0, 86, W, 3);
    txt(c, 'رِفد', W - 40, 58, 38, NAVY, 800);
    avatar(c, 'س', 64, 44, 26, '#5E9AF8', '#1D4ED8');
    txt(c, 'مرحبًا سارة', W - 40, 160, 44);
    txt(c, 'ماذا تحتاجين اليوم؟', W - 40, 205, 28, INK2, 500);
    rr(c, W - 40 - 560, 240, 560, 230, 30); const g = c.createLinearGradient(0, 240, 0, 470); g.addColorStop(0, '#2563EB'); g.addColorStop(1, '#1D4ED8'); c.fillStyle = g; c.fill();
    txt(c, 'اطلبي دعمًا من طالب متمكّن', W - 76, 310, 34, '#fff', 800);
    rr(c, W - 76 - 220, 380, 220, 64, 32); c.fillStyle = '#fff'; c.fill(); txt(c, 'اطلب دعمًا', W - 186, 422, 28, BLUE, 800, 'center');
    rr(c, 40, 240, 360, 106, 26); c.fillStyle = '#fff'; c.fill(); txt(c, '3 جلسات مكتملة', 370, 305, 30);
    rr(c, 40, 364, 360, 106, 26); c.fillStyle = '#fff'; c.fill(); txt(c, 'فرصتان مقترحتان', 370, 429, 30);
    rr(c, 40, 500, W - 80, 100, 26); c.fillStyle = '#fff'; c.fill(); txt(c, 'مقترح لكِ: ورشة أساسيات Python', W - 76, 562, 30, INK2, 700);
  },
};

const cache = new Map<string, THREE.CanvasTexture>();

export function uiTexture(kind: CardKind): THREE.CanvasTexture {
  const hit = cache.get(kind);
  if (hit) return hit;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const c = canvas.getContext('2d')!;
  DRAW[kind](c);
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  cache.set(kind, t);
  return t;
}

let logoTex: THREE.Texture | null = null;
export function logoTexture(): THREE.Texture {
  if (logoTex) return logoTex;
  logoTex = new THREE.TextureLoader().load('assets/brand/rifd-icon.png');
  logoTex.colorSpace = THREE.SRGBColorSpace;
  return logoTex;
}

export const CARD_ASPECT = W / H;
