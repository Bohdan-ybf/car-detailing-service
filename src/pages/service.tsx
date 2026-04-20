import { PageBanner } from "@/components/PageBanner";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/config/page-seo";
import DefaultLayout from "@/layouts/default";

export default function ServicePage() {
	return (
		<DefaultLayout>
			<Seo {...pageSeo.service} />
			<PageBanner bannerKey="service" />
		</DefaultLayout>
	);
}
