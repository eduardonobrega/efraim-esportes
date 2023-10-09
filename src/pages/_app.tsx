import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Container, Header, ShoppingCartLink } from '@/styles/pages/app'
import Image from 'next/image'
import logoImg from '@/assets/logo.svg'
import cartImg from '@/assets/shopping-cart.svg'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} width={166} height={62} alt="" />
        </Link>
        <ShoppingCartLink href={`/purchase`}>
          <Image
            src={cartImg}
            width={26}
            height={26}
            alt="Carrinho de compras branco"
          />
        </ShoppingCartLink>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
