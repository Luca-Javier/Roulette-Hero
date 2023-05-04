import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import alias from "@rollup/plugin-alias"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		alias({
			entries: [
				{
					find: "@assets",
					replacement: path.resolve(__dirname, "./src/assets"),
				},
				{
					find: "@components",
					replacement: path.resolve(__dirname, "./src/components"),
				},
				{
					find: "@reducers",
					replacement: path.resolve(__dirname, "./src/reducers"),
				},
				{
					find: "@helpers",
					replacement: path.resolve(__dirname, "./src/helpers"),
				},
				{ find: "@hooks", replacement: path.resolve(__dirname, "./src/hooks") },
				{
					find: "@config",
					replacement: path.resolve(__dirname, "./src/config"),
				},
			],
		}),
	],
})
