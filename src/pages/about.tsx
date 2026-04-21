import logoUrl from "@/assets/logo.svg";
import H2 from "@/components/H2";
import Section from "@/components/Section";
import { Seo } from "@/components/Seo";
import { SliderSalon } from "@/components/SliderSalon";
import { pageSeo } from "@/config/page-seo";
import DefaultLayout from "@/layouts/default";

const stats = [
	{ value: "11 000+", label: "Хімчисток салонів авто" },
	{ value: "2 000+", label: "Відполірованих авто" },
	{ value: "500+", label: "Відреставрованих салонів авто" },
	{ value: "400+", label: "Керамічних покриттів на кузові авто" },
	{ value: "250+", label: "Захищених авто антигравійною плівкою" },
	{ value: "350+", label: "Затонованих авто" },
];

export default function AboutPage() {
	return (
		<DefaultLayout>
			<Seo {...pageSeo.about} />
			<section className="bg-white/15">
				<Section>
					<img src={logoUrl} alt="Logo" className="w-[790px] h-auto m-auto" />
					<p className="text-center mt-8">
						Detailing car service — детейлінгова студія, заснована у 2013 році,
						з великим досвідом у сфері професійного догляду за авто. Ми
						пропонуємо широкий спектр послуг для збереження та покращення
						зовнішнього вигляду вашого автомобіля, використовуючи сучасні
						технології та якісні матеріали.
					</p>
				</Section>
			</section>

			<SliderSalon className="m-16" />

			<section className="bg-white/15 ">
				<Section>
					<H2 className="text-center">Невеличка інформація про нас</H2>

					<div className="mt-16 grid grid-cols-1 gap-y-14 gap-x-10 sm:grid-cols-2 xl:grid-cols-3">
						{stats.map((item) => (
							<div key={item.label} className="text-center">
								<div className="text-[45px] leading-none font-light text-white/55 md:text-[65px]">
									{item.value}
								</div>

								<div className="mx-auto mt-4 h-px w-[250px] bg-blue-600" />

								<p className="mt-5 text-base  text-white">{item.label}</p>
							</div>
						))}
					</div>
				</Section>
			</section>
			<a
				href="https://maps.app.goo.gl/YwxqpNzysGaUvjmJ6"
				target="_blank"
				rel="noopener noreferrer"
				className="flex flex-col gap-3 max-h-[600px]  group items-end hover:text-accent transition-colors"
			>
				<img
					src="/images/map.jpg"
					alt="Карта"
					className="w-full max-h-[600px] object-cover"
				/>
			</a>
		</DefaultLayout>
	);
}
