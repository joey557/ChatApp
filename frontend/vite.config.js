import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // To prevent a port conflict, set the port to 3001
  server: {
    port: 3001,
  },
});
