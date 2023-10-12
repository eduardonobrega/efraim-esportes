import Head from 'next/head'
import Image from 'next/image'

import {
  ImageContainer,
  PurchaseContainer,
  PurchaseItem,
} from '@/styles/pages/purchase'
import camisa1 from '@/assets/sapatos/1.png'
import camisa2 from '@/assets/sapatos/2.png'
import Link from 'next/link'

export default function Purchase() {
  return (
    <>
      <Head>
        <title>Nike Air Max plus | Compras</title>
      </Head>
      <PurchaseContainer>
        <h1>Compra efetuada!</h1>
        <ul>
          <PurchaseItem>
            <ImageContainer>
              <Image src={camisa1} width={150} height={150} alt="" />
            </ImageContainer>
            <div>
              <h2>Nike Air Max plus</h2>
              <span>R$ 320 </span>
            </div>
          </PurchaseItem>
          <PurchaseItem>
            <ImageContainer>
              <Image src={camisa1} width={150} height={150} alt="" />
            </ImageContainer>
            <div>
              <h2>Nike Air Max plus</h2>
              <span>R$ 320 </span>
            </div>
          </PurchaseItem>
        </ul>
        <p>
          Obrigado! <strong>Eduardo Nóbrega</strong>, <br /> seu pedido já está
          a caminho da sua casa.{' '}
        </p>

        <Link href="/">Continuar Comprando</Link>
      </PurchaseContainer>
    </>
  )
}
