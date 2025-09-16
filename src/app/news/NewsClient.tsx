'use client';

import { useState } from 'react';
import LatestNews from '@/components/home/LatestNews';
import Newsletter from '@/components/home/Newsletter';
import { mockNewsArticles, NewsCategory } from '@/lib/mockNews';

export default function NewsClient() {
  const [active, setActive] = useState<NewsCategory>('money');
  const filtered = mockNewsArticles.filter((a) => a.category === active);

  return (
    <>
      <section className="py-16" style={{ backgroundColor: 'var(--section-bg)' }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ color: '#000000' }}>
            Breaking Financial News,
            <br /> Scandals, and Exposés
          </h1>
          <div className="flex gap-8 justify-center">
            {([
              { key: 'money', label: 'Money Laundering' },
              { key: 'crypto', label: 'Crypto Crimes' },
              { key: 'corporate', label: 'Corporate Scandals' },
            ] as { key: NewsCategory; label: string }[]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className="px-6 py-3 text-sm"
                style={{
                  border: '1px solid #1F2937',
                  backgroundColor: active === tab.key ? '#EAE4DC' : 'transparent',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <LatestNews articles={filtered} showHeading={false} />
      <Newsletter />
    </>
  );
}


