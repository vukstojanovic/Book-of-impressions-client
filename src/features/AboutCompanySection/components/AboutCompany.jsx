import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useCompany } from '@/features/AboutCompanySection'
import * as SvgSprite from '@/assets/SvgSprite'

export const AboutCompany = () => {
  const [toggle, setToggle] = useState(false)

  const { data } = useCompany(id)

  console.log(data)
  const t = useTranslations('Home')

  return (
    <div className="bg-[#04375B]">
      <div className="flex justify-between items-center p-6 text-white">
        <div className="flex items-center">
          {/* <SvgSprite.IconPlaceholderLogo /> */}
          {/* company Logo */}
          {companyLogo}
          <p className="ml-2">
            {t('about')} {companyName}
          </p>
        </div>
        <div className="flex items-center cursor-pointer" onClick={() => setToggle(!toggle)}>
          {toggle ? <IoIosArrowUp className="ml-2" /> : <IoIosArrowDown className="ml-2" />}
        </div>
      </div>
      {toggle && (
        <div className="bg-[#04375B] px-6 pb-6">
          <p className="text-white">
            {/*Company Description*/}
            {companyDescription}
          </p>
        </div>
      )}
    </div>
  )
}
