import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'

import breakpoints from './windi.breakpoints'

export default defineConfig({
  darkMode: 'class',
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
  },
  shortcuts: {
    'h1-lg': 'text-32px line-height-36px tracking-[-1] font-bold',
    'h1-sm': 'text-32px line-height-36px tracking-[-1] font-bold',
    'h2-lg': 'text-20px line-height-22px tracking-[-0.63] font-bold',
    'h2-sm': 'text-20px line-height-22px tracking-[-0.63] font-bold',
    'h3-lg': 'text-16px line-height-24px tracking-[-0.8] font-bold',
    'h3-sm': 'text-16px line-height-24px tracking-[-0.8] font-bold',
    'h4-lg': 'text-12px line-height-15px tracking-[-0.25] font-bold',
    'h4-sm': 'text-12px line-height-15px tracking-[-0.25] font-bold',
    'body-1-lg': 'text-12px line-height-15px tracking-[0.25] font-medium',
    'body-1-sm': 'text-12px line-height-15px tracking-[0.25] font-medium',
    'body-2-lg': 'text-11px line-height-18px tracking-[0.23] font-medium'
  }
})
