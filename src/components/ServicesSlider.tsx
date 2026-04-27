import { ArrowRight } from "@gravity-ui/icons";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { serviceCategorie } from "@/config/service-data";
import Section from "./Section";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ServicesSlider() {
	const services = serviceCategorie.flatMap((category) =>
		category.services.map((service) => ({
			...service,
			categoryId: category.id,
		})),
	);

	return (
		<Section className="py-16">
			<div className="mb-8 flex flex-col justify-between gap-6 md:flex-row">
				<h2 className="text-4xl font-semibold text-white">Наші послуги</h2>

				<p className="w-full max-w-full text-sm md:max-w-[50%]">
					Пропонуємо широкий спектр послуг, від консультацій до спеціалізованих
					рішень. Наша команда забезпечує якість, ефективність та індивідуальний
					підхід. Довіртеся нам для досягнення ваших цілей!
				</p>

				<Link
					to="/service"
					className="flex flex-col gap-3 h-full group hover:text-accent transition-colors"
				>
					<span className="flex items-center gap-2 pr-1">
						Всі послуги
						<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
					</span>
				</Link>
			</div>

			<Swiper
				spaceBetween={16}
				loop={false}
				centeredSlides={false}
				watchOverflow
				breakpoints={{
					0: {
						slidesPerView: 1.5,
					},
					640: {
						slidesPerView: 2.5,
					},
					1024: {
						slidesPerView: 4.5,
					},
				}}
			>
				{services.map((service) => (
					<SwiperSlide key={service.slug}>
						<Link
							to={`/service?tab=${service.categoryId}&service=${service.slug}`}
							className="relative block h-[430px] overflow-hidden rounded-2xl"
						>
							<img
								src={service.image}
								alt={service.name}
								className="h-full w-full object-cover"
							/>

							<div className="absolute inset-0 bg-black/45" />

							<p className="absolute bottom-6 left-6 right-6 text-xl font-semibold text-white">
								{service.name}
							</p>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</Section>
	);
}
