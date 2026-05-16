import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Static SPA build for cPanel / Apache shared hosting.
//
// Deployment to a subfolder:
//   Set VITE_BASE_PATH to your subfolder (with leading + trailing slash),
//   e.g. VITE_BASE_PATH=/news/ then run `npm run build`.
//   Upload everything inside `dist/` into that folder on cPanel.
//   The included public/.htaccess handles SPA refresh / deep links.
//
// Deployment to a domain root:
//   Leave VITE_BASE_PATH unset (defaults to "/").
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_BASE_PATH || "/";

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: "::",
      port: 8080,
    },
    build: {
      outDir: "dist",
      sourcemap: false,
    },
  };
});
