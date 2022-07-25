import { useTranslations } from 'use-intl'
import * as SvgSprite from '@/assets/SvgSprite'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import { Card } from '@/features/Benefits'
import { cardData } from '@/features/Benefits/data'

export const Benefits = () => {
  const t = useTranslations('Home')

  return (
    <div>
      <section className="flex flex-col lg:flex-row md:items-center mb-[175px]">
        <div className="pr-8 lg:pr-2 xl:pr-8">
          <Heading>{t('asAManagerYouCanSeeEachReviewOnline')}</Heading>
          <p className="text-2xl mb-[30px]">{t('asAManagerYouCanSeeEachReviewOnlineText')}</p>
          <div className="mb-[50px] lg:mb-0 sm:flex-row lg:flex-col xl:flex-row flex flex-col">
            <Button bgColor="bg-boiOrange">{t('getStarted')}</Button>
            <Button bgColor="bg-boiLightGray" color="text-boiGray">
              {t('learnMore')}
            </Button>
          </div>
        </div>
        <div className="w-full">
          <SvgSprite.ManagerImage />
        </div>
      </section>
      <section className="mb-[160px]">
        <Heading>{t('whatCanYoDoWithBoiApplication')}</Heading>
        <p className="mb-[80px] p-2 text-2xl">{t('whatCanYoDoWithBoiApplicationText')}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {cardData.map((item, index) => (
            <Card key={`card-${index}`} {...item} />
          ))}
        </div>
      </section>
    </div>
  )
}
