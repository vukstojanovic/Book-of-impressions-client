import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">{getLayout(<Component {...pageProps} />)}</main>
      <Footer />
    </div>
  )
}

export default MyApp
