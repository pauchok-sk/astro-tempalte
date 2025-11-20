// @ts-check
import { defineConfig } from "astro/config";
import liveReload from "vite-plugin-live-reload";
import { viteStaticCopy } from "vite-plugin-static-copy";

const plugins = [
  viteStaticCopy({
    targets: [
      {
        src: "src/assets/scripts/**/*",
        dest: "assets/scripts/",
      },
    ],
  }),
  liveReload(["src/assets/scripts/**/*.js"]),
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
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins,
    build: {
      minify: false,
    },
  },
});
