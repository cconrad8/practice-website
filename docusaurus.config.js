// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation',
  tagline: 'Gray Foundation BRCA Precancer Atlas',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://practice-website-alpha.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gf-dcc', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
        title: '',
        logo: {
          alt: 'Sage Logo',
          src: 'img/sage_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Help',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/gf-dcc',
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
                label: 'Onboarding Checklist',
                to: 'docs/onboarding/onboarding-checklist',
              },
              {
                label: 'Data Curator App',
                href: 'https://dca.app.sagebionetworks.org/',
              },
              {
                label: 'Help with Synapse',
                href: 'https://help.synapse.org/docs/Getting-Started.2055471150.html',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack Channel',
                href: 'https://join.slack.com/t/gfbrcaprecanceratlas/shared_invite/zt-254dbv304-F8ZjGMoFsHISGS1ouyp_Iw',
              },
              {
                label: 'Sage Bionetworks',
                href: 'https://sagebionetworks.org',
              },
              {
                label: 'Synapse',
                href: 'https://synapse.org',
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
                href: 'https://github.com/gf-dcc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sage Bionetworks, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        additionalLanguages: ['bash', 'diff', 'json'],

      },
    }),
    themes: ['@docusaurus/theme-mermaid'],
    markdown: {
      mermaid: true,  
    },
};

module.exports = config;
