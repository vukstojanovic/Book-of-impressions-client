import { useTranslations } from 'next-intl'
import { Card } from '@/features/FirstSection'
import { Carousel } from '@/features/FirstSection'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'

import { cardsData, images } from '../data/index'

export const FirstSection = () => {
  const t = useTranslations('Home')

  return (
    <div className="mb-[140px]">
      <section className="mb-[127px]">
        <Heading>{t('weBuildExperience')}</Heading>
        <p className=" mb-[82px] text-[23px]">{t('weBuildExperienceText')}</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-11">
          {cardsData.map((item, index) => (
            <Card key={`card-${index}`} {...item} />
          ))}
        </div>
      </section>

      <section className="mb-[169px] flex flex-col xl:flex-row">
        <div className="w-full xl:w-1/2 p-0 lg:pr-[90px] mb-7">
          <Heading>{t('youCanMonitorOtherPeoplesReviews')}</Heading>
          <p className="mb-[30px] text-[23px]">{t('youCanMonitorOtherPeoplesReviewsText')}</p>
          <div className="flex  flex-col sm:flex-row">
            <Button bgColor="bg-boiOrange" color="text-white">
              {t('getStarted')}
            </Button>
            <Button bgColor="bg-boiLightGray" color="text-boiGray">
              {t('learnMore')}
            </Button>
          </div>
        </div>
        <div className="w-full xl:w-1/2 relative">
          <Carousel imgList={images} />
        </div>
      </section>

      <section className="mb-[127px] bg-getStartedBg text-white px-[20px] py-[80px] rounded-lg flex flex-col text-center">
        <Heading>{t('getStartedTodayAndTry30DaysForFree')}</Heading>
        <p className=" mb-[82px] text-[21px]">{t('getStartedTodayAndTry30DaysForFreeText')}</p>
        <div className="flex flex-col sm:flex-row sm:m-auto">
          <Button bgColor="bg-boiOrange" color="text-white">
            {t('getStarted')}
          </Button>
          <Button bgColor="bg-boiNavyBlue">{t('watchDemo')}</Button>
        </div>
      </section>
    </div>
  )
}
