import heroImage from '../../designs/home/last-news.png';

export type NewsCategory = 'breaking' | 'money' | 'crypto' | 'corporate';

export interface MockNewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  slug: string;
  featuredImage?: {
    url: string;
    alt: string;
  };
  category: NewsCategory;
  author?: {
    name: string;
    avatar?: string;
  };
  readingTime?: number;
}

export const mockNewsArticles: MockNewsArticle[] = [
  {
    id: 1,
    title: 'GLOBAL CRYPTO EXCHANGE COLLAPSES AMID FRAUD ALLEGATIONS',
    excerpt: 'Major cryptocurrency exchange files for bankruptcy following revelations of missing customer funds worth $8 billion. Regulators launch criminal investigation.',
    date: '17.09.25 14:30',
    slug: 'crypto-exchange-collapse-fraud',
    featuredImage: { url: heroImage.src, alt: 'Crypto exchange collapse' },
    category: 'breaking',
    author: { name: 'Sarah Chen', avatar: '' },
    readingTime: 8,
  },
  {
    id: 2,
    title: 'PANAMA PAPERS 2.0: NEW LEAK EXPOSES SHELL COMPANY NETWORKS',
    excerpt: 'Fresh document leak reveals how political elites and corporations hide billions through complex offshore structures across 15 jurisdictions.',
    date: '17.09.25 11:15',
    slug: 'panama-papers-2-shell-companies',
    featuredImage: { url: heroImage.src, alt: 'Document leak investigation' },
    category: 'breaking',
    author: { name: 'Marcus Rodriguez', avatar: '' },
    readingTime: 12,
  },
  {
    id: 3,
    title: 'SWISS BANK FINED $2.3 BILLION FOR MONEY LAUNDERING SCHEME',
    excerpt: 'International regulators impose record penalty on major Swiss financial institution for facilitating drug cartel money laundering operations.',
    date: '16.09.25 16:45',
    slug: 'swiss-bank-money-laundering-fine',
    featuredImage: { url: heroImage.src, alt: 'Swiss banking scandal' },
    category: 'money',
    author: { name: 'Elena Kovač', avatar: '' },
    readingTime: 7,
  },
  {
    id: 4,
    title: 'RUSSIAN OLIGARCH ASSETS TRACED THROUGH CRYPTO MIXERS',
    excerpt: 'Investigation reveals how sanctioned Russian billionaire moved $500 million through cryptocurrency mixing services to evade international sanctions.',
    date: '16.09.25 09:20',
    slug: 'russian-oligarch-crypto-mixers',
    featuredImage: { url: heroImage.src, alt: 'Crypto mixing investigation' },
    category: 'money',
    author: { name: 'David Kim', avatar: '' },
    readingTime: 10,
  },
  {
    id: 5,
    title: 'DEFI PROTOCOL LOSES $150 MILLION IN SOPHISTICATED HACK',
    excerpt: 'Hackers exploit smart contract vulnerability in popular DeFi lending platform, draining user funds in coordinated attack across multiple blockchains.',
    date: '15.09.25 22:10',
    slug: 'defi-protocol-hack-150-million',
    featuredImage: { url: heroImage.src, alt: 'DeFi hack investigation' },
    category: 'crypto',
    author: { name: 'Alex Thompson', avatar: '' },
    readingTime: 6,
  },
  {
    id: 6,
    title: 'STABLECOIN ISSUER UNDER INVESTIGATION FOR RESERVE FRAUD',
    excerpt: 'Regulators probe major stablecoin company over allegations that reserves backing $40 billion in tokens include risky commercial paper and loans.',
    date: '15.09.25 13:55',
    slug: 'stablecoin-reserve-fraud-investigation',
    featuredImage: { url: heroImage.src, alt: 'Stablecoin investigation' },
    category: 'crypto',
    author: { name: 'Jennifer Walsh', avatar: '' },
    readingTime: 9,
  },
  {
    id: 7,
    title: 'PHARMACEUTICAL GIANT ADMITS TO $4.7 BILLION KICKBACK SCHEME',
    excerpt: 'Major drug manufacturer agrees to settlement over decade-long bribery program targeting doctors and healthcare officials across 23 countries.',
    date: '14.09.25 14:30',
    slug: 'pharma-kickback-scheme-settlement',
    featuredImage: { url: heroImage.src, alt: 'Pharmaceutical corruption' },
    category: 'corporate',
    author: { name: 'Maria Santos', avatar: '' },
    readingTime: 11,
  },
  {
    id: 8,
    title: 'TECH BILLIONAIRE\'S FAMILY OFFICE EXPOSED IN TAX EVASION PROBE',
    excerpt: 'Internal documents reveal how Silicon Valley mogul used network of trusts and offshore entities to avoid $2.1 billion in taxes over five years.',
    date: '14.09.25 10:15',
    slug: 'tech-billionaire-tax-evasion',
    featuredImage: { url: heroImage.src, alt: 'Tax evasion investigation' },
    category: 'corporate',
    author: { name: 'Robert Chang', avatar: '' },
    readingTime: 13,
  },
  {
    id: 9,
    title: 'ENERGY COMPANY CEO INDICTED FOR COMMODITIES MANIPULATION',
    excerpt: 'Federal prosecutors charge oil trading executive with artificially inflating crude prices through coordinated market manipulation spanning three years.',
    date: '13.09.25 16:40',
    slug: 'energy-ceo-commodities-manipulation',
    featuredImage: { url: heroImage.src, alt: 'Commodities manipulation case' },
    category: 'corporate',
    author: { name: 'Michael O\'Brien', avatar: '' },
    readingTime: 8,
  },
];


