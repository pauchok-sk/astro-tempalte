// @ts-check
import { defineConfig } from "astro/config";
import transformImgPaths from "./plugins/transformImgPaths";
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
  liveReload(["src/assets/scripts/**/*.js"], { alwaysReload: false }),
  transformImgPaths(),
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
    format: 'file'
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins,
    build: {
      minify: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name) {
              const extType = assetInfo.name.split(".").at(1);
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType || "")) {
                return `assets/img/[name]-[hash][extname]`;
              }
            }
            return `assets/[name]-[hash][extname]`;
          },
        },
      },
    },
  },
});
