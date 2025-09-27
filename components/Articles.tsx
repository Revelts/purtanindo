import { useMemo, useState } from 'react';
import { articles as staticArticles, type Article as StaticArticle } from '../data/articles';
import Popup from './Popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Article = StaticArticle;

export default function Articles() {
    const articles: Article[] = useMemo(() => staticArticles, []);

	const [active, setActive] = useState<Article | null>(null);


	return (
		<section id="articles" className="bg-gray-100 py-16">
			<div className="max-w-6xl mx-auto px-4 text-center">
				<h2 className="m-8 pt-24 inline-block text-4xl md:text-5xl bg-gradient-to-r from-[#ffac00] to-[#fd5e79] bg-clip-text text-transparent tracking-[.2rem]">Articles</h2>
				<p className="text-2xl">Read our Articles.</p>
				<div className="mt-10">
					<Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 3000 }} loop pagination={{ clickable: true }} spaceBetween={32} breakpoints={{ 0: { slidesPerView: 1, spaceBetween: 20 }, 576: { slidesPerView: 2, spaceBetween: 28 }, 768: { slidesPerView: 3, spaceBetween: 32 } }}>
						{articles.map((a, i) => (
							<SwiperSlide key={i}>
								<div className="px-3 md:px-4 h-full">
									<div className="bg-white rounded h-full flex flex-col shadow-soft">
										<div className="w-full h-72 bg-black overflow-hidden rounded-t">
										<img src={a.image} alt={a.name} className="w-full h-full object-cover" />
									</div>
										<div className="p-6 text-center text-slate-900 flex-1 flex flex-col justify-between">
										<h3 className="text-lg font-bold">{a.name}</h3>
										<h4 className="uppercase text-xs text-slate-500">{a.role}</h4>
											<p className="text-sm mt-2 text-slate-700">{a.description.substring(0, 100)}...</p>
											<button onClick={() => setActive(a)} className="mt-4 px-4 py-2 rounded bg-gradient-to-r from-[#ffac00] to-[#fd5e79] text-white hover:opacity-90">Read More</button>
									</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<Popup isOpen={!!active} onClose={() => setActive(null)}>
				{active && (
					<>
						<div className="w-full aspect-video bg-black overflow-hidden rounded-t">
							<img src={active.image} alt={active.name} className="w-full h-full object-cover" />
						</div>
						<div className="p-6">
							<h3 className="text-xl font-bold text-slate-900">{active.name}</h3>
							<h4 className="uppercase text-xs text-slate-500">{active.role}</h4>
							<p className="mt-3 text-slate-700 leading-7">{active.description}</p>
							<div className="prose max-w-none mt-4" dangerouslySetInnerHTML={{ __html: active.html }} />
						</div>
					</>
				)}
			</Popup>
		</section>
	);
}


