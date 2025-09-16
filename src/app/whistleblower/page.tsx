import type { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import SectionBlock from '@/components/common/SectionBlock';
import Newsletter from '@/components/home/Newsletter';
import WhistleblowerForm from '@/components/forms/WhistleblowerForm';

export const metadata: Metadata = {
  title: 'Whistleblower | Fintrigue',
};

export default function WhistleblowerPage() {
  return (
    <>
      <PageHero title={"Your Voice Can Expose\nFinancial Crime"} />

      <SectionBlock title="" underlineWidthClass="w-0">
        At Fintrigue, we believe whistleblowers play a critical role in uncovering corruption, money
        laundering, insider trading, and other financial wrongdoings. By sharing information, you help us
        shed light on practices that harm investors, distort markets, and undermine trust in the financial
        system.
      </SectionBlock>

      {/* Placeholder container for the upcoming secure submission form */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--section-bg)' }}>
        <div className="max-w-3xl mx-auto px-6" id="whistleblower-form">
          <WhistleblowerForm />
        </div>
      </section>

      <Newsletter />
    </>
  );
}


