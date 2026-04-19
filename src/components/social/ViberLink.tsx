import { ViberIcon } from "@/components/Icons";

type Props = {
	size?: number;
	username?: string;
	className?: string;
	label?: string;
};

export const ViberLink = ({
	size,
	username = "380962202020",
	className,
	label,
}: Props) => {
	return (
		<a
			href={`viber://chat?number=${username}`}
			target="_blank"
			rel="noopener noreferrer"
			className={`flex items-center text-lg gap-3 hover:text-accent transition-colors ${className || ""}`}
			aria-label="Viber"
		>
			<ViberIcon size={size} />

			{label && <span>{label}</span>}
		</a>
	);
};
