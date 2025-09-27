export default function Communicate({ title, description, button }: { title: string; description: string; button: string }) {
	return (
		<section id="communicate-section" className="text-center bg-cover bg-fixed bg-no-repeat text-white min-h-[35vh] py-10" style={{ backgroundImage: `url(/images/img3.webp)` }}>
			<h3 className="text-3xl mt-6 px-4">{title}</h3>
			<p className="text-2xl mt-2 px-6">{description}</p>
			<a href="#contact" className="inline-block mt-4">
				<button className="rounded-full bg-gradient-to-r from-[#ffac00] to-[#fd5e79] text-white shadow px-6 h-10 hover:opacity-90">{button}</button>
			</a>
		</section>
	);
}


