import { pageBanners, type PageBannerKey } from "@/config/pageBanners";

type PageBannerProps = {
	bannerKey: PageBannerKey;
	heightClassName?: string;
	className?: string;
};

export const PageBanner = ({
	bannerKey,
	heightClassName = "h-[220px] md:h-[280px] lg:h-[365px]",
	className = "",
}: PageBannerProps) => {
	const banner = pageBanners[bannerKey];

	if (!banner) return null;

	return (
		<section
			className={`relative w-full overflow-hidden ${heightClassName} ${className}`}
		>
			<img
				src={banner.image}
				alt={banner.alt}
				className="absolute inset-0 h-full w-full object-cover"
			/>

			<div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black" />

			<div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
				<h1 className="text-3xl font-semibold uppercase tracking-wide text-white md:text-5xl">
					{banner.title}
				</h1>
			</div>
		</section>
	);
};
