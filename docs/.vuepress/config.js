module.exports = {
  title: "Wiki @sujeongy",
  description: "Today I Learned,",
  head: [
    ["link", { rel: "icon", href: "/images/logo-144.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
  ],
  themeConfig: {
    logo: "https://avatars1.githubusercontent.com/u/23621856?s=460&v=4",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Blog",
        link: "https://sujeongy.github.io/",
      },
      { text: "Github", link: "https://github.com/sujeongy/wiki" },
    ],
    smoothScroll: true,
    sidebar: [
      {
        title: "Javascript",
        collapsable: false,
        children: [
          "/resource/Script/Basic.html",
          "/resource/Script/Clean-Code.html",
          "/resource/Script/Dive-into-jQuery.html",
          "/resource/Script/ErrorHandling.html",
        ],
      },
      {
        title: "Publishing",
        // path: "/resource/Publishing",
        children: [
          "/resource/Publishing/Markup.html",
          "/resource/Publishing/CSS.html",
          "/resource/Publishing/Publishing-Mobile.html",
          "/resource/Publishing/UX.html",
          "/resource/Publishing/Lazy-Loading.html",
        ],
      },
      {
        title: "WebDev101",
        children: [
          // "/resource/Web/API.html",
          "/resource/Web/CLI.html",
          // "/resource/Web/Coding-Math.html",
          // "/resource/Web/Domain-Name-System.html",
          "/resource/Web/Git.html",
          // "/resource/Web/Home-Sever.html",
          // "/resource/Web/HTTP.html",
          // "/resource/Web/Performance-Optimization.html",
          // "/resource/Web/SEO.html",
          // "/resource/Web/Term.html",
          // "/resource/Web/Web-Architecture.html",
        ],
      },
      {
        title: "Tips",
        children: [
          "/resource/Tips/Debugging.html",
          // "/resource/Tips/Definition-UI-Words.html",
          // "/resource/Tips/Dev-Task-Management.html",
          // "/resource/Tips/Developer-Behaviour.html",
          // "/resource/Tips/Front-End-Road-Map.html",
          // "/resource/Tips/RegEx.html",
          "/resource/Tips/Testing.html",
          "/resource/Tips/Tools.html",
          "/resource/Tips/Video.html",
        ],
      },
    ],
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    "@vuepress/back-to-top",
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "docs/resource",
      },
    },
  },
};
