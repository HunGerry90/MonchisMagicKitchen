import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 * MonchisMagicKitchen — Rezeptsammlung
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "MonchisMagicKitchen",
    pageTitleSuffix: " · Rezeptsammlung",
    enableSPA: true,
    enablePopovers: false,
    analytics: null,
    locale: "de-DE",
    baseUrl: "HunGerry90.github.io/MonchisMagicKitchen",
    ignorePatterns: [
      "_System/Templates",
      ".obsidian",
      ".trash",
    ],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Playfair Display",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f6",
          lightgray: "#e8e5e0",
          gray: "#b0ab9e",
          darkgray: "#4a4540",
          dark: "#2b2520",
          secondary: "#5a7a3a",
          tertiary: "#8fad5a",
          highlight: "rgba(90, 122, 58, 0.12)",
          textHighlight: "#d4e6b588",
        },
        darkMode: {
          light: "#1a1c18",
          lightgray: "#2e322b",
          gray: "#545c4a",
          darkgray: "#cdd4c0",
          dark: "#e8ede0",
          secondary: "#8fad5a",
          tertiary: "#b5cc7a",
          highlight: "rgba(143, 173, 90, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config