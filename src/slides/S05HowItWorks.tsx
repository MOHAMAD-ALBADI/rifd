import { JOURNEY, SLIDES } from '../data/content';
import { SlideFrame } from '../components/SlideFrame';
import { AgentNetwork } from '../components/AgentNetwork';

export default function S05HowItWorks() {
  return (
    <SlideFrame meta={SLIDES[4]} title={JOURNEY.headline} accent={['نتيجة', 'حقيقية.']}>
      <AgentNetwork />
    </SlideFrame>
  );
}
