import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import { Device, StudioLights, UICard } from './parts';
import { logoTexture } from './uiTexture';

/* Cover + finale. A student dashboard device with three product moments in front of it:
   an academic request, a skill profile and an opportunity. The camera eases in once; no idle spinning.
   variant="finale": the cards gather behind the device and the RIFD mark resolves in front. */

const easeOut = (t: number) => 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 3);

const CARDS = [
  { kind: 'request-tutor' as const, pos: new THREE.Vector3(-2.05, 1.05, 0.95), rot: [0, 0.32, 0.03], w: 2.25 },
  { kind: 'skill' as const, pos: new THREE.Vector3(2.0, 0.55, 1.25), rot: [0, -0.28, -0.02], w: 2.15 },
  { kind: 'opportunity' as const, pos: new THREE.Vector3(0.15, -1.3, 1.6), rot: [-0.06, 0.05, 0], w: 2.05 },
];
const GATHER = [new THREE.Vector3(-1.2, 0.5, -0.6), new THREE.Vector3(1.2, 0.35, -0.7), new THREE.Vector3(0, -0.45, -0.8)];

export default function HeroScene({ variant = 'hero', reduced = false }: { variant?: 'hero' | 'finale'; reduced?: boolean }) {
  const { camera, pointer } = useThree();
  const start = useRef<number | null>(null);
  const cards = useRef<(THREE.Group | null)[]>([]);
  const logo = useRef<THREE.Group>(null);
  const logoMat = useRef<THREE.MeshBasicMaterial>(null);
  const discMat = useRef<THREE.MeshBasicMaterial>(null);
  const device = useRef<THREE.Group>(null);
  const tmp = useMemo(() => new THREE.Vector3(), []);
  const logoTex = useMemo(() => logoTexture(), []);

  useFrame(({ clock }) => {
    if (start.current === null) start.current = clock.elapsedTime;
    const t = clock.elapsedTime - start.current;
    const intro = reduced ? 1 : easeOut(t / 2.4);

    // controlled camera move: one dolly-in, then a gentle pointer parallax
    const camZ = THREE.MathUtils.lerp(17, variant === 'finale' ? 11.6 : 10.9, intro);
    const camY = THREE.MathUtils.lerp(2.2, 0.35, intro);
    camera.position.set(pointer.x * 0.5 + THREE.MathUtils.lerp(2, 0, intro), camY + pointer.y * 0.3, camZ);
    camera.lookAt(0, 0, 0);

    const gather = variant === 'finale' ? (reduced ? 1 : easeOut((t - 1.2) / 1.8)) : 0;
    CARDS.forEach((c, i) => {
      const g = cards.current[i];
      if (!g) return;
      const appear = reduced ? 1 : easeOut((t - 0.5 - i * 0.25) / 1.1);
      tmp.copy(c.pos).lerp(GATHER[i], gather);
      const bob = reduced ? 0 : Math.sin(t * 0.8 + i * 1.7) * 0.035 * (1 - gather);
      g.position.set(tmp.x, tmp.y + bob - (1 - appear) * 0.6, tmp.z);
      g.scale.setScalar((0.86 + 0.14 * appear) * (1 - gather * 0.25));
    });
    if (device.current) device.current.rotation.y = -0.32 + pointer.x * 0.04;
    if (logo.current && logoMat.current) {
      const l = variant === 'finale' ? (reduced ? 1 : easeOut((t - 2.2) / 1.4)) : 0;
      logo.current.scale.setScalar(0.4 + 1.1 * l);
      logoMat.current.opacity = l;
      if (discMat.current) discMat.current.opacity = 0.92 * l;
    }
  });

  return (
    <>
      <StudioLights />
      <group ref={device} rotation={[0.06, -0.32, 0]} position={[0, 0.05, 0]}>
        <Device />
      </group>
      {CARDS.map((c, i) => (
        <group key={c.kind} ref={(el) => (cards.current[i] = el)} position={c.pos} rotation={c.rot as [number, number, number]}>
          <UICard kind={c.kind} width={c.w} />
        </group>
      ))}
      {variant === 'finale' && (
        <group ref={logo as any} position={[0, 0.1, 2.2]} scale={0.4}>
          <mesh position={[0, 0, -0.02]}>
            <circleGeometry args={[1.55, 64]} />
            <meshBasicMaterial ref={discMat} color="#0B1F3B" transparent opacity={0} toneMapped={false} />
          </mesh>
          <mesh>
            <planeGeometry args={[1.86, 2]} />
            <meshBasicMaterial ref={logoMat} map={logoTex} transparent opacity={0} toneMapped={false} />
          </mesh>
        </group>
      )}
      <ContactShadows position={[0, -2.25, 0]} opacity={0.45} scale={12} blur={2.6} far={4} color="#000814" />
    </>
  );
}
