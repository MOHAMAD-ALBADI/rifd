import * as THREE from 'three';
import { useMemo } from 'react';

let _glow: THREE.Texture | null = null;
/** Soft radial glow texture generated once (no image download). */
export function glowTexture(): THREE.Texture {
  if (_glow) return _glow;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.18, 'rgba(255,255,255,0.75)');
  grd.addColorStop(0.45, 'rgba(255,255,255,0.18)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  _glow = new THREE.CanvasTexture(c);
  _glow.colorSpace = THREE.SRGBColorSpace;
  return _glow;
}

export function Glow({ color = '#14D1C8', scale = 1, opacity = 1, position }: { color?: string; scale?: number; opacity?: number; position?: [number, number, number] }) {
  const tex = useMemo(glowTexture, []);
  return (
    <sprite position={position} scale={[scale, scale, scale]}>
      <spriteMaterial map={tex} color={color} transparent opacity={opacity} depthWrite={false} blending={THREE.AdditiveBlending} />
    </sprite>
  );
}

/** Four-point sparkle from the RIFD brand motif, as flat geometry. */
export function useStarGeometry(outer = 0.5, inner = 0.09) {
  return useMemo(() => {
    const s = new THREE.Shape();
    for (let i = 0; i < 8; i++) {
      const r = i % 2 === 0 ? outer : inner;
      const a = (i / 8) * Math.PI * 2 + Math.PI / 2;
      const x = Math.cos(a) * r, y = Math.sin(a) * r;
      if (i === 0) s.moveTo(x, y); else s.lineTo(x, y);
    }
    s.closePath();
    return new THREE.ShapeGeometry(s);
  }, [outer, inner]);
}

export const seeded = (seed: number) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};
