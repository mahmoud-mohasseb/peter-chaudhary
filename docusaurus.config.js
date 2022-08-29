// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "peter-chaudhary",
  tagline: "Peter documentation and blogs",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  // favicon: 'img/favicon.ico',
  favicon:
    "https://cdn.dribbble.com/users/60166/screenshots/17217488/media/02728f99e977931182d683b6792a17b1.jpg?compress=1&resize=400x300",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Peter-chaudhary",
  projectName: "https://peter-chaudhary.netlify.app/",

  // Even if you don't use internalization, you can uose this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  i18n: {
    defaultLocale: "en",
    locales: ["en", "hi"],
    localeConfigs: {
      en: {
        label: "English",
      },
      hi: { label: "हिन्दी" },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        gtag: {
          trackingID: "GTM-PT8NSPT",
          anonymizeIP: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    {
      algolia: {
        // The application ID provided by Algolia
        appId: "QTL9CJGRBJ",
        // Public API key: it is safe to commit it
        apiKey: "4b9843adb7b877f76043faa053559c9c",
        indexName: "peter",
        // Optional: see doc section below
        contextualSearch: true,
      },
      announcementBar: {
        id: "support_us",
        content: `⭐️  &nbsp; If you like Peter-chaudhary, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/mahmoud-mohasseb/peter-chaudhary">GitHub</a>! &nbsp; ⭐️`,
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      navbar: {
        hideOnScroll: true,
        title: "peter-chaudhary",
        logo: {
          alt: "Peter",
          // src: 'img/logo.svg',
          src: "https://cdn.dribbble.com/users/60166/screenshots/17217488/media/02728f99e977931182d683b6792a17b1.jpg?compress=1&resize=400x300",
          // srcDark: `/logos/`,
          href: "/",
          target: "_self",
          width: 50,
          height: 50,
          style: {
            borderRadius: 20,
          },
        },

        items: [
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsBefore: [],
            className: "icon-link language navbar__item",
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
            className: "NavBar",
          },

          {
            type: "search",
            position: "right",
          },

          { to: "/blog", label: "Blog", position: "left", className: "NavBar" },
          // versioning
          {
            type: "docsVersionDropdown",
            position: "left",
            // dropdownItemsBefore: [
            //   {
            //     to: "https://peter-chaudhary.netlify.app/docs/category/version/5-6",
            //     label: "v5-v6",
            //     target: "_blank",
            //   },
            //   {
            //     to: "https://peter-chaudhary.netlify.app/docs/category/version/6-7",
            //     label: "v6-v7",
            //     target: "_blank",
            //   },
            //   {
            //     to: "https://peter-chaudhary.netlify.app/docs/category/version/7-8",
            //     label: "v7-v8",
            //     target: "_blank",
            //   },
            // ],
            dropdownItemsAfter: [
              {
                to: "https://peter-chaudhary.netlify.app/docs/version/5-6",
                label: "v5-v6",
                target: "_blank",
              },
              {
                to: "https://peter-chaudhary.netlify.app/docs/version/6-7",
                label: "v6-v7",
                target: "_blank",
              },
              {
                to: "https://peter-chaudhary.netlify.app/docs/version/7-8",
                label: "v7-v8",
                target: "_blank",
              },
            ],
            // dropdownItemsAfter: [
            //   {
            //     to: "https://peter-chaudhary.netlify.app/docs/category/version",
            //     label: "All versions",
            //   },
            // ],
            dropdownActiveClassDisabled: true,
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://github.com/mahmoud-mohasseb/peter-chaudhary",
            // logo menu
            className: "pseudo-icon github-icon",
            position: "right",
          },
          {
            href: "https://github.com/mahmoud-mohasseb/peter-chaudhary",
            // logo menu
            className: "facebook-pseudo-icon facebook-icon",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          href: "/",
          // src: '/logo/light.svg',
          src: "https://cdn.dribbble.com/users/60166/screenshots/17217488/media/02728f99e977931182d683b6792a17b1.jpg?compress=1&resize=400x300",
          srcDark:
            "https://cdn.dribbble.com/users/60166/screenshots/17217488/media/02728f99e977931182d683b6792a17b1.jpg?compress=1&resize=400x300",
          alt: "",
          // height: 48,
          // width: 48,
          // style: {
          //   display: "flex",
          //   // marginBottom: 70,
          //   borderRadius: 20,
          //   // marginTop: 0,
          // },
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Peter-chaudhary, Inc.  All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      themes: ["@docusaurus/theme-search-algolia"],
    },
};

module.exports = config;
