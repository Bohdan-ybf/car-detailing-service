type SectionProps = {
	children: React.ReactNode;
	className?: string;
};

export default function Section({ children, className = "" }: SectionProps) {
	return (
		<section className={`container m-auto py-20 px-7 ${className}`}>
			{children}
		</section>
	);
}
