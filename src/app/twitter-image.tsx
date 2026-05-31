import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt = 'Purtanindo - Partner Transformasi Digital Bisnis Anda';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const logoBuffer = readFileSync(join(process.cwd(), 'public/images/logo.png'));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          padding: '80px 100px',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Purtanindo"
          width={560}
          height={280}
          style={{ objectFit: 'contain' }}
        />
        <p
          style={{
            fontSize: 26,
            color: '#666666',
            margin: 0,
            fontFamily: 'sans-serif',
            letterSpacing: '-0.3px',
          }}
        >
          Jasa Pembuatan Website, Aplikasi &amp; Digitalisasi Bisnis
        </p>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
