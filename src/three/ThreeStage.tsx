import { Component, ReactNode, Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useEnv, useSlide } from '../lib/env';
import type { SceneName } from './Canvas3D';

const Canvas3D = lazy(() => import('./Canvas3D'));

export function hasWebGL(): boolean {
  try {
    if (new URLSearchParams(location.search).has('nogl')) return false;
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch { return false; }
}

class GLBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() {}
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

/**
 * Mounts a WebGL scene only once its scene is on screen, lazy-loads three.js, and swaps in an
 * interactive 2D fallback when WebGL is unavailable or fails.
 */
export function ThreeStage({ scene, fallback, className = '', props = {} }: { scene: SceneName; fallback: ReactNode; className?: string; props?: Record<string, any> }) {
  const { reduced } = useEnv();
  const { active } = useSlide();
  const gl = useMemo(hasWebGL, []);
  const [mounted, setMounted] = useState(active);
  useEffect(() => { if (active) setMounted(true); }, [active]);

  if (!gl) return <div className={className}>{fallback}</div>;
  return (
    <div className={className || 'relative'} data-webgl={scene}>
      {mounted && (
        <GLBoundary fallback={fallback}>
          <Suspense fallback={null}>
            <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
              <Canvas3D scene={scene} active={active} reduced={reduced} props={props} />
            </motion.div>
          </Suspense>
        </GLBoundary>
      )}
    </div>
  );
}
