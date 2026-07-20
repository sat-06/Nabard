import { type LucideIcon, Store, Landmark, Building } from 'lucide-react';
import SectionHeading from './SectionHeading';

type Metric = { k: string; v: string };

type StakeholderCardProps = {
  icon: LucideIcon;
  accent: string;
  title: string;
  headline: string;
  text: string;
  metrics: Metric[];
};

type MiniStatProps = {
  big: string;
  label: string;
};

export default function Impact() {
  return (
    <section id="impact" className="relative bg-parchment/50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Impact"
          title={<>Value that <span className="italic text-marigold" style={{ fontVariationSettings: "'SOFT' 100" }}>compounds</span> across the ecosystem.</>}
        />

        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mt-14">
          <StakeholderCard
            icon={Store}
            accent="#F59E0B"
            title="For Businesses"
            headline="Plan tomorrow with confidence"
            text="Better financial planning, early risk alerts, and a clear path to credit access that was previously out of reach."
            metrics={[
              { k: '30–90d', v: 'forecast horizon' },
              { k: '21d',    v: 'avg. early warning' },
            ]}
          />
          <StakeholderCard
            icon={Landmark}
            accent="#3DDC97"
            title="For Banks & NBFCs"
            headline="Underwrite what was unreadable"
            text="Richer credit assessment data from alternative sources, leading to more confident lending and reduced default rates."
            metrics={[
              { k: '−22%', v: 'default-rate lift' },
              { k: '4×',   v: 'addressable book' },
            ]}
          />
        </div>

        {/* Full-width government card */}
        <div className="reveal mt-5 relative rounded-3xl bg-midnight text-ivory overflow-hidden border border-midnight" data-delay="3">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-saffron/15 blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-8 p-8 md:p-12 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex w-11 h-11 rounded-xl items-center justify-center bg-saffron/15 text-saffron">
                  <Building size={18} />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-saffron">For Government & Regulators</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-medium tracking-tight mt-4">
                A scalable, <span className="italic text-saffron">replicable</span> instrument for financial inclusion.
              </h3>
              <p className="mt-3 text-ivory/70 max-w-2xl leading-relaxed">
                Aligned with the national digital-finance agenda — the platform generates anonymised
                signals of MSME health across districts, helping design targeted subsidies and schemes.
              </p>
            </div>
            <div className="md:col-span-4 grid grid-cols-2 gap-3">
              <MiniStat big="≈ ₹40L cr" label="MSME GDP addressed" />
              <MiniStat big="742" label="Districts coverable" />
              <MiniStat big="12 langs" label="Vernacular support" />
              <MiniStat big="0-CKYC" label="Cold-start ready" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StakeholderCard({ icon: Icon, accent, title, headline, text, metrics }: StakeholderCardProps) {
  return (
    <article className="reveal group relative rounded-3xl bg-ivory border border-mist p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.05] transition-all duration-300">
      <div className="flex items-center gap-3">
        <span className="inline-flex w-11 h-11 rounded-xl items-center justify-center" style={{ backgroundColor: accent + '18', color: accent }}>
          <Icon size={18} />
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-midnight/50">{title}</span>
      </div>
      <h3 className="font-display text-3xl font-medium tracking-tight mt-4 text-midnight">{headline}</h3>
      <p className="mt-3 text-midnight/60 leading-relaxed">{text}</p>
      <div className="mt-6 pt-6 border-t border-mist grid grid-cols-2 gap-4">
        {metrics.map((m) => (
          <div key={m.v}>
            <div className="font-display text-2xl font-semibold tracking-tightest tabular-nums" style={{ color: accent }}>{m.k}</div>
            <div className="text-xs text-midnight/50 mt-0.5">{m.v}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

function MiniStat({ big, label }: MiniStatProps) {
  return (
    <div className="p-4 rounded-2xl bg-ivory/[0.04] border border-ivory/10">
      <div className="font-display text-xl font-semibold text-saffron tabular-nums">{big}</div>
      <div className="text-[10px] text-ivory/60 mt-0.5 leading-snug">{label}</div>
    </div>
  );
}
