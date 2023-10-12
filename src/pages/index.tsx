import Image from 'next/image'
import Head from 'next/head'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import sapato from '@/assets/sapatos/1.png'
import sapato2 from '@/assets/sapatos/2.png'
import sapato3 from '@/assets/sapatos/3.png'
import sapato4 from '@/assets/sapatos/4.png'
import sapato5 from '@/assets/sapatos/5.png'
import sapato6 from '@/assets/sapatos/6.png'

import {
  Banner,
  HomeContainer,
  ImageContainer,
  ProductCard,
  ProductList,
} from '@/styles/pages/home'

export default function Home() {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { origin: 'center', perView: 1.3, spacing: 32 },

      breakpoints: {
        '(max-width: 650px)': {
          slides: { origin: 'center', perView: 1.2, spacing: 10 },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )
  return (
    <>
      <Head>
        <title>Home | EH Esportes</title>
      </Head>
      <HomeContainer>
        <article ref={ref} className="keen-slider">
          <Banner
            href={`/product/5`}
            prefetch={false}
            className="keen-slider__slide number-slide1"
          >
            <Image src={sapato} width={325} height={320} alt="" />
            <h1>Nike Air Max Plus</h1>
          </Banner>
          <Banner
            href={`/product/5`}
            prefetch={false}
            className="keen-slider__slide number-slide1"
          >
            <Image src={sapato2} width={325} height={320} alt="" />
            <h1>Nike Air Max Plus</h1>
          </Banner>
          <Banner
            href={`/product/5`}
            prefetch={false}
            className="keen-slider__slide number-slide1"
          >
            <Image src={sapato3} width={325} height={320} alt="" />
            <h1>Nike Air Max Plus</h1>
          </Banner>
          <Banner
            href={`/product/5`}
            prefetch={false}
            className="keen-slider__slide number-slide1"
          >
            <Image src={sapato4} width={325} height={320} alt="" />
            <h1>Nike Air Max Plus</h1>
          </Banner>
          <Banner
            href={`/product/5`}
            prefetch={false}
            className="keen-slider__slide number-slide1"
          >
            <Image src={sapato5} width={325} height={320} alt="" />
            <h1>Nike Air Max Plus</h1>
          </Banner>
          <Banner
            href={`/product/5`}
            prefetch={false}
            className="keen-slider__slide number-slide1"
          >
            <Image src={sapato6} width={325} height={320} alt="" />
            <h1>Nike Air Max Plus</h1>
          </Banner>
        </article>
        <ProductList>
          <h1>Nossos Modelos</h1>
          <div>
            <ProductCard href={`/product/5`} prefetch={false}>
              <ImageContainer>
                <Image src={sapato} width={250} height={200} alt="" />
              </ImageContainer>
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
            <ProductCard href={`/product/5`} prefetch={false}>
              <ImageContainer>
                <Image src={sapato2} width={250} height={200} alt="" />
              </ImageContainer>
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
            <ProductCard href={`/product/5`} prefetch={false}>
              <ImageContainer>
                <Image src={sapato3} width={250} height={200} alt="" />
              </ImageContainer>
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
            <ProductCard href={`/product/5`} prefetch={false}>
              <ImageContainer>
                <Image src={sapato4} width={250} height={200} alt="" />
              </ImageContainer>
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
          </div>
        </ProductList>
      </HomeContainer>
    </>
  )
}
