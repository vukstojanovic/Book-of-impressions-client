import Head from 'next/head'
import { useTranslations } from 'next-intl'

import { MainLayout } from '@/components/Layout'
import { LoginForm } from '@/features/auth'
import { RatingStars } from '@/components/RatingStars'

import styles from '@/styles/Home.module.css'

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
      <RatingStars />
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
