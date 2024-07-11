import presetWind from '@unocss/preset-wind';
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import { presetScrollbar } from 'unocss-preset-scrollbar';

interface DarkMode {
  /**
   * Selector for light variant.
   *
   * @default '.light'
   */
  light?: string

  /**
   * Selector for dark variant.
   *
   * @default '.dark'
   */
  dark?: string
}
const DarkModeSelectors: DarkMode = {
  light: '.light-mode',
  dark: '.dark-mode',
};
export default defineConfig({
  theme: {
    colors: {
      primary: {
        default: '#fd5362',
        50: '#fbeff0',
        100: '#febac0',
        200: '#fe98a1',
        300: '#fe8791',
        400: '#fd6472',
        500: '#fd5362',
        600: '#fd3e4f',
        700: '#fc2134',
        800: '#ca424e',
        900: '#98323b',
      },
      secondary: {
        default: '#fdbb57',
        50: '#fff7e9',
        100: '#feddab',
        200: '#fed69a',
        300: '#fecf89',
        400: '#fdc268',
        500: '#fdbb57',
        600: '#fdb446',
        700: '#fca725',
        800: '#fc9903',
        900: '#da8503',
      },
      blue: {
        50: '#E1F0FF',
        100: '#9ec4fe',
        200: '#8ab8fd',
        300: '#77acfd',
        400: '#5094fc',
        500: '#3d88fc',
        600: '#2a7bfc',
        700: '#1d6dfc',
        800: '#0f5ffc',
        900: '#0048fc',
      },
      light: {
        default: '#ffffff',
        50: '#ffffff',
        100: '#efefef',
        200: '#dcdcdc',
        300: '#bdbdbd',
        400: '#989898',
        500: '#7c7c7c',
        600: '#656565',
        700: '#525252',
        800: '#464646',
        900: '#3d3d3d',
        950: '#292929',
        1000: '#0e0e0e',
      },
    },
    // breakpoints: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px'
    // },
  },
  shortcuts: [
    [
      'btn',
      'flex justify-center items-center py-2.25 px-4 text-base rounded cursor-pointer select-none transition duration-200 ease-in-out',
    ],
    ['card-layout', 'rounded-2xl bg-light-50 px-6 py-8 shadow-xl dark:bg-slate-700'],
    ['card-base', 'shadow-lg rounded-lg p-4'],
    ['card-bg', 'bg-light-50 dark:bg-slate-800'],
    ['layout-container', 'container mx-auto px-2'],
    [
      /^btn-(.*)$/,
      ([, c]) =>
        `bg-${c}-400 text-${c}-50 bg-opacity-90 hover:bg-opacity-100 hover:text-${c}-50`,
    ],
  ],
  presets: [
    presetUno({
      dark: DarkModeSelectors,
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetScrollbar({
      // config
    }),
    presetWind(),
  ],
  // layers: {
  //   'components': -1,
  //   'default': -3,
  //   'utilities': -2,
  //   'my-layer': 3,
  //   'primevue': 4,
  // },

  transformers: [transformerDirectives(), transformerVariantGroup()],
});
