import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  featuredImage?: {
    url: string;
    alt: string;
  };
}

interface LatestNewsProps {
  articles: NewsArticle[];
  showHeading?: boolean;
}

const LatestNews = ({ articles, showHeading = true }: LatestNewsProps) => {
  const featuredArticle = articles[0];
  const sideArticles = articles.slice(1, 4);

  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {showHeading && (
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-wide" style={{ color: '#000000' }}>Latest News</h2>
            <div className="w-24 h-px mx-auto" style={{ backgroundColor: '#000000' }}></div>
          </div>
        )}

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-10">
            <div className="bg-white" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}>
              <div className="p-5 md:p-6">
                {featuredArticle.featuredImage ? (
                  <div className="w-full mb-5 md:mb-6">
                    <Image src={featuredArticle.featuredImage.url} alt={featuredArticle.featuredImage.alt} width={1920} height={900} className="w-full h-[420px] md:h-[480px] object-cover" />
                  </div>
                ) : (
                  <div className="w-full h-[420px] md:h-[480px] mb-5 md:mb-6" style={{ backgroundColor: '#B8B8B8' }}></div>
                )}
                <span className="text-[10px] md:text-xs text-gray-500 tracking-wide">
                  {featuredArticle.date}
                </span>
                <h3 className="text-[18px] md:text-[20px] font-bold text-black mt-3 mb-4 leading-[1.25] uppercase tracking-wide">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed mb-5">
                  {featuredArticle.excerpt}
                </p>
                <Link href={`/news/${featuredArticle.slug}`}>
                  <span className="text-blue-600 text-sm font-medium hover:underline">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Side Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {sideArticles.map((article) => (
            <div key={article.id} className="bg-white" style={{ boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)' }}>
              <div className="p-4 md:p-5">
                {article.featuredImage ? (
                  <div className="w-full mb-4">
                    <Image src={article.featuredImage.url} alt={article.featuredImage.alt} width={800} height={400} className="w-full h-40 object-cover" />
                  </div>
                ) : (
                  <div className="w-full h-40 mb-4" style={{ backgroundColor: '#B8B8B8' }}></div>
                )}
                <span className="text-xs text-gray-500 tracking-wide">
                  {article.date}
                </span>
                <h4 className="text-sm font-bold text-black mt-2 mb-2 leading-tight uppercase">
                  {article.title}
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                  {article.excerpt}
                </p>
                <Link href={`/news/${article.slug}`}>
                  <span className="text-blue-600 text-xs font-medium hover:underline">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/news">
            <Button className="mx-auto block max-w-[720px] w-full sm:w-auto h-12 md:h-12 px-8 sm:px-16 text-sm font-medium rounded-none shadow-none hover:shadow-none hover:bg-[#2B2B2B] focus-visible:outline-none" style={{ backgroundColor: '#2B2B2B', color: '#FFFFFF' }}>
              View More Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;