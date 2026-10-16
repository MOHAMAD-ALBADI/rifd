import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { Glow, seeded } from './common';

/* Three communities — students who need support, talented students, scattered programs.
   Disconnected: they drift apart and their links break. Connected: they gather around a core. */

const CLUSTERS = [
  { color: '#3B82F6', apart: new THREE.Vector3(2.5, 0.65, 0), joined: new THREE.Vector3(1.6, 0.35, 0) },
  { color: '#14D1C8', apart: new THREE.Vector3(-2.5, 0.45, 0), joined: new THREE.Vector3(-1.6, 0.35, 0) },
  { color: '#93BBFB', apart: new THREE.Vector3(0, -1.55, -0.6), joined: new THREE.Vector3(0, -1.25, 0) },
];

function Cluster({ idx, connected, reduced }: { idx: number; connected: boolean; reduced: boolean }) {
  const ref = useRef<THREE.Group>(null);
  const c = CLUSTERS[idx];
  const { nodes, links } = useMemo(() => {
    const rnd = seeded(11 + idx * 13);
    const nodes = Array.from({ length: 13 }, () => {
      const u = rnd() * Math.PI * 2, v = Math.acos(2 * rnd() - 1), r = 0.25 + rnd() * 0.6;
      return new THREE.Vector3(Math.sin(v) * Math.cos(u) * r, Math.sin(v) * Math.sin(u) * r * 0.8, Math.cos(v) * r * 0.6);
    });
    const links: [THREE.Vector3, THREE.Vector3][] = [];
    nodes.forEach((a, i) => nodes.forEach((b, j) => { if (j > i && a.distanceTo(b) < 0.52) links.push([a, b]); }));
    return { nodes, links };
  }, [idx]);

  useFrame(({ clock }) => {
    const g = ref.current; if (!g) return;
    const t = clock.elapsedTime;
    const target = connected ? c.joined : c.apart;
    const drift = connected || reduced ? 0 : Math.sin(t * 0.5 + idx * 2) * 0.12;
    g.position.lerp(new THREE.Vector3(target.x * (1 + drift * 0.3), target.y + drift, target.z), 0.04);
    if (!reduced) g.rotation.y = Math.sin(t * 0.25 + idx) * 0.5;
  });

  return (
    <group ref={ref} position={c.apart}>
      {links.map(([a, b], i) => (
        <Line key={i} points={[a, b]} color={c.color} lineWidth={1} transparent opacity={0.35} />
      ))}
      {nodes.map((p, i) => (
        <group key={i} position={p}>
          <mesh>
            <sphereGeometry args={[i === 0 ? 0.085 : 0.045, 14, 14]} />
            <meshBasicMaterial color={i === 0 ? '#ffffff' : c.color} />
          </mesh>
          <Glow color={c.color} scale={i === 0 ? 0.9 : 0.4} opacity={0.55} />
        </group>
      ))}
    </group>
  );
}

function BrokenLink({ from, to, color, connected, phase }: { from: THREE.Vector3; to: THREE.Vector3; color: string; connected: boolean; phase: number }) {
  const ref = useRef<{ material: THREE.Material & { opacity: number } } | null>(null);
  const mid = useMemo(() => from.clone().lerp(to, 0.5), [from, to]);
  // two segments with a gap in the middle = a "broken" connection
  const a = useMemo(() => [from.clone().lerp(to, 0.18), from.clone().lerp(to, 0.42)], [from, to]);
  const b = useMemo(() => [from.clone().lerp(to, 0.58), from.clone().lerp(to, 0.82)], [from, to]);
  const r1 = useRef<any>(null), r2 = useRef<any>(null);
  useFrame(({ clock }) => {
    const o = connected ? 0 : 0.25 + Math.abs(Math.sin(clock.elapsedTime * 1.3 + phase)) * 0.35;
    [r1.current, r2.current].forEach((l) => { if (l?.material) l.material.opacity += (o - l.material.opacity) * 0.1; });
  });
  void ref; void mid;
  return (
    <>
      <Line ref={r1} points={a} color={color} lineWidth={1.4} dashed dashSize={0.06} gapSize={0.06} transparent opacity={0.4} />
      <Line ref={r2} points={b} color={color} lineWidth={1.4} dashed dashSize={0.06} gapSize={0.06} transparent opacity={0.4} />
    </>
  );
}

function Core({ connected }: { connected: boolean }) {
  const ref = useRef<THREE.Group>(null);
  const beams = useRef<any[]>([]);
  useFrame(({ clock }) => {
    const g = ref.current; if (!g) return;
    const s = connected ? 1 : 0.001;
    g.scale.lerp(new THREE.Vector3(s, s, s), 0.06);
    g.rotation.y = clock.elapsedTime * 0.4;
    beams.current.forEach((l) => { if (l?.material) l.material.opacity += ((connected ? 0.8 : 0) - l.material.opacity) * 0.06; });
  });
  return (
    <>
      <group ref={ref} position={[0, 0.15, 0]} scale={0.001}>
        <mesh>
          <icosahedronGeometry args={[0.38, 1]} />
          <meshBasicMaterial color="#14D1C8" wireframe transparent opacity={0.7} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.16, 24, 24]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <Glow color="#14D1C8" scale={2.2} opacity={0.8} />
      </group>
      {CLUSTERS.map((c, i) => (
        <Line key={i} ref={(el: any) => (beams.current[i] = el)} points={[[0, 0.15, 0], c.joined.toArray()]} color={c.color} lineWidth={2} transparent opacity={0} />
      ))}
    </>
  );
}

export default function ProblemScene({ connected = false, reduced = false }: { connected?: boolean; reduced?: boolean }) {
  return (
    <>
      <Cluster idx={0} connected={connected} reduced={reduced} />
      <Cluster idx={1} connected={connected} reduced={reduced} />
      <Cluster idx={2} connected={connected} reduced={reduced} />
      <BrokenLink from={CLUSTERS[0].apart} to={CLUSTERS[1].apart} color="#93BBFB" connected={connected} phase={0} />
      <BrokenLink from={CLUSTERS[1].apart} to={CLUSTERS[2].apart} color="#93BBFB" connected={connected} phase={1.4} />
      <BrokenLink from={CLUSTERS[2].apart} to={CLUSTERS[0].apart} color="#93BBFB" connected={connected} phase={2.6} />
      <Core connected={connected} />
    </>
  );
}
