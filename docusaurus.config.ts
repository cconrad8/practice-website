import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Site',
  favicon: 'img/favicon.ico',
  presets: [
    [
      'classic',
      {
        /* Your preset config here */
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    /* Your theme config here */
  } satisfies Preset.ThemeConfig,
};

export default config;