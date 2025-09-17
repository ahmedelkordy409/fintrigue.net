const Hero = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 md:mb-8 leading-tight" style={{ color: '#000000' }}>
          Uncover the World&rsquo;s
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Financial Intrigues
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-0 max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
          Global money flows are complex - we expose the scandals, schemes, and hidden
          <span className="hidden sm:inline"><br /></span>
          <span className="sm:hidden"> </span>
          networks shaping today&rsquo;s financial world.
        </p>
      </div>
    </section>
  );
};

export default Hero;