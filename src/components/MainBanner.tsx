import { Link } from "@heroui/react";
import logoUrl from "@/assets/logo.svg";
import { siteConfig } from "@/config/site";

type MainBannerProps = {
	heightClassName?: string;
	className?: string;
};

export const MainBanner = ({
	heightClassName = "lg:h-screen",
	className = "",
}: MainBannerProps) => {
	return (
		<section
			className={`relative w-full overflow-hidden ${heightClassName} ${className}`}
		>
			<img
				src="/images/banners/main-bg.webp"
				alt={"dsadasd"}
				className="absolute inset-0 h-full w-full object-cover"
			/>

			<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />

			<div className="relative z-10 flex flex-col gap-3 h-full items-center justify-center px-4 text-center">
				<Link href="/">
					<img src={logoUrl} alt="Logo" className="w-[500px] h-auto" />
				</Link>
				<h1 className="text-1xl font-semibold uppercase tracking-wide text-white md:text-4xl">
					Догляд за авто доступний кожному
				</h1>
				<p className="text-base">
					Ми прагнемо завоювати вашу довіру, надаючи досвід та ціну, яку ви
					очікуєте.
				</p>
				<a
					href={`tel:${siteConfig.phone}`}
					className="btn-primary flex w-full md:w-[350px] items-center justify-center"
				>
					Зателефонувати
				</a>
			</div>
		</section>
	);
};
