import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import Popup from './Popup';

export default function Gallery({ title, description }: { title: string; description: string }) {
    const [active, setActive] = useState<string | null>(null);

	return (
		<section id="gallery" className="py-24 text-center bg-gray-50">
			<div className="max-w-6xl mx-auto px-4">
                <h2 className="m-8 pt-24 inline-block text-4xl md:text-5xl bg-gradient-to-r from-[#ffac00] to-[#fd5e79] bg-clip-text text-transparent tracking-[.2rem]">{title}</h2>
                <p className="text-2xl mt-4 text-slate-700">{description}</p>
				<div className="mt-10">
					<Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 2500 }} loop pagination={{ clickable: true }} spaceBetween={20} breakpoints={{ 0: { slidesPerView: 1 }, 576: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 992: { slidesPerView: 4 } }}>
						{[1,2,3,4,5].map((n) => (
							<SwiperSlide key={n}>
								<button onClick={() => setActive(`/images/gallery/${n}.webp`)} className="block w-full">
									<img src={`/images/gallery/${n}.webp`} alt="Gallery item" className="w-full h-[250px] object-cover rounded-lg shadow-soft" />
								</button>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<Popup isOpen={!!active} onClose={() => setActive(null)}>
				{active && (
					<div className="w-full">
						<img src={active} alt="Preview" className="w-full h-auto rounded-lg" />
					</div>
				)}
			</Popup>
		</section>
	);
}


