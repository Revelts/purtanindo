import Link from 'next/link';
import { Button, Container } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <Container className="text-center py-32">
        <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan kembali
          ke beranda atau hubungi kami jika Anda memerlukan bantuan.
        </p>
        <Link href="/">
          <Button size="lg">Kembali ke Beranda</Button>
        </Link>
      </Container>
    </div>
  );
}
