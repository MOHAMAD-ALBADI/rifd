import { useState } from 'react';
import { MVP, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { StudentApp } from '../components/demo/StudentApp';
import { DesignerApp } from '../components/demo/DesignerApp';

export default function Scene05MVP() {
  const [tab, setTab] = useState<'a' | 'b'>('a');
  const tabs = (
    <div className="no-print inline-flex rounded-full border border-white/15 bg-white/[0.04] p-1.5">
      {([['a', 'طالب يحتاج دعمًا أكاديميًا'], ['b', 'طالب يحوّل مهارته إلى فرصة']] as const).map(([k, l]) => (
        <button key={k} onClick={() => setTab(k)} className={`focus-ring rounded-full px-5 py-2.5 text-[17px] font-bold transition lg:text-[20px] ${tab === k ? 'bg-snow text-night' : 'text-mist hover:text-snow'}`}>{l}</button>
      ))}
    </div>
  );
  return (
    <SlideFrame meta={SLIDES[4]} title={MVP.headline} accent="رِفد." sub={MVP.subtitle} titleClass="lg:!text-[52px]" aside={tabs}>
      <div className="mb-4 lg:hidden">{tabs}</div>
      {tab === 'a' ? <StudentApp key="a" /> : <DesignerApp key="b" />}
    </SlideFrame>
  );
}
