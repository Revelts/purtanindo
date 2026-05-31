import Link from 'next/link';
import { Container } from '@/components/ui';
import { AnimatedPage } from '@/components/motion';

export default function NotFound() {
  return (
    <AnimatedPage>
    <div className="min-h-screen flex items-center justify-center bg-canvas">
      <Container className="text-center py-32">
        <p className="mono-label text-accent mb-6">Error 404</p>
        <h1 className="font-display font-bold text-ink display-tight text-8xl md:text-9xl mb-6">
          404
        </h1>
        <h2 className="font-display font-semibold text-ink text-2xl md:text-3xl display-tight mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-muted mb-10 max-w-md mx-auto text-base leading-relaxed">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan kembali
          ke beranda atau hubungi kami jika Anda memerlukan bantuan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-7 py-3.5 rounded-pill bg-primary text-white text-sm font-medium hover:bg-ink transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </Container>
    </div>
    </AnimatedPage>
  );
}
