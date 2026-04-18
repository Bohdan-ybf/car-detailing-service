import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

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
