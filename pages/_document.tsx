import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />
            <meta name="theme-color" content="#ffac00" />
			<meta name="google-site-verification" content="03JacJ3nukN95mePnMzpmEKUElF3XX8NFIiAFXEwhQE" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

