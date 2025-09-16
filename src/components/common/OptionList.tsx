interface OptionListProps {
  title: string;
  options: string[];
}

const OptionList = ({ title, options }: OptionListProps) => {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ color: '#000000' }}>{title}</h3>
          <div className="w-56 h-px mx-auto" style={{ backgroundColor: '#000000' }} />
        </div>

        <div className="space-y-6">
          {options.map((text, idx) => (
            <div key={idx} className="text-center py-6 md:py-7 border" style={{ borderColor: '#1F2937', backgroundColor: '#EAE4DC' }}>
              <span className="text-base md:text-lg" style={{ color: '#000000' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptionList;


