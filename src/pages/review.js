import { useEffect } from 'react'
import Head from 'next/head'
import { useTranslations } from 'next-intl'
import { dehydrate, QueryClient } from 'react-query'

import { MainLayout } from '@/components/Layout'
import { Loader } from '@/components/Loader'
import { RingContainer } from '@/components/RingContainer'
import styles from '@/styles/Home.module.css'
import { Carousel } from '@/features/carousel'
import { MainAccordion } from '@/features/Accordion'
import { AboutCompany } from '@/features/AboutCompanySection'
import { Success } from '@/features/Success'
import { useFormStore } from '@/stores/form'
import { getFormData, useFormData } from '@/api/getFormData'

export default function Review() {
  const t = useTranslations('General')
  // const { data: form, isLoading: formIsLoading } = useFormData({ id })
  const form = ''
  const formIsLoading = false
  const isLoading = useFormStore((state) => state.isLoading)
  const isSuccess = useFormStore((state) => state.isSuccess)
  const setIsLoading = useFormStore((state) => state.setIsLoading)
  const setIsSuccess = useFormStore((state) => state.setIsSuccess)
  const resetFormData = useFormStore((state) => state.resetFormData)

  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        resetFormData()
        setIsLoading(false)
        setIsSuccess(true)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [isLoading])

  return (
    <div className={styles.container}>
      <Head>
        <title>boi | Review</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex justify-center w-screen">
        <div className="w-full max-w-2xl pt-16 overflow-hidden">
          {!formIsLoading && <AboutCompany company={form?.company} />}
          {!isLoading && !isSuccess && <Carousel form={form} />}
          <div className="mx-4 mb-8">
            {isLoading && (
              <div className="flex justify-center items-center py-6">
                <RingContainer>
                  <Loader />
                </RingContainer>
              </div>
            )}
            {isSuccess && (
              <div className="flex justify-center items-center py-6">
                <Success />
              </div>
            )}
          </div>
          <MainAccordion />
        </div>
      </div>
    </div>
  )
}

Review.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export async function getServerSideProps({ locale }) {
  // const queryClient = new QueryClient()
  // await queryClient.prefetchQuery('formData', () =>
  //   getFormData({ id: 'e6a32890-4848-461a-9d86-ad362ae392eb' })
  // )
  return {
    props: {
      textContent: (await import(`../../locales/${locale}.json`)).default,
      // dehydratedState: dehydrate(queryClient),
    },
  }
}
