interface PageHeroProps {
  title: string;
  className?: string;
  containerClassName?: string;
}

const PageHero = ({ title, className = '', containerClassName = '' }: PageHeroProps) => {
  return (
    <section className={`py-20 md:py-28 ${className}`} style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className={`mx-auto px-6 text-center max-w-5xl ${containerClassName}`}>
        <h1
          className="font-extrabold leading-tight text-4xl md:text-6xl lg:text-7xl"
          style={{ color: '#000000' }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHero;


