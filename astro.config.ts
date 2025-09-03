import { defineConfig } from "astro/config";
import unpluginFavicons from "@openscript/unplugin-favicons/vite";
import { C } from "./src/site.config";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import search from "./src/integrations/search";
import sitemap from "@astrojs/sitemap";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  prefetch: true,
  build: {
    format: "file",
  },
  i18n: {
    defaultLocale: C.DEFAULT_LOCALE,
    locales: Object.keys(C.LOCALES),
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
  vite: {
    plugins: [
      unpluginFavicons({
        logo: "res/icon.png",
        inject: true,
        favicons: {
          theme_color: C.SETTINGS.BROWSER.THEME_COLOR,
          icons: {
            android: true,
            appleIcon: true,
            favicons: true,
            windows: true,
            yandex: true,
            appleStartup: false,
          },
        },
      }),
      Icons({ compiler: "astro" }),
    ],
  },
  integrations: [search(), mdx(), sitemap({ i18n: { defaultLocale: C.DEFAULT_LOCALE, locales: C.LOCALES } })],
});
