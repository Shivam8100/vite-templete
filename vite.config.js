import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@pages": "/src/pages",
      "@atoms": "/src/components/atoms",
      "@modules": "/src/modules",
      "@elements": "/src/elements",
      "@molecules": "/src/components/molecules",
      "@redux": "/src/redux",
      "@utils": "/src/utils",
      "@constants": "/src/constants",
      "@services": "/src/services",
      "@organisms": "/src/organisms",
      "@helpers": "/src/helpers",
    },
  },
});
