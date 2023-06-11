import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://joalloce.github.io",
  base: "/test-gp-astro",
  integrations: [mdx(), sitemap()],
});
