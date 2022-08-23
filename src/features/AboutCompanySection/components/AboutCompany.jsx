import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Image from 'next/image'
import { useRouter } from 'next/router'

// import * as SvgSprite from '@/assets/SvgSprite'

export const AboutCompany = ({ company }) => {
  const [toggle, setToggle] = useState(false)

  const { locale } = useRouter()

  const t = useTranslations('Home')

  const companyDescription = company?.description?.filter((item) => item.key === locale)[0]?.text

  return (
    <div className="bg-[#04375B] mt-1 lg:mt-20">
      <div className="flex justify-between items-center p-6 text-white">
        <div className="flex items-center">
          <Image src={company.logo || '/'} alt="company logo" width={50} height={50} />
          <p className="ml-2">
            {t('about')} {company?.name}
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
