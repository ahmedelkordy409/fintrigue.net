import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Fintrigue',
    template: '%s | Fintrigue',
  },
  description: 'Investigative journalism into the world\'s financial intrigues.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
