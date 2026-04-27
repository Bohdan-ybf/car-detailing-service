import { ActionsCards } from "@/components/ActionsCards";
import { Features } from "@/components/Features";
import { MainBanner } from "@/components/MainBanner";
import Section from "@/components/Section";
import { Seo } from "@/components/Seo";
import { ServicesSlider } from "@/components/ServicesSlider";
import { SliderSalon } from "@/components/SliderSalon";
import { pageSeo } from "@/config/page-seo";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<Seo {...pageSeo.home} />
			<MainBanner />

			<ServicesSlider />

			<section className="bg-[#17181a] pb-24">
				<Section>
					<Features />
				</Section>

				<SliderSalon />
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
