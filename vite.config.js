import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import alias from "@rollup/plugin-alias"
import path from "path"

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
					replacement: path.resolve(__dirname, "./src/shared/components"),
				},
				{
					find: "@reducers",
					replacement: path.resolve(__dirname, "./src/state/reducers"),
				},
				{
					find: "@functions",
					replacement: path.resolve(__dirname, "./src/shared/utils/functions"),
				},
				{
					find: "@hooks",
					replacement: path.resolve(__dirname, "./src/shared/utils/hooks"),
				},
				{
					find: "@constants",
					replacement: path.resolve(__dirname, "./src/shared/constants"),
				},
				{
					find: "@i18n",
					replacement: path.resolve(__dirname, "./src/translates/i18n.js"),
				},
				{
					find: "@contexts",
					replacement: path.resolve(__dirname, "./src/state/contexts"),
				},
				{
					find: "@types",
					replacement: path.resolve(__dirname, "./src/shared/types"),
				},
			],
		}),
	],
	css: {
		modules: {
			localsConvention: "camelCaseOnly",
		},
	},
	server: {
		host: true,
	},
})
