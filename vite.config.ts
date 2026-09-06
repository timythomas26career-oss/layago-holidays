import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

const isBuild = process.argv.includes("build");

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart(),
    isBuild && netlify(),
    viteReact(),
    tsConfigPaths(),
  ],
});
