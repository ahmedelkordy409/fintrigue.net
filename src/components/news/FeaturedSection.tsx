import { ArticleCard } from './ArticleCard';
import { NewsArticle } from '@/types/wordpress';

interface FeaturedSectionProps {
  articles: NewsArticle[];
  className?: string;
}

export const FeaturedSection = ({ articles, className = '' }: FeaturedSectionProps) => {
  if (!articles || articles.length === 0) {
    return null;
  }

  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 4);

  return (
    <section className={`space-y-6 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured News</h2>
        <div className="h-px bg-border flex-1 ml-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Featured Article */}
        <div className="lg:col-span-2">
          <ArticleCard
            article={mainArticle}
            variant="featured"
            showExcerpt={true}
            showAuthor={true}
          />
        </div>

        {/* Side Articles */}
        <div className="space-y-4">
          {sideArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="horizontal"
              showImage={true}
              showExcerpt={false}
              showAuthor={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};