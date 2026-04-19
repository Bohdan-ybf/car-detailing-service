import DefaultLayout from "@/layouts/default";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/config/page-seo";
import { PageBanner } from "@/components/PageBanner";
import { serviceCategorie } from "@/config/service-data";
import Section from "@/components/Section";
import { Tabs } from "@heroui/react";
import H2 from "@/components/H2";

export default function PricePage() {
	return (
		<DefaultLayout>
			<Seo {...pageSeo.price} />
			<PageBanner bannerKey="price" />
			<Section>
				<H2 className="text-center ">Оберіть категорію</H2>
				<Tabs>
					<Tabs.ListContainer>
						<Tabs.List
							className="rounded-none border-none   bg-neutral-900 border"
							aria-label="Послуги"
						>
							{serviceCategorie.map((category, index) => (
								<Tabs.Tab
									className="py-5 text-lg text-white
          data-[selected=true]:text-black"
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

					{serviceCategorie.map((category) => (
						<Tabs.Panel key={category.id} id={category.id}>
							<table className="w-full border-collapse">
								<thead>
									<tr>
										<th className="w-1/2 p-4  text-center font-semibold">
											Послуга
										</th>
										<th className="w-1/2 p-4 text-center font-semibold">
											Ціна
										</th>
									</tr>
								</thead>
								<tbody>
									{category.services.map((service) => (
										<tr key={service.name} className="border even:bg-white/7">
											<td className="p-4 w-1/2 border-r-1 text-center">
												{service.name}
											</td>
											<td className="p-4 w-1/2 text-center font-semibold whitespace-nowrap">
												{service.price}
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
