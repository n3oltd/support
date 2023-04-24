// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'N3O Support',
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
                    id: 'help',
                    path: 'help',
                    routeBasePath: 'help',
                    sidebarPath: require.resolve('./help-sidebars.js'),
                    editUrl: 'https://github.com/n3oltd/support/tree/main/'
                },
                blog: {
                    path: 'product-updates',
                    routeBasePath: 'product-updates',
                    blogTitle: 'Product Updates',
                    blogDescription: 'Product Updates',
                    showReadingTime: true,
                    editUrl: 'https://github.com/n3oltd/support/tree/main/',
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
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                    hideable: true
                }
            },
            navbar: {
                title: 'N3O Support',
                logo: {
                    alt: 'N3O',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'helpSidebar',
                        position: 'left',
                        label: 'Help',
                        docsPluginId: 'help',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'guidesSidebar',
                        position: 'left',
                        label: 'Guides',
                        docsPluginId: 'guides',
                    },
                    {
                        to: '/videos',
                        label: 'Videos',
                        position: 'left'
                    },
                    {
                        to: '/product-updates',
                        label: 'Product Updates',
                        position: 'left'
                    },
                    {
                        to: '/roadmap-ideas-board',
                        label: 'Roadmap & Ideas Board',
                        position: 'left',
                    },
                    {
                        to: '/system-status',
                        label: 'System Status',
                        position: 'left',
                    },
                    {
                        to: '/contact-us',
                        label: 'Contact Us',
                        position: 'left'
                    }
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Get Help',
                        items: [
                            {
                                label: 'Documentation',
                                to: '/docs',
                            },
                            {
                                label: 'Videos',
                                to: '/videos',
                            },
                            {
                                label: 'Contact Us',
                                to: '/contact-us',
                            },
                        ],
                    },
                    {
                        title: 'Product',
                        items: [
                            {
                                label: 'Updates',
                                to: '/product-updates',
                            },
                            {
                                label: 'Roadmap & Ideas Board',
                                to: '/roadmap-ideas-board',
                            },
                            {
                                label: 'System Status',
                                to: '/system-status',
                            },
                        ],
                    },
                    {
                        title: 'Links',
                        items: [
                            {
                                label: 'N3O Cloud',
                                href: 'https://n3o.cloud/',
                            },
                            {
                                label: 'N3O Website',
                                href: 'https://n3o.ltd/',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/',
                            }
                        ],
                    },
                    {
                        items: [
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
