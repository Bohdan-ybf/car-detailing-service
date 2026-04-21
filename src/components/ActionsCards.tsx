"use client";

import { Button, Modal } from "@heroui/react";
import { siteConfig } from "@/config/site";

type ActionCard = {
	id: number;
	title: string;
	image: string;
	shortText: string;
	fullText: string;
};

const actions: ActionCard[] = [
	{
		id: 1,
		title: "До кожної хімчистки салону авто, мийка кузова в подарунок",
		image:
			"https://www.dcservice.com.ua/wp-content/themes/detailingCSCustom/assets/images/xserv-14.jpg.pagespeed.ic.kLLAesnRqX.webp",
		shortText: "До кожної хімчистки салону авто, мийка кузова в подарунок",
		fullText: `Комплексний догляд для вашого авто — за ціною однієї послуги!

Замовляйте хімчистку салону та отримуйте мийку автомобіля в подарунок!

Хімчистка — це не лише чистота, а й комфорт у кожній поїздці. А додаткова мийка кузова зробить ваш автомобіль бездоганним ззовні. Ми подбаємо про кожен сантиметр — всередині й зовні — щоб ваш автомобіль виглядав як новий.

Наші фахівці використовують професійне обладнання та якісні засоби для досягнення ідеального результату.

Скористайтеся акційною пропозицією вже сьогодні!`,
	},
	{
		id: 2,
		title: "Кожній хімчисті авто, озонація салону в подарунок",
		image:
			"https://www.dcservice.com.ua/wp-content/themes/detailingCSCustom/assets/images/xserv-10.jpg.pagespeed.ic.RcW3ZbqxpH.webp",
		shortText: "Кожній хімчистці авто, озонація салону в подарунок",
		fullText: `Зробіть ваше авто ще більш комфортним і приємним для поїздок! При замовленні послуги хімчистки автомобіля отримуйте озонацію салону в подарунок.

Озонація – це ефективний спосіб позбавитися від неприємних запахів, бактерій та алергенів у салоні вашого автомобіля. Під час процедури ми використовуємо озон, який дозволяє освіжити повітря і зробити його чистим та безпечним для вас і ваших пасажирів.

Наша команда професіоналів гарантує якісну хімчистку, яка поверне вашому автомобілю «новий вигляд», а безкоштовна озонація зробить ваш салон комфортним і свіжим.

Не пропустіть можливість покращити стан вашого авто! Зв'яжіться з нами, щоб замовити хімчистку та озонацію вже сьогодні.

Чекаємо вас у нашому сервісі!`,
	},
	{
		id: 3,
		title: "До кожного полірування авто твердий віск у подарунок",
		image:
			"https://www.dcservice.com.ua/wp-content/themes/detailingCSCustom/assets/images/xserv-4.jpeg.pagespeed.ic.M1k4UM7PTi.webp",
		shortText: "До кожного полірування авто твердий віск у подарунок",
		fullText: `Після осінніх дощів і зимових морозів ваше авто потребує особливого догляду. Замовте послугу полірування автомобіля в нашому сервісі та отримайте твердий віск у подарунок!

Завдяки твердому воску ваше авто буде захищене від шкідливих впливів навколишнього середовища. Він не лише надає блиск, але й створює міцний захисний шар, що запобігає появі подряпин, окислення і забруднень. Ваш автомобіль виглядатиме як новий і буде надійно захищений.

Наша команда професіоналів виконає полірування на високому рівні, а безкоштовний віск стане прекрасним доповненням до вашого догляду за автомобілем.

Не пропустіть цю чудову можливість! Записуйтеся на полірування вже сьогодні і надайте своєму автомобілю неперевершений вигляд!

Чекаємо вас у нашому сервісі!`,
	},
	{
		id: 4,
		title:
			"До кожної послуги `керамічне покриття`, озонація та антидощ на скло у подарунок",
		image:
			"https://www.dcservice.com.ua/wp-content/themes/detailingCSCustom/assets/images/xserv-8.jpg.pagespeed.ic.2llisv4hmh.webp",
		shortText:
			'До кожної послуги "керамічне покриття", озонація та антидощ на скло у подарунок',
		fullText: `Подаруйте своєму автомобілю бездоганний вигляд та надійний захист! Замовляючи послугу керамічного покриття, отримайте озонацію та антидощ на скло в подарунок!

Керамічне покриття забезпечує тривалий захист лакофарбового покриття вашого автомобіля від подряпин, ультрафіолетового випромінювання та шкідливих впливів навколишнього середовища. Це покриття не лише підкреслить насиченість кольору, але й значно спростить процес догляду за вашим авто.

А щоб ваш салон був чистим і свіжим, ми включаємо озонацію – ефективний спосіб очищення повітря та усунення неприємних запахів.

Крім того, ви отримуєте антидощ на скло, який покращує видимість у дощову погоду, відштовхуючи воду і бруд з поверхні скла.

Не доводьте до того, щоб ваш автомобіль виглядав неакуратно! Записуйтеся на керамічне покриття вже сьогодні і насолоджуйтеся всіма перевагами, які отримуєте в подарунок!

Чекаємо вас у нашому сервісі!`,
	},
];

export function ActionsCards() {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
			{actions.map((item) => (
				<Modal key={item.id}>
					<Button className="h-auto w-full rounded-xl bg-transparent p-0 hover:!opacity-100">
						<article className="overflow-hidden rounded-xl bg-neutral-800 text-left shadow-lg transition-transform duration-300 hover:-translate-y-1">
							<div className="relative  w-full overflow-hidden">
								<img
									src={item.image}
									alt={item.title}
									className="h-[200px] w-full object-cover"
								/>

								<div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-xl text-white shadow-md">
									🎁
								</div>
							</div>

							<div className="w-full px-4 py-4">
								<p className=" leading-5 text-white whitespace-normal break-words">
									{item.shortText}
								</p>
							</div>
						</article>
					</Button>

					<Modal.Backdrop className="bg-black/50 backdrop-blur-xs">
						<Modal.Container>
							<Modal.Dialog className="mx-4 w-full max-w-[650px] max-h-[80vh] rounded-2xl bg-neutral-800 p-0">
								<Modal.CloseTrigger />

								<div className="flex max-h-[90vh] flex-col overflow-hidden rounded-2xl">
									<div className="h-[180px] sm:h-[220px] md:h-[240px] w-full flex-shrink-0">
										<img
											src={item.image}
											alt={item.title}
											className="h-full w-full object-cover"
										/>
									</div>

									<div className="flex min-h-0 flex-1 flex-col p-4 sm:p-6">
										<Modal.Header className="mb-4 p-0 flex-shrink-0">
											<Modal.Heading className="text-xl sm:text-2xl font-semibold text-white">
												{item.title}
											</Modal.Heading>
										</Modal.Header>

										<Modal.Body className="min-h-0 flex-1 overflow-y-auto p-0 pr-2">
											<p className="text-sm sm:text-base leading-6 text-white whitespace-pre-line">
												{item.fullText}
											</p>
										</Modal.Body>

										<Modal.Footer className="mt-4 flex-shrink-0 p-0">
											<a
												href={`tel:${siteConfig.phone}`}
												className="btn-primary flex w-full justify-center"
											>
												Зателефонувати
											</a>
										</Modal.Footer>
									</div>
								</div>
							</Modal.Dialog>
						</Modal.Container>
					</Modal.Backdrop>
				</Modal>
			))}
		</div>
	);
}
