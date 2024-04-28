import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/route": {
                target: "http://localhost:774",
                secure: false,
            },
        },
    },
    plugins: [react()],
});
