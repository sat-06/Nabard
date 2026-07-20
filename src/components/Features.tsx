
import { BarChart3, ShieldAlert, Gauge, MessageSquareText, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const features = [
  {
    icon: BarChart3,
    accent: '#F59E0B',
    tag: 'Forecasting',
    title: 'AI Cash Flow Prediction',
    text: '30, 60 and 90-day projections tailored to each business\'s unique data patterns and seasonal cycles.',
    stat: '30/60/90d',
  },
  {
    icon: ShieldAlert,
    accent: '#E4572E',
    tag: 'Early warning',
    title: 'Risk Flagging',
    text: 'Alerts before a cash shortfall or financial stress event — quietly, in local languages, in time to act.',
    stat: '↑ 21d lead',
  },
  {
    icon: Gauge,
    accent: '#3DDC97',
    tag: 'Underwriting',
    title: 'Financial Health Score',
    text: 'A single, explainable 0–100 score that owners understand and lenders can defend to a regulator.',
    stat: '0 – 100',
  },
  {
    icon: MessageSquareText,
    accent: '#EF6C1A',
    tag: 'Guidance',
    title: 'AI Recommendations',
    text: 'Personalised, actionable next-steps: raise this price, defer that supplier, apply for this scheme.',
    stat: 'Vernacular',
  },
];

export default function Features() {
  return (
    <section className="relative bg-parchment/50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Key Features"
          title={<>Four capabilities. <span className="italic text-marigold" style={{ fontVariationSettings: "'SOFT' 100" }}>One</span> unified dashboard.</>}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-14">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="reveal group relative bg-ivory border border-mist rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.04] hover:border-marigold/30 transition-all duration-300 overflow-hidden"
                data-delay={String(Math.min(i + 1, 4))}
              >
                {/* header row */}
                <div className="flex items-start justify-between">
                  <span className="inline-flex w-11 h-11 rounded-xl items-center justify-center" style={{ backgroundColor: f.accent + '18', color: f.accent }}>
                    <Icon size={18} />
                  </span>
                  <ArrowUpRight size={16} className="text-midnight/25 group-hover:text-marigold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                {/* mini visualisation */}
                <MiniViz idx={i} accent={f.accent} />
                <span className="mt-4 inline-block text-[10px] uppercase tracking-[0.18em] text-midnight/45 font-semibold">
                  {f.tag}
                </span>
                <h3 className="font-display text-xl font-medium tracking-tight text-midnight mt-1">{f.title}</h3>
                <p className="text-sm text-midnight/60 leading-relaxed mt-2">{f.text}</p>
                <div className="mt-4 pt-4 border-t border-mist/70 flex items-center justify-between text-xs">
                  <span className="font-mono text-midnight/40">{f.stat}</span>
                  <span className="font-semibold" style={{ color: f.accent }}>Learn →</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// A tiny per-feature illustration, all pure SVG
function MiniViz({ idx, accent }: { idx: number; accent: string }) {
  if (idx === 0) {
    // rising bars
    const bars = [24, 40, 28, 62, 48, 78, 58, 90];
    return (
      <div className="mt-5 h-16 flex items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm transition-all duration-500"
            style={{
              height: `${h}%`,
              background: `linear-gradient(180deg, ${accent}, ${accent}55)`,
              opacity: 0.35 + (i / bars.length) * 0.65,
            }}
          />
        ))}
      </div>
    );
  }
  if (idx === 1) {
    // spike / alert line
    return (
      <div className="mt-5 h-16 rounded-lg bg-terracotta/[0.05] border border-terracotta/15 relative overflow-hidden">
        <svg viewBox="0 0 100 40" className="w-full h-full">
          <path d="M0,25 L20,22 L35,26 L48,10 L55,32 L70,20 L100,18" stroke={accent} strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <circle cx="48" cy="10" r="2.5" fill={accent} />
        </svg>
        <span className="absolute top-1.5 right-2 text-[9px] font-mono text-terracotta">SPIKE</span>
      </div>
    );
  }
  if (idx === 2) {
    // gauge
    return (
      <div className="mt-5 h-16 flex items-end justify-center">
        <svg viewBox="0 0 100 60" className="h-full">
          <path d="M10,50 A40,40 0 0 1 90,50" stroke="#E8DFCC" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M10,50 A40,40 0 0 1 78,20" stroke={accent} strokeWidth="6" fill="none" strokeLinecap="round" />
          <text x="50" y="52" textAnchor="middle" fontSize="14" fontFamily="Fraunces" fontWeight="600" fill="#0F1E3D">72</text>
        </svg>
      </div>
    );
  }
  // chat bubbles
  return (
    <div className="mt-5 h-16 flex flex-col justify-end gap-1.5">
      <div className="self-start px-2 py-1 rounded-lg rounded-bl-none bg-midnight/5 text-[10px] text-midnight/70">Kal ka forecast?</div>
      <div className="self-end px-2 py-1 rounded-lg rounded-br-none text-[10px] font-medium" style={{ background: accent + '22', color: accent }}>
        Buy 8 kg pyaaz today.
      </div>
    </div>
  );
}
