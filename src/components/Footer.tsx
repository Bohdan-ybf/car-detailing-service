import { Link } from "@heroui/react";
import { NavMenu } from "@/components/nav-menu";
import { InstagramLink } from "./social/InstagramLink";
import { ViberLink } from "./social/ViberLink";
import { TelegramLink } from "./social/TelegramLink";
import { siteConfig } from "@/config/site";
import logoUrl from "@/assets/logo.svg";

type FooterProps = {
	className?: string;
};

export const Footer = ({ className }: FooterProps) => (
	<footer
		className={`relative overflow-hidden bg-[#0b0b0b] text-white ${className ?? ""}`}
		style={{
			backgroundImage: "url('/images/footer-bg.jpg')",
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
		}}
	>
		<div className="absolute inset-0 bg-black/30" />

		<div className="relative container m-auto  p-6 xl:py-8">
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				<div className="max-w-sm">
					<div className="mb-3">
						<Link href="/" className="!block">
							<img src={logoUrl} alt="Logo" className="w-[200px] h-auto" />
						</Link>
					</div>
					<p className="text-base">
						Detailing car service — це спеціалізований сервіс, що пропонує
						комплексний догляд за автомобілями, спрямований на відновлення їх
						естетичного вигляду і забезпечення довговічності.
					</p>
				</div>

				<div>
					<h3 className="mb-5  text-lg">Контакти</h3>
					<div className="space-y-1 text-lg text-white/95">
						<p>{siteConfig.adress}</p>

						<a
							href={`tel:${siteConfig.phone}`}
							className=" text-lg block hover:text-accent transition-colors"
						>
							{siteConfig.phone}
						</a>
					</div>
					<div className="mt-8">
						<h4 className="mb-4  text-lg">Графік роботи:</h4>
						<div className="space-y-1 text-lg text-white/95">
							<p>Пн-Пт: {siteConfig.hours.monToFri}</p>
							<p>Сб: {siteConfig.hours.sat}</p>
							<p>Нд: {siteConfig.hours.sun}</p>
						</div>
					</div>
				</div>

				<div>
					<h3 className="mb-5 text-lg ">Посилання</h3>
					<NavMenu className="gap-1 flex flex-col" />
				</div>

				<div>
					<h3 className="mb-5 text-lg ">Ми у соцмережах</h3>
					<div className="gap-3 flex">
						<InstagramLink
							size={25}
							className="border border-white/30 p-1.5 rounded-md"
						/>
						<TelegramLink
							size={25}
							className="border border-white/30 p-1.5 rounded-md"
						/>
						<ViberLink
							size={25}
							className="border border-white/30 p-1.5 rounded-md"
						/>
					</div>
				</div>
			</div>

			<div className="my-10 h-px w-full bg-white/10" />

			<div className="flex flex-col md:flex-row items-center justify-between gap-4">
				<div className="text-base text-white/90">
					Detailing car service © {new Date().getFullYear()}. Всі права
					захищені.
				</div>
				<div className="text-base text-white/90 text-right">
					Developed by{" "}
					<a
						href="https://github.com/Bohdan-ybf/car-detailing-service"
						className="text-accent"
						target="_blank"
					>
						YBF
					</a>
				</div>
			</div>
		</div>
	</footer>
);
