import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error('Root element with id "root" not found');
}

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<HelmetProvider>
				<Provider>
					<App />
				</Provider>
			</HelmetProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
