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
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "QTL9CJGRBJ",
      //   // Public API key: it is safe to commit it
      //   apiKey: process.env.ALGOLIA_API_KEY,

      //   indexName: "peter-chaudhary",
      //   // Optional: see doc section below
      //   contextualSearch: true,
      // },
      announcementBar: {
        id: "support_us",
        content: `🇮🇳  &nbsp; If you like Peter-chaudhary, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/mahmoud-mohasseb/peter-chaudhary">GitHub</a>! &nbsp; 🇮🇳`,
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
            type: "doc",
            docId: "category/intro",
            position: "left",
            label: "ApiSidebar",
            className: "NavBar",
          },
          {
            type: "doc",
            docId: "docs2/intro",
            position: "left",
            label: "docs2",
            className: "NavBar",
          },
          // {
          //   type: "search",
          //   position: "right",
          // },
          { to: "/blog", label: "Blog", position: "left", className: "NavBar" },
          // {
          //   to: "/tutorial2/",
          //   label: "Tutorial2",
          //   position: "left",
          //   className: "NavBar",
          // },
          // {
          //   to: "/tutorial3/",
          //   activeBasePath: "tutorial3",
          //   label: "Tutorial3",
          //   position: "left",
          //   className: "NavBar",
          // },
          // versioning
          {
            type: "docsVersionDropdown",
            position: "left",
            to: "https://peter-chaudhary.netlify.app/docs/category/version",
            dropdownItemsBefore: [
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
            //   // {
            //   //   to: "https://peter-chaudhary.netlify.app/docs/category/version",
            //   //   label: "version",
            //   //   // target: "_blank",
            //   // },
            //   {
            //     to: "https://peter-chaudhary.netlify.app/docs/version/5-6",
            //     label: "v5-v6",
            //     target: "_blank",
            //   },
            //   {
            //     to: "https://peter-chaudhary.netlify.app/docs/version/6-7",
            //     label: "v6-v7",
            //     target: "_blank",
            //   },
            //   {
            //     to: "https://peter-chaudhary.netlify.app/docs/version/7-8",
            //     label: "v7-v8",
            //     target: "_blank",
            //   },
            // ],
            // dropdownItemsAfter: [
            //   {
            //     to: "https://peter-chaudhary.netlify.app/docs/category/version",
            //     label: "All versions",
            //   },
            // ],
            // dropdownActiveClassDisabled: true,
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
            href: "https://www.facebook.com/",
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
      // plugins: [require.resolve("docusaurus-lunr-search")],
      // plugins: [require.resolve("docusaurus-lunr-search")],
      // plugins: [
      //   [
      //     require.resolve("docusaurus-lunr-search"),
      //     {
      //       languages: ["en"], // language codes
      //     },
      //   ],
      // ],
      // plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

      // or, if you want to specify options:

      // ...
      // ...
      plugins: [
        [
          require.resolve("docusaurus-lunr-search"),
          {
            indexBaseUrl: true,
          },
        ],
      ],
      // plugins: [
      //   [
      //     require.resolve("@cmfcmf/docusaurus-search-local"),

      //     // Options here
      //     {
      //       // whether to index docs pages
      //       indexDocs: true,

      //       // Whether to also index the titles of the parent categories in the sidebar of a doc page.
      //       // 0 disables this feature.
      //       // 1 indexes the direct parent category in the sidebar of a doc page
      //       // 2 indexes up to two nested parent categories of a doc page
      //       // 3...
      //       //
      //       // Do _not_ use Infinity, the value must be a JSON-serializable integer.
      //       indexDocSidebarParentCategories: 0,

      //       // whether to index blog pages
      //       indexBlog: true,

      //       // whether to index static pages
      //       // /404.html is never indexed
      //       indexPages: false,

      //       // language of your documentation, see next section
      //       language: "en",

      //       // setting this to "none" will prevent the default CSS to be included. The default CSS
      //       // comes from autocomplete-theme-classic, which you can read more about here:
      //       // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
      //       // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
      //       // overwrites with `!important`, because they might otherwise not be applied as expected. See the
      //       // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
      //       style: undefined,

      //       // The maximum number of search results shown to the user. This does _not_ affect performance of
      //       // searches, but simply does not display additional search results that have been found.
      //       maxSearchResults: 8,

      //       // lunr.js-specific settings
      //       lunr: {
      //         // When indexing your documents, their content is split into "tokens".
      //         // Text entered into the search box is also tokenized.
      //         // This setting configures the separator used to determine where to split the text into tokens.
      //         // By default, it splits the text at whitespace and dashes.
      //         //
      //         // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
      //         tokenizerSeparator: /[\s\-]+/,
      //         // https://lunrjs.com/guides/customising.html#similarity-tuning
      //         //
      //         // This parameter controls the importance given to the length of a document and its fields. This
      //         // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
      //         // reduces the effect of different length documents on a term’s importance to that document.
      //         b: 0.75,
      //         // This controls how quickly the boost given by a common word reaches saturation. Increasing it
      //         // will slow down the rate of saturation and lower values result in quicker saturation. The
      //         // default value is 1.2. If the collection of documents being indexed have high occurrences
      //         // of words that are not covered by a stop word filter, these words can quickly dominate any
      //         // similarity calculation. In these cases, this value can be reduced to get more balanced results.
      //         k1: 1.2,
      //         // By default, we rank pages where the search term appears in the title higher than pages where
      //         // the search term appears in just the text. This is done by "boosting" title matches with a
      //         // higher value than content matches. The concrete boosting behavior can be controlled by changing
      //         // the following settings.
      //         titleBoost: 5,
      //         contentBoost: 1,
      //         tagsBoost: 3,
      //         parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
      //       },
      //     },
      //   ],
      // ],
    },
};

module.exports = config;
