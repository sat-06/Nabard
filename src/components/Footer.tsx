
import { Activity, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-midnight text-ivory/80 border-t border-ivory/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex w-9 h-9 rounded-xl bg-ivory/10 items-center justify-center">
                <Activity size={16} className="text-saffron" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tightest text-ivory">
                Paisa<span className="text-saffron">·</span>Pulse
              </span>
            </div>
            <p className="text-sm text-ivory/50 mt-3 max-w-md leading-relaxed">
              AI-driven cash flow prediction and risk flagging system for rural micro-enterprises.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://github.com/sat-06/Nabard" target="_blank" rel="noreferrer" className="inline-flex w-9 h-9 rounded-full border border-ivory/15 items-center justify-center hover:bg-ivory/5 hover:border-ivory/30 transition-all" aria-label="GitHub">
              <Github size={14} />
            </a>
            <a href="#" className="inline-flex w-9 h-9 rounded-full border border-ivory/15 items-center justify-center hover:bg-ivory/5 hover:border-ivory/30 transition-all" aria-label="Twitter">
              <Twitter size={14} />
            </a>
            <a href="#" className="inline-flex w-9 h-9 rounded-full border border-ivory/15 items-center justify-center hover:bg-ivory/5 hover:border-ivory/30 transition-all" aria-label="LinkedIn">
              <Linkedin size={14} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ivory/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ivory/40">
          <p>© {new Date().getFullYear()} Paisa·Pulse. Built for Bharat's shopkeepers, farmers and lenders.</p>
          <p className="font-mono">v1.0 · TeamCodeHolics</p>
        </div>
      </div>
    </footer>
  );
}
