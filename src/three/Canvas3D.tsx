import { Canvas } from '@react-three/fiber';
import HeroScene from './HeroScene';
import JourneyScene from './JourneyScene';

export type SceneName = 'hero' | 'finale' | 'journey';

/** Lazily loaded chunk with three.js + all scenes. */
export default function Canvas3D({ scene, active, reduced, props }: { scene: SceneName; active: boolean; reduced: boolean; props: Record<string, any> }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.5, 11], fov: 34 }}
      resize={{ offsetSize: true }}
      frameloop={active ? 'always' : 'never'}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0 }}
    >
      {scene === 'hero' && <HeroScene variant="hero" reduced={reduced} />}
      {scene === 'finale' && <HeroScene variant="finale" reduced={reduced} />}
      {scene === 'journey' && <JourneyScene active={props.active ?? 0} onSelect={props.onSelect} reduced={reduced} />}
    </Canvas>
  );
}
