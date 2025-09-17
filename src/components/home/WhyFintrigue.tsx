import SectionTitle from '@/components/common/SectionTitle';

const WhyFintrigue = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <SectionTitle title="Why Fintrigue?" underlineWidthClass="w-[280px] sm:w-[350px] md:w-[420px]" className="mb-6 sm:mb-8" titleClassName="text-3xl sm:text-4xl md:text-5xl" />
        <p className="text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-0" style={{ color: '#4B5563' }}>
          Fintrigue is your window into the hidden realities of global finance. From offshore
          secrecy, money laundering cases and crypto wash trading to insider banking deals, our
          investigative journalism cuts through complexity and reveals the truth.
        </p>
      </div>
    </section>
  );
};

export default WhyFintrigue;