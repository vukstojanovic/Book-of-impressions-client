import { useEffect } from 'react'
import Head from 'next/head'
import { dehydrate, QueryClient } from 'react-query'
import { useTranslations } from 'next-intl'

import { MainLayout } from '@/components/Layout'
import { Loader } from '@/components/Loader'
import { RingContainer } from '@/components/RingContainer'
import styles from '@/styles/Home.module.css'
import { Carousel } from '@/features/carousel'
import { MainAccordion } from '@/features/Accordion'
import { AboutCompany } from '@/features/AboutCompanySection'
import { Success } from '@/features/Success'
import { useFormStore } from '@/stores/form'
import { getReviews, useReviews } from '@/api/getReviews'
import { useFormData } from '@/hooks/forms/useGetFormData'
import { getFormData } from '@/services/form'

export default function Review({ id }) {
  const { status, isError, data, error } = useReviews({ id })
  const { data: form, isLoading: formIsLoading } = useFormData({ id })

  const t = useTranslations('General')

  const isLoading = useFormStore((state) => state.isLoading)
  const isSuccess = useFormStore((state) => state.isSuccess)

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
          <MainAccordion
            status={status}
            isError={isError}
            data={data}
            error={error}
            formType={form?.type}
          />
        </div>
      </div>
    </div>
  )
}

Review.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}

export async function getServerSideProps({ locale, query: { id } }) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['formData', id], () => getFormData({ id }))
  await queryClient.prefetchQuery(['reviews', id], () => getReviews({ id }))

  return {
    props: {
      textContent: (await import(`../../../locales/${locale}.json`)).default,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      id,
    },
  }
}
