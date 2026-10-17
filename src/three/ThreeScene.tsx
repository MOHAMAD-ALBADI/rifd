import { Component, ReactNode, Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useEnv, useSlide } from '../lib/env';
import type { SceneName } from './Canvas3D';

const Canvas3D = lazy(() => import('./Canvas3D'));

class GLBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() {}
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

/**
 * Mounts a WebGL scene only when its slide is (or was) active, lazy-loads three.js,
 * and falls back to a static SVG when WebGL is unavailable, in print, or on error.
 */
export function ThreeScene({ scene, fallback, className = '', props = {} }: { scene: SceneName; fallback: ReactNode; className?: string; props?: Record<string, any> }) {
  const { webgl, mode, reduced } = useEnv();
  const { active } = useSlide();
  const [mounted, setMounted] = useState(active);
  useEffect(() => { if (active) setMounted(true); }, [active]);

  if (!webgl || mode === 'print') return <div className={`absolute inset-0 ${className}`}>{fallback}</div>;

  return (
    <div className={`absolute inset-0 ${className}`}>
      {mounted ? (
        <GLBoundary fallback={fallback}>
          <Suspense fallback={<div className="absolute inset-0 opacity-60">{fallback}</div>}>
            <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
              <Canvas3D scene={scene} active={active} reduced={reduced} props={props} />
            </motion.div>
          </Suspense>
        </GLBoundary>
      ) : (
        <div className="absolute inset-0 opacity-60">{fallback}</div>
      )}
    </div>
  );
}
