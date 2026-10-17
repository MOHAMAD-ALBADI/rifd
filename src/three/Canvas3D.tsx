import { Canvas } from '@react-three/fiber';
import CoverScene from './CoverScene';
import ProblemScene from './ProblemScene';
import AgentScene from './AgentScene';

export type SceneName = 'cover' | 'problem' | 'agents';

const CAMERAS: Record<SceneName, { position: [number, number, number]; fov: number }> = {
  cover: { position: [0.6, 1.7, 6.4], fov: 42 },
  problem: { position: [0, 0, 6.2], fov: 45 },
  agents: { position: [0, 0, 6.6], fov: 42 },
};

/** Lazily loaded chunk: holds three.js + all scenes so the first paint stays light. */
export default function Canvas3D({ scene, active, reduced, props }: { scene: SceneName; active: boolean; reduced: boolean; props: Record<string, any> }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={CAMERAS[scene]}
      resize={{ offsetSize: true }}
      frameloop={active ? 'always' : 'never'}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0 }}
    >
      {scene === 'cover' && <CoverScene reduced={reduced} />}
      {scene === 'problem' && <ProblemScene connected={!!props.connected} reduced={reduced} />}
      {scene === 'agents' && <AgentScene active={props.active ?? 0} onSelect={props.onSelect} reduced={reduced} />}
    </Canvas>
  );
}
