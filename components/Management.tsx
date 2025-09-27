import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useMemo } from 'react';

export default function Management({ labels }: { labels: any }) {
    const mgmt = labels?.MANAGEMENTS ?? {};
    const items = useMemo(() => (mgmt?.ITEMS ?? []).map((m: any, i: number) => ({
        img: ['/images/sionpurba.webp','/images/ley.webp','/images/bellen.webp'][i] || '/images/ley.webp',
        name: m.name,
        role: m.role,
        desc: m.desc,
    })), [mgmt]);

	return (
		<section id="executive-management" className="bg-gray-100 py-16">
			<div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="m-8 pt-24 inline-block text-4xl md:text-5xl bg-gradient-to-r from-[#ffac00] to-[#fd5e79] bg-clip-text text-transparent tracking-[.2rem]">{mgmt?.TITLE ?? 'Meet Our Managements'}</h2>
				<p className="text-2xl text-slate-700">Learn more about the minds shaping our future.</p>
				<div className="mt-10">
						<Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 3000 }} loop pagination={{ clickable: true }} slidesPerView={1} spaceBetween={32} breakpoints={{ 576: { slidesPerView: 2, spaceBetween: 32 }, 768: { slidesPerView: 3, spaceBetween: 32 } }}>
							{items.map((m, i) => (
								<SwiperSlide key={i}>
									<div className="px-3 md:px-4 h-full">
										<div className="bg-white shadow-soft rounded h-full flex flex-col">
										<div className="w-full h-72 bg-black overflow-hidden rounded-t">
											<img src={m.img} alt={m.name} className="w-full h-full object-cover" />
										</div>
											<div className="p-6 text-center flex-1 flex flex-col justify-between">
											<h3 className="text-lg font-bold text-slate-900">{m.name}</h3>
											<h4 className="uppercase text-xs text-slate-500">{m.role}</h4>
											<p className="mt-2 text-base text-slate-700">{m.desc}</p>
										</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
				</div>
			</div>
		</section>
	);
}


