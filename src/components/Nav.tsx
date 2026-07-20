import { useEffect, useState } from 'react';
import { Activity, Menu, X } from 'lucide-react';

const links = [
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Solution' },
  { href: '#how', label: 'How it works' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#impact', label: 'Impact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/85 backdrop-blur-xl border-b border-mist/70'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative inline-flex w-9 h-9 rounded-xl bg-midnight items-center justify-center overflow-hidden">
            <Activity size={16} className="text-saffron relative z-10" />
            <span className="absolute inset-0 bg-gradient-to-br from-saffron/0 via-saffron/20 to-saffron/0 -translate-x-full group-hover:animate-sheen" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tightest text-midnight">
            Paisa<span className="text-saffron">·</span>Pulse
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-midnight/70 hover:text-midnight rounded-full hover:bg-midnight/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-midnight text-ivory hover:bg-dusk transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Request pilot
            <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse-dot" />
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-midnight/5 transition"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-mist/70 bg-ivory/95 backdrop-blur-xl">
          <nav className="max-w-7xl mx-auto px-6 py-3 flex flex-col">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-midnight/80 border-b border-mist/50 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-3 mb-2 text-center px-4 py-2.5 text-sm font-semibold rounded-full bg-midnight text-ivory"
            >
              Request pilot
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
