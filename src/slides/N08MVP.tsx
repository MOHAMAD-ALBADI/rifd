import { useState } from 'react';
import { SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { SlideTabs, StatusBadge } from '../components/primitives';
import { AgentNetwork } from '../components/AgentNetwork';
import { useEnv } from '../lib/env';
import { RifdApp } from '../mvp/RifdApp';
import { useRifdStore } from '../mvp/store';
import { AgentLog } from '../mvp/ui';

type Tab = 'app' | 'agents';
const TITLES: Record<Tab, string> = {
  app: 'النموذج الأولي: احتياج… جلسة… مهارة… وفرصة.',
  agents: 'ستة وكلاء أذكياء ينظّمون الرحلة كاملة.',
};

export default function N08MVP() {
  const [tab, setTab] = useState<Tab>('app');
  const store = useRifdStore({ persist: false }); // the deck always starts the demo fresh
  const { mode } = useEnv();
  const flow = mode === 'flow';

  return (
    <SlideFrame meta={SLIDES[7]} title={TITLES[tab]} accent={['وفرصة.', 'كاملة.']} titleClass="lg:!text-[2.6rem]"
      aside={<SlideTabs tabs={[['app', 'التطبيق التفاعلي'], ['agents', 'الوكلاء الستة']] as const} value={tab} onChange={setTab} />}>
      {tab === 'app' && (
        <div className={`grid min-h-0 flex-1 gap-5 ${flow ? 'grid-cols-1' : 'grid-cols-[1fr_340px]'}`}>
          <div className={`min-h-0 overflow-hidden rounded-[18px] border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] ${flow ? 'h-[680px]' : ''}`}>
            <RifdApp store={store} embedded />
          </div>
          <aside className="card-d flex min-h-0 flex-col p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[19px] font-extrabold">سجل الوكلاء — مباشر</span>
              <StatusBadge status="demo" />
            </div>
            <p className="mt-1 text-[15px] text-white/55">كل خطوة في التطبيق يظهر هنا الوكيل الذي نفّذها — والقرارات المالية والاعتماد بشرية.</p>
            <div className="scroll-thin mt-3 min-h-0 flex-1 overflow-y-auto pe-1 text-[15px]" data-scroll>
              <AgentLog log={store.state.log} />
            </div>
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
              <a href="./app.html" target="_blank" rel="noreferrer" className="focus-ring rounded-full bg-teal px-4 py-2 text-center text-[16px] font-bold text-navy-950 hover:bg-teal-300">افتح التطبيق بملء الشاشة ↗</a>
              <button onClick={store.reset} className="focus-ring rounded-full border border-white/15 px-4 py-2 text-[15px] text-white/75 hover:border-white/35">إعادة التجربة من البداية</button>
            </div>
          </aside>
        </div>
      )}
      {tab === 'agents' && <AgentNetwork key="a" />}
    </SlideFrame>
  );
}
