import { useState } from 'react';
import { SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { SlideTabs, StatusBadge } from '../components/primitives';
import { InstituteApp } from '../components/demo/InstituteApp';
import { DesignerApp } from '../components/demo/DesignerApp';
import { StudentApp } from '../components/demo/StudentApp';
import { AgentNetwork } from '../components/AgentNetwork';

type Tab = 'institute' | 'market' | 'support' | 'agents';
const TITLES: Record<Tab, string> = {
  institute: 'المعهد الرقمي: من دورة… إلى شهادة وفرصة.',
  market: 'السوق المصغر: مهارة طالب… تتحول إلى دخل.',
  support: 'الدعم الأكاديمي: من سؤال… إلى جلسة موثّقة.',
  agents: 'ستة وكلاء أذكياء ينظّمون الرحلة كاملة.',
};

export default function N08MVP() {
  const [tab, setTab] = useState<Tab>('institute');
  return (
    <SlideFrame meta={SLIDES[7]} title={TITLES[tab]} accent={['شهادة', 'وفرصة.', 'دخل.', 'موثّقة.', 'كاملة.']} titleClass="lg:!text-[2.6rem]"
      aside={<SlideTabs tabs={[['institute', 'المعهد الرقمي'], ['market', 'السوق المصغر'], ['support', 'الدعم الأكاديمي'], ['agents', 'الوكلاء الستة']] as const} value={tab} onChange={setTab} />}>
      <div className="mb-3 flex items-center gap-3 text-[17px] text-white/65"><StatusBadge status="demo" />نموذج أولي تفاعلي ببيانات توضيحية — جرّب الرحلة خطوة بخطوة.</div>
      {tab === 'institute' && <InstituteApp key="i" />}
      {tab === 'market' && <DesignerApp key="m" />}
      {tab === 'support' && <StudentApp key="s" />}
      {tab === 'agents' && <AgentNetwork key="a" />}
    </SlideFrame>
  );
}
