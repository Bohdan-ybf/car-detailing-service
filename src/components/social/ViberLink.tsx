import { ViberIcon } from "@/components/icons";

type Props = {
	size?: number;
	username?: string;
	className?: string;
};

export const ViberLink = ({
	size,
	username = "380962202020",
	className,
}: Props) => {
	return (
		<a
			href={`viber://chat?number=${username}`}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
			aria-label="Viber"
		>
			<ViberIcon size={size} />
		</a>
	);
};
