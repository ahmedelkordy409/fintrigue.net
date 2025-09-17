import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <FileText className="h-16 w-16 text-gray-400" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Article Not Found
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The article you're looking for doesn't exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/news">
            <Button className="flex items-center space-x-2" style={{ backgroundColor: '#2B2B2B' }}>
              <ArrowLeft className="h-4 w-4" />
              <span>Back to News</span>
            </Button>
          </Link>

          <Link href="/">
            <Button variant="outline">
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}