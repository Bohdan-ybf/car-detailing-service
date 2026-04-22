import { ArrowRight } from "@gravity-ui/icons";
import { PageBanner } from "@/components/PageBanner";
import { Seo } from "@/components/Seo";
import { InstagramLink } from "@/components/social/InstagramLink";
import { TelegramLink } from "@/components/social/TelegramLink";
import { ViberLink } from "@/components/social/ViberLink";
import { pageSeo } from "@/config/page-seo";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";

export default function ContactPage() {
	return (
		<DefaultLayout>
			<Seo {...pageSeo.contact} />
			<PageBanner bannerKey="contact" />

			<section className="py-20">
				<div className="container mx-auto px-6">
					<div className="grid lg:grid-cols-[30%_70%] gap-10 items-start">
						<div className="space-y-6">
							<div>
								<h3 className="text-lg font-semibold mb-3">Контакти</h3>
								<a
									href={`tel:${siteConfig.phone}`}
									className=" text-lg block hover:text-accent transition-colors"
								>
									{siteConfig.phone}
								</a>
								<a
									href="https://maps.app.goo.gl/YwxqpNzysGaUvjmJ6"
									target="_blank"
									rel="noopener noreferrer"
									className=" text-lg block hover:text-accent transition-colors"
								>
									{siteConfig.adress}
								</a>
							</div>

							<div>
								<h3 className="text-lg font-semibold mb-3">Графік роботи</h3>

								<p className="text-lg">Пн-Пт: {siteConfig.hours.monToFri}</p>
								<p className="text-lg">Сб: {siteConfig.hours.sat}</p>
								<p className="text-lg">Нд: {siteConfig.hours.sun}</p>
							</div>

							<div className="border-t border-white/10" />

							<div className="space-y-4">
								<InstagramLink label="Instagram" />
								<TelegramLink label="Telegram" />
								<ViberLink label="Viber" />
							</div>

							<a
								href={`tel:${siteConfig.phone}`}
								className="btn-primary flex w-full md:w-[245px] items-center justify-center"
							>
								Зателефонувати
							</a>
						</div>

						<a
							href="https://maps.app.goo.gl/YwxqpNzysGaUvjmJ6"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col gap-3 h-full group items-end hover:text-accent transition-colors"
						>
							<span className="flex items-center gap-2 pr-1">
								Прокласти маршрут
								<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
							</span>

							<img
								src="/images/map.jpg"
								alt="Карта"
								className="w-full h-full object-cover"
							/>
						</a>
					</div>
				</div>
			</section>
		</DefaultLayout>
	);
}
