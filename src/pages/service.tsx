import DefaultLayout from "@/layouts/default";
import { Seo } from "@/components/seo";
import { pageSeo } from "@/config/page-seo";
import { PageBanner } from "@/components/PageBanner";

export default function ServicePage() {
	return (
		<DefaultLayout>
			<Seo {...pageSeo.service} />
			<PageBanner bannerKey="service" />
		</DefaultLayout>
	);
}
