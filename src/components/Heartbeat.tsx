import { useEffect, useId, useRef, useState } from 'react';
import { TrendingUp, AlertTriangle, IndianRupee, QrCode } from 'lucide-react';

// A live-drawing "cash-flow heartbeat" — a running SVG line where each UPI ping
// pushes the pulse forward. This is the signature visual moment of the page.

type Ping = { id: number; amt: number; kind: 'in' | 'out' };
const NAMES = ['Anjali Store', 'Ramesh Kirana', 'Meena Tailors', 'Devi Chai', 'Ravi Farm', 'Sita Bakery'];

function useReducedMotion(): boolean {
  const [r, setR] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const c = () => setR(m.matches);
    m.addEventListener('change', c);
    return () => m.removeEventListener('change', c);
  }, []);
  return r;
}

// Build a deterministic-ish "heartbeat" polyline path
function buildPath(seed: number, w: number, h: number): string {
  const points: [number, number][] = [];
  const N = 90;
  const midY = h / 2;
  let acc = 0;
  for (let i = 0; i < N; i++) {
    const x = (i / (N - 1)) * w;
    // periodic beat spikes
    const beat = i % 12;
    let y: number;
    if (beat === 5) y = midY - (18 + ((seed + i) % 22)); // upspike
    else if (beat === 6) y = midY + (12 + ((seed * 2 + i) % 16)); // downspike
    else if (beat === 7) y = midY - 4;
    else y = midY + (Math.sin((i + seed) * 0.35) * 3);
    acc = acc * 0.7 + (Math.sin((i + seed) * 0.11) * 6);
    y += acc * 0.4;
    y = Math.max(12, Math.min(h - 12, y));
    points.push([x, y]);
  }
  return points.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
}

