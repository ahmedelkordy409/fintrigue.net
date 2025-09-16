import heroImage from '../../designs/home/last-news.png';

export type NewsCategory = 'money' | 'crypto' | 'corporate';

export interface MockNewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  featuredImage?: {
    url: string;
    alt: string;
  };
  category: NewsCategory;
}

export const mockNewsArticles: MockNewsArticle[] = [
  {
    id: 1,
    title:
      'HE NEW ERA OF GUEST EXPERIENCE: PERSONALIZATION & TECH INTEGRATION',
    excerpt:
      'A strategic guide for hotel owners and managers on revitalizing struggling properties. Learn the essential steps—from staff retraining and service design to digital marketing and revenue management—to increase ADR, occupancy, and guest satisfaction.',
    date: '23.02.25 23:21',
    slug: 'guest-experience-personalization-tech',
    featuredImage: { url: heroImage.src, alt: 'Glass architecture' },
    category: 'money',
  },
  {
    id: 2,
    title: 'MARKETS MOVE AS REGULATIONS TIGHTEN ACROSS BORDERS',
    excerpt:
      'Global regulators coordinate to implement tougher transparency rules. What this means for cross-border payments in 2025.',
    date: '22.02.25 17:30',
    slug: 'markets-move-regulations-tighten',
    featuredImage: { url: heroImage.src, alt: 'Market charts' },
    category: 'crypto',
  },
  {
    id: 3,
    title: 'NEW AML FRAMEWORK TARGETS SHELL COMPANY NETWORKS',
    excerpt:
      'Authorities unveil a multi-year plan to trace beneficial ownership across jurisdictions to curb illicit flows.',
    date: '21.02.25 09:10',
    slug: 'new-aml-framework-shell-companies',
    featuredImage: { url: heroImage.src, alt: 'Compliance paperwork' },
    category: 'corporate',
  },
  {
    id: 4,
    title: 'BANKING DATA LEAK REVEALS OFFSHORE TIES',
    excerpt:
      'A major leak exposes networks of offshore vehicles linked to prominent intermediaries. We break down the findings.',
    date: '20.02.25 12:02',
    slug: 'banking-data-leak-offshore-ties',
    featuredImage: { url: heroImage.src, alt: 'Offshore network' },
    category: 'money',
  },
];


