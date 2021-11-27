// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Knowledge Base',
  tagline: 'A documentação da Skyrats',
  url: 'https://skyrats.github.io',
  baseUrl: '/knowledge_base/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logoPretoTransparente.svg',
  organizationName: 'SkyRats',
  projectName: 'knowledge_base',
  deploymentBranch: 'gh-pages',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Docs folder path relative to website dir
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SkyRats/knowledge_base/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          path: '../blog',
          editUrl: 'https://github.com/SkyRats/knowledge_base/tree/main/blog/',
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
      navbar: {
        title: 'Skyrats',
        logo: {
          alt: 'Skyrats Logo',
          src: 'img/logoPretoTransparente.svg',
          srcDark: 'img/logoBrancoTransparente.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/SkyRats/knowledge_base',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Site',
                href: 'https://skyrats.com.br/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/skyrats_drones/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/skyrats/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SkyRats',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Skyrats Knowledge Base. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme, //Mudar
        darkTheme: darkCodeTheme, //Mudar
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};

module.exports = config;
