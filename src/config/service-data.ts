export type ServiceItem = {
	name: string;
	price: string;
};

export type ServiceCategory = {
	id: string;
	label: string;
	services: ServiceItem[];
};

export const serviceCategorie: ServiceCategory[] = [
	{
		id: "salon",
		label: "Салон",
		services: [
			{ name: "Хімчистка салону", price: "2500 грн" },
			{ name: "Мийка сидінь", price: "800 грн" },
			{ name: "Очищення пластику", price: "600 грн" },
			{ name: "Очищення пластику", price: "600 грн" },
			{ name: "Хімчистка салону", price: "2500 грн" },
			{ name: "Мийка сидінь", price: "800 грн" },
			{ name: "Очищення пластику", price: "600 грн" },
			{ name: "Очищення пластику", price: "600 грн" },
		],
	},
	{
		id: "kuzov",
		label: "Кузов",
		services: [
			{ name: "Полірування кузова", price: "3000 грн" },
			{ name: "Нанесення воску", price: "1200 грн" },
			{ name: "Мийка кузова", price: "500 грн" },
			{ name: "Полірування кузова", price: "3000 грн" },
			{ name: "Нанесення воску", price: "1200 грн" },
			{ name: "Мийка кузова", price: "500 грн" },
		],
	},
];
