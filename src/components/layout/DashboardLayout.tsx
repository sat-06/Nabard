import { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShieldAlert, Gauge, Activity, Bell, ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/risk', icon: ShieldAlert, label: 'Risk Alerts' },
  { to: '/health', icon: Gauge, label: 'Health Score' },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const pageTitle = navItems.find(n => n.to === location.pathname)?.label ?? 'Paisa·Pulse';

  return (
    <div className="min-h-screen bg-ivory text-midnight flex">
      {/* Sidebar — desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-midnight text-ivory shrink-0">
        {/* Logo */}
        <div className="h-16 flex items-center gap-2.5 px-5 border-b border-ivory/10">
          <span className="inline-flex w-9 h-9 rounded-xl bg-saffron/15 items-center justify-center">
            <Activity size={16} className="text-saffron" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tightest">
            Paisa<span className="text-saffron">·</span>Pulse
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const active = location.pathname === item.to;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-saffron/15 text-saffron'
                    : 'text-ivory/60 hover:text-ivory hover:bg-ivory/5'
                }`}
              >
                <Icon size={18} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-ivory/10">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-ivory/5">
            <span className="w-8 h-8 rounded-full bg-mint/20 text-mint flex items-center justify-center text-xs font-bold">
              AG
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate">Anjali's General Store</p>
              <p className="text-[10px] text-ivory/40">Barabanki, UP</p>
            </div>
            <ChevronDown size={12} className="text-ivory/40" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 flex items-center justify-between px-5 border-b border-mist/70 bg-ivory/80 backdrop-blur-xl sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg hover:bg-midnight/5 transition"
              onClick={() => setSidebarOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <h1 className="font-display text-xl font-medium tracking-tight">{pageTitle}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg hover:bg-midnight/5 transition">
              <Bell size={17} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-terracotta animate-pulse-dot" />
            </button>
            <span className="text-[10px] uppercase tracking-widest text-midnight/40 font-semibold">Store ID: BRB-0042</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-5 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-midnight/60 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="relative w-64 bg-midnight text-ivory h-full animate-fade-up" style={{ animationDuration: '200ms' }}>
            <div className="h-16 flex items-center gap-2.5 px-5 border-b border-ivory/10">
              <span className="inline-flex w-9 h-9 rounded-xl bg-saffron/15 items-center justify-center">
                <Activity size={16} className="text-saffron" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tightest">
                Paisa<span className="text-saffron">·</span>Pulse
              </span>
            </div>
            <nav className="px-3 py-4 space-y-1">
              {navItems.map(item => {
                const Icon = item.icon;
                const active = location.pathname === item.to;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      active ? 'bg-saffron/15 text-saffron' : 'text-ivory/60 hover:text-ivory hover:bg-ivory/5'
                    }`}
                  >
                    <Icon size={18} /> {item.label}
                  </NavLink>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}
