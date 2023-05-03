import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import alias from "@rollup/plugin-alias"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        { find: "@assets", replacement: "./src/assets" },
        { find: "@components", replacement: "./src/components" },
        { find: "@reducers", replacement: "./src/reducers" },
        { find: "@helpers", replacement: "./src/helpers" },
        { find: "@hooks", replacement: "./src/hooks" },
        { find: "@config", replacement: "./src/config" },
      ],
    }),
  ],
})
