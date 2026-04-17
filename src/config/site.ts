export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Vite + HeroUI",
	description: "Make beautiful websites regardless of your design experience.",
	phone: "+38 096 220 2020",
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
			href: "/pricing",
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
	links: {
		github: "https://github.com/heroui-inc/heroui",
		twitter: "https://twitter.com/hero_ui",
		docs: "https://heroui.com",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev",
	},
};
