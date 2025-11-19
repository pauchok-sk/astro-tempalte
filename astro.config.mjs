// @ts-check
import { defineConfig } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://astro.build/config
export default defineConfig({
  site: 'https://pauchok-sk.github.io',
  base: "/",

  compressHTML: false,
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
