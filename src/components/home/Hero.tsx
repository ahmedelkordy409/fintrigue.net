const Hero = () => {
  return (
    <section className="py-28 md:py-32" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="container mx-auto px-4 text-center max-w-5xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight" style={{ color: '#000000' }}>
          Uncover the World&rsquo;s
          <br />
          Financial Intrigues
        </h1>
        <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#4B5563' }}>
          Global money flows are complex - we expose the scandals, schemes, and hidden<br />
          networks shaping today&rsquo;s financial world.
        </p>
      </div>
    </section>
  );
};

export default Hero;