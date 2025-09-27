import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';

type NavLabels = {
    HOME: string;
    GROUP_ABOUT: string;
    GROUP_SERVICES: string;
    GROUP_CONTACT: string;
    ABOUT: string;
    TEAM: string;
    MANAGEMENT: string;
    SERVICES: string;
    ARTICLES: string;
    GALLERY: string;
    CONTACT: string;
    FAQ: string;
    DOWNLOAD: string;
    LANGUAGE: string;
};

export default function Header({ lang, setLang, nav }: { lang: 'id' | 'en'; setLang: (l: 'id' | 'en') => void; nav: NavLabels }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
    const [mobileSections, setMobileSections] = useState<{about:boolean;services:boolean;contact:boolean}>({ about: false, services: false, contact: false });
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function onScroll() { setScrolled(window.scrollY > 35); }
		onScroll();
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header ref={headerRef} className={`fixed top-0 left-0 z-50 w-full px-4 py-2 flex items-center justify-between transition-all ${scrolled ? 'bg-white/80 shadow-md backdrop-blur' : 'bg-transparent'}`}>
			<a href="#home" className="logo flex items-center">
				<img src={scrolled ? '/images/purtanindo-colored.webp' : '/images/purtanindo-white.webp'} alt="Logo Purtanindo" className="h-10 md:h-12" />
			</a>
			<button aria-label="menu" className={`md:hidden text-3xl ${scrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setMenuOpen(v => !v)}>
				<FaBars />
			</button>
			<nav className={`navbar ${menuOpen ? 'block' : 'hidden'} md:block ${menuOpen ? 'bg-white' : 'bg-transparent'} md:bg-transparent absolute md:static top-full right-2 md:right-0 rounded md:rounded-none shadow md:shadow-none`}
				style={{ minWidth: menuOpen ? '70%' : undefined }}>
				<ul className={`flex flex-col md:flex-row items-center gap-4 p-4 md:p-0 ${scrolled ? 'text-slate-800' : 'text-slate-900 md:text-white'}`}>
					<li><a className="hover:text-[#fd5e79]" href="#home">{nav.HOME}</a></li>
					<li className="group relative" tabIndex={0}>
						<button className="hover:text-[#fd5e79]" onClick={() => setMobileSections(s => ({...s, about: !s.about}))}>{nav.GROUP_ABOUT}</button>
						<div className="hidden md:block invisible md:group-hover:visible md:group-hover:opacity-100 md:group-focus-within:visible md:group-focus-within:opacity-100 absolute left-0 top-full bg-white text-slate-800 rounded shadow w-44 transition-opacity">
							<a href="#about" className="block px-4 py-2 hover:bg-slate-50">{nav.ABOUT}</a>
							<a href="#team" className="block px-4 py-2 hover:bg-slate-50">{nav.TEAM}</a>
							<a href="#executive-management" className="block px-4 py-2 hover:bg-slate-50">{nav.MANAGEMENT}</a>
						</div>
						{/* Mobile submenu */}
						<div className={`md:hidden w-full pl-2 space-y-1 ${mobileSections.about ? 'block' : 'hidden'}`}>
							<a href="#about" className="block px-2 py-1">{nav.ABOUT}</a>
							<a href="#team" className="block px-2 py-1">{nav.TEAM}</a>
							<a href="#executive-management" className="block px-2 py-1">{nav.MANAGEMENT}</a>
						</div>
					</li>
					<li className="group relative" tabIndex={0}>
						<button className="hover:text-[#fd5e79]" onClick={() => setMobileSections(s => ({...s, services: !s.services}))}>{nav.GROUP_SERVICES}</button>
						<div className="hidden md:block invisible md:group-hover:visible md:group-hover:opacity-100 md:group-focus-within:visible md:group-focus-within:opacity-100 absolute left-0 top-full bg-white text-slate-800 rounded shadow w-48 transition-opacity">
							<a href="#web-development-service" className="block px-4 py-2 hover:bg-slate-50">{nav.SERVICES}</a>
							<a href="#articles" className="block px-4 py-2 hover:bg-slate-50">{nav.ARTICLES}</a>
							<a href="#gallery" className="block px-4 py-2 hover:bg-slate-50">{nav.GALLERY}</a>
						</div>
						<div className={`md:hidden w-full pl-2 space-y-1 ${mobileSections.services ? 'block' : 'hidden'}`}>
							<a href="#web-development-service" className="block px-2 py-1">{nav.SERVICES}</a>
							<a href="#articles" className="block px-2 py-1">{nav.ARTICLES}</a>
							<a href="#gallery" className="block px-2 py-1">{nav.GALLERY}</a>
						</div>
					</li>
					<li className="group relative" tabIndex={0}>
						<button className="hover:text-[#fd5e79]" onClick={() => setMobileSections(s => ({...s, contact: !s.contact}))}>{nav.GROUP_CONTACT}</button>
						<div className="hidden md:block invisible md:group-hover:visible md:group-hover:opacity-100 md:group-focus-within:visible md:group-focus-within:opacity-100 absolute left-0 top-full bg-white text-slate-800 rounded shadow w-48 transition-opacity">
							<a href="#contact" className="block px-4 py-2 hover:bg-slate-50">{nav.CONTACT}</a>
							<a href="#faq" className="block px-4 py-2 hover:bg-slate-50">{nav.FAQ}</a>
                    <a href="/api/download-cv" className="block px-4 py-2 hover:bg-slate-50">{nav.DOWNLOAD}</a>
						</div>
						<div className={`md:hidden w-full pl-2 space-y-1 ${mobileSections.contact ? 'block' : 'hidden'}`}>
							<a href="#contact" className="block px-2 py-1">{nav.CONTACT}</a>
							<a href="#faq" className="block px-2 py-1">{nav.FAQ}</a>
                    <a href="/api/download-cv" className="block px-2 py-1">{nav.DOWNLOAD}</a>
						</div>
					</li>
					<li className="relative">
						<button className="flex items-center gap-2" onClick={() => setLang(lang === 'id' ? 'en' : 'id')}>
							<img src={lang === 'id' ? '/images/id.svg' : '/images/uk.svg'} alt="flag" className="w-6 h-4" />
							{nav.LANGUAGE}
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}


