import Image from 'next/Image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const Hero = () => {
  const t = useTranslations('Home')

  return (
    <div className="flex justify-center bg-hero w-screen min-h-screen overflow-hidden">
      <div className="w-full max-w-7xl py-2 px-4 py-10 flex flex-col-reverse items-center justify-between lg:flex-row">
        <div className="z-20 max-w-md pl-10 lg:pl-20">
          <h1 className="text-titleWhite text-6xl"> {t('hero:title')}</h1>
          <p className="mt-10 text-white text-2xl">{t('hero:message')}</p>
          <Link href={'/#contact'}>
            <a className="block w-max	text-white rounded-md bg-boiOrange py-4 px-16 mt-10">
              {t('hero:button')}
            </a>
          </Link>
        </div>
        <div className="grow max-w-[800px] max-h-[800px] w-full relative z-10 flex flex-col justify-center">
          <div className="absolute w-[150vw] h-[150vw] lg:w-[85vw] lg:h-[85vw] top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 bg-gradient-radial from-[#1E37F7] via-hero" />
          <Image
            src={'/img/people.png'}
            priority
            width={800}
            height={800}
            layout="responsive"
            alt="hero"
          />
        </div>
      </div>
    </div>
  )
}
