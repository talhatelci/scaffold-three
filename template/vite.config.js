import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
