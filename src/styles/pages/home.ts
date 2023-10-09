import Link from 'next/link'
import { styled } from '..'

export const HomeContainer = styled('div', {})

export const Banner = styled(Link, {
  backgroundColor: '$gray100',

  height: '32rem',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  padding: '0 5vw',
  img: {
    maxWidth: 325,
    maxHeight: 320,
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
