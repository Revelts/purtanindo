export default function Hero({ heading, subheading }: { heading: string; subheading: string }) {
	return (
		<section id="home" className="min-h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center text-center relative pt-16 md:pt-20" style={{ backgroundImage: `url(/images/img1.webp)` }}>
			<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
			<h1 className="relative text-white text-4xl md:text-6xl font-bold drop-shadow-lg px-4">{heading}</h1>
			<h2 className="relative text-white text-xl md:text-3xl mt-3 opacity-95 px-6 max-w-4xl">{subheading}</h2>
			<div className="absolute bottom-0 left-0 w-full h-28" style={{ backgroundImage: `url(/images/wave.webp)`, backgroundSize: '100rem 11rem', backgroundRepeat: 'repeat-x' }} />
		</section>
	);
}


