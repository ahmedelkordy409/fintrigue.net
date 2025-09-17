'use client';

import { useState } from 'react';
import LatestNews from '@/components/home/LatestNews';
import Newsletter from '@/components/home/Newsletter';
import { mockNewsArticles, NewsCategory } from '@/lib/mockNews';

export default function NewsClient() {
  const [active, setActive] = useState<NewsCategory>('breaking');
  const filtered = mockNewsArticles.filter((a) => a.category === active);

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: 'var(--section-bg)' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight" style={{ color: '#000000' }}>
            Breaking Financial News,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Scandals, and Exposés
          </h1>
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center mb-8">
            {([
              { key: 'breaking', label: 'Breaking News' },
              { key: 'money', label: 'Money Laundering' },
              { key: 'crypto', label: 'Crypto Crimes' },
              { key: 'corporate', label: 'Corporate Scandals' },
            ] as { key: NewsCategory; label: string }[]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-medium transition-all duration-200 hover:shadow-md ${
                  active === tab.key ? 'bg-[#EAE4DC] text-[#2B2B2B]' : 'bg-white text-[#1F2937] hover:bg-gray-50'
                }`}
                style={{
                  border: '1px solid #1F2937',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-600">
            {filtered.length} {filtered.length === 1 ? 'article' : 'articles'} in {([
              { key: 'breaking', label: 'Breaking News' },
              { key: 'money', label: 'Money Laundering' },
              { key: 'crypto', label: 'Crypto Crimes' },
              { key: 'corporate', label: 'Corporate Scandals' },
            ] as { key: NewsCategory; label: string }[]).find(tab => tab.key === active)?.label}
          </div>
        </div>
      </section>

      <LatestNews articles={filtered} showHeading={false} />
      <Newsletter />
    </>
  );
}


