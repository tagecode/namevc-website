import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "https://vuejs.org/images/logo.png",
    navbar: [],
    sidebar: [
      {
        text: "简介",
        link: "/guide/README.md",
        icon: "lightbulb",
      },
      { text: "主要功能",
        link: "/main/README.md",
        icon: "config" 
      },
      {
        text: "常见问题",
        link: "/faq/README.md",
        icon: "circle-question"
      },
    ],
  }),

  lang: "zh-CN",
  title: "域名投资人！",
  description: "这是我的第一个 VuePress 站点",
});
