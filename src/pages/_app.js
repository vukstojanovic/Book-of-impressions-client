import { AppProvider } from '@/providers/app'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return <AppProvider pageProps={pageProps}>{getLayout(<Component {...pageProps} />)}</AppProvider>
}

export default MyApp
