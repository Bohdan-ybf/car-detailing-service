import { ActionsCards } from "@/components/ActionsCards";
import { Features } from "@/components/Features";

import { title } from "@/components/primitives";
import Section from "@/components/Section";
import { Seo } from "@/components/Seo";
import { SliderSalon } from "@/components/SliderSalon";
import { pageSeo } from "@/config/page-seo";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<Seo {...pageSeo.home} />
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Home</h1>
				</div>
			</section>

			<section className="bg-white/15 pb-24">
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