export default function Heartbeat() {
  const uid = useId();
  const reduced = useReducedMotion();
  const [seed, setSeed] = useState(1);
  const [pings, setPings] = useState<Ping[]>([]);
  const [score, setScore] = useState(72);
  const [balance, setBalance] = useState(48250);
  const svgRef = useRef<SVGSVGElement>(null);
  const W = 560;
  const H = 220;

  // Replace any ':' in uid to make valid SVG fragment identifiers
  const safeId = uid.replace(/:/g, '_');

  useEffect(() => {
    if (reduced) return;
    const tick = setInterval(() => {
      setSeed(s => (s + 1) % 100000);
    }, 2400);
    return () => clearInterval(tick);
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => {
      const kind: 'in' | 'out' = Math.random() > 0.35 ? 'in' : 'out';
      const amt = Math.floor(50 + Math.random() * 1200);
      setPings(p => [{ id: Date.now(), amt, kind }, ...p].slice(0, 5));
      setBalance(b => Math.max(2000, b + (kind === 'in' ? amt : -amt)));
      setScore(s => {
        const n = s + (kind === 'in' ? Math.random() * 0.9 : -Math.random() * 0.6);
        return Math.max(35, Math.min(94, n));
      });
    }, 1600);
    return () => clearInterval(t);
  }, [reduced]);

  const path = buildPath(seed, W, H);

  return (
    <div className="relative">
      {/* soft halo */}
      <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-saffron/15 via-marigold/5 to-transparent blur-2xl pointer-events-none" />

      <div className="relative rounded-3xl bg-ivory text-midnight border border-ivory/10 shadow-2xl shadow-black/30 overflow-hidden">
        {/* header strip */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-mist/70 bg-gradient-to-r from-parchment/60 to-ivory">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-saffron/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-mint/70" />
            <span className="ml-3 font-mono text-[11px] text-midnight/50 tracking-tight">paisapulse.app / live</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-midnight/60 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse-dot" /> Streaming
          </div>
        </div>

        {/* body */}
        <div className="p-5">
          {/* meta row */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-midnight/50 font-semibold">Anjali's General Store · Barabanki, UP</p>
              <div className="flex items-baseline gap-2 mt-1">
                <IndianRupee size={20} className="text-midnight/60 -mr-1 -mb-0.5" />
                <span className="font-display text-4xl font-semibold tracking-tightest tabular-nums">
                  {balance.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-midnight/50 font-mono">7-day balance</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[11px] uppercase tracking-widest text-midnight/50 font-semibold">Health Score</p>
              <div className="flex items-baseline gap-1 justify-end mt-1">
                <span className="font-display text-4xl font-semibold tracking-tightest tabular-nums text-mint">
                  {Math.round(score)}
                </span>
                <span className="text-xs text-midnight/40 font-medium">/100</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] text-mint font-semibold mt-0.5">
                <TrendingUp size={10} /> Growing
              </span>
            </div>
          </div>

          {/* heartbeat SVG */}
          <div className="relative rounded-2xl bg-midnight/[0.03] border border-mist/60 overflow-hidden">
            <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="w-full h-[220px]" preserveAspectRatio="none">
              <defs>
                <linearGradient id={`area-${safeId}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                </linearGradient>
                <linearGradient id={`line-${safeId}`} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#EF6C1A" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#3DDC97" />
                </linearGradient>
                <pattern id={`grid-${safeId}`} width="28" height="28" patternUnits="userSpaceOnUse">
                  <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(15,30,61,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect x="0" y="0" width={W} height={H} fill={`url(#grid-${safeId})`} />
              {/* mid line */}
              <line x1="0" y1={H / 2} x2={W} y2={H / 2} stroke="rgba(15,30,61,0.08)" strokeDasharray="2 6" />
              {/* filled area */}
              <path d={`${path} L${W},${H} L0,${H} Z`} fill={`url(#area-${safeId})`} />
              {/* the pulse line */}
              <path
                d={path}
                fill="none"
                stroke={`url(#line-${safeId})`}
                strokeWidth={2.25}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: 'drop-shadow(0 6px 12px rgba(245,158,11,0.25))' }}
              />
              {/* trailing dot */}
              <circle cx={W - 3} cy={H / 2 - 6} r="5" fill="#F59E0B">
                {!reduced && (
                  <animate attributeName="r" values="4;8;4" dur="1.6s" repeatCount="indefinite" />
                )}
              </circle>
              <circle cx={W - 3} cy={H / 2 - 6} r="2.2" fill="#0F1E3D" />
            </svg>
            {/* risk callout */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-ivory/95 border border-mist text-[10px] font-semibold text-terracotta">
              <AlertTriangle size={10} /> Low-inflow risk in 21 days
            </div>
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-midnight text-ivory text-[10px] font-mono">
              30d · 60d · 90d
            </div>
          </div>

          {/* live pings */}
          <div className="mt-4 space-y-2">
            {pings.length === 0 && (
              <div className="text-xs text-midnight/40 py-3 text-center">Awaiting UPI activity…</div>
            )}
            {pings.map((p, i) => {
              const isIn = p.kind === 'in';
              const name = NAMES[(p.id + i) % NAMES.length];
              return (
                <div
                  key={p.id}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl border transition-all animate-fade-up ${
                    isIn ? 'bg-mint/[0.06] border-mint/20' : 'bg-terracotta/[0.06] border-terracotta/20'
                  }`}
                  style={{ animationDuration: '400ms' }}
                >
                  <span
                    className={`inline-flex w-7 h-7 rounded-lg items-center justify-center ${
                      isIn ? 'bg-mint/15 text-mint' : 'bg-terracotta/15 text-terracotta'
                    }`}
                  >
                    <QrCode size={13} />
                  </span>
                  <span className="text-xs font-medium text-midnight flex-1 truncate">
                    {isIn ? 'Received from' : 'Paid to'} <span className="font-semibold">{name}</span>
                  </span>
                  <span className={`text-xs font-mono font-semibold ${isIn ? 'text-mint' : 'text-terracotta'}`}>
                    {isIn ? '+' : '−'}₹{p.amt}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* floating chips around card */}
      <div className="hidden md:block absolute -left-8 top-16 px-3 py-2 rounded-full bg-ivory text-midnight text-[11px] font-semibold shadow-lg shadow-black/20 animate-float border border-mist">
        <span className="text-marigold mr-1.5">◆</span> Weather signal: normal monsoon
      </div>
      <div className="hidden md:block absolute -right-6 bottom-24 px-3 py-2 rounded-full bg-ivory text-midnight text-[11px] font-semibold shadow-lg shadow-black/20 animate-float border border-mist" style={{ animationDelay: '1.5s' }}>
        <span className="text-mint mr-1.5">▲</span> Mandi price: onion +8%
      </div>
    </div>
  );
}
