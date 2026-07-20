
import { Database, Cpu, LineChart, ClipboardCheck, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const steps = [
  { n: '01', icon: Database,       title: 'Ingest alternative data',   text: 'UPI transactions, mandi prices, weather feeds, sales tallies.',           accent: '#F59E0B' },
  { n: '02', icon: Cpu,             title: 'AI processing',              text: 'Feature engineering and XGBoost / LightGBM inference in real time.',   accent: '#EF6C1A' },
  { n: '03', icon: LineChart,       title: 'Cash flow forecast',         text: 'Personalised 30 / 60 / 90-day projections, flagged when they wobble.',  accent: '#3DDC97' },
  { n: '04', icon: ClipboardCheck,  title: 'Health score + actions',     text: 'A single explainable score and next-best actions in the dashboard.',   accent: '#E4572E' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="How it Works"
          title={<>From raw pings to <span className="italic text-marigold" style={{ fontVariationSettings: "'SOFT' 100" }}>bankable</span> intelligence.</>}
          intro="Fully automated. No paperwork. The business keeps running as usual — the model watches, learns, and translates."
        />

        <div className="relative mt-16">
          {/* connector line */}
          <div className="hidden lg:block absolute top-16 left-8 right-8 h-px bg-gradient-to-r from-mist via-marigold/40 to-mist" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.n}
                  className="reveal relative bg-parchment/60 border border-mist rounded-2xl p-6 hover:bg-parchment hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300"
                  data-delay={String(Math.min(i + 1, 4))}
                >
                  {/* number badge */}
                  <div className="flex items-center gap-3">
                    <span className="inline-flex w-12 h-12 rounded-2xl items-center justify-center border-2 bg-ivory" style={{ borderColor: s.accent + '55' }}>
                      <Icon size={18} style={{ color: s.accent }} />
                    </span>
                    <span className="font-mono text-xs text-midnight/40 font-semibold tracking-widest">STEP · {s.n}</span>
                  </div>
                  <h3 className="font-display text-xl font-medium mt-5 text-midnight tracking-tight">{s.title}</h3>
                  <p className="text-sm text-midnight/60 leading-relaxed mt-2">{s.text}</p>
                  {i < steps.length - 1 && (
                    <span className="hidden lg:flex absolute -right-3 top-16 w-6 h-6 rounded-full bg-ivory border border-mist items-center justify-center">
                      <ArrowRight size={12} className="text-marigold" />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <p className="reveal mt-14 text-center italic text-midnight/50 font-display text-lg md:text-xl max-w-2xl mx-auto">
          "From raw transactions to actionable financial intelligence — fully automated, no paperwork needed."
        </p>
      </div>
    </section>
  );
}
