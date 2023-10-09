import Image from 'next/image'
import Head from 'next/head'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import sapato from '@/assets/sapato.png'
import { Banner, HomeContainer } from '@/styles/pages/home'

export default function Home() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { origin: 'center', perView: 1.3, spacing: 32 },

    breakpoints: {
      '(max-width: 650px)': {
        slides: { origin: 'center', perView: 1.2, spacing: 10 },
      },
    },
  })
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
        <article>
          <h1>Nossos Modelos</h1>
        </article>
      </HomeContainer>
    </>
  )
}
