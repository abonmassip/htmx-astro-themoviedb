import { defineConfig } from "astro/config";
import htmx from "astro-htmx";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [htmx(), tailwind(), icon()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
