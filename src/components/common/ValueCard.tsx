interface ValueCardProps {
  title: string;
  children: React.ReactNode;
}

const ValueCard = ({ title, children }: ValueCardProps) => {
  return (
    <div className="border" style={{ borderColor: '#1F2937' }}>
      <div className="p-6 md:p-8">
        <h4 className="text-lg font-semibold mb-3" style={{ color: '#000000' }}>{title}</h4>
        <div className="text-sm md:text-base leading-relaxed" style={{ color: '#1F2937' }}>{children}</div>
      </div>
    </div>
  );
};

export default ValueCard;


