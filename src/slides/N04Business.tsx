import { useState } from 'react';
import { BUSINESS, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { BusinessModelCanvas } from '../components/BusinessModelCanvas';
import { FinancePanel } from '../components/FinancePanel';
import { SlideTabs } from '../components/primitives';

export default function N04Business() {
  const [tab, setTab] = useState<'model' | 'finance'>('model');
  return (
    <SlideFrame meta={SLIDES[3]} title={tab === 'model' ? BUSINESS.headline : 'الاستدامة المالية خلال خمس سنوات.'} accent={['قابلة', 'للتكرار.', 'خمس', 'سنوات.']}
      aside={<SlideTabs tabs={[['model', 'نموذج العمل'], ['finance', 'المالية · 5 سنوات']] as const} value={tab} onChange={setTab} />}>
      {tab === 'model' ? <BusinessModelCanvas /> : <FinancePanel />}
    </SlideFrame>
  );
}
