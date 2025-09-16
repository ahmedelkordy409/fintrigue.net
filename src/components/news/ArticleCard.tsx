import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, User } from 'lucide-react';
import { NewsArticle } from '@/types/wordpress';

interface ArticleCardProps {
  article: NewsArticle;
  variant?: 'default' | 'featured' | 'horizontal' | 'minimal';
  showImage?: boolean;
  showAuthor?: boolean;
  showExcerpt?: boolean;
  className?: string;
}

export const ArticleCard = ({
  article,
  variant = 'default',
  showImage = true,
  showAuthor = true,
  showExcerpt = true,
  className = '',
}: ArticleCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (variant === 'featured') {
    return (
      <Card className={`overflow-hidden ${className}`}>
        {showImage && article.featuredImage && (
          <div className="relative h-64 md:h-80">
            <Image
              src={article.featuredImage.url}
              alt={article.featuredImage.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              {article.categories.length > 0 && (
                <Badge variant="secondary" className="mb-2">
                  {article.categories[0]}
                </Badge>
              )}
              <Link href={`/news/${article.slug}`}>
                <h2 className="text-2xl font-bold text-white hover:underline">
                  {article.title}
                </h2>
              </Link>
            </div>
          </div>
        )}
        <CardContent className="p-4">
          {showExcerpt && (
            <p className="text-muted-foreground line-clamp-2 mb-4">
              {article.excerpt}
            </p>
          )}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            {showAuthor && (
              <div className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={article.author.avatar} />
                  <AvatarFallback className="text-xs">
                    {getInitials(article.author.name)}
                  </AvatarFallback>
                </Avatar>
                <span>{article.author.name}</span>
              </div>
            )}
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{formatDate(article.publishedAt)}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{article.readingTime} min</span>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Card className={`overflow-hidden ${className}`}>
        <div className="flex">
          {showImage && article.featuredImage && (
            <div className="relative w-48 h-32 flex-shrink-0">
              <Image
                src={article.featuredImage.url}
                alt={article.featuredImage.alt}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex-1 p-4">
            <div className="space-y-2">
              {article.categories.length > 0 && (
                <Badge variant="outline" className="text-xs">
                  {article.categories[0]}
                </Badge>
              )}
              <Link href={`/news/${article.slug}`}>
                <h3 className="font-semibold hover:underline line-clamp-2">
                  {article.title}
                </h3>
              </Link>
              {showExcerpt && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {article.excerpt}
                </p>
              )}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                {showAuthor && (
                  <span className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{article.author.name}</span>
                  </span>
                )}
                <span>{formatDate(article.publishedAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`space-y-2 ${className}`}>
        <Link href={`/news/${article.slug}`}>
          <h4 className="font-medium hover:underline line-clamp-2">
            {article.title}
          </h4>
        </Link>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <span>{formatDate(article.publishedAt)}</span>
          <span>•</span>
          <span>{article.readingTime} min read</span>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <Card className={`overflow-hidden hover:shadow-md transition-shadow ${className}`}>
      {showImage && article.featuredImage && (
        <div className="relative h-48">
          <Image
            src={article.featuredImage.url}
            alt={article.featuredImage.alt}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardHeader className="space-y-2">
        {article.categories.length > 0 && (
          <Badge variant="outline" className="w-fit text-xs">
            {article.categories[0]}
          </Badge>
        )}
        <Link href={`/news/${article.slug}`}>
          <h3 className="font-semibold hover:underline line-clamp-2">
            {article.title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent>
        {showExcerpt && (
          <p className="text-sm text-muted-foreground line-clamp-3">
            {article.excerpt}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
        {showAuthor && (
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={article.author.avatar} />
              <AvatarFallback className="text-xs">
                {getInitials(article.author.name)}
              </AvatarFallback>
            </Avatar>
            <span>{article.author.name}</span>
          </div>
        )}
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{formatDate(article.publishedAt)}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{article.readingTime} min</span>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};