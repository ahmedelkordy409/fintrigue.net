interface SectionTitleProps {
  title: string;
  underlineWidthClass?: string; // e.g., w-24, w-32, w-[460px]
  className?: string;
  titleClassName?: string;
}

const SectionTitle = ({ title, underlineWidthClass = 'w-24', className = '', titleClassName = '' }: SectionTitleProps) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-extrabold ${titleClassName}`} style={{ color: '#000000' }}>
        {title}
      </h2>
      <div className={`mx-auto mt-4 h-px`} style={{ backgroundColor: '#000000', width: '100%' }}>
        <div className={`mx-auto ${underlineWidthClass} h-px`} style={{ backgroundColor: '#000000' }} />
      </div>
    </div>
  );
};

export default SectionTitle;


