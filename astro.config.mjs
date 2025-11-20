// @ts-check
import { defineConfig } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";

const plugins = [
  viteStaticCopy({
    targets: [
      {
        src: "src/assets/scripts/*",
        dest: "assets/scripts/",
      },
    ],
  }),
];

// https://astro.build/config
export default defineConfig({
  site: "https://pauchok-sk.github.io",
  output: "static",

  compressHTML: false,
  build: {
    inlineStylesheets: `never`,
    assets: "assets",
    assetsPrefix: "./",
  },
  vite: {
    plugins,
    build: {
      minify: false,
    },
  },
});
