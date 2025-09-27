import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />
			<meta name="description" content="Purtanindo - IT Consultant, Web/Mobile Development, SEO & Digital Solutions. We build scalable products and bring your business into the digital era." />
			<meta name="theme-color" content="#ffac00" />
			<meta property="og:title" content="Purtanindo | IT Consultant, Web Development, SEO & Digital Solutions" />
			<meta property="og:description" content="We craft high‑quality digital products and provide professional IT services to help your business thrive." />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="/images/purtanindo-colored.webp" />
			<link rel="canonical" href="https://purtanindo.com/" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

