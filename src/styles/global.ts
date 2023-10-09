import { globalCss } from '.'

export const globalStyles = globalCss({
  ':root': {
    fontSize: '62.5%',
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'img,picture,svg,video': {
    display: 'block',
    maxWidth: '100%',
  },

  'body, input, button, textarea': {
    font: '400 1.6rem Roboto, sans-serif',

    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  body: {
    backgroundColor: '$white',
    color: '$gray900',
    minHeight: '100vh',
  },

  a: {
    textDecoration: 'none',
  },
})
