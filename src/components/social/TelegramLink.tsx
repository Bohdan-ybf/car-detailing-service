import { TelegramIcon } from "@/components/Icons";

type Props = {
	size?: number;
	username?: string;
	className?: string;
	label?: string;
};

export const TelegramLink = ({
	size,
	username = "D_C_service",
	className,
	label,
}: Props) => {
	return (
		<a
			href={`https://t.me/${username}`}
			target="_blank"
			rel="noopener noreferrer"
			className={`flex items-center text-lg gap-3 hover:text-accent transition-colors ${className || ""}`}
			aria-label="Telegram"
		>
			<TelegramIcon size={size} />

			{label && <span>{label}</span>}
		</a>
	);
};
