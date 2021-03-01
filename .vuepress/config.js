module.exports = {
  title: "Wiki @sujeongy",
  description: "Today I Learned,",
  head: [
    ["link", { rel: "icon", href: `/images/logo-144.png` }],
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
    sidebar: "auto",
    smoothScroll: true,
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
};
