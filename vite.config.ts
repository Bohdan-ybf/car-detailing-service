import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		tailwindcss(),
		svgr(),
		ViteImageOptimizer({
			includePublic: true,

			png: {
				quality: 80,
			},

			jpeg: {
				quality: 80,
			},

			webp: {
				quality: 80,
			},
		}),
	],
});
