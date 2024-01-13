import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "monokai",
    },
  },
  integrations: [
    starlight({
      title: "Cinna UI",
      description: "The best UI library.",
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
