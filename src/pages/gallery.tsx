import { Tabs } from "@heroui/react";
import type { LightGallery as ILightGallery } from "lightgallery/lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import { useMemo, useRef, useState } from "react";

import H2 from "@/components/H2";
import { PageBanner } from "@/components/PageBanner";
import Section from "@/components/Section";
import { Seo } from "@/components/Seo";
import { galleryCategories } from "@/config/gallery-data";
import { pageSeo } from "@/config/page-seo";
import DefaultLayout from "@/layouts/default";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

export default function GalleryPage() {
	const [activeTab, setActiveTab] = useState(galleryCategories[0].id);
	const lightboxRef = useRef<ILightGallery | null>(null);

	const activeCategory = useMemo(
		() =>
			galleryCategories.find((category) => category.id === activeTab) ??
			galleryCategories[0],
		[activeTab],
	);

	const dynamicEl = useMemo(
		() =>
			activeCategory.images.map((image) => ({
				src: image.src,
				thumb: image.thumb,
				subHtml: `<h4>${image.alt}</h4>`,
			})),
		[activeCategory],
	);

	const openGallery = (index: number) => {
		lightboxRef.current?.openGallery(index);
	};
	const handleTabChange = (key: React.Key) => {
		setActiveTab(key as typeof activeTab);

		window.scrollTo({
			top: 300,
			behavior: "smooth",
		});
	};

	return (
		<DefaultLayout>
			<Seo {...pageSeo.gallery} />
			<PageBanner bannerKey="gallery" />

			<Section>
				<H2 className="text-center">Оберіть категорію</H2>

				<Tabs selectedKey={activeTab} onSelectionChange={handleTabChange}>
					<Tabs.ListContainer className="sticky top-19 z-10 2xl:top-26">
						<Tabs.List
							className="rounded-none border-none bg-neutral-900"
							aria-label="Галерея"
						>
							{galleryCategories.map((category, index) => (
								<Tabs.Tab
									key={category.id}
									id={category.id}
									className="py-5 text-lg text-white data-[selected=true]:text-black"
								>
									{category.label}
									{index !== 0 && <Tabs.Separator />}
									<Tabs.Indicator className="!rounded-none" />
								</Tabs.Tab>
							))}
						</Tabs.List>
					</Tabs.ListContainer>

					{galleryCategories.map((category) => (
						<Tabs.Panel key={category.id} id={category.id}>
							{activeTab === category.id && (
								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
									{category.images.map((image, index) => (
										<button
											key={image.id}
											type="button"
											onClick={() => openGallery(index)}
											className="overflow-hidden"
										>
											<img
												src={image.thumb}
												alt={image.alt}
												loading="lazy"
												decoding="async"
												width={600}
												height={400}
												className="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-[1.02]"
											/>
										</button>
									))}
								</div>
							)}
						</Tabs.Panel>
					))}
				</Tabs>

				<div className="hidden">
					<LightGallery
						dynamic
						dynamicEl={dynamicEl}
						plugins={[lgZoom, lgThumbnail]}
						download={false}
						onInit={(detail) => {
							lightboxRef.current = detail.instance;
						}}
					/>
				</div>
			</Section>
		</DefaultLayout>
	);
}
