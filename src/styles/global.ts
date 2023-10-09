import { globalCss } from '.'

export const globalStyles = globalCss({
  ':root': {
    fontSize: '62.5%',
  },

  '*': {
    margin: 0,
    padding: 0,
    font: 'inherit',
    boxSizing: 'border-box',
  },

  'img,picture,svg,video': {
    display: 'block',
    maxWidth: '100%',
  },

  'body, input, button, textarea': {
    fontSize: '1.6rem',

    fontWeight: 400,

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

    transition: 'transform 0.2s',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
})
