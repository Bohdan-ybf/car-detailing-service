import { Helmet } from "react-helmet-async";

type SeoProps = {
	title: string;
	description: string;
	url: string;
};

export const Seo = ({ title, description, url }: SeoProps) => {
	// const siteName = "Car Detailing Service";
	// const fullTitle = `${title} | ${siteName}`;
	const fullTitle = `${title}`;

	return (
		<Helmet>
			<title>{fullTitle}</title>

			<meta name="description" content={description} />

			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />

			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />

			<meta property="og:image" content="/logo.svg" />
			<meta name="twitter:card" content="summary_large_image" />
		</Helmet>
	);
};
