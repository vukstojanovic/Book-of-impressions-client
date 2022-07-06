import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
