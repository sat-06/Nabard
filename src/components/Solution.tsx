
import { LineChart, Siren, Gauge, Lightbulb } from 'lucide-react';
import SectionHeading from './SectionHeading';

const items = [
  { icon: LineChart, title: 'Predict Cash Flow', text: 'Analyzes UPI/QR payments, sales patterns, weather and mandi prices to model each business individually.', accent: '#F59E0B' },
  { icon: Siren,     title: 'Detect Risks Early', text: 'Flags financial stress 30–90 days before it becomes a crisis — quietly, not alarmingly.', accent: '#E4572E' },
  { icon: Gauge,     title: 'Financial Health Score', text: 'A single, explainable 0–100 score both a shopkeeper and a bank underwriter can trust.', accent: '#3DDC97' },
  { icon: Lightbulb, title: 'Smart Interventions', text: 'AI recommendations delivered in the local language, at the moment they matter.', accent: '#EF6C1A' },
];

export default function Solution() {
  return (
    <section id="solution" className="relative bg-midnight text-ivory py-24 md:py-32 overflow-hidden">
      {/* topo grid */}
      <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'linear-gradient(rgba(255,249,240,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,249,240,0.06) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-saffron/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          light
          eyebrow="The Answer"
          title={<>AI that <span className="italic text-saffron" style={{ fontVariationSettings: "'SOFT' 100" }}>sees</span> what banks can't.</>}
          intro="An intelligent platform for the informal economy — no formal records required. It listens to the signals a business already sends: every payment, every mandi run, every monsoon."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-14">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <article
                key={it.title}
                className="reveal group relative rounded-3xl p-6 bg-ivory/[0.04] border border-ivory/10 hover:border-ivory/25 hover:bg-ivory/[0.07] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                data-delay={String(Math.min(i + 1, 4))}
              >
                {/* subtle top glow */}
                <span
                  className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{ background: it.accent }}
                />
                <span className="inline-flex w-11 h-11 rounded-2xl items-center justify-center" style={{ backgroundColor: it.accent + '22', color: it.accent }}>
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-xl font-medium tracking-tight mt-5">{it.title}</h3>
                <p className="text-sm text-ivory/65 leading-relaxed mt-2">{it.text}</p>
                <div className="mt-5 h-px bg-ivory/10" />
                <div className="mt-3 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-ivory/40 font-semibold">
                  <span className="w-1 h-1 rounded-full" style={{ background: it.accent }} /> Module 0{i + 1}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
