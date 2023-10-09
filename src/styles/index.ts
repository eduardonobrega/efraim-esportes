import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      white: '#fff',

      gray900: '#222129',
      gray800: '#444446',
      gray300: '#787878',
      gray100: '#EEEEEE',

      green500: '#00875f',
      green300: '#00b37e',
    },
    fontSizes: {
      md: '1.5rem',
      lg: '2rem',
      xl: '2.4rem',
      '2xl': '3.2rem',
      '3xl': '6.4rem',
    },
  },
})
