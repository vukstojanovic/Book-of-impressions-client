import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useTranslations } from 'next-intl'

import { MainLayout } from '@/components/Layout'
import { Loader } from '@/components/Loader'
import { RingContainer } from '@/components/RingContainer'
import { Garni } from '@/components/GarniAccordion'

import styles from '@/styles/Home.module.css'
import { Carousel } from '@/features/carousel'
import { MainAccordion } from '@/features/Accordion'

export default function Review() {
  const t = useTranslations('General')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const interval = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(interval)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>boi | Review</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex justify-center  w-screen">
        {loading ? (
          <div className="h-screen flex justify-center items-center">
            <RingContainer>
              <Loader />
            </RingContainer>
          </div>
        ) : (
          <div className="w-full max-w-2xl pt-16 overflow-hidden">
            <div className="mt-1 lg:mt-20">
              <Garni />
            </div>
            <div className="mx-4 mb-8">
              <Carousel />
            </div>
            <MainAccordion />
          </div>
        )}
      </div>
    </div>
  )
}

Review.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      textContent: (await import(`../../locales/${locale}.json`)).default,
    },
  }
}
