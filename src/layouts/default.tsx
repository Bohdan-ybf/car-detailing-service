import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col min-h-screen ">
			<Navbar />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
}
