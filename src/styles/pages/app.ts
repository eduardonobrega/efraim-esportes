import Link from 'next/link'
import { styled } from '..'

export const Container = styled('div', {})

export const Header = styled('header', {
  width: 'min(90%, 1194px)',
  margin: '0 auto',
  paddingTop: '4rem',
  marginBottom: '5rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  a: {
    textDecoration: 'none',

    transition: 'transform 0.2s',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
})

export const ShoppingCartLink = styled(Link, {
  backgroundColor: '$green500',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '4.8rem',
  height: '4.8rem',

  borderRadius: 16,
  transition: 'background-color 200ms',

  '&:hover': {
    backgroundColor: '$green300',
  },
})
