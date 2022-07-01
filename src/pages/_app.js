import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
