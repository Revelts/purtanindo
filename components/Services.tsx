type Service = {
	CLASS: string;
	ICON: string;
	TITLE: string;
	DETAILS: string[];
};

export default function Services({ heading, description, services }: { heading: string; description: string; services: Service[] }) {
	return (
		<section className="py-12 bg-gray-100" id="web-development-service">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center">
					<h1 className="m-8 pt-24 inline-block text-4xl md:text-5xl bg-gradient-to-r from-[#ffac00] to-[#fd5e79] bg-clip-text text-transparent tracking-[.2rem]">{heading}</h1>
					<p className="text-lg text-gray-700" id="service-description">{description}</p>
				</div>
				<div className="grid md:grid-cols-2 gap-6 mt-8">
					{services.map((service, idx) => (
						<div key={idx} className="p-[1px] rounded-2xl bg-gradient-to-r from-[#ffac00] to-[#fd5e79] shadow-soft">
							<div className="bg-white rounded-2xl p-6 h-full">
								<div className="flex items-center gap-3 mb-3">
									<i className={`${service.ICON} text-2xl text-[#fd5e79]`} aria-hidden="true" />
									<h6 className="text-2xl text-slate-900">{service.TITLE}</h6>
								</div>
								<ul className="list-disc text-left pl-6 text-[15px] text-slate-700">
									{service.DETAILS.map((d, i) => (<li key={i}>{d}</li>))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}


