import { TelegramIcon } from "@/components/icons";

type Props = {
	size?: number;
	username?: string;
	className?: string;
};

export const TelegramLink = ({
	size,
	username = "D_C_service",
	className,
}: Props) => {
	return (
		<a
			href={`https://t.me/${username}`}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
			aria-label="Telegram"
		>
			<TelegramIcon size={size} />
		</a>
	);
};
