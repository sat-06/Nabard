
import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative bg-midnight text-ivory overflow-hidden">
      {/* landscape ornament — SVG "village at sunrise" */}
      <SunriseOrnament />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 relative z-10">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ivory/15 bg-ivory/5 text-[11px] uppercase tracking-[0.18em] text-ivory/70 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse-dot" /> Now accepting pilots
          </div>
          <h2 className="reveal font-display font-medium tracking-tightest text-4xl md:text-5xl lg:text-[64px] leading-[1.05] mt-6" data-delay="1">
            Join us in closing the{' '}
            <span className="italic text-saffron" style={{ fontVariationSettings: "'SOFT' 100" }}>credit gap.</span>
          </h2>
          <p className="reveal text-ivory/70 text-lg mt-5 max-w-xl leading-relaxed" data-delay="2">
            Millions of rural micro-enterprises are creditworthy — they just lack the data to
            prove it. Our AI platform changes that, turning everyday transactions into
            financial intelligence that unlocks growth.
          </p>

          <div className="reveal flex flex-wrap items-center gap-3 mt-8" data-delay="3">
            <a
              href="mailto:hello@paisapulse.app?subject=Pilot%20interest"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-saffron text-midnight font-semibold text-sm shadow-lg shadow-saffron/20 hover:shadow-saffron/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail size={15} /> Request a pilot
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ivory/20 text-ivory/90 hover:bg-ivory/5 hover:border-ivory/30 text-sm font-medium transition-all duration-200"
            >
              Back to top
            </a>
          </div>
        </div>

        {/* Pull-quote */}
        <blockquote className="reveal lg:col-span-5 relative rounded-3xl border-l-4 border-saffron bg-ivory/[0.05] p-8 md:p-10 backdrop-blur-sm" data-delay="4">
          <svg className="absolute -top-4 -left-2 w-12 h-12 text-saffron/40" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
            <path d="M8 22c0-6 4-10 8-10v4c-2 0-4 2-4 6h4v8H8v-8zm12 0c0-6 4-10 8-10v4c-2 0-4 2-4 6h4v8h-8v-8z" />
          </svg>
          <p className="font-display text-2xl md:text-3xl font-medium leading-snug tracking-tight text-ivory">
            Every UPI payment is a data point.<br />
            Every market visit is a signal.<br />
            <span className="italic text-saffron" style={{ fontVariationSettings: "'SOFT' 100" }}>Together, they tell a story banks have never been able to read — until now.</span>
          </p>
          <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-ivory/50 font-semibold">— The Paisa·Pulse thesis</footer>
        </blockquote>
      </div>
    </section>
  );
}

function SunriseOrnament() {
  // Custom, hand-crafted illustration — village silhouette at sunrise with rising saffron sun.
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-56 md:h-64 opacity-70"
      viewBox="0 0 1200 240"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <radialGradient id="sun" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#EF6C1A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0F1E3D" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B2A4E" />
          <stop offset="100%" stopColor="#0F1E3D" />
        </linearGradient>
      </defs>
      <circle cx="900" cy="200" r="180" fill="url(#sun)" />
      {/* far hill */}
      <path d="M0,180 C200,150 380,170 600,140 C800,115 1000,155 1200,130 L1200,240 L0,240 Z" fill="#1B2A4E" opacity="0.7" />
      {/* near hill / silhouette with tiny village */}
      <path d="M0,220 L120,220 L120,190 L140,190 L140,170 L160,170 L160,190 L200,190 L200,205 L260,205 L260,180 L280,180 L280,160 L305,160 L305,180 L340,180 L340,205 L420,205 L420,195 L450,195 L450,175 L470,175 L470,195 L520,195 L520,215 L620,215 L620,200 L650,200 L650,180 L680,180 L680,200 L740,200 L740,210 L830,210 L830,195 L860,195 L860,180 L885,180 L885,200 L950,200 L950,215 L1030,215 L1030,200 L1200,200 L1200,240 L0,240 Z" fill="url(#hill1)" />
      {/* tiny QR / pulse pixels */}
      <g fill="#F59E0B" opacity="0.7">
        <rect x="140" y="172" width="4" height="4" />
        <rect x="280" y="164" width="4" height="4" />
        <rect x="470" y="178" width="4" height="4" />
        <rect x="680" y="184" width="4" height="4" />
        <rect x="885" y="184" width="4" height="4" />
      </g>
    </svg>
  );
}
