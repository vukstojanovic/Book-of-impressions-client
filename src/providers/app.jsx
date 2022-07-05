import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { NextIntlProvider } from 'next-intl'
import { QueryClientProvider } from 'react-query'

import { queryClient } from '@/lib/react-query'

const ErrorFallback = () => {
  return (
    <div>
      <h2>Ooops, something went wrong :( </h2>
    </div>
  )
}

export const AppProvider = ({ pageProps, children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">Loading...</div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {/*
            {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
            */}
          <NextIntlProvider messages={pageProps.textContent}>{children}</NextIntlProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  )
}
