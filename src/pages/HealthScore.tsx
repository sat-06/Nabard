import { TrendingUp, TrendingDown, Minus, ShieldCheck } from 'lucide-react';
import { healthFactors } from '../data/transactions';

const overallScore = 67;

// Score color based on range
function scoreColor(s: number): string {
  if (s >= 75) return '#3DDC97';
  if (s >= 50) return '#F59E0B';
  return '#E4572E';
}

function scoreLabel(s: number): string {
  if (s >= 75) return 'Healthy';
  if (s >= 50) return 'Fair';
  return 'At Risk';
}

export default function HealthScore() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="reveal">
        <p className="text-xs uppercase tracking-widest text-midnight/40 font-semibold">Financial Health</p>
        <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mt-1">Health Score</h2>
        <p className="text-sm text-midnight/50 mt-1">A single, explainable 0–100 score built on 6 factors</p>
      </div>

      {/* Score Gauge */}
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="reveal lg:col-span-1 rounded-2xl bg-midnight text-ivory p-6 md:p-8 flex flex-col items-center justify-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/50 font-semibold">Overall Score</p>
          {/* Gauge */}
          <div className="relative mt-4 mb-2">
            <svg viewBox="0 0 180 100" className="w-44 h-24">
              {/* Background arc */}
              <path d="M20,90 A70,70 0 0 1 160,90" fill="none" stroke="rgba(255,249,240,0.1)" strokeWidth="14" strokeLinecap="round" />
              {/* Colored arc */}
              <path
                d="M20,90 A70,70 0 0 1 160,90"
                fill="none"
                stroke={scoreColor(overallScore)}
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={`${(overallScore / 100) * 220} 220`}
                style={{ transition: 'stroke-dasharray 1s ease-out' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-end justify-center pb-1">
              <span className="font-display text-5xl font-semibold tracking-tightest" style={{ color: scoreColor(overallScore) }}>
                {overallScore}
              </span>
              <span className="text-lg text-ivory/40 mb-2">/100</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mt-1" style={{ background: scoreColor(overallScore) + '22', color: scoreColor(overallScore) }}>
            {scoreLabel(overallScore)}
          </span>
          <p className="text-xs text-ivory/50 mt-3 text-center leading-relaxed">
            Updated daily based on transaction patterns, market signals, and seasonal factors.
          </p>
        </div>

        {/* Score breakdown */}
        <div className="reveal lg:col-span-2 rounded-2xl bg-white border border-mist p-5 md:p-6" data-delay="1">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display text-lg font-medium tracking-tight">Score Breakdown</h3>
            <span className="text-[10px] text-midnight/40 font-mono">6-factor model</span>
          </div>
          <div className="space-y-4">
            {healthFactors.map(f => {
              const color = scoreColor(f.score);
              const TrendIcon = f.trend === 'up' ? TrendingUp : f.trend === 'down' ? TrendingDown : Minus;
              const trendColor = f.trend === 'up' ? '#3DDC97' : f.trend === 'down' ? '#E4572E' : '#6B7280';
              return (
                <div key={f.name} className="group">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-midnight">{f.name}</span>
                      <span className="text-[10px] text-midnight/35 font-mono">{f.weight}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-lg font-semibold tracking-tight" style={{ color }}>{f.score}</span>
                      <TrendIcon size={13} style={{ color: trendColor }} />
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="h-2 bg-mist/40 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${f.score}%`, background: `linear-gradient(90deg, ${color}cc, ${color})` }}
                    />
                  </div>
                  <p className="text-[11px] text-midnight/45 mt-1 group-hover:text-midnight/65 transition-colors">{f.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Historical trend + Drivers */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* Score history */}
        <div className="reveal rounded-2xl bg-white border border-mist p-5 md:p-6" data-delay="2">
          <h3 className="font-display text-lg font-medium tracking-tight">Score History</h3>
          <p className="text-xs text-midnight/45 mt-0.5">Last 6 months</p>
          <div className="mt-5">
            <svg viewBox="0 0 400 160" className="w-full h-40">
              {/* Grid */}
              {[40, 80, 120].map(y => (
                <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(15,30,61,0.06)" strokeDasharray="3 4" />
              ))}
              {/* Reference lines */}
              <line x1="0" y1="40" x2="400" y2="40" stroke="#3DDC97" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
              <text x="402" y="43" fontSize="9" fill="#3DDC97" fontFamily="Inter">75</text>
              <line x1="0" y1="100" x2="400" y2="100" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
              <text x="402" y="103" fontSize="9" fill="#F59E0B" fontFamily="Inter">50</text>
              {/* Area */}
              <path d="M0,100 L400,100 L400,160 L0,160 Z" fill="url(#riskArea)" opacity="0.05" />
              {/* Data line */}
              <path d="M0,52 L66,48 L133,62 L200,68 L266,76 L333,80 L400,88" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              {/* Dots */}
              {[52, 48, 62, 68, 76, 80, 88].map((y, i) => (
                <circle key={i} cx={i * 66.7} cy={y} r="3.5" fill="white" stroke="#F59E0B" strokeWidth="2" />
              ))}
              <defs>
                <linearGradient id="riskArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E4572E" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#E4572E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex items-center justify-between mt-2 text-[10px] text-midnight/35 font-mono">
            <span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
          </div>
        </div>

        {/* Top drivers */}
        <div className="reveal rounded-2xl bg-white border border-mist p-5 md:p-6" data-delay="3">
          <div className="flex items-center gap-2">
            <ShieldCheck size={17} className="text-mint" />
            <h3 className="font-display text-lg font-medium tracking-tight">What's Driving Your Score</h3>
          </div>
          <div className="mt-5 space-y-4">
            <DriverCard
              icon={TrendingUp} color="#3DDC97"
              title="Customer diversification is strong"
              detail="28 unique payers this month — well above the 15-payer threshold."
            />
            <DriverCard
              icon={TrendingDown} color="#E4572E"
              title="Savings buffer running low"
              detail="7-day average balance of ₹4,300 is below the recommended ₹8,000 reserve."
            />
            <DriverCard
              icon={TrendingDown} color="#E4572E"
              title="Debt service ratio elevated"
              detail="Loan EMI is 22% of monthly cash flow. Target: below 15%."
            />
            <DriverCard
              icon={TrendingUp} color="#3DDC97"
              title="On-time repayments"
              detail="11 of last 12 EMIs paid on time. This builds lender confidence."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DriverCard({ icon: Icon, color, title, detail }: {
  icon: typeof TrendingUp; color: string; title: string; detail: string;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-parchment/30 transition-colors">
      <span className="inline-flex w-8 h-8 rounded-lg items-center justify-center shrink-0 mt-0.5" style={{ background: color + '15', color }}>
        <Icon size={14} />
      </span>
      <div>
        <p className="text-sm font-medium text-midnight">{title}</p>
        <p className="text-xs text-midnight/50 mt-0.5 leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}
