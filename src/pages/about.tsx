import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/config/page-seo";

export default function AboutPage() {
	return (
		<DefaultLayout>
			<Seo {...pageSeo.about} />
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>About</h1>
				</div>
			</section>
		</DefaultLayout>
	);
}
