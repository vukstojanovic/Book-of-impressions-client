import Head from 'next/head'
import { useTranslations } from 'next-intl'
import { useQuery } from 'react-query'
import { axios } from '@/lib/axios'
import { MainLayout } from '@/components/Layout'

import styles from '@/styles/Home.module.css'
import { Hero } from '@/components/Hero'
import { Testimonials } from '@/components/Testimonials'
import { FirstSection } from '@/features/FirstSection'
import { Benefits } from '@/features/Benefits'
import { ExampleSection } from '@/features/ExampleSection'
import { PlanSection } from '@/components/PlanSection'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <div className={styles.container}>
      <Head>
        <title>boi | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Hero />
      <div className="p-8 lg:p-32">
        <FirstSection />
        <Benefits />
        <ExampleSection />
        <PlanSection />
        <Testimonials />
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      textContent: (await import(`../../locales/${locale}.json`)).default,
    },
  }
}
