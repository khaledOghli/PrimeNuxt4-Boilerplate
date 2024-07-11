import type { StorybookConfig } from '@storybook/vue3-vite';
import path from 'node:path';
import { type ConfigEnv, loadConfigFromFile, mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../layers/UI/stories/**/*.mdx', '../layers/UI/stories/**/*.stories.@(js|jsx|ts|tsx)', '../layers/UI/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // 'storybook-addon-nuxt',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-i18n',
  ],
  framework: {
    name: '@storybook/vue3-vite', // '@storybook-vue/nuxt',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(baseConfig) {
    const loaded = await loadConfigFromFile(
      {} as unknown as ConfigEnv,
      path.resolve(__dirname, 'vite.config.ts'),
    );

    if (!loaded)
      return baseConfig;
    const userConfig = loaded.config;
    return mergeConfig(baseConfig, userConfig);
  },
};

export default config;
