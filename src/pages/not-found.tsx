import DefaultLayout from "@/layouts/default";
import { Seo } from "@/components/Seo";
import { Helmet } from "react-helmet-async";

export default function NotFoundPage() {
	return (
		<DefaultLayout>
			<Seo
				title="404 - Page Not Found"
				description="The page you are looking for does not exist."
				url="/404"
			/>

			<Helmet>
				<meta name="robots" content="noindex, nofollow" />
			</Helmet>

			<div className="flex flex-col items-center justify-center py-24 text-center">
				<h1 className="text-6xl font-bold">404</h1>

				<p className="mt-4 text-lg text-muted">Сторінку не знайдено</p>

				<a href="/" className="mt-6 text-accent hover:underline">
					Повернутися на головну
				</a>
			</div>
		</DefaultLayout>
	);
}
