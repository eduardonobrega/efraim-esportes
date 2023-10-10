import Link from 'next/link'
import { styled } from '..'

export const HomeContainer = styled('div', {
  paddingBottom: '4rem',
})

export const Banner = styled(Link, {
  backgroundColor: '$gray100',

  height: '32rem',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  padding: '0 1rem',
  img: {
    maxWidth: 325,
    maxHeight: 320,
    minHeight: 160,
    width: '30vw',
    height: 'auto',
  },
  h1: {
    color: '$gray900',

    fontSize: `clamp($xl, 1.6381rem + 2.3810vw, $3xl)`,
  },
  '@media (max-width: 650px)': {
    flexDirection: 'column',
    justifyContent: 'space-evenly',

    img: {
      width: 'auto',
    },
  },
})

export const ProductList = styled('article', {
  width: 'min(90%, 1120px)',
  margin: '3rem auto 0',
  '> div': {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))',
    gap: '3.2rem',
    marginTop: '4rem',
  },
})

export const ProductCard = styled(Link, {
  color: '$gray900',
  display: 'block',
  borderRadius: 8,
  backgroundColor: '$gray100',

  img: {
    width: '25rem',
    height: '20rem',
    objectFit: 'contain',
    margin: '0 auto',
  },

  footer: {
    padding: '1.5rem 2rem 2rem',

    h2: {
      fontSize: '$lg',
      marginBottom: '2rem',
    },
    span: {
      color: '$gray800',
      fontSize: '$md',
      fontWeight: 500,
    },
  },
})
