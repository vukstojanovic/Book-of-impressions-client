import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import * as SvgSprite from '@/assets/SvgSprite'

export const Garni = () => {
  const [toggle, setToggle] = useState(false)

  const t = useTranslations('Home')

  return (
    <div className="bg-[#04375B]">
      <div className="flex justify-between items-center p-6 text-white">
        <div className="flex items-center">
          <SvgSprite.IconPlaceholderLogo />
          <p className="ml-2">{t('aboutGarni')}</p>
        </div>
        <div className="flex items-center cursor-pointer" onClick={() => setToggle(!toggle)}>
          {toggle ? <IoIosArrowUp className="ml-2" /> : <IoIosArrowDown className="ml-2" />}
        </div>
      </div>
      {toggle && (
        <div className="bg-[#04375B] px-6 pb-6">
          <p className="text-white">
            Maecenas semper nisi neque, semper semper dui vestibulum nec. Ut vitae vulputate purus.
            Suspendisse odio velit, fringilla id pretium quis, vestibulum ac sapien. Nullam
            porttitor porttitor egestas. Maecenas a dui dapibus, egestas magna maximus, maximus
            ipsum.
          </p>
        </div>
      )}
    </div>
  )
}
