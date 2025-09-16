'use client';

import { useState } from 'react';
import { ArticleCard } from './ArticleCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NewsArticle } from '@/types/wordpress';
import { ChevronDown, Filter } from 'lucide-react';

interface ArticleListProps {
  articles: NewsArticle[];
  title?: string;
  showLoadMore?: boolean;
  showFilters?: boolean;
  variant?: 'grid' | 'list';
  itemsPerPage?: number;
  className?: string;
}

export const ArticleList = ({
  articles,
  title,
  showLoadMore = false,
  showFilters = false,
  variant = 'grid',
  itemsPerPage = 12,
  className = '',
}: ArticleListProps) => {
  const [displayedArticles, setDisplayedArticles] = useState(
    articles.slice(0, itemsPerPage)
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      const currentLength = displayedArticles.length;
      const newArticles = articles.slice(currentLength, currentLength + itemsPerPage);
      setDisplayedArticles([...displayedArticles, ...newArticles]);
      setIsLoading(false);
    }, 500);
  };

  const filteredArticles = selectedCategory
    ? displayedArticles.filter(article =>
        article.categories.includes(selectedCategory)
      )
    : displayedArticles;

  const categories = Array.from(
    new Set(articles.flatMap(article => article.categories))
  );

  const hasMoreArticles = displayedArticles.length < articles.length;

  return (
    <section className={`space-y-6 ${className}`}>
      {title && (
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          {showFilters && (
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          )}
        </div>
      )}

      {showFilters && categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      )}

      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No articles found.</p>
        </div>
      ) : (
        <>
          <div
            className={
              variant === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
            }
          >
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant={variant === 'list' ? 'horizontal' : 'default'}
              />
            ))}
          </div>

          {showLoadMore && hasMoreArticles && (
            <div className="text-center">
              <Button
                onClick={loadMore}
                disabled={isLoading}
                variant="outline"
                size="lg"
              >
                {isLoading ? (
                  'Loading...'
                ) : (
                  <>
                    Load More
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
};