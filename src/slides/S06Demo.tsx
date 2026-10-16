import { useState } from 'react';
import { SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { StudentApp } from '../components/demo/StudentApp';
import { ClubApp } from '../components/demo/ClubApp';

export default function S06Demo() {
  const [tab, setTab] = useState<'student' | 'club'>('student');
  const tabs = (
    <div className="no-print inline-flex rounded-full border border-line bg-white p-1.5 shadow-card">
      {([['student', 'طالبة تطلب دعمًا'], ['club', 'نادٍ يطلب تصميمًا']] as const).map(([k, l]) => (
        <button key={k} onClick={() => setTab(k)} className={`focus-ring rounded-full px-5 py-2 text-[17px] font-bold transition lg:text-[20px] ${tab === k ? 'bg-navy text-white' : 'text-ink-2 hover:text-ink'}`}>{l}</button>
      ))}
    </div>
  );
  return (
    <SlideFrame meta={SLIDES[5]} title="جرّب رِفد كما يستخدمه الطالب." accent={['رِفد']} titleClass="lg:!text-[48px]" aside={tabs}>
      <div className="mb-4 lg:hidden">{tabs}</div>
      {tab === 'student' ? <StudentApp key="s" /> : <ClubApp key="c" />}
    </SlideFrame>
  );
}
