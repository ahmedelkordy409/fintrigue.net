import SectionTitle from '@/components/common/SectionTitle';

const WhyFintrigue = () => {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <SectionTitle title="Why Fintrigue?" underlineWidthClass="w-[420px]" className="mb-8" titleClassName="text-4xl md:text-5xl" />
        <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
          Fintrigue is your window into the hidden realities of global finance. From offshore
          secrecy, money laundering cases and crypto wash trading to insider banking deals, our
          investigative journalism cuts through complexity and reveals the truth.
        </p>
      </div>
    </section>
  );
};

export default WhyFintrigue;