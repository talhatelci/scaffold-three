import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  base: "./",
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  plugins: [glsl()],
});

