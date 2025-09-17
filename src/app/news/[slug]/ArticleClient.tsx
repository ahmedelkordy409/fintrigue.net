'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, Share2, ArrowLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Newsletter from '@/components/home/Newsletter';
import { MockNewsArticle, mockNewsArticles } from '@/lib/mockNews';

interface ArticleClientProps {
  article: MockNewsArticle;
}

export default function ArticleClient({ article }: ArticleClientProps) {
  const [shareDropdownOpen, setShareDropdownOpen] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString.replace(/(\d{2})\.(\d{2})\.(\d{2})/, '20$3-$2-$1')).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getCategoryLabel = (category: string) => {
    const categoryMap = {
      breaking: 'Breaking News',
      money: 'Money Laundering',
      crypto: 'Crypto Crimes',
      corporate: 'Corporate Scandals',
    };
    return categoryMap[category as keyof typeof categoryMap] || category;
  };

  const getCategoryColor = (category: string) => {
    const colorMap = {
      breaking: 'bg-red-100 text-red-800 border-red-200',
      money: 'bg-green-100 text-green-800 border-green-200',
      crypto: 'bg-blue-100 text-blue-800 border-blue-200',
      corporate: 'bg-purple-100 text-purple-800 border-purple-200',
    };
    return colorMap[category as keyof typeof colorMap] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const relatedArticles = mockNewsArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      setShareDropdownOpen(!shareDropdownOpen);
    }
  };

  // Generate mock content for the article
  const articleContent = article.content || `
    <p class="text-lg leading-relaxed mb-6 text-gray-700">
      ${article.excerpt}
    </p>

    <p class="mb-6 text-gray-700 leading-relaxed">
      This developing story continues to unfold as investigators work around the clock to uncover the full extent of the financial irregularities. Sources close to the investigation indicate that the scope may be far broader than initially reported.
    </p>

    <h2 class="text-2xl font-bold mb-4 text-gray-900">Key Findings</h2>

    <p class="mb-6 text-gray-700 leading-relaxed">
      Our investigation has revealed several critical aspects of this case that shed light on the sophisticated methods employed to hide financial transactions and evade regulatory oversight.
    </p>

    <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
      <li>Complex network of shell companies spanning multiple jurisdictions</li>
      <li>Suspicious patterns in transaction timing and amounts</li>
      <li>Potential regulatory violations across multiple financial institutions</li>
      <li>Coordinated efforts to obscure beneficial ownership structures</li>
    </ul>

    <h2 class="text-2xl font-bold mb-4 text-gray-900">Regulatory Response</h2>

    <p class="mb-6 text-gray-700 leading-relaxed">
      Financial authorities have indicated they are taking this matter seriously and are coordinating with international partners to ensure a comprehensive investigation. The implications for the financial sector could be significant.
    </p>

    <p class="mb-6 text-gray-700 leading-relaxed">
      As this story develops, Fintrigue will continue to monitor the situation and provide updates as new information becomes available. Our commitment to investigative journalism ensures that we bring you the most accurate and up-to-date reporting on financial crime and corruption.
    </p>
  `;

  return (
    <>
      <article className="min-h-screen" style={{ backgroundColor: 'var(--section-bg)' }}>
        {/* Navigation */}
        <nav className="py-4 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/news"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back to News</span>
            </Link>
          </div>
        </nav>

        {/* Article Header */}
        <header className="py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Badge className={`${getCategoryColor(article.category)} text-xs sm:text-sm font-medium`}>
                {getCategoryLabel(article.category)}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              {article.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 py-6 border-t border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={article.author?.avatar} />
                  <AvatarFallback>
                    {article.author?.name.split(' ').map(n => n[0]).join('').toUpperCase() || 'FT'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    {article.author?.name || 'Fintrigue Editorial Team'}
                  </span>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(article.date)}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readingTime || 5} min read</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="flex items-center space-x-2"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {article.featuredImage && (
          <div className="mb-8 sm:mb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={article.featuredImage.url}
                  alt={article.featuredImage.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: articleContent }}
          />
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-12 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Related Articles in {getCategoryLabel(article.category)}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/news/${relatedArticle.slug}`}
                    className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    {relatedArticle.featuredImage && (
                      <div className="relative aspect-video rounded-t-lg overflow-hidden">
                        <Image
                          src={relatedArticle.featuredImage.url}
                          alt={relatedArticle.featuredImage.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                        <span>{formatDate(relatedArticle.date)}</span>
                        <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <Newsletter />
    </>
  );
}