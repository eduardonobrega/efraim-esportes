import { styled } from '..'

export const ProductContainer = styled('main', {
  width: 'min(90%, 1120px)',
  margin: '0 auto',

  paddingBottom: '3rem',
})

export const ImageContainer = styled('div', {
  backgroundColor: '$gray100',
  overflow: 'hidden',
  borderRadius: 16,

  maxHeight: 490,
  minHeight: 300,

  display: 'grid',
  placeItems: 'center',

  img: {
    width: 'min(80%, 470px)',
    height: 'auto',
  },
})

export const ProductData = styled('div', {
  maxWidth: 700,
  margin: '6rem auto 0',

  '> div, footer': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    h1: {
      fontSize: 'clamp(2.7rem, 1.7714rem + 2.9018vw, 4rem)',
      lineHeight: '4.8rem',
    },

    span: {
      color: '$gray800',
      fontSize: 'clamp(1.4rem, 0.9714rem + 1.3393vw, 2rem)',
      fontWeight: 500,
    },
  },

  p: {
    color: '$gray300',
    fontSize: 'clamp(1.6rem, 1.0286rem + 1.7857vw, 2.4rem)',
    lineHeight: 'clamp(2.4rem, 1.5429rem + 2.6786vw, 3.6rem)',

    margin: '3.2rem 0 5rem',
  },

  button: {
    backgroundColor: '$gray900',
    color: '$white',
    fontSize: '$lg',
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: 'uppercase',

    padding: '1.2rem 2.4rem',
    borderRadius: 8,
    border: 'none',
    cursor: 'pointer',

    transition: 'transform 300ms',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },

  '@media (max-width: 768px)': {
    '> div, footer': {
      flexDirection: 'column',
      gap: '2rem',
      alignItems: 'flex-start',
    },
  },
})

export const Sizes = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  label: {
    color: '$gray300',
    fontSize: '$lg',
    fontWeight: 500,
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    border: '1px solid $gray300',
    cursor: 'pointer',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',

    '&:has(input:checked)': {
      color: '$white',
      borderColor: '$gray900',
      backgroundColor: '$gray900',
      cursor: 'default',
    },

    input: {
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: 0,
    },
  },
})
