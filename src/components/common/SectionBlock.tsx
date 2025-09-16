interface SectionBlockProps {
  title: string;
  children: React.ReactNode;
  underlineWidthClass?: string;
  className?: string;
}

const SectionBlock = ({ title, children, underlineWidthClass = 'w-40', className = '' }: SectionBlockProps) => {
  return (
    <section className={`py-12 md:py-16 ${className}`} style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ color: '#000000' }}>{title}</h3>
        <div className={`mx-auto ${underlineWidthClass} h-px mb-6`} style={{ backgroundColor: '#000000' }} />
        <div className="text-base md:text-lg leading-relaxed" style={{ color: '#1F2937' }}>{children}</div>
      </div>
    </section>
  );
};

export default SectionBlock;


