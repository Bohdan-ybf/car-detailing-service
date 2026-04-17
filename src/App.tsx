import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ServicePage from "@/pages/service";
import PricingPage from "@/pages/pricing";
import GalleryPage from "@/pages/gallery";
import AboutPage from "@/pages/about";
import ActionsPage from "@/pages/actions";
import ContactPage from "@/pages/contact";
import NotFoundPage from "@/pages/not-found";

function App() {
	return (
		<Routes>
			<Route element={<IndexPage />} path="/" />
			<Route element={<ServicePage />} path="/service" />
			<Route element={<PricingPage />} path="/pricing" />
			<Route element={<GalleryPage />} path="/gallery" />
			<Route element={<AboutPage />} path="/about" />
			<Route element={<ActionsPage />} path="/actions" />
			<Route element={<ContactPage />} path="/contact" />
			<Route element={<NotFoundPage />} path="*" />
		</Routes>
	);
}

export default App;
