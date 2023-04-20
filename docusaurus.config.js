// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'N3O Support',
  tagline: "We're here to help",
  favicon: 'favicon.ico',
  url: 'https://support.n3o.ltd',
  baseUrl: '/',
  organizationName: 'n3oltd',
  projectName: 'support',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'guides',
          routeBasePath: 'guides',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/n3oltd/support/tree/main/guides/',
        },
        blog: {
          path: 'release-notes',
          routeBasePath: 'release-notes',
          blogTitle: 'Release Notes',
          blogDescription: 'Release notes',
          showReadingTime: true,
          editUrl:
            'https://github.com/n3oltd/support/tree/main/release-notes/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'N3O Support',
        logo: {
          alt: 'N3O',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guidesSidebar',
            position: 'left',
            label: 'Guides',
          },
          {to: '/videos', label: 'Videos', position: 'left'},
          {to: '/release-notes', label: 'Release Notes', position: 'left'},
          {
            href: 'https://status.n3o.ltd',
            label: 'System Status',
            position: 'left',
          },
          {
            href: 'https://app.loopedin.io/n3o',
            label: 'N3O Loop',
            position: 'left',
          },
          {to: '/contact-us', label: 'Contact Us', position: 'left'},
          {
            href: 'https://n3o.cloud',
            label: 'N3O Cloud',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'Getting Started',
                to: '/guides/intro',
              },
              {
                label: 'Engage',
                to: '/guides/intro',
              },
              {
                label: 'Websites',
                to: '/guides/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Release Notes',
                to: '/release-notes',
              },
              {
                label: 'Roadmap & Ideas Board',
                href: 'https://app.loopedin.io/n3o',
              },
              {
                label: 'System Status',
                href: 'https://status.n3o.ltd',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Get In Touch',
                href: '/contact-us',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'N3O Cloud Login',
                to: 'https://n3o.cloud/',
              },
              {
                label: 'N3O Website',
                to: 'https://n3o.ltd/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/n3oltd',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} N3O. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '2RALWS9ZRW',
        indexName: 'docusaurus',
        apiKey: 'bbdf883eeb031be77d78ae03ab19942e'
      }
    }),

    plugins: [
      [
        '@docusaurus/plugin-ideal-image',
        {
          quality: 70,
          max: 1030,
          min: 640,
          steps: 2,
          disableInDev: false,
        },
      ],
    ]
};

module.exports = config;
