
import { Layers, Sparkles, Bell } from 'lucide-react';
import SectionHeading from './SectionHeading';

const diffs = [
  { icon: Layers,  accent: '#F59E0B', title: 'Alternative data first',
    text: 'Works for businesses with zero formal credit history — UPI transactions and market signals replace bank statements.' },
  { icon: Sparkles, accent: '#3DDC97', title: 'Explainable by design',
    text: 'Every score comes with the top three drivers a regulator, a lender and an owner can all understand.' },
  { icon: Bell,    accent: '#E4572E', title: 'Proactive, not reactive',
    text: 'Early risk detection before a crisis — not after — giving businesses the time and information to respond.' },
];

export default function Differentiators() {
  return (
    <section className="relative bg-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="What makes us different"
          title={<>A different point of view on <span className="italic text-marigold" style={{ fontVariationSettings: "'SOFT' 100" }}>credit worthiness.</span></>}
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-14">
          {diffs.map((d, i) => {
            const Icon = d.icon;
            return (
              <article
                key={d.title}
                className="reveal group relative rounded-3xl overflow-hidden bg-parchment/60 border border-mist p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.04] hover:border-marigold/25 transition-all duration-300"
                data-delay={String(Math.min(i + 1, 3))}
              >
                {/* top accent bar */}
                <span className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: d.accent }} />
                <span className="inline-flex w-12 h-12 rounded-2xl items-center justify-center" style={{ backgroundColor: d.accent + '1A', color: d.accent }}>
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-2xl font-medium tracking-tight mt-6 text-midnight">{d.title}</h3>
                <p className="text-[15px] text-midnight/60 leading-relaxed mt-3">{d.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
