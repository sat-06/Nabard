

type Props = { eyebrow?: string; title: React.ReactNode; intro?: React.ReactNode; align?: 'left' | 'center'; light?: boolean };

export default function SectionHeading({ eyebrow, title, intro, align = 'left', light = false }: Props) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const eyebrowColor = light ? 'text-saffron' : 'text-marigold';
  const titleColor = light ? 'text-ivory' : 'text-midnight';
  const introColor = light ? 'text-ivory/70' : 'text-midnight/60';
  return (
    <div className={`${alignCls} max-w-3xl reveal`}>
      {eyebrow && (
        <div className={`flex items-center ${align === 'center' ? 'justify-center' : ''} gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold ${eyebrowColor}`}>
          <span className="w-6 h-px bg-current" /> {eyebrow}
        </div>
      )}
      <h2 className={`font-display font-medium tracking-tightest text-4xl md:text-5xl lg:text-[56px] leading-[1.05] mt-4 ${titleColor}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 text-base md:text-lg leading-relaxed ${introColor}`}>{intro}</p>}
    </div>
  );
}
