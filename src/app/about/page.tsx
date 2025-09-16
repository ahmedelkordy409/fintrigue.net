import type { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import SectionBlock from '@/components/common/SectionBlock';
import ValueCard from '@/components/common/ValueCard';
import Newsletter from '@/components/home/Newsletter';

export const metadata: Metadata = {
  title: 'About Us | Fintrigue',
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={"Our Mission: To Illuminate the\nShadows of Global Finance"} />

      <SectionBlock title="Who We are" underlineWidthClass="w-64">
        Fintrigue is an independent digital newspaper dedicated to investigating and reporting financial scandals, money laundering cases, underground banking systems, insider trading, and corporate misconduct.
      </SectionBlock>

      <SectionBlock title="Our Approach" underlineWidthClass="w-64">
        We combine investigative journalism with financial expertise. Our team consists of journalists, analysts, and financial investigators who track money flows across borders, exposing the stories hidden behind balance sheets and shell companies.
      </SectionBlock>

      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--section-bg)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ color: '#000000' }}>Our Values</h3>
            <div className="w-40 h-px mx-auto" style={{ backgroundColor: '#000000' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard title="Accuracy">
              Precision and integrity in every report, backed by verifiable sources
            </ValueCard>
            <ValueCard title="Independence">
              Free from political, corporate, or financial influence.
            </ValueCard>
            <ValueCard title="Transparency">
              Clear distinction between reporting, analysis, and opinion.
            </ValueCard>
          </div>
        </div>
      </section>

      <SectionBlock title="Why It Matters" underlineWidthClass="w-64">
        The financial system touches everyone. By exposing fraud, manipulation, and misconduct, Fintrigue helps businesses, policymakers, and individuals make informed decisions.
      </SectionBlock>

      <Newsletter />
    </>
  );
}


