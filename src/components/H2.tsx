type H2 = {
	children: React.ReactNode;
	className?: string;
};

export default function H2({ children, className = "" }: H2) {
	return <h2 className={`text-3xl uppercase pb-9 ${className}`}>{children}</h2>;
}
