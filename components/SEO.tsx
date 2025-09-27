import Head from 'next/head';

type SEOProps = {
	title: string;
	description: string;
	keywords?: string[];
	url?: string; // path or absolute
	image?: string; // path or absolute
	type?: 'website' | 'article' | 'profile' | string;
	canonical?: string; // path or absolute
	noindex?: boolean;
};

const SITE_URL = 'https://purtanindo.com';
const DEFAULT_IMAGE = '/images/purtanindo-colored.webp';
const SITE_NAME = 'Purtanindo';

function toAbsoluteUrl(pathOrUrl?: string): string | undefined {
	if (!pathOrUrl) return undefined;
	if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
	return `${SITE_URL}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

export default function SEO({
	title,
	description,
	keywords = [],
	url = '/',
	image = DEFAULT_IMAGE,
	type = 'website',
	canonical,
	noindex,
}: SEOProps) {
	const pageUrl = toAbsoluteUrl(url) || SITE_URL;
	const canonicalUrl = toAbsoluteUrl(canonical || url) || SITE_URL;
	const imageUrl = toAbsoluteUrl(image) || toAbsoluteUrl(DEFAULT_IMAGE)!;
	const robots = noindex ? 'noindex,nofollow' : 'index,follow';

	const jsonLdOrganization = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: SITE_NAME,
		url: SITE_URL,
		logo: toAbsoluteUrl('/images/purtanindo-colored.webp'),
	};

	const jsonLdWebsite = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: SITE_NAME,
		url: SITE_URL,
		potentialAction: {
			'@type': 'SearchAction',
			target: `${SITE_URL}/?q={search_term_string}`,
			'query-input': 'required name=search_term_string',
		},
	};

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			{keywords.length > 0 && (
				<meta name="keywords" content={keywords.join(', ')} />
			)}
			<meta name="robots" content={robots} />
			<link rel="canonical" href={canonicalUrl} />

			{/* Open Graph */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content={type} />
			<meta property="og:url" content={pageUrl} />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:site_name" content={SITE_NAME} />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />

			{/* JSON-LD */}
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }} />
		</Head>
	);
}


