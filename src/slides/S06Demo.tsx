import { useState } from 'react';
import { SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { DemoWorkflow } from '../components/DemoWorkflow';
import { ClubDemo } from '../components/ClubDemo';

export default function S06Demo() {
  const [tab, setTab] = useState<'tutor' | 'club'>('tutor');
  return (
    <SlideFrame
      meta={SLIDES[5]}
      title="شاهد كيف يعمل رِفد."
      accent={['رِفد.']}
      titleClass="lg:!text-[2.6rem]"
      sub={
        <span className="flex flex-wrap items-center gap-3">
          <span>نموذج تفاعلي يعمل الآن في المتصفح — ليس منصة مُطلقة بعد.</span>
          <span className="no-print inline-flex rounded-full border border-white/15 p-1 text-base">
            {([['tutor', 'إرشاد أكاديمي'], ['club', 'مشروع لنادٍ طلابي']] as const).map(([k, l]) => (
              <button key={k} onClick={() => setTab(k)} className={`focus-ring rounded-full px-4 py-1 transition ${tab === k ? 'bg-white text-navy-950' : 'text-white/70 hover:text-white'}`}>{l}</button>
            ))}
          </span>
        </span>
      }
    >
      {tab === 'tutor' ? <DemoWorkflow /> : <ClubDemo />}
    </SlideFrame>
  );
}
