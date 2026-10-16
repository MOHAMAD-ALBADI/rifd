import { BUSINESS, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { BusinessModelCanvas } from '../components/BusinessModelCanvas';

export default function S09Business() {
  return (
    <SlideFrame meta={SLIDES[8]} title={BUSINESS.headline} accent={['قابلة', 'للتكرار.']}>
      <BusinessModelCanvas />
    </SlideFrame>
  );
}
