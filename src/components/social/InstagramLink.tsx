import { InstagramIcon } from "@/components/icons";

type Props = {
	size?: number;
	username?: string;
	className?: string;
};

export const InstagramLink = ({
	size,
	username = "dscarservice",
	className,
}: Props) => {
	return (
		<a
			href={`https://www.instagram.com/${username}`}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
			aria-label="Instagram"
		>
			<InstagramIcon size={size} />
		</a>
	);
};
