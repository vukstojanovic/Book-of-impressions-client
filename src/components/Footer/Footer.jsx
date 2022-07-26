import Image from 'next/image'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Logo } from '@/components/Logo'

export const Footer = () => {
  const date = new Date()

  const t = useTranslations('Footer')

  return (
    <>
      <footer className="text-white text-center text-base font-light after:absolute after:top-0 after:right-0 after:w-full after:h-full after:clip-path-footer after:-z-50 after:bg-footer relative mt-10 px-6 pb-6 pt-24 lg:text-start lg:mt-24 lg:px-32 lg:pb-14 lg:pt-56 flex flex-col">
        <div
          className="
            hidden
            lg:block
            absolute
            lg:right-[110px]
            lg:top-11
            md:-translate-y-[295px]
            md:w-[600px]
            md:h-[600px]
            "
        >
          <Image src={'/img/people.png'} alt="group" width={500} height={500} />
        </div>
        <div className="lg:w-[5.5rem] lg:h-[4.75rem] absolute top-16">
          <Logo variant="white" />
        </div>
        <div className="grid justify-items-center gap-y-4 lg:flex lg:justify-between lg:pr-8">
          <div className="space-y-2 lg:space-y-9">
            <p className="font-semibold uppercase">{t('services')}</p>
            <div className="grid space-y-4">
              <Link href="/">
                <a>{t('strategyDesign')}</a>
              </Link>
              <Link href="/">
                <a>{t('productDesign')}</a>
              </Link>
              <Link href="/">
                <a>{t('contentStrategy')}</a>
              </Link>
              <Link href="/">
                <a>{t('brandStrategy')}</a>
              </Link>
              <Link href="/">
                <a>{t('development')}</a>
              </Link>
            </div>
          </div>
          <div className="space-y-2 lg:space-y-9">
            <p className="font-semibold uppercase">{t('helpAndAdvice')}</p>
            <div className="grid space-y-4">
              <Link href="/">
                <a>{t('howItWorks')}</a>
              </Link>
              <Link href="/">
                <a>{t('contactSupport')}</a>
              </Link>
              <Link href="/">
                <a>{t('privacyPolicy')}</a>
              </Link>
              <Link href="/">
                <a>{t('FAQ')}</a>
              </Link>
            </div>
          </div>
          <div className="space-y-2 lg:space-y-9">
            <p className="font-semibold uppercase">{t('company')}</p>
            <div className="grid space-y-4">
              <Link href="/">
                <a>{t('about')}</a>
              </Link>
              <Link href="/">
                <a>{t('blog')}</a>
              </Link>
              <Link href="/">
                <a>{t('contact')}</a>
              </Link>
              <Link href="/">
                <a>{t('jobs')}</a>
              </Link>
            </div>
          </div>
          <div className="min-h-full mb-6 border-l border-l-white hidden lg:block"></div>
          <div className="space-y-2 lg:space-y-9">
            <p className="font-semibold uppercase">{t('getInTouch')}</p>
            <div className="grid space-y-4">
              <Link href="/">
                <a>{t('getInTouchWithUs')}</a>
              </Link>
              <p className="text-lg lg:text-2xl font-bold">info.boi@gmail.com</p>
              <div className="flex justify-center space-x-3 lg:justify-start">
                <span className="rounded-full w-6 h-6 bg-white bg-opacity-[0.34]"></span>
                <span className="rounded-full w-6 h-6 bg-white bg-opacity-[0.34]"></span>
                <span className="rounded-full w-6 h-6 bg-white"></span>
                <span className="rounded-full w-6 h-6 bg-white bg-opacity-[0.34]"></span>
              </div>
            </div>
          </div>
        </div>
        <span className="border-t border-t-white my-12"></span>
        <p className="text-base lg:text-right lg:pr-5">
          &copy; {date.getFullYear()}@boi. All Rights Reserved.
        </p>
      </footer>
    </>
  )
}
