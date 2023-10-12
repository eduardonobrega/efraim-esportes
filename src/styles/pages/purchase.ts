import { styled } from '..'

export const PurchaseContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  paddingBottom: '3rem',

  width: 'min(95%, 700px)',
  margin: '0 auto',

  h1: {
    fontSize: '$2xl',
    fontWeight: 700,
    margin: '6rem 0',
  },

  p: {
    color: '$gray300',
    fontSize: '2.4rem',
    lineHeight: '3.6rem',
    textAlign: 'center',

    margin: '6rem 0 4rem',
  },

  a: {
    color: '$green500',
    fontSize: '2rem',
    fontWeight: 700,

    '&:hover': {
      color: '$green300',
      textDecoration: 'underline',
    },
  },

  '@media (max-width: 600px)': {
    p: {
      fontSize: '$md',
      lineHeight: '2.7rem',
    },
  },
})

export const ImageContainer = styled('div', {
  backgroundColor: '$gray100',

  width: '15rem',
  height: '15rem',
  borderRadius: 8,
  padding: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    height: 'auto',
  },
})

export const PurchaseItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  '&:not(:last-child)': {
    borderBottom: '1px solid $gray100',
    paddingBottom: '2rem',
    marginBottom: '2rem',
  },

  h2: {
    fontSize: '2.4rem',
    marginBottom: '2rem',
  },

  span: {
    fontWeight: 500,
    color: '$gray800',
  },

  '@media (max-width: 600px)': {
    gap: '1rem',
    h2: {
      fontSize: '$lg',
    },
  },
})
