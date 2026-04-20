import { PageBanner } from "@/components/PageBanner";
import { title } from "@/components/primitives";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/config/page-seo";
import DefaultLayout from "@/layouts/default";

export default function ActionsPage() {
	return (
		<DefaultLayout>
			<Seo {...pageSeo.actions} />
			<PageBanner bannerKey="actions" />
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Actions</h1>
				</div>
			</section>
		</DefaultLayout>
	);
}
