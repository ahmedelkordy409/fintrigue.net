import type { Metadata } from 'next';
import Newsletter from '@/components/home/Newsletter';
import PageHero from '@/components/common/PageHero';
import SectionBlock from '@/components/common/SectionBlock';

export const metadata: Metadata = {
  title: 'Newsletter | Fintrigue',
  description:
    'Join the Fintrigue newsletter for weekly insights and investigations delivered straight to your inbox.',
};

export default function NewsletterPage() {
  return (
    <>
      <PageHero title={"Weekly Briefings on the\nDark Side of Global Finance"} />
      <SectionBlock title="What You’ll Get" underlineWidthClass="w-72">
        Every week, our editorial team curates the most important financial scandals, money laundering cases, and underground networks - summarized, analyzed, and delivered to your inbox.
      </SectionBlock>
      <SectionBlock title="Why Subscribe?" underlineWidthClass="w-64">
        Unlike mainstream outlets, we specialize exclusively in financial wrongdoing. We bring clarity to the schemes shaping global markets, from discreet private banks in Switzerland to shadowy trading desks in Hong Kong.
      </SectionBlock>
      <Newsletter />
    </>
  );
}


