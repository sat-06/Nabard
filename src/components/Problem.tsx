
import { EyeOff, Building2, AlertCircle, TrendingDown } from 'lucide-react';
import SectionHeading from './SectionHeading';

const problems = [
  { icon: EyeOff,        title: 'No Formal Records',   text: 'Most rural micro-businesses operate entirely on informal, undocumented transactions — invisible to any financial system.', accent: '#EF6C1A' },
  { icon: Building2,     title: 'Invisible to Banks',  text: 'Without financial history, loan approvals are delayed, denied, or simply inaccessible — no matter how creditworthy the business.', accent: '#F59E0B' },
  { icon: AlertCircle,   title: 'Risks Go Undetected', text: 'Cash flow crises arrive without warning, leaving businesses with no time to react and no safety net to fall back on.', accent: '#E4572E' },
  { icon: TrendingDown,  title: 'Growth Stifled',       text: 'Limited credit access chokes growth for millions of small enterprises across underserved rural regions.', accent: '#0F1E3D' },
];

export default function Problem() {
  return (
    <section id="problem" className="relative bg-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionHeading
              eyebrow="The Blind Spot"
              title={<>Rural India is <span className="italic text-marigold" style={{ fontVariationSettings: "'SOFT' 100" }}>flying blind.</span></>}
              intro={<>63 million micro-businesses. ₹40 lakh crore of GDP. And almost none of it is legible to a bank underwriter.</>}
            />
            {/* stat block */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <StatBlock big="63M+" label="Rural micro-enterprises in India" />
              <StatBlock big="< 11%" label="Formally credit-accessed" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="reveal group relative flex items-start gap-5 p-6 md:p-7 rounded-2xl bg-parchment/70 border border-mist hover:bg-parchment hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300"
                  data-delay={String(Math.min(i + 1, 4))}
                >
                  {/* left accent bar */}
                  <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full" style={{ backgroundColor: p.accent }} />
                  <span className="shrink-0 inline-flex w-11 h-11 rounded-xl items-center justify-center" style={{ backgroundColor: p.accent + '18', color: p.accent }}>
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-medium text-midnight tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-midnight/65">{p.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBlock({ big, label }: { big: string; label: string }) {
  return (
    <div className="reveal p-5 rounded-2xl bg-midnight text-ivory">
      <div className="font-display text-3xl md:text-4xl font-semibold tracking-tightest text-saffron tabular-nums">{big}</div>
      <div className="text-xs text-ivory/70 mt-1 leading-snug">{label}</div>
    </div>
  );
}
