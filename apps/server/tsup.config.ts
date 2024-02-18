import { defineConfig } from "tsup";

export default defineConfig({
   entry: ["src/devServer.ts", "src/server.ts"],
   splitting: false,
   sourcemap: true,
   clean: true,
});
