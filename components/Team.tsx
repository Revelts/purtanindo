export default function Team() {
	const members = [
		{ img: '/images/ley-jacket.webp', name: 'Leynardo Yosef', role: 'Backend Developer', links: { fb: 'https://www.facebook.com/leynardo.yosef/', tw: 'https://x.com/Reveltss', ig: 'https://www.instagram.com/leynardoyosef/', li: 'https://id.linkedin.com/in/leynardo-yosef-4848bb233' } },
		{ img: '/images/dicky.webp', name: 'Dicky Trifadillah', role: 'Fullstack Developer', links: { fb: 'https://www.facebook.com/share/1NwRQ9qCyq/?mibextid=wwXIfr', tw: 'https://twitter.com/login', ig: 'https://www.instagram.com/dickytrifadillah?igsh=Zm11cjAzdjcwZ3pv&utm_source=qr', li: 'https://www.linkedin.com/in/dicky-trifadillah-870383169?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' } },
		{ img: '/images/kenang.webp', name: 'Kenang Andriansyah', role: 'UI & UX Designer', links: { fb: 'https://www.facebook.com/', tw: 'https://twitter.com/login', ig: 'https://www.instagram.com/kenangandriyan', li: 'https://www.linkedin.com/in/kenangandriyan/' } },
	];
	return (
		<section className="bg-[#1f2937] text-center py-16" id="team">
			<h1 className="m-8 pt-24 inline-block text-4xl md:text-5xl bg-gradient-to-r from-[#ffac00] to-[#fd5e79] bg-clip-text text-transparent tracking-[.2rem]">Our Team</h1>
			<div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{members.map((m, i) => (
					<div key={i} className="relative bg-white shadow-soft rounded-xl overflow-hidden flex flex-col items-center">
						<div className="pt-10 relative z-10">
							<img src={m.img} alt={m.name} className="h-40 w-40 sm:h-44 sm:w-44 rounded-full object-cover border-4 border-white shadow" />
						</div>
						<div className="px-6 pb-8 mt-4 relative z-10">
							<h3 className="text-xl sm:text-2xl text-gray-800">{m.name}</h3>
							<span className="block text-base sm:text-lg text-[#ffac00]">{m.role}</span>
							<div className="flex justify-center gap-4 mt-5 text-xl text-slate-600">
								<a href={m.links.fb} target="_blank" rel="noreferrer" className="hover:text-[#fd5e79]"><i className="fa-brands fa-facebook-f" /></a>
								<a href={m.links.tw} target="_blank" rel="noreferrer" className="hover:text-[#fd5e79]"><i className="fa-brands fa-x-twitter" /></a>
								<a href={m.links.ig} target="_blank" rel="noreferrer" className="hover:text-[#fd5e79]"><i className="fa-brands fa-instagram" /></a>
								<a href={m.links.li} target="_blank" rel="noreferrer" className="hover:text-[#fd5e79]"><i className="fa-brands fa-linkedin-in" /></a>
							</div>
						</div>
						<div className="pointer-events-none absolute -top-12 -right-14 w-56 h-56 rounded-full z-0" style={{ background: 'linear-gradient(to right, #ffac00, #fd5e79)' }} />
						<div className="pointer-events-none absolute -bottom-12 -left-14 w-56 h-56 bg-gray-300 rounded-full z-0" />
					</div>
				))}
			</div>
		</section>
	);
}


