import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleClient from './ArticleClient';
import { mockNewsArticles } from '@/lib/mockNews';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = mockNewsArticles.find(a => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Article Not Found | Fintrigue',
    };
  }

  return {
    title: `${article.title} | Fintrigue`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.featuredImage ? [article.featuredImage.url] : [],
    },
  };
}

export async function generateStaticParams() {
  return mockNewsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = mockNewsArticles.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return <ArticleClient article={article} />;
}