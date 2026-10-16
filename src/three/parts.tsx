import * as THREE from 'three';
import { useMemo } from 'react';
import { RoundedBox, Environment, Lightformer } from '@react-three/drei';
import { CARD_ASPECT, CardKind, uiTexture } from './uiTexture';

/** A physical product card: a thin rounded slab with a crisp UI face. */
export function UICard({ kind, width = 2.4, opacity = 1, ...props }: { kind: CardKind; width?: number; opacity?: number } & JSX.IntrinsicElements['group']) {
  const h = width / CARD_ASPECT;
  const tex = useMemo(() => uiTexture(kind), [kind]);
  return (
    <group {...props}>
      <RoundedBox args={[width, h, 0.05]} radius={0.06} smoothness={4} position={[0, 0, -0.03]}>
        <meshStandardMaterial color="#E9EEF7" roughness={0.45} metalness={0.05} transparent opacity={opacity} />
      </RoundedBox>
      <mesh position={[0, 0, 0.001]}>
        <planeGeometry args={[width, h]} />
        <meshBasicMaterial map={tex} transparent opacity={opacity} toneMapped={false} />
      </mesh>
    </group>
  );
}

/** Studio lighting built from procedural light-formers — no HDR download, works offline. */
export function StudioLights() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 6]} intensity={1.3} />
      <directionalLight position={[-6, 2, 3]} intensity={0.35} color="#93BBFB" />
      <Environment resolution={128}>
        <Lightformer form="rect" intensity={2.2} position={[0, 5, 2]} scale={[10, 3, 1]} color="#ffffff" />
        <Lightformer form="rect" intensity={1.2} position={[-5, 0, 3]} scale={[3, 6, 1]} color="#93BBFB" />
        <Lightformer form="rect" intensity={0.8} position={[5, -1, 2]} scale={[3, 5, 1]} color="#14D1C8" />
      </Environment>
    </>
  );
}

/** A tablet-like device showing the student dashboard. */
export function Device({ screenOpacity = 1, ...props }: { screenOpacity?: number } & JSX.IntrinsicElements['group']) {
  const tex = useMemo(() => uiTexture('dashboard'), []);
  return (
    <group {...props}>
      <RoundedBox args={[4.4, 2.86, 0.14]} radius={0.16} smoothness={6}>
        <meshPhysicalMaterial color="#13284A" roughness={0.32} metalness={0.6} clearcoat={0.8} clearcoatRoughness={0.25} />
      </RoundedBox>
      <mesh position={[0, 0, 0.0715]}>
        <planeGeometry args={[4.12, 2.58]} />
        <meshBasicMaterial map={tex} toneMapped={false} transparent opacity={screenOpacity} />
      </mesh>
    </group>
  );
}

let checkTex: THREE.CanvasTexture | null = null;
export function checkTexture() {
  if (checkTex) return checkTex;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d')!;
  g.beginPath(); g.arc(64, 64, 60, 0, Math.PI * 2); g.fillStyle = '#14D1C8'; g.fill();
  g.strokeStyle = '#071629'; g.lineWidth = 12; g.lineCap = 'round'; g.lineJoin = 'round';
  g.beginPath(); g.moveTo(38, 66); g.lineTo(56, 84); g.lineTo(92, 46); g.stroke();
  checkTex = new THREE.CanvasTexture(c); checkTex.colorSpace = THREE.SRGBColorSpace;
  return checkTex;
}
