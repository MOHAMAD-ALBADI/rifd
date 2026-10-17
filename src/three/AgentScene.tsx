import * as THREE from 'three';
import { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { Glow } from './common';
import { AGENTS } from '../data/content';

/* Multi-agent orchestration: six agents on one ring around a shared core.
   The active agent lights up; a pulse travels from the previous agent along the ring, then into the core. */

const R = 2.15;
const TILT = -0.42;

function agentPos(i: number) {
  const a = Math.PI / 2 - (i / AGENTS.length) * Math.PI * 2; // start at top, go clockwise
  return new THREE.Vector3(Math.cos(a) * R, Math.sin(a) * R, 0);
}

function AgentNode({ i, active, done, onSelect }: { i: number; active: boolean; done: boolean; onSelect?: (i: number) => void }) {
  const ref = useRef<THREE.Group>(null);
  const [hover, setHover] = useState(false);
  const p = useMemo(() => agentPos(i), [i]);
  const color = AGENTS[i].color;
  useFrame(({ clock }) => {
    const g = ref.current; if (!g) return;
    const target = active ? 1.55 + Math.sin(clock.elapsedTime * 3) * 0.06 : hover ? 1.2 : 1;
    g.scale.lerp(new THREE.Vector3(target, target, target), 0.12);
  });
  return (
    <group
      ref={ref}
      position={p}
      onClick={(e) => { e.stopPropagation(); onSelect?.(i); }}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { setHover(false); document.body.style.cursor = ''; }}
    >
      <mesh>
        <sphereGeometry args={[0.36, 20, 20]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      <mesh>
        <torusGeometry args={[0.2, 0.014, 8, 48]} />
        <meshBasicMaterial color={active || done ? color : '#3d5a87'} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.1, 18, 18]} />
        <meshBasicMaterial color={active ? '#ffffff' : done ? color : '#24406b'} />
      </mesh>
      <Glow color={color} scale={active ? 1.5 : done ? 0.7 : 0.35} opacity={active ? 0.95 : 0.5} />
    </group>
  );
}

function Pulse({ from, to, color, k }: { from: THREE.Vector3; to: THREE.Vector3; color: string; k: number }) {
  const ref = useRef<THREE.Group>(null);
  const start = useRef<number | null>(null);
  useFrame(({ clock }) => {
    if (start.current === null) start.current = clock.elapsedTime;
    const t = Math.min(1, (clock.elapsedTime - start.current) / 0.9);
    const e = 1 - Math.pow(1 - t, 3);
    ref.current?.position.lerpVectors(from, to, e);
    if (ref.current) ref.current.visible = t < 1;
  });
  return (
    <group ref={ref} key={k}>
      <Glow color={color} scale={0.8} />
    </group>
  );
}

export default function AgentScene({ active, onSelect, reduced = false }: { active: number; onSelect?: (i: number) => void; reduced?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const prev = useRef(active);
  const [pulseKey, setPulseKey] = useState(0);
  const [from, setFrom] = useState(active);
  if (prev.current !== active) { setFrom(prev.current); prev.current = active; setPulseKey((k) => k + 1); }

  const ring = useMemo(() => Array.from({ length: 97 }, (_, k) => {
    const a = (k / 96) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(a) * R, Math.sin(a) * R, 0);
  }), []);
  const positions = useMemo(() => AGENTS.map((_, i) => agentPos(i)), []);
  const origin = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  useFrame(({ clock, pointer }) => {
    if (group.current) {
      group.current.rotation.x = TILT + pointer.y * 0.12;
      group.current.rotation.y = reduced ? 0 : Math.sin(clock.elapsedTime * 0.3) * 0.18 + pointer.x * 0.15;
    }
    if (core.current && !reduced) { core.current.rotation.y += 0.004; core.current.rotation.x += 0.002; }
  });

  return (
    <group ref={group} rotation-x={TILT}>
      <Line points={ring} color="#3B82F6" lineWidth={1.2} transparent opacity={0.35} />
      {positions.map((p, i) => (
        <Line key={i} points={[origin, p]} color={i === active ? AGENTS[i].color : '#1f3a66'} lineWidth={i === active ? 2.2 : 1} transparent opacity={i === active ? 0.95 : 0.5} />
      ))}
      {/* shared orchestration core */}
      <mesh ref={core}>
        <icosahedronGeometry args={[0.62, 1]} />
        <meshBasicMaterial color="#14D1C8" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.24, 28, 28]} />
        <meshBasicMaterial color="#e9fffd" />
      </mesh>
      <Glow color="#14D1C8" scale={2.6} opacity={0.7} />
      {AGENTS.map((_, i) => (
        <AgentNode key={i} i={i} active={i === active} done={i < active} onSelect={onSelect} />
      ))}
      {pulseKey > 0 && (
        <>
          <Pulse key={`a${pulseKey}`} k={pulseKey} from={positions[from]} to={positions[active]} color={AGENTS[active].color} />
          <Pulse key={`b${pulseKey}`} k={pulseKey} from={positions[active]} to={origin} color="#ffffff" />
        </>
      )}
    </group>
  );
}
