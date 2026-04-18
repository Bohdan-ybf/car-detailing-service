export type PageBannerKey =
	| "pricing"
	| "service"
	| "contact"
	| "actions"
	| "gallery"
	| "actions";

export type PageBannerItem = {
	title: string;
	image: string;
	alt: string;
};

export const pageBanners: Record<PageBannerKey, PageBannerItem> = {
	pricing: {
		title: "ПРАЙСИ",
		image: "/images/banners/gallery-bg.webp",
		alt: "Прайси",
	},
	service: {
		title: "ПОСЛУГИ",
		image: "/images/banners/car-body-bg.webp",
		alt: "Послуги",
	},
	contact: {
		title: "КОНТАКТИ",
		image: "/images/banners/contact-bg.webp",
		alt: "Контакти",
	},
	actions: {
		title: "АКЦІЇ",
		image: "/images/banners/action-bg.webp",
		alt: "Акції",
	},
	gallery: {
		title: "ГАЛЕРЕЯ",
		image: "/images/banners/gall-bg.webp",
		alt: "Галерея",
	},
};
