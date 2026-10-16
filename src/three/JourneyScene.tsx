import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { StudioLights, UICard, checkTexture } from './parts';
import type { CardKind } from './uiTexture';

/* Service-to-opportunity journey: six real product objects on one path.
   Advancing a step brings that object forward and moves the camera along the path. */

const KINDS: CardKind[] = ['request-club', 'skill', 'match', 'milestones', 'deliverable', 'record'];
const GAP = 3.1;
const xOf = (i: number) => (2.5 - i) * GAP; // RTL: the journey starts on the right

export default function JourneyScene({ active, onSelect, reduced = false }: { active: number; onSelect?: (i: number) => void; reduced?: boolean }) {
  const { camera } = useThree();
  const groups = useRef<(THREE.Group | null)[]>([]);
  const camX = useRef(xOf(active));
  void camera;
  const check = useMemo(() => checkTexture(), []);
  const rail = useMemo(() => KINDS.map((_, i) => new THREE.Vector3(xOf(i), -1.32, 0)), []);

  useFrame((_, dt) => {
    const k = reduced ? 1 : 1 - Math.pow(0.0015, dt); // frame-rate independent easing
    camX.current += (xOf(active) - camX.current) * k;
    camera.position.set(camX.current, 0.12, 5.6);
    camera.lookAt(camX.current, 0.02, 0);
    groups.current.forEach((g, i) => {
      if (!g) return;
      const d = i - active;
      const tz = d === 0 ? 1.4 : -Math.min(Math.abs(d), 3) * 0.55;
      const ty = d === 0 ? 0.2 : -0.05;
      const ts = d === 0 ? 1.22 : 0.92;
      const ry = d === 0 ? 0 : d > 0 ? 0.22 : -0.22;
      g.position.z += (tz - g.position.z) * k;
      g.position.y += (ty - g.position.y) * k;
      g.rotation.y += (ry - g.rotation.y) * k;
      const s = g.scale.x + (ts - g.scale.x) * k;
      g.scale.setScalar(s);
    });
  });

  return (
    <>
      <StudioLights />
      {/* the path: travelled part in teal, remaining part dim */}
      <Line points={rail} color="#3D5A87" lineWidth={2} transparent opacity={0.7} />
      {active > 0 && <Line points={rail.slice(0, active + 1)} color="#14D1C8" lineWidth={3.5} />}
      {rail.map((p, i) => (
        <mesh key={i} position={p}>
          <circleGeometry args={[i === active ? 0.16 : 0.1, 32]} />
          <meshBasicMaterial color={i <= active ? '#14D1C8' : '#3D5A87'} toneMapped={false} />
        </mesh>
      ))}
      {KINDS.map((kind, i) => (
        <group
          key={kind}
          ref={(el) => (groups.current[i] = el)}
          position={[xOf(i), 0, 0]}
          onClick={(e) => { e.stopPropagation(); onSelect?.(i); }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = '')}
        >
          <UICard kind={kind} width={2.7} />
          {i < active && (
            <mesh position={[-1.25, 0.78, 0.06]}>
              <planeGeometry args={[0.42, 0.42]} />
              <meshBasicMaterial map={check} transparent toneMapped={false} />
            </mesh>
          )}
        </group>
      ))}
    </>
  );
}
