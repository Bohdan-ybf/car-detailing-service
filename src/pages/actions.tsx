import { ActionsCards } from "@/components/ActionsCards";
import { PageBanner } from "@/components/PageBanner";
import Section from "@/components/Section";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/config/page-seo";
import DefaultLayout from "@/layouts/default";

export default function ActionsPage() {
	return (
		<DefaultLayout>
			<Seo {...pageSeo.actions} />
			<PageBanner bannerKey="actions" />

			<Section className="mb-16">
				<h3 className="text-center text-lg mb-14">
					Наша команда представляє не лише найкращий сервіс, але та дбати про
					гаманці наших клієнтів
				</h3>
				<ActionsCards />
			</Section>
		</DefaultLayout>
	);
}
