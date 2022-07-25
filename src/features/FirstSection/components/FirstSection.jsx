import { useTranslations } from 'next-intl'
import { Card } from '@/features/FirstSection'
import { Carousel } from '@/features/FirstSection'
import { cardsData, images } from '../data'

export const FirstSection = () => {
  const t = useTranslations('Home')

  return (
    <div>
      <section className="mb-[127px]">
        <h3 className="text-[40px] mb-[31px] font-semibold">{t('weBuildExperience')}</h3>
        <p className=" mb-[82px] text-[23px]">{t('weBuildExperienceText')}</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-11">
          {cardsData.map((item, index) => (
            <Card key={`card-${index}`} {...item} />
          ))}
        </div>
      </section>

      <section className="mb-[169px] flex flex-col xl:flex-row">
        <div className="w-full xl:w-1/2 p-0 lg:pr-[90px] mb-7">
          <h3 className="text-[40px] font-semibold mb-[31px]">
            {t('youCanMonitorOtherPeoplesReviews')}
          </h3>
          <p className="mb-[30px] text-[23px]">{t('youCanMonitorOtherPeoplesReviewsText')}</p>
          <div className="flex  flex-col sm:flex-row">
            <button className="py-[15px] px-[47px] font-medium bg-boiOrange rounded-lg text-white my-2 mr-2">
              {t('getStarted')}
            </button>
            <button className="py-[15px] px-[47px] font-medium bg-boiLightGray rounded-lg text-boiGray my-2 mr-2">
              {t('learnMore')}
            </button>
          </div>
        </div>
        <div className="w-full xl:w-1/2 relative">
          <Carousel imgList={images} />
        </div>
      </section>

      <section className="mb-[127px] bg-getStartedBg text-white px-[20px] py-[80px] rounded-lg flex flex-col text-center">
        <h3 className="text-[40px] mb-[31px] font-semibold">
          {t('getStartedTodayAndTry30DaysForFree')}
        </h3>
        <p className=" mb-[82px] text-[21px]">{t('getStartedTodayAndTry30DaysForFreeText')}</p>
        <div className="flex flex-col sm:flex-row sm:m-auto">
          <button className="py-[15px] px-[47px] bg-boiOrange rounded-lg my-2 mr-2">
            {t('getStarted')}
          </button>
          <button className="py-[15px] px-[47px] bg-boiNavyBlue rounded-lg my-2 mr-2">
            {t('watchDemo')}
          </button>
        </div>
      </section>
    </div>
  )
}
