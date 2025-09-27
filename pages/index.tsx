import Head from 'next/head';
import SEO from '../components/SEO';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

// Image imports to avoid creating a public folder
// switched to public paths under /images
import { IoIosArrowUp } from 'react-icons/io';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Management from '../components/Management';
import Gallery from '../components/Gallery';
import Articles from '../components/Articles';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import Communicate from '../components/Communicate';

type Service = {
	CLASS: string;
	ICON: string;
	TITLE: string;
	DETAILS: string[];
};

type LangData = {
	HEADING: string;
	SUBHEADING: string;
	ABOUT: { HEADING: string; TITLE: string; DESCRIPTION: string };
	SERVICES: { HEADING: string; DESCRIPTION: string; SERVICES: Service[] };
	COMMUNICATE: { TITLE: string; DESCRIPTION: string; BUTTON: string };
	FAQ: { TITLE: string; QUESTIONS: { QUESTION: string; ANSWER: string }[] };
};

function getSrc(img: any): string { return typeof img === 'string' ? img : (img?.src ?? ''); }

function useLang() {
	const [lang, setLang] = useState<'id' | 'en'>('id');
	const [data, setData] = useState<LangData | null>(null);
	useEffect(() => {
		(async () => {
			try {
				const mod = await (lang === 'id' ? import('../lang/id.json') : import('../lang/en.json'));
				setData((mod as any).default ?? (mod as any));
			} catch {
				setData(null);
			}
		})();
	}, [lang]);
	return { lang, setLang, data };
}

export default function HomePage() {
	const { lang, setLang, data } = useLang();

	const faq = data?.FAQ ?? { TITLE: 'FAQ', QUESTIONS: [] };

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={'/images/favicon.ico'} />
			</Head>
			<SEO
				title="Purtanindo | IT Consultant, Web Development, SEO & Digital Solutions"
				description="We craft high‑quality digital products and provide professional IT services to help your business thrive."
				keywords={[
					'Purtanindo',
					'IT consultant',
					'web development',
					'mobile development',
					'SEO',
					'digital solutions',
					'Jakarta',
				]}
				url="/"
				image="/images/purtanindo-colored.webp"
				canonical="/"
			/>
			<Header lang={lang} setLang={setLang} nav={{
				HOME: lang === 'id' ? 'Beranda' : 'Home',
				GROUP_ABOUT: lang === 'id' ? 'Tentang' : 'About',
				GROUP_SERVICES: lang === 'id' ? 'Layanan' : 'Services',
				GROUP_CONTACT: lang === 'id' ? 'Kontak' : 'Contact',
				ABOUT: lang === 'id' ? 'Tentang Kami' : 'About Us',
				TEAM: 'Our Team',
				MANAGEMENT: lang === 'id' ? 'Manajemen' : 'Management',
				SERVICES: lang === 'id' ? 'Layanan Kami' : 'Our Services',
				ARTICLES: 'Articles',
				GALLERY: 'Gallery',
				CONTACT: lang === 'id' ? 'Kontak' : 'Contact',
				FAQ: 'FAQ',
				DOWNLOAD: 'Download CV',
				LANGUAGE: lang === 'id' ? 'Bahasa' : 'English'
			}} />

			<Hero heading={data?.HEADING ?? ''} subheading={data?.SUBHEADING ?? ''} />

			<Reveal><About heading={data?.ABOUT.HEADING ?? ''} title={data?.ABOUT.TITLE ?? ''} html={data?.ABOUT.DESCRIPTION ?? ''} /></Reveal>

			<Reveal><Services heading={data?.SERVICES.HEADING ?? ''} description={data?.SERVICES.DESCRIPTION ?? ''} services={data?.SERVICES.SERVICES ?? []} /></Reveal>

			<Reveal><Communicate title={data?.COMMUNICATE.TITLE ?? ''} description={data?.COMMUNICATE.DESCRIPTION ?? ''} button={data?.COMMUNICATE.BUTTON ?? ''} /></Reveal>

			<Reveal><Team /></Reveal>

			<Reveal><Management labels={lang === 'id' ? require('../lang/id.json') : require('../lang/en.json')} /></Reveal>

			<Reveal><Gallery title={(lang==='id'? require('../lang/id.json').GALLERY.TITLE : require('../lang/en.json').GALLERY.TITLE)} description={(lang==='id'? require('../lang/id.json').GALLERY.DESCRIPTION : require('../lang/en.json').GALLERY.DESCRIPTION)} /></Reveal>

			<Reveal><Articles /></Reveal>

			<Reveal><Contact title={(lang==='id'? require('../lang/id.json').COMMUNICATE.TITLE : require('../lang/en.json').COMMUNICATE.TITLE)} description={(lang==='id'? require('../lang/id.json').COMMUNICATE.DESCRIPTION : require('../lang/en.json').COMMUNICATE.DESCRIPTION)} buttonLabel={(lang==='id'? require('../lang/id.json').COMMUNICATE.BUTTON : require('../lang/en.json').COMMUNICATE.BUTTON)} /></Reveal>

			<Reveal><FAQ title={faq.TITLE} questions={faq.QUESTIONS} /></Reveal>

			<Footer />

			<a href="#home" className="fixed right-4 bottom-4 w-11 h-11 rounded-full bg-gradient-to-r from-[#ffac00] to-[#fd5e79] text-white grid place-items-center text-2xl shadow" aria-label="Back to top">
				<IoIosArrowUp />
			</a>
			<a href="https://wa.me/+6285121114156?text=Hello%2C%20I%20am%20interested%20in%20your%20services." target="_blank" className="fixed left-4 bottom-4 w-14 h-14 rounded-full bg-[#25d366] text-white grid place-items-center text-3xl shadow" aria-label="Chat with us on WhatsApp">
				<FaWhatsapp />
			</a>
		</>
	);
}

