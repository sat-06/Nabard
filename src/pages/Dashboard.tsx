import { ArrowUpRight, ArrowDownRight, QrCode } from 'lucide-react';
import { transactions, cashFlowProjection, monthlySummary } from '../data/transactions';

export default function Dashboard() {
  const balance = cashFlowProjection.currentBalance;
  const totalInflow = transactions.filter(t => t.amount > 0).reduce((s, t) => s + (t.type.includes('in') || t.type === 'mandi_sale' ? t.amount : 0), 0);
  const totalOutflow = transactions.filter(t => t.amount > 0).reduce((s, t) => s + (t.type.includes('out') || t.type === 'supplier_pay' || t.type === 'loan_emi' ? t.amount : 0), 0);
  const netFlow = totalInflow - totalOutflow;

  const StatCard = ({ title, value, prefix, trend, trendLabel, color }: {
    title: string; value: string; prefix?: string; trend: 'up' | 'down';
    trendLabel: string; color: string;
  }) => (
    <div className="reveal rounded-2xl bg-white border border-mist p-5 hover:shadow-lg hover:shadow-black/[0.03] hover:-translate-y-0.5 transition-all duration-300">
      <p className="text-[11px] uppercase tracking-widest text-midnight/45 font-semibold">{title}</p>
      <div className="flex items-baseline gap-1.5 mt-1.5">
        {prefix && <span className="text-lg font-semibold text-midnight/40">{prefix}</span>}
        <span className="font-display text-3xl md:text-4xl font-semibold tracking-tightest tabular-nums">{value}</span>
      </div>
      <div className="flex items-center gap-1.5 mt-2">
        <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold" style={{ color }}>
          {trend === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {trendLabel}
        </span>
      </div>
    </div>
  );

  // Mini bar chart data
  const maxInflow = Math.max(...monthlySummary.map(m => m.inflow));

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="reveal">
        <p className="text-xs uppercase tracking-widest text-midnight/40 font-semibold">Good morning</p>
        <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mt-1">Anjali's General Store</h2>
        <p className="text-sm text-midnight/50 mt-1">Barabanki, Uttar Pradesh · ID: BRB-0042</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Current Balance" value={balance.toLocaleString('en-IN')} prefix="₹" trend="up" trendLabel="+₹3,250 this week" color="#3DDC97" />
        <StatCard title="30-Day Inflow" value={totalInflow.toLocaleString('en-IN')} prefix="₹" trend="up" trendLabel="8.2% vs last month" color="#3DDC97" />
        <StatCard title="30-Day Outflow" value={totalOutflow.toLocaleString('en-IN')} prefix="₹" trend="down" trendLabel="3.1% lower" color="#E4572E" />
        <StatCard title="Net Cash Flow" value={netFlow.toLocaleString('en-IN')} prefix="₹" trend={netFlow >= 0 ? 'up' : 'down'} trendLabel={netFlow >= 0 ? 'Positive flow' : 'Negative flow'} color={netFlow >= 0 ? '#3DDC97' : '#E4572E'} />
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-3 gap-5">
        {/* Cash flow projection — spans 2 cols */}
        <div className="reveal lg:col-span-2 rounded-2xl bg-white border border-mist p-5 md:p-6" data-delay="1">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-display text-lg font-medium tracking-tight">Cash Flow Projection</h3>
              <p className="text-xs text-midnight/45 mt-0.5">14-day forward view with confidence bands</p>
            </div>
            <div className="flex items-center gap-3 text-[10px]">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-midnight/80" /> Actual</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-saffron" /> Projected</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-terracotta/30" /> Pessimistic</span>
            </div>
          </div>
          {/* SVG chart */}
          <div className="h-64 relative">
            <svg viewBox="0 0 700 220" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="areaProj" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="areaPess" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E4572E" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#E4572E" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              {[40, 80, 120, 160, 200].map(y => (
                <line key={y} x1="0" y1={y} x2="700" y2={y} stroke="rgba(15,30,61,0.06)" strokeDasharray="3 4" />
              ))}
              {/* Pessimistic area */}
              <path d={buildAreaPath(cashFlowProjection.pessimistic, 700, 220, 35000, 55000)} fill="url(#areaPess)" />
              {/* Pessimistic line */}
              <path d={buildLinePath(cashFlowProjection.pessimistic, 700, 220, 35000, 55000)} fill="none" stroke="#E4572E" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
              {/* Projected area */}
              <path d={buildAreaPath(cashFlowProjection.projected, 700, 220, 35000, 55000)} fill="url(#areaProj)" />
              {/* Projected line */}
              <path d={buildLinePath(cashFlowProjection.projected, 700, 220, 35000, 55000)} fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5 3" />
              {/* Actual line */}
              <path d={buildLinePath(cashFlowProjection.actual, 700, 220, 35000, 55000)} fill="none" stroke="#0F1E3D" strokeWidth="2.5" strokeLinecap="round" />
              {/* Dots on actual */}
              {cashFlowProjection.actual.map((v, i) => {
                if (v === null) return null;
                const x = (i / (cashFlowProjection.actual.length - 1)) * 700;
                const y = 220 - ((v - 35000) / 20000) * 220;
                return <circle key={i} cx={x} cy={y} r="3" fill="#0F1E3D" />;
              })}
              {/* Now marker */}
              <line x1="210" y1="0" x2="210" y2="220" stroke="rgba(15,30,61,0.15)" strokeWidth="1" strokeDasharray="2 4" />
              <text x="210" y="14" textAnchor="middle" fontSize="9" fill="#6B7280" fontFamily="Inter">NOW</text>
            </svg>
          </div>
        </div>

        {/* Monthly summary — side bar chart */}
        <div className="reveal rounded-2xl bg-white border border-mist p-5 md:p-6" data-delay="2">
          <h3 className="font-display text-lg font-medium tracking-tight">Monthly Inflow</h3>
          <p className="text-xs text-midnight/45 mt-0.5">Jan – Jul 2026</p>
          <div className="mt-5 space-y-2.5">
            {monthlySummary.map(m => {
              const pct = (m.inflow / maxInflow) * 100;
              return (
                <div key={m.month} className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-midnight/40 w-7">{m.month}</span>
                  <div className="flex-1 h-5 bg-mist/40 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${pct}%`,
                        background: 'linear-gradient(90deg, #F59E0B, #3DDC97)',
                        opacity: 0.85,
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-midnight/60 w-14 text-right">₹{(m.inflow / 1000).toFixed(0)}K</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent transactions */}
      <div className="reveal rounded-2xl bg-white border border-mist overflow-hidden" data-delay="3">
        <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-mist/70">
          <div>
            <h3 className="font-display text-lg font-medium tracking-tight">Recent Transactions</h3>
            <p className="text-xs text-midnight/45 mt-0.5">Last 7 days</p>
          </div>
          <button className="text-xs font-semibold text-saffron hover:text-marigold transition-colors">View all →</button>
        </div>
        <div className="divide-y divide-mist/50">
          {transactions.slice(0, 6).map(tx => {
            const isIn = tx.type === 'upi_in' || tx.type === 'mandi_sale';
            return (
              <div key={tx.id} className="flex items-center gap-4 px-5 md:px-6 py-3.5 hover:bg-parchment/30 transition-colors">
                <span className={`inline-flex w-9 h-9 rounded-xl items-center justify-center shrink-0 ${
                  isIn ? 'bg-mint/10 text-mint' : 'bg-terracotta/10 text-terracotta'
                }`}>
                  <QrCode size={15} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{tx.description}</p>
                  <p className="text-[11px] text-midnight/40">{tx.category} · {tx.date}</p>
                </div>
                <span className={`text-sm font-mono font-semibold ${isIn ? 'text-mint' : 'text-terracotta'}`}>
                  {isIn ? '+' : '−'}₹{tx.amount.toLocaleString('en-IN')}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// SVG path builders
function buildLinePath(values: (number | null)[], w: number, h: number, min: number, max: number): string {
  const valid = values.filter(v => v !== null) as number[];
  if (valid.length === 0) return '';
  const range = max - min;
  const pts = values.map((v, i) => {
    if (v === null) return null;
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return [x, y];
  });
  let path = '';
  let penDown = false;
  for (const p of pts) {
    if (p) {
      if (!penDown) { path += `M${p[0]},${p[1]}`; penDown = true; }
      else path += `L${p[0]},${p[1]}`;
    } else {
      penDown = false;
    }
  }
  return path;
}

function buildAreaPath(values: (number | null)[], w: number, h: number, min: number, max: number): string {
  const line = buildLinePath(values, w, h, min, max);
  if (!line) return '';
  // Find last valid point
  let lastX = 0;
  for (let i = values.length - 1; i >= 0; i--) {
    if (values[i] !== null) { lastX = (i / (values.length - 1)) * w; break; }
  }
  return `${line} L${lastX},${h} L0,${h} Z`;
}
