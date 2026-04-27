import { Tabs } from "@heroui/react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { ActionsCards } from "@/components/ActionsCards";
import { Features } from "@/components/Features";
import H2 from "@/components/H2";
import { PageBanner } from "@/components/PageBanner";
import Section from "@/components/Section";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/config/page-seo";
import { serviceCategorie } from "@/config/service-data";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";

export default function ServicePage() {
	const [searchParams] = useSearchParams();

	const tabFromUrl = searchParams.get("tab");
	const serviceFromUrl = searchParams.get("service");

	const [activeTab, setActiveTab] = useState(
		tabFromUrl || serviceCategorie[0].id,
	);

	const serviceRefs = useRef<Record<string, HTMLDivElement | null>>({});

	useEffect(() => {
		if (tabFromUrl) {
			setActiveTab(tabFromUrl);
		}
	}, [tabFromUrl]);

	useEffect(() => {
		if (!serviceFromUrl) return;

		const timer = setTimeout(() => {
			serviceRefs.current[serviceFromUrl]?.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}, 300);

		return () => clearTimeout(timer);
	}, [serviceFromUrl]);

	const handleTabChange = (key: React.Key) => {
		setActiveTab(key as string);

		window.scrollTo({
			top: 300,
			behavior: "smooth",
		});
	};

	return (
		<DefaultLayout>
			<Seo {...pageSeo.service} />
			<PageBanner bannerKey="service" />

			<H2 className="text-center">Оберіть категорію</H2>

			<Tabs selectedKey={activeTab} onSelectionChange={handleTabChange}>
				<Tabs.ListContainer className="sticky top-19 z-10 2xl:top-26 container mx-auto">
					<Tabs.List
						className="rounded-none border-none bg-neutral-900 border"
						aria-label="Послуги"
					>
						{serviceCategorie.map((category, index) => (
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

				{serviceCategorie.map((category) => (
					<Tabs.Panel key={category.id} id={category.id}>
						{category.services.map((service, index) => (
							<div
								key={service.slug}
								ref={(el) => {
									serviceRefs.current[service.slug] = el;
								}}
								className={`${
									index % 2 !== 0 ? "bg-[#17181a]" : ""
								} scroll-mt-32`}
							>
								<div
									className={`container mx-auto py-10 md:py-25 grid grid-cols-1 items-stretch gap-4 xl:grid-cols-2 ${
										index % 2 !== 0 ? "xl:[&>*:first-child]:order-2" : ""
									}`}
								>
									<div className="overflow-hidden">
										<img
											src={service.image}
											alt={`${service.name} | Detaling Car Service`}
											className="h-[350px] w-full object-cover"
										/>
									</div>

									<div className="flex flex-col justify-center px-2 py-2 text-white md:px-6">
										<div className="mb-5">
											<p className="font-semibold text-2xl mb-5">
												{service.name}
											</p>
											<p>{service.text}</p>
										</div>

										<div className="h-px bg-blue-600 mb-5" />

										<div className="space-y-10">
											<div>
												<p className="mb-4">Вартість:</p>

												{service.optionPrice ? (
													service.optionPrice.map((opt) => (
														<p key={opt.name}>
															{opt.name}: {opt.price}
														</p>
													))
												) : (
													<p>{service.price}</p>
												)}
											</div>

											<a
												href={siteConfig.telegram}
												className="btn-primary flex w-full md:w-[345px] items-center justify-center"
												target="_blank"
												rel="noopener noreferrer"
											>
												Замовити
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</Tabs.Panel>
				))}
			</Tabs>

			<section className="bg-[#17181a] pb-24">
				<Section>
					<Features />
				</Section>
			</section>

			<Section className="mb-16">
				<h3 className="text-center text-2xl font-semibold mb-5">
					Спецпропозиції
				</h3>
				<p className="text-center mb-8">
					Наша команда представляє не лише найкращий сервіс, але та дбати про
					гаманці наших клієнтів
				</p>
				<ActionsCards />
			</Section>
		</DefaultLayout>
	);
}
