import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://zbauman.github.io", // <- replace with your GitHub repo name (trailing slash)
  plugins: [react()]
});
