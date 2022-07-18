import Head from 'next/head'
import { useTranslations } from 'next-intl'

import { MainLayout } from '@/components/Layout'
import { LoginForm } from '@/features/auth'
import { RatingStars } from '@/components/RatingStars'
import { CommentsPreview } from '@/components/CommentsPreview'
import { Loader } from '@/components/Loader'
import { CompanyInfo } from '@/components/CompanyInfo'
// import { CompanyInfo } from '@/components/CompanyInfo'
import { MainAccordion } from './../features/Accordion'

import styles from '@/styles/Home.module.css'
import { Carousel } from '@/features/carousel'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <div className={styles.container}>
      <Head>
        <title>boi | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <h1 className="text-3xl font-bold">boi - homepage</h1>
      <p>{t('helloWorld')}</p>
      <LoginForm />
      <Carousel />
      <RatingStars />
      <Loader />
      {/* <CommentsPreview /> */}
      <CommentsPreview />
      <MainAccordion />
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      textContent: (await import(`../../locales/${locale}/home.json`)).default,
    },
  }
}
