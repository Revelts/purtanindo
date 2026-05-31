import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { DEFAULT_METADATA } from '@/constants/seo';
import { Navbar, Footer, FloatingButtons } from '@/components/layout';
import { PageTransitionShell } from '@/components/motion';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      </head>
      <body className="font-sans antialiased bg-canvas text-ink">
        <Navbar />
        <PageTransitionShell>
          <main>{children}</main>
        </PageTransitionShell>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
