import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import AboutPage from "@/pages/about";
import ActionsPage from "@/pages/actions";
import ContactPage from "@/pages/contact";
import GalleryPage from "@/pages/gallery";
import IndexPage from "@/pages/index";
import NotFoundPage from "@/pages/not-found";
import PricePage from "@/pages/price";
import ServicePage from "@/pages/service";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname is intentionally used to scroll on route change
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

const AppRouter = () => (
	<>
		<ScrollToTop />

		<Routes>
			<Route element={<IndexPage />} path="/" />
			<Route element={<ServicePage />} path="/service" />
			<Route element={<PricePage />} path="/price" />
			<Route element={<GalleryPage />} path="/gallery" />
			<Route element={<AboutPage />} path="/about" />
			<Route element={<ActionsPage />} path="/actions" />
			<Route element={<ContactPage />} path="/contact" />
			<Route element={<NotFoundPage />} path="*" />
		</Routes>
	</>
);

export default AppRouter;
