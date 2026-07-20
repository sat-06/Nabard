
import { ScanText, Languages, Wifi, HandCoins } from 'lucide-react';
import SectionHeading from './SectionHeading';

const roadmap = [
  { icon: ScanText,  accent: '#F59E0B', title: 'OCR & Voice Input',        text: 'Receipt scanning and voice-based data entry for frictionless onboarding — no typing required.' },
  { icon: Languages, accent: '#EF6C1A', title: 'Multilingual Chatbot',     text: 'Conversational AI support for low-literacy users in 12 regional languages.' },
  { icon: Wifi,      accent: '#3DDC97', title: 'Live UPI + Offline',       text: 'Real-time UPI stream and offline sync for low-connectivity rural areas.' },
  { icon: HandCoins, accent: '#E4572E', title: 'Government Scheme Match',  text: 'Automated suggestions for subsidies and MSME schemes tailored to each business profile.' },
];

export default function Roadmap() {
  return (
    <section className="relative bg-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="What's Next"
          title={<>A roadmap built with <span className="italic text-marigold" style={{ fontVariationSettings: "'SOFT' 100" }}>the last-mile</span> in mind.</>}
        />

        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mt-14">
          {roadmap.map((r, i) => {
            const Icon = r.icon;
            return (
              <article
                key={r.title}
                className="reveal group relative flex gap-5 items-start p-7 rounded-3xl bg-parchment/60 border border-mist hover:border-marigold/30 hover:bg-parchment hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300"
                data-delay={String(Math.min(i + 1, 4))}
              >
                <span className="shrink-0 inline-flex w-14 h-14 rounded-2xl items-center justify-center font-display text-2xl font-semibold" style={{ backgroundColor: r.accent + '18', color: r.accent }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Icon size={16} style={{ color: r.accent }} />
                    <h3 className="font-display text-xl font-medium tracking-tight text-midnight">{r.title}</h3>
                  </div>
                  <p className="text-sm text-midnight/60 leading-relaxed mt-2">{r.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
