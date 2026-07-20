import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import Heartbeat from './Heartbeat';

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(m.matches);
    m.addEventListener('change', onChange);
    return () => m.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = wrapRef.current;
    const spot = spotRef.current;
    if (!el || !spot) return;
    const handler = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      spot.style.transform = `translate3d(${x - 320}px, ${y - 320}px, 0)`;
    };
    el.addEventListener('mousemove', handler);
    return () => el.removeEventListener('mousemove', handler);
  }, [reduced]);

  return (
    <section
      id="top"
      ref={wrapRef}
      className="relative overflow-hidden bg-midnight text-ivory"
    >
      {/* subtle topographic grid */}
      <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'linear-gradient(rgba(255,249,240,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,249,240,0.06) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
      {/* soft warm glow — cursor-following */}
      <div ref={spotRef} className="spot hidden md:block" style={{ left: 0, top: 0, transform: 'translate3d(-200px,-200px,0)' }} />
      {/* horizon glow */}
      <div className="absolute -bottom-40 -left-20 -right-20 h-80 bg-gradient-to-t from-saffron/25 via-marigold/10 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-6 relative">
            <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ivory/15 bg-ivory/5 text-[11px] uppercase tracking-[0.18em] text-ivory/70 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse-dot" />
              Built for Bharat • Powered by UPI signals
            </div>

            <h1 className="reveal font-display font-medium tracking-tightest text-5xl md:text-6xl lg:text-[76px] leading-[1.02] mt-6" data-delay="1">
              Every UPI payment{' '}
              <span className="italic text-saffron" style={{ fontVariationSettings: "'SOFT' 100, 'WONK' 1" }}>
                tells a story.
              </span>{' '}
              <br className="hidden md:block" />
              We help banks{' '}
              <span className="relative inline-block">
                <span className="relative z-10">read it.</span>
                <span className="absolute inset-x-0 -bottom-1 h-3 bg-marigold/40 -skew-x-6" aria-hidden />
              </span>
            </h1>

            <p className="reveal text-base md:text-lg text-ivory/70 max-w-xl mt-6 leading-relaxed" data-delay="2">
              An AI platform that turns everyday UPI transactions, market prices and weather into
              cash-flow forecasts, risk alerts and an explainable financial health score — for the{' '}
              <span className="text-ivory font-medium">63 million</span> rural micro-enterprises banks cannot see.
            </p>

            <div className="reveal flex flex-wrap items-center gap-3 mt-8" data-delay="3">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-saffron text-midnight font-semibold text-sm shadow-lg shadow-saffron/20 hover:shadow-saffron/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                Request a pilot
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ivory/20 text-ivory/90 hover:bg-ivory/5 hover:border-ivory/30 text-sm font-medium transition-all duration-200"
              >
                See how it works
              </a>
            </div>

            {/* trust ribbon */}
            <div className="reveal flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 pt-8 border-t border-ivory/10" data-delay="4">
              <div className="flex items-center gap-2 text-xs text-ivory/60">
                <ShieldCheck size={14} className="text-mint" /> Explainable AI • Auditable score
              </div>
              <div className="flex items-center gap-2 text-xs text-ivory/60">
                <Sparkles size={14} className="text-saffron" /> Works with zero credit history
              </div>
            </div>
          </div>

          {/* Right — SIGNATURE VISUAL: live financial heartbeat */}
          <div className="lg:col-span-6 relative reveal" data-delay="2">
            <Heartbeat />
          </div>
        </div>
      </div>

      {/* elegant divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-ivory/20 to-transparent" />
    </section>
  );
}
