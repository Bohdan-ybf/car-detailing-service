import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Seo } from "@/components/seo";
import { pageSeo } from "@/config/page-seo";
import { PageBanner } from "@/components/PageBanner";

export default function PricingPage() {
	return (
		<DefaultLayout>
			<Seo {...pageSeo.pricing} />
			<PageBanner bannerKey="pricing" />
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Pricing</h1>
				</div>
			</section>
		</DefaultLayout>
	);
}
