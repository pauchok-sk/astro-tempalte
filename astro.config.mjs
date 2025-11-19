// @ts-check
import { defineConfig } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  site: "https://pauchok-sk.github.io",
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "src/scripts/*",
            dest: "scripts/",
          },
        ],
      }),
    ],
    build: {
      minify: false,
    },
  },
});
