
import { Layout, Server, Database as DBIcon, Brain, Cloud, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading';

const rows = [
  { icon: Layout,  accent: '#F59E0B', label: 'Frontend',    value: 'React · TypeScript · Tailwind CSS' },
  { icon: Server,  accent: '#EF6C1A', label: 'Backend',     value: 'FastAPI · Python 3.11' },
  { icon: DBIcon,  accent: '#3DDC97', label: 'Database',    value: 'PostgreSQL · Redis' },
  { icon: Brain,   accent: '#E4572E', label: 'AI / ML',     value: 'XGBoost · LightGBM · scikit-learn' },
  { icon: Wrench,  accent: '#0F1E3D', label: 'Data APIs',   value: 'Open-Meteo · Agmarknet · UPI feed' },
  { icon: Cloud,   accent: '#B08968', label: 'Deployment',  value: 'Vercel · Render · Cloudflare' },
];

export default function TechStack() {
  return (
    <section className="relative bg-parchment/50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="The Craft"
          title={<>Boring stack. <span className="italic text-marigold" style={{ fontVariationSettings: "'SOFT' 100" }}>Elegant</span> results.</>}
          intro="Chosen for reliability first — the last thing a shopkeeper needs is a flaky dashboard."
        />

        <div className="mt-14 rounded-3xl bg-ivory border border-mist overflow-hidden divide-y divide-mist reveal">
          {rows.map(r => {
            const Icon = r.icon;
            return (
              <div key={r.label} className="group grid grid-cols-12 items-center gap-4 px-6 md:px-8 py-5 hover:bg-parchment/50 transition-colors">
                <div className="col-span-12 md:col-span-4 flex items-center gap-3">
                  <span className="inline-flex w-9 h-9 rounded-lg items-center justify-center" style={{ backgroundColor: r.accent + '18', color: r.accent }}>
                    <Icon size={15} />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-midnight/50">{r.label}</span>
                </div>
                <div className="col-span-12 md:col-span-8 font-display text-lg md:text-xl font-medium tracking-tight text-midnight">
                  {r.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
