type GalleryCategory = "body" | "interior";

type GalleryItem = {
	id: string;
	thumb: string;
	src: string;
	alt: string;
};

type GalleryTab = {
	id: GalleryCategory;
	label: string;
	images: GalleryItem[];
};

const createGallery = (
	prefix: string,
	folder: string,
	count: number,
	alt: string,
): GalleryItem[] =>
	Array.from({ length: count }, (_, i) => {
		const index = i + 1;

		return {
			id: `${prefix}-${index}`,
			thumb: `/images/gallery/${folder}/${folder}${index}.jpeg`,
			src: `/images/gallery/${folder}/${folder}${index}.jpeg`,
			alt,
		};
	});

export const galleryCategories: GalleryTab[] = [
	{
		id: "body",
		label: "Кузов",
		images: createGallery("body", "cuzov", 82, "Детейлінг кузова авто"),
	},
	{
		id: "interior",
		label: "Салон",
		images: createGallery("interior", "salon", 13, "Хімчистка салону авто"),
	},
];
