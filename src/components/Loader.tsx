import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/** Brief branded loader: waits for the bundled fonts so Arabic never flashes in a fallback face. */
export function Loader({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const min = new Promise((r) => setTimeout(r, 800));
    const fonts = (document as any).fonts?.ready ?? Promise.resolve();
    const icon = new Promise((r) => { const i = new Image(); i.onload = i.onerror = r; i.src = 'assets/brand/rifd-icon.png'; });
    Promise.all([min, fonts, icon]).then(() => { setShow(false); onDone(); });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-canvas" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-col items-center">
            <motion.img src="assets/brand/rifd-icon.png" alt="" className="h-24" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} />
            <div className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-line">
              <motion.div className="h-full bg-rifd-600" initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 0.8, ease: 'easeInOut' }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
