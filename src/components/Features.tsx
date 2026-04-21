import {
	featuresIcon1,
	featuresIcon2,
	featuresIcon3,
} from "@/components/Icons";

type Features = {
	id: number;
	title: string;
	text: string;
	icon: React.ElementType;
};

const features: Features[] = [
	{
		id: 1,
		icon: featuresIcon1,
		title: "КОЖЕН КЛІЄНТ ОСОБЛИВИЙ",
		text: "Індивідуальний підхід до кожного клієнта",
	},
	{
		id: 2,
		icon: featuresIcon2,
		title: "ПРОФЕСІЙНЕ ОБЛАДНАННЯ",
		text: "Ми постійно інвестуємо у найкраще професійне обладнання",
	},
	{
		id: 3,
		icon: featuresIcon3,
		title: "ПРОФЕСІЙНІ СТАНДАРТИ",
		text: "Наші співробітники регулярно проходять атестацію та проходять курси підвищення кваліфікації",
	},
];

export function Features() {
	return (
		<div className="grid grid-cols-1 items-stretch gap-8 rounded-none md:gap-10 xl:grid-cols-[1.2fr_0.8fr]">
			<div className="overflow-hidden rounded-[24px]">
				<img
					src="https://www.dcservice.com.ua/wp-content/themes/detailingCSCustom/assets/images/xwhy-us.jpeg.pagespeed.ic.4y9Rlz9qSH.webp"
					alt="Полірування автомобіля"
					className="h-full min-h-[320px] w-full object-cover md:min-h-[520px]"
				/>
			</div>

			<div className="flex flex-col justify-center px-2 py-2 text-white md:px-6">
				<div className="mb-10 text-center">
					<h2 className="text-3xl font-normal md:text-5xl">Чому ми?</h2>
					<p className="mt-4 text-sm text-white/90 md:text-xl">
						Детейлінгова студія яка працює з 2013 року
					</p>
				</div>

				<div className="space-y-10">
					{features.map((item, index) => {
						const Icon = item.icon;

						return (
							<div key={item.id} className="text-center">
								<div className="flex justify-center">
									<Icon className="h-12 w-12 text-white" strokeWidth={1.5} />
								</div>

								<h3 className="mt-5 text-2xl font-medium uppercase md:text-[22px]">
									{item.title}
								</h3>

								<p className="mx-auto mt-3 max-w-[420px] text-base leading-7 text-white/90">
									{item.text}
								</p>

								{index !== features.length - 1 && (
									<div className="mx-auto mt-8 h-px w-full max-w-[420px] bg-blue-600" />
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
