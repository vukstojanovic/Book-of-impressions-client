import { useState, useRef } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { BiCaretDown } from 'react-icons/bi'

import { useRouter } from 'next/router'
import { CONSTS } from '@/config/consts'
import { useOutsideClick } from '@/hooks/useOutsideClick'

export const LanguagePicker = () => {
  const router = useRouter()
  const { pathname, asPath, query, locale } = router
  const selectedLocale = CONSTS.Locales.find((l) => l.key === locale)

  const t = useTranslations('General')

  const [opened, setOpened] = useState(false)

  const ref = useRef(null)
  useOutsideClick(ref, () => {
    setOpened(false)
  })

  return (
    <div ref={ref} className="relative cursor-pointer">
      <div className="flex items-center mx-3">
        <div
          className="w-6 "
          onClick={() => {
            setOpened(!opened)
          }}
        >
          <Image
            src={selectedLocale.flag}
            width={640}
            height={480}
            layout="responsive"
            alt={selectedLocale.key}
          />
        </div>
        <BiCaretDown color="white" className="mt-3" />
      </div>
      {opened && (
        <div
          className="origin-top-right absolute -right-2 mt-4 w-auto rounded-md shadow-lg bg-white z-10"
          tabIndex={1}
        >
          <div className="py-2 px-2">
            {CONSTS.Locales.filter((l) => l.key !== locale).map((l) => (
              <div
                key={l.key}
                className="flex justify-center items-center cursor-pointer p-2"
                onClick={() => {
                  router.push({ pathname, query }, asPath, { locale: l.key })
                  setOpened(false)
                }}
              >
                <div className="w-6 mr-4">
                  <Image src={l.flag} width={640} height={480} layout="responsive" alt={l.key} />
                </div>
                <span>{t(`locale:${l.key}`)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
