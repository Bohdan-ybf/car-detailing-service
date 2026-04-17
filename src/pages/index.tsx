import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Seo } from "@/components/seo";
import { pageSeo } from "@/config/page-seo";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<Seo {...pageSeo.home} />
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Home</h1>
				</div>
			</section>
		</DefaultLayout>
	);
}
