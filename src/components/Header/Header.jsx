import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import Link from 'next/link'

import { CONSTS } from '@/config/consts'
import { Logo } from '@/components/Logo'
import { LanguagePicker } from '@/components/LanguagePicker'

export const Header = () => {
  const { asPath, pathname } = useRouter()
  const [navbarToggle, setNavbarToggle] = useState(false)
  const [top, setTop] = useState(true)

  const t = useTranslations('General')

  useEffect(() => {
    window.pageYOffset > 20 ? setTop(false) : setTop(true)
  }, [])

  // detect whether user has scrolled the page down by 20px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 20 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  const isHomePage = pathname === '/'

  const renderNavLinks = (items) =>
    items.map((item) => {
      return (
        <li key={item.key} className="px-3 py-2 font-semibold text-white" onClick={item.onclick}>
          <Link href={item.href || ''}>
            <a
              className={`${
                item.type !== 'button'
                  ? `py-1 border-b-2 border-boiOrange hover:border-solid ${
                      asPath === item.href ? 'border-solid' : 'border-hidden'
                    }
                `
                  : 'rounded-md bg-boiOrange py-2 px-3'
              }`}
            >
              {t(item.key)}
            </a>
          </Link>
        </li>
      )
    })

  return (
    <header
      className={`flex justify-center fixed min-w-full z-[100] ${
        !top || !isHomePage ? 'bg-header' : ''
      }`}
    >
      <div className="relative w-full justify-center lg:flex">
        <div className="w-full max-w-7xl py-2 px-4 flex items-center">
          <div className="w-16 lg:w-20 translate-y-1 lg:translate-y-2">
            <Logo />
          </div>
          <div className="grow" />
          <ul className="hidden lg:flex items-center">{renderNavLinks(CONSTS.NavbarLinks)}</ul>
          <LanguagePicker />
          <button
            className="block lg:hidden"
            onClick={() => {
              setNavbarToggle(!navbarToggle)
            }}
          >
            {navbarToggle ? (
              <IoMdClose size="2em" color="white" />
            ) : (
              <IoMdMenu size="2em" color="white" />
            )}
          </button>
        </div>
        <ul
          className={`${
            navbarToggle ? 'flex' : 'hidden'
          } lg:hidden  flex-col items-center absolute w-full bg-hero origin-top-right py-6`}
        >
          {renderNavLinks(
            CONSTS.NavbarLinks.map((l) => ({
              ...l,
              onclick: () => {
                setNavbarToggle(false)
              },
            }))
          )}
        </ul>
      </div>
    </header>
  )
}
