import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import process from "node:process";

export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "allow-vite-dev-css-with-csp",
      apply: "serve",
      transformIndexHtml(html) {
        return html.replace(
          "style-src 'self';",
          "style-src 'self' 'unsafe-inline';",
        );
      },
    },
  ],
});
