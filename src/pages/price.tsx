import { Tabs } from "@heroui/react";
import { useState } from "react";
import H2 from "@/components/H2";
import { PageBanner } from "@/components/PageBanner";
import Section from "@/components/Section";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/config/page-seo";
import { priceCategorie } from "@/config/price-data";
import DefaultLayout from "@/layouts/default";

export default function PricePage() {
	const [activeTab, setActiveTab] = useState(priceCategorie[0].id);

	const handleTabChange = (key: React.Key) => {
		setActiveTab(key as typeof activeTab);

		window.scrollTo({
			top: 300,
			behavior: "smooth",
		});
	};

	return (
		<DefaultLayout>
			<Seo {...pageSeo.price} />
			<PageBanner bannerKey="price" />
			<Section>
				<H2 className="text-center">Оберіть категорію</H2>

				<Tabs selectedKey={activeTab} onSelectionChange={handleTabChange}>
					<Tabs.ListContainer className="sticky top-26 z-10">
						<Tabs.List
							className="rounded-none border-none bg-neutral-900 border"
							aria-label="Послуги"
						>
							{priceCategorie.map((category, index) => (
								<Tabs.Tab
									className="py-5 text-lg text-white data-[selected=true]:text-black"
									key={category.id}
									id={category.id}
								>
									{category.label}
									{index !== 0 && <Tabs.Separator />}
									<Tabs.Indicator className="!rounded-none !text-2xl" />
								</Tabs.Tab>
							))}
						</Tabs.List>
					</Tabs.ListContainer>

					{priceCategorie.map((category) => (
						<Tabs.Panel key={category.id} id={category.id}>
							<table className="w-full border-collapse">
								<thead>
									<tr>
										<th className="w-1/2 p-4 text-center font-semibold">
											Послуга
										</th>
										<th className="w-1/2 p-4 text-center font-semibold">
											Ціна
										</th>
									</tr>
								</thead>
								<tbody>
									{category.prices.map((price) => (
										<tr key={price.name} className="border even:bg-white/7">
											<td className="p-4 w-1/2 border-r-1 text-center">
												{price.name}
											</td>
											<td className="p-4 w-1/2 text-center font-semibold leading-6 text-white whitespace-pre-line">
												{price.price}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</Tabs.Panel>
					))}
				</Tabs>
			</Section>
		</DefaultLayout>
	);
}
