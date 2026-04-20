import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FreeMode, Navigation, Pagination } from "swiper/modules";

type SliderSalonProps = {
	className?: string;
};

const sliderImgSize = "w-full aspect-[16/9] object-cover";

export const SliderSalon = ({ className }: SliderSalonProps) => (
	<Swiper
		spaceBetween={25}
		navigation={true}
		centeredSlides={true}
		loop={true}
		freeMode={false}
		pagination={{
			clickable: true,
		}}
		modules={[FreeMode, Pagination, Navigation]}
		breakpoints={{
			0: {
				slidesPerView: 1,
			},
			640: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 2.1,
			},
		}}
		className={className}
	>
		<SwiperSlide>
			<img
				src="/images/salon/salon1.webp"
				alt="Карта"
				className={sliderImgSize}
				loading="lazy"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<img
				src="/images/salon/salon2.webp"
				alt="Карта"
				className={sliderImgSize}
				loading="lazy"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<img
				src="/images/salon/salon3.webp"
				alt="Карта"
				className={sliderImgSize}
				loading="lazy"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<img
				src="/images/salon/salon4.webp"
				alt="Карта"
				className={sliderImgSize}
				loading="lazy"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<img
				src="/images/salon/salon5.webp"
				alt="Карта"
				className={sliderImgSize}
				loading="lazy"
			/>
		</SwiperSlide>
		<SwiperSlide>
			<img
				src="/images/salon/salon6.webp"
				alt="Карта"
				className={sliderImgSize}
				loading="lazy"
			/>
		</SwiperSlide>
	</Swiper>
);
