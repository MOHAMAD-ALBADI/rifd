import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Billboard, Line } from '@react-three/drei';
import { Glow, seeded, useStarGeometry } from './common';

/* "Opportunity dome": the brand's arc motif rebuilt in space. Each arc is a pathway;
   nodes along it are students, skills and opportunities; light pulses travel between them. */

const ARCS = 7;
const COLORS = ['#14D1C8', '#3B82F6', '#93BBFB', '#6FE8E1'];

function arcPoint(radius: number, rotY: number, t: number, out = new THREE.Vector3()) {
  const a = Math.PI * t; // 0..π half circle
  const x = Math.cos(a) * radius;
  const y = Math.sin(a) * radius * 0.92;
  return out.set(x * Math.cos(rotY), y, x * Math.sin(rotY));
}

function Pulse({ radius, rotY, speed, offset, color }: { radius: number; rotY: number; speed: number; offset: number; color: string }) {
  const ref = useRef<THREE.Group>(null);
  const v = useMemo(() => new THREE.Vector3(), []);
  useFrame(({ clock }) => {
    const t = (clock.elapsedTime * speed + offset) % 1;
    arcPoint(radius, rotY, t, v);
    ref.current?.position.copy(v);
    const fade = Math.sin(t * Math.PI);
    ref.current?.scale.setScalar(0.35 + fade * 0.45);
  });
  return (
    <group ref={ref}>
      <Glow color={color} scale={0.55} opacity={0.95} />
      <mesh>
        <sphereGeometry args={[0.028, 10, 10]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

export default function CoverScene({ reduced = false }: { reduced?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const star = useRef<THREE.Mesh>(null);
  const starGeo = useStarGeometry(0.34, 0.06);
  const { camera, pointer } = useThree();

  const arcs = useMemo(() => {
    const rnd = seeded(7);
    return Array.from({ length: ARCS }, (_, i) => {
      const rotY = (i / ARCS) * Math.PI;
      const radius = 2.15 + (i % 3) * 0.32;
      const pts = Array.from({ length: 64 }, (_, k) => arcPoint(radius, rotY, k / 63));
      const nodes = Array.from({ length: 5 }, () => {
        const t = 0.08 + rnd() * 0.84;
        return { p: arcPoint(radius, rotY, t), c: COLORS[Math.floor(rnd() * COLORS.length)], s: 0.03 + rnd() * 0.035 };
      });
      return { rotY, radius, pts, nodes, speed: 0.07 + rnd() * 0.06, offset: rnd() };
    });
  }, []);

  const dust = useMemo(() => {
    const rnd = seeded(31);
    const n = 260;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 3 + rnd() * 5;
      const a = rnd() * Math.PI * 2;
      arr[i * 3] = Math.cos(a) * r;
      arr[i * 3 + 1] = rnd() * 4.5 - 0.6;
      arr[i * 3 + 2] = Math.sin(a) * r - 1;
    }
    return arr;
  }, []);

  useFrame(({ clock }, dt) => {
    if (!reduced && group.current) group.current.rotation.y += dt * 0.06;
    // gentle parallax towards the pointer
    const tx = 0.6 + pointer.x * 0.5;
    const ty = 1.7 + pointer.y * 0.3;
    camera.position.x += (tx - camera.position.x) * 0.04;
    camera.position.y += (ty - camera.position.y) * 0.04;
    camera.lookAt(0, 1.2, 0);
    if (star.current) {
      const s = 1 + Math.sin(clock.elapsedTime * 1.6) * 0.08;
      star.current.scale.setScalar(s);
    }
  });

  return (
    <>
      <fog attach="fog" args={['#030b1a', 6, 13]} />
      <group ref={group} position={[0, 0, 0]}>
        {arcs.map((a, i) => (
          <group key={i}>
            <Line points={a.pts} color={i % 2 ? '#3B82F6' : '#14D1C8'} lineWidth={1.1} transparent opacity={0.42} />
            {a.nodes.map((n, k) => (
              <group key={k} position={n.p}>
                <mesh>
                  <sphereGeometry args={[n.s, 12, 12]} />
                  <meshBasicMaterial color={n.c} />
                </mesh>
                <Glow color={n.c} scale={n.s * 9} opacity={0.6} />
              </group>
            ))}
            <Pulse radius={a.radius} rotY={a.rotY} speed={reduced ? 0 : a.speed} offset={a.offset} color={i % 2 ? '#5E9AF8' : '#14D1C8'} />
          </group>
        ))}
        {/* base rings */}
        {[1.2, 2.2, 3.2].map((r, i) => (
          <mesh key={r} rotation-x={-Math.PI / 2} position-y={0.001}>
            <ringGeometry args={[r, r + 0.008, 128]} />
            <meshBasicMaterial color="#93BBFB" transparent opacity={0.16 - i * 0.04} />
          </mesh>
        ))}
      </group>
      {/* apex sparkle — the brand's four-point star */}
      <group position={[0, 2.62, 0]}>
        <Billboard>
          <mesh ref={star} geometry={starGeo}>
            <meshBasicMaterial color="#6FE8E1" />
          </mesh>
        </Billboard>
        <Glow color="#14D1C8" scale={1.9} opacity={0.75} />
      </group>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dust, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.018} color="#93BBFB" transparent opacity={0.5} sizeAttenuation depthWrite={false} />
      </points>
    </>
  );
}
