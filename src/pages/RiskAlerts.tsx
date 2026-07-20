import { ShieldAlert, AlertTriangle, AlertCircle, Info, CheckCircle2, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { riskAlerts } from '../data/transactions';

const severityConfig = {
  high: { icon: AlertTriangle, color: '#E4572E', bg: 'bg-terracotta/8', border: 'border-terracotta/20', label: 'High Risk' },
  medium: { icon: AlertCircle, color: '#EF6C1A', bg: 'bg-marigold/8', border: 'border-marigold/20', label: 'Medium' },
  low: { icon: Info, color: '#F59E0B', bg: 'bg-saffron/8', border: 'border-saffron/20', label: 'Low' },
};

const statusConfig = {
  active: { icon: Clock, color: '#E4572E', label: 'Active' },
  acknowledged: { icon: CheckCircle2, color: '#F59E0B', label: 'Acknowledged' },
  resolved: { icon: CheckCircle2, color: '#3DDC97', label: 'Resolved' },
};

export default function RiskAlerts() {
  const activeCount = riskAlerts.filter(r => r.status === 'active').length;
  const highCount = riskAlerts.filter(r => r.severity === 'high' && r.status === 'active').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="reveal">
        <p className="text-xs uppercase tracking-widest text-midnight/40 font-semibold">Risk Monitoring</p>
        <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mt-1">Early Warning System</h2>
        <p className="text-sm text-midnight/50 mt-1">Proactive alerts before they become crises</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="reveal rounded-2xl bg-white border border-mist p-5">
          <div className="flex items-center gap-2">
            <ShieldAlert size={16} className="text-terracotta" />
            <span className="text-[11px] uppercase tracking-widest text-midnight/45 font-semibold">Active Alerts</span>
          </div>
          <p className="font-display text-4xl font-semibold tracking-tightest mt-2">{activeCount}</p>
          <p className="text-xs text-midnight/40 mt-1">Requiring attention</p>
        </div>
        <div className="reveal rounded-2xl bg-white border border-mist p-5" data-delay="1">
          <div className="flex items-center gap-2">
            <AlertTriangle size={16} className="text-terracotta" />
            <span className="text-[11px] uppercase tracking-widest text-midnight/45 font-semibold">High Severity</span>
          </div>
          <p className="font-display text-4xl font-semibold tracking-tightest mt-2 text-terracotta">{highCount}</p>
          <p className="text-xs text-midnight/40 mt-1">Critical — needs immediate action</p>
        </div>
        <div className="reveal rounded-2xl bg-white border border-mist p-5" data-delay="2">
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-mint" />
            <span className="text-[11px] uppercase tracking-widest text-midnight/45 font-semibold">Lead Time</span>
          </div>
          <p className="font-display text-4xl font-semibold tracking-tightest mt-2 text-mint">21d</p>
          <p className="text-xs text-midnight/40 mt-1">Avg. early warning before crisis</p>
        </div>
      </div>

      {/* Alert timeline */}
      <div className="reveal space-y-4" data-delay="1">
        <h3 className="font-display text-xl font-medium tracking-tight">Alert Timeline</h3>

        {riskAlerts.map((alert, i) => {
          const sev = severityConfig[alert.severity];
          const st = statusConfig[alert.status];
          const SevIcon = sev.icon;
          const StatusIcon = st.icon;

          return (
            <div
              key={alert.id}
              className={`reveal relative rounded-2xl border ${sev.border} ${sev.bg} p-5 md:p-6 hover:shadow-lg transition-all duration-300`}
              data-delay={String(Math.min(i + 2, 5))}
            >
              {/* Severity stripe */}
              <span className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: sev.color }} />

              <div className="pl-2">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider" style={{ background: sev.color + '18', color: sev.color }}>
                    <SevIcon size={11} /> {sev.label}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] text-midnight/45 font-mono">
                    <StatusIcon size={11} style={{ color: st.color }} /> {st.label}
                  </span>
                  <span className="text-[10px] text-midnight/35 ml-auto">{alert.date}</span>
                </div>

                <h4 className="font-display text-lg md:text-xl font-medium tracking-tight">{alert.title}</h4>
                <p className="text-sm text-midnight/65 mt-1.5 leading-relaxed">{alert.description}</p>

                <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-midnight/8">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-midnight/40 font-semibold mb-1">Impact</p>
                    <p className="text-sm font-medium text-terracotta">{alert.impact}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-midnight/40 font-semibold mb-1">Recommendation</p>
                    <p className="text-sm font-medium text-midnight/80 flex items-start gap-1.5">
                      <ArrowRight size={13} className="text-mint mt-0.5 shrink-0" />
                      {alert.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
