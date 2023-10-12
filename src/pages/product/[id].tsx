import {
  ImageContainer,
  ProductContainer,
  ProductData,
  Sizes,
} from '@/styles/pages/product'
import Head from 'next/head'
import Image from 'next/image'
import sapatoImg from '@/assets/sapatos/1.png'

export default function Product() {
  return (
    <>
      <Head>
        <title>Nike Air Max plus | EH Esportes</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={sapatoImg} width={470} height={480} alt="" />
        </ImageContainer>

        <ProductData>
          <div>
            <h1>Nike Air Max plus</h1>
            <span>R$ 320</span>
          </div>
          <p>
            Descubra o equilíbrio perfeito entre estilo e desempenho com o Nike
            Air Max Plus. Este tênis icônico une a lendária tecnologia Air Max
            da Nike com um design arrojado, proporcionando conforto inigualável
            e um visual moderno.
          </p>
          <footer>
            <Sizes>
              <label htmlFor="39">
                39
                <input type="radio" name="size" id="39" />
              </label>
              <label htmlFor="40">
                40
                <input type="radio" name="size" id="40" defaultChecked />
              </label>
              <label htmlFor="41">
                41
                <input type="radio" name="size" id="41" />
              </label>

              <label htmlFor="42">
                42
                <input type="radio" name="size" id="42" />
              </label>
            </Sizes>
            <button>Adicionar</button>
          </footer>
        </ProductData>
      </ProductContainer>
    </>
  )
}
