type SectionProps = {
	children: React.ReactNode;
	className?: string;
};

export default function Section({ children, className = "" }: SectionProps) {
	return (
		<section className={`container m-auto py-20 ${className}`}>
			{children}
		</section>
	);
}
