import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CompanyInfo } from '@/components/CompanyInfo'

export const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col max-h-screen overflow-hidden">
      <Header />
      <CompanyInfo />
      <main className="flex-grow overflow-auto p-4">{children}</main>
      <Footer />
    </div>
  )
}