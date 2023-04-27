import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dir, "src/index.ts"),
      name: "StreamVerseFP",
      fileName: "streamverse-fp",
    },
  },
  plugins: [dts()],
});
