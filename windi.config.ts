import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'

import breakpoints from './windi.breakpoints'

export default defineConfig({
  theme: {
    screens: breakpoints,
    fontSize: {
      base: '16px'
    },
    fontFamily: {
      sans: ['Spartan', 'sans-serif'],
      serif: ['Spartan', 'serif'],
      mono: ['Spartan', 'monospace']
    },

    colors: {
      gray: colors.gray,
      dark: colors.dark,
      blue: colors.blue,
      sky: colors.sky,
      'blue-gray': colors.blueGray,
      design: {
        theme: 'var(--theme-color)',
        '1': '#7C5DFA',
        '2': '#9277FF',
        '3': '#1E2139',
        '4': '#252945',
        '5': '#DFE3FA',
        '6': '#888EB0',
        '7': '#7E88C3',
        '8': '#0C0E16',
        '9': '#EC5757',
        '10': '#FF9797',
        '11': '#F8F8FB',
        '12': '#141625'
      }
    }
  }
})
