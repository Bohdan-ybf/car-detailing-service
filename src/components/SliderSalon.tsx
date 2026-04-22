import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SliderSalonProps = {
	className?: string;
};

const images = [
	// "https://www.dcservice.com.ua/wp-content/uploads/2026/04/salon1-scaled.webp",
	// "https://www.dcservice.com.ua/wp-content/uploads/2026/04/salon2-scaled.webp",
	// "https://www.dcservice.com.ua/wp-content/uploads/2026/04/salon3-scaled.webp",
	// "https://www.dcservice.com.ua/wp-content/uploads/2026/04/salon4-scaled.webp",
	// "https://www.dcservice.com.ua/wp-content/uploads/2026/04/salon5-scaled.webp",
	// "https://www.dcservice.com.ua/wp-content/uploads/2026/04/salon6-scaled.webp",
	"/images/salon/salon1.webp",
	"/images/salon/salon2.webp",
	"/images/salon/salon3.webp",
	"/images/salon/salon4.webp",
	"/images/salon/salon5.webp",
	"/images/salon/salon6.webp",
];

const sliderImgSize = "w-full aspect-[3/2] object-cover";

export const SliderSalon = ({ className }: SliderSalonProps) => (
	<Swiper
		spaceBetween={16}
		navigation
		pagination={{ clickable: true }}
		loop={false}
		centeredSlides={false}
		watchOverflow
		modules={[Pagination, Navigation]}
		breakpoints={{
			0: {
				slidesPerView: 1,
			},
			640: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		}}
		className={className}
	>
		{images.map((src, index) => (
			<SwiperSlide key={src}>
				<img
					src={src}
					alt={`Фото салону ${index + 1}`}
					className={sliderImgSize}
					loading="lazy"
					width={1200}
					height={675}
					sizes="(max-width: 639px) 100vw, 50vw"
					decoding="async"
				/>
			</SwiperSlide>
		))}
	</Swiper>
);
