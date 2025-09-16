import type { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import SectionBlock from '@/components/common/SectionBlock';
import OptionList from '@/components/common/OptionList';
import Newsletter from '@/components/home/Newsletter';

export const metadata: Metadata = {
  title: 'Advertise With Us | Fintrigue',
};

export default function AdvertisePage() {
  return (
    <>
      <PageHero title={"Partner with Fintrigue to Reach a\nGlobal Audience of Decision-Makers"} />

      <SectionBlock title="Why Advertise With Us?" underlineWidthClass="w-[360px]">
        Fintrigue readers include financial professionals, compliance officers, regulators, legal experts, and global investors - an audience that values credibility and insight.
      </SectionBlock>

      <OptionList
        title="Advertising Options:"
        options={[
          'Sponsored articles (clearly labeled)',
          'Newsletter sponsorships',
          'Banner placements on high-traffic pages',
          'Event/webinar partnerships',
        ]}
      />

      <SectionBlock title="Our Promise" underlineWidthClass="w-40">
        We maintain strict editorial independence. All advertising is clearly separated from investigative content.
      </SectionBlock>

      <Newsletter />
    </>
  );
}


