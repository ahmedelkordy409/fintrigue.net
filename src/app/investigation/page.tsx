import type { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import SectionBlock from '@/components/common/SectionBlock';
import OptionList from '@/components/common/OptionList';
import Newsletter from '@/components/home/Newsletter';

export const metadata: Metadata = {
  title: 'Investigations | Fintrigue',
};

export default function InvestigationPage() {
  return (
    <>
      <PageHero title={"In-Depth Financial\nInvestigations"} />

      <SectionBlock title="" underlineWidthClass="w-0">
        Fintrigue goes beyond headlines. Our team conducts independent, journalistic investigations into the world of financial crime - exposing hidden money flows, shell networks, insider dealings, and regulatory blind spots.
      </SectionBlock>

      <OptionList
        title="What We Do"
        options={[
          'Trace and explain suspicious financial patterns using open-source intelligence (OSINT) and public records',
          'Uncover connections between corporations, offshore structures, and individuals',
          'Investigate money laundering cases, market manipulation, and high-risk financial schemes',
          'Publish findings in clear, evidence-based reports accessible to the public, journalists, and professionals',
        ]}
      />

      <SectionBlock title="Why It Matters" underlineWidthClass="w-56">
        Unlike traditional news outlets, Fintrigue specializes exclusively in financial wrongdoing. Our work equips regulators, compliance professionals, and the public with credible insights into scandals that affect markets worldwide.
      </SectionBlock>

      <SectionBlock title="Our Clients" underlineWidthClass="w-48">
        We serve law firms, corporations, regulators, and high-net-worth individuals who require discreet and professional financial investigations.
      </SectionBlock>

      <SectionBlock title="How We Work" underlineWidthClass="w-48">
        All investigations are conducted as part of our journalistic mission. We do not provide surveillance or law-enforcement services - our focus is on research, analysis, and public reporting.
      </SectionBlock>

      <Newsletter />
    </>
  );
}


