
import { Database, Cog, Brain, MonitorSmartphone } from 'lucide-react';
import SectionHeading from './SectionHeading';

const layers = [
  { icon: Database,          name: 'Data Layer',         accent: '#F59E0B', tags: ['UPI txn', 'Weather', 'Mandi prices', 'Sales log'], desc: 'Ingests UPI, weather, market & sales feeds.' },
  { icon: Cog,                name: 'Processing Layer',   accent: '#EF6C1A', tags: ['FastAPI', 'Feature eng.', 'Model inference'],       desc: 'FastAPI orchestrates feature engineering and model inference.' },
  { icon: Brain,              name: 'Intelligence Layer', accent: '#3DDC97', tags: ['Prediction', 'Risk', 'Recommendation'],             desc: 'Three specialised engines: prediction, risk & recommendation.' },
  { icon: MonitorSmartphone,  name: 'Output Layer',       accent: '#E4572E', tags: ['Owner app', 'Bank console'],                        desc: 'One unified dashboard for owners and lenders.' },
];

export default function Architecture() {
  return (
    <section id="architecture" className="relative bg-ivory py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="System Architecture"
          title={<>Built for scale, tuned for the <span className="italic text-marigold" style={{ fontVariationSettings: "'SOFT' 100" }}>last mile.</span></>}
          intro="Each layer handles real-world complexity — from noisy transaction data to unstable connectivity in rural regions."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-16 items-start">
          {/* Left — stacked chevron layers */}
          <div className="lg:col-span-7 space-y-3">
            {layers.map((L, i) => {
              const Icon = L.icon;
              return (
                <div
                  key={L.name}
                  className="reveal group relative bg-parchment/50 border border-mist rounded-2xl overflow-hidden hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-300"
                  data-delay={String(Math.min(i + 1, 4))}
                  style={{ marginLeft: `${i * 20}px` }}
                >
                  {/* accent stripe */}
                  <span className="absolute left-0 top-0 bottom-0 w-1" style={{ background: L.accent }} />
                  <div className="pl-6 pr-6 py-5 flex items-center gap-5">
                    <span className="inline-flex w-11 h-11 rounded-xl items-center justify-center shrink-0" style={{ backgroundColor: L.accent + '18', color: L.accent }}>
                      <Icon size={18} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] tracking-widest text-midnight/40 font-semibold">L0{i + 1}</span>
                        <h3 className="font-display text-lg md:text-xl font-medium text-midnight tracking-tight truncate">{L.name}</h3>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {L.tags.map(t => (
                          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full border" style={{ borderColor: L.accent + '33', color: L.accent, background: L.accent + '0F' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — bullets */}
          <div className="lg:col-span-5 lg:pt-6 lg:sticky lg:top-24 space-y-6">
            {layers.map((L, i) => (
              <div key={L.name} className="reveal flex gap-4" data-delay={String(Math.min(i + 1, 4))}>
                <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: L.accent }} />
                <div>
                  <p className="font-semibold text-sm text-midnight">{L.name}</p>
                  <p className="text-sm text-midnight/60 mt-0.5 leading-relaxed">{L.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
