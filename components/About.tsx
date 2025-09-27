export default function About({ heading, title, html }: { heading: string; title: string; html: string }) {
	return (
		<section id="about" className="text-center py-16">
			<h1 className="m-8 pt-24 inline-block text-4xl md:text-5xl bg-gradient-to-r from-[#ffac00] to-[#fd5e79] bg-clip-text text-transparent tracking-[.2rem]">{heading}</h1>
			<div className="max-w-4xl mx-auto px-6">
				<h3 className="text-3xl text-black">{title}</h3>
				<p className="text-xl text-gray-700 mt-4" dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</section>
	);
}


