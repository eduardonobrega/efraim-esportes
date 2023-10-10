import Image from 'next/image'
import Head from 'next/head'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import sapato from '@/assets/sapato.png'
import {
  Banner,
  HomeContainer,
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
        <title>Home</title>
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
            <Image src={sapato} width={325} height={320} alt="" />
            <h1>Nike Air Max Plus</h1>
          </Banner>
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
            <Image src={sapato} width={325} height={320} alt="" />
            <h1>Nike Air Max Plus</h1>
          </Banner>
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
            <Image src={sapato} width={325} height={320} alt="" />
            <h1>Nike Air Max Plus</h1>
          </Banner>
        </article>
        <ProductList>
          <h1>Nossos Modelos</h1>
          <div>
            <ProductCard href={`/product/5`} prefetch={false}>
              <Image src={sapato} width={250} height={200} alt="" />
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
            <ProductCard href={`/product/5`} prefetch={false}>
              <Image src={sapato} width={250} height={200} alt="" />
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
            <ProductCard href={`/product/5`} prefetch={false}>
              <Image src={sapato} width={250} height={200} alt="" />
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
            <ProductCard href={`/product/5`} prefetch={false}>
              <Image src={sapato} width={250} height={200} alt="" />
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
            <ProductCard href={`/product/5`} prefetch={false}>
              <Image src={sapato} width={250} height={200} alt="" />
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
            <ProductCard href={`/product/5`} prefetch={false}>
              <Image src={sapato} width={250} height={200} alt="" />
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
            <ProductCard href={`/product/5`} prefetch={false}>
              <Image src={sapato} width={250} height={200} alt="" />
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
            <ProductCard href={`/product/5`} prefetch={false}>
              <Image src={sapato} width={250} height={200} alt="" />
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
            <ProductCard href={`/product/5`} prefetch={false}>
              <Image src={sapato} width={250} height={200} alt="" />
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
            <ProductCard href={`/product/5`} prefetch={false}>
              <Image src={sapato} width={250} height={200} alt="" />
              <footer>
                <h2>Nike Air Max plus</h2>
                <span>R$ 320</span>
              </footer>
            </ProductCard>
            <ProductCard href={`/product/5`} prefetch={false}>
              <Image src={sapato} width={250} height={200} alt="" />
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
