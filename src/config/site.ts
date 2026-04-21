export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Detailing Car Service – Професійний детейлінг авто в Києві",
	description: "Detailing Car Service – Професійний детейлінг авто в Києві",
	phone: "+38 096 220 2020",
	adress: "м. Київ, вул. Олега Афанаса, 2",
	hours: {
		monToFri: "09:00-20:00",
		sat: "09:00-15:00",
		sun: "Вихідний",
	},
	navItems: [
		{
			label: "Головна",
			href: "/",
		},
		{
			label: "Послуги",
			href: "/service",
		},
		{
			label: "Прайси",
			href: "/price",
		},
		{
			label: "Галерея",
			href: "/gallery",
		},
		{
			label: "Про студію",
			href: "/about",
		},
		{
			label: "Спецпропозиції",
			href: "/actions",
		},
		{
			label: "Контакти",
			href: "/contact",
		},
	],
};
