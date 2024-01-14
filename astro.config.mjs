import fs from "node:fs";
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { ExpressiveCodeTheme } from "@astrojs/starlight/expressive-code";

import react from "@astrojs/react";

const jsonString = fs.readFileSync(
  new URL(`src/assets/tailwind-dark.json`, import.meta.url),
  "utf-8"
);
const myTheme = ExpressiveCodeTheme.fromJSONString(jsonString);

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Cinna UI",
      description: "The best UI library.",
      expressiveCode: {
        styleOverrides: { borderRadius: "0.5rem" },
        themes: [myTheme],
      },
      logo: {
        src: "./src/assets/sakura.png",
        replacesTitle: false,
      },
      head: [
        {
          tag: "link",
          attrs: {
            href: "./src/assets/sakura.png",
            rel: "icon",
            type: "image/png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "theme-color",
            content: "#F600E0",
          },
        },
      ],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Getting Started",
              link: "/getting-started/introduction/",
            },
          ],
        },
        {
          label: "Components",
          autogenerate: {
            directory: "components",
          },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
