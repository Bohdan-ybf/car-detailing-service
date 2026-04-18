import { Button } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";
import DefaultLayout from "@/layouts/default";
import { Seo } from "@/components/seo";
import { pageSeo } from "@/config/page-seo";
import { PageBanner } from "@/components/PageBanner";
import { TelegramLink } from "@/components/social/TelegramLink";
import { ViberLink } from "@/components/social/ViberLink";
import { InstagramLink } from "@/components/social/InstagramLink";

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
									href="tel:+380962202020"
									className=" text-lg block hover:text-accent transition-colors"
								>
									+38 096 220 20 20
								</a>
								<a
									href="https://maps.app.goo.gl/YwxqpNzysGaUvjmJ6"
									target="_blank"
									rel="noopener noreferrer"
									className=" text-lg block hover:text-accent transition-colors"
								>
									м. Київ, вул. Олега Афанаса, 2
								</a>
							</div>

							<div>
								<h3 className="text-lg font-semibold mb-3">Графік роботи</h3>

								<p className="text-lg">Пн-Пт: 09:00-20:00</p>
								<p className="text-lg">Сб: 09:00-15:00</p>
								<p className="text-lg">Нд: Вихідний</p>
							</div>

							<div className="border-t border-white/10" />

							<div className="space-y-4">
								<InstagramLink label="Instagram" />
								<TelegramLink label="Telegram" />
								<ViberLink label="Viber" />
							</div>

							<Button className="btn-primary w-full max-w-[245px]">
								Зателефонувати
							</Button>
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
