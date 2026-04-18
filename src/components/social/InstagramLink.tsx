import { InstagramIcon } from "@/components/icons";

type Props = {
	size?: number;
	username?: string;
	className?: string;
	label?: string;
};

export const InstagramLink = ({
	size,
	username = "dscarservice",
	className,
	label,
}: Props) => {
	return (
		<a
			href={`https://www.instagram.com/${username}`}
			target="_blank"
			rel="noopener noreferrer"
			className={`flex items-center text-lg gap-3 hover:text-accent transition-colors ${className || ""}`}
			aria-label="Instagram"
		>
			<InstagramIcon size={size} />

			{label && <span>{label}</span>}
		</a>
	);
};
