// @ts-check
import { defineConfig } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://astro.build/config
export default defineConfig({
  site: "https://pauchok-sk.github.io",
  base: ".",
  output: "static",

  compressHTML: false,
  build: {
    inlineStylesheets: `never`,
    assets: "assets",
  },
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "src/assets/scripts/*",
            dest: "assets/scripts/",
          },
        ],
      }),
    ],
    build: {
      minify: false,
    },
  },
});
