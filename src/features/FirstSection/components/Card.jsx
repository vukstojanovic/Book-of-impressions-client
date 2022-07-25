import { useTranslations } from 'next-intl'

export const Card = ({ icon, name, description }) => {
  const t = useTranslations('Home')

  return (
    <div className="flex flex-col bg-cardBg hover:bg-cardBgHover hover:shadow-lg rounded-lg p-[45px] cursor-default group">
      <div className="mb-[30px]">{icon}</div>
      <h4 className="text-2xl mb-[24px] font-semibold  group-hover:text-white">{t(name)}</h4>
      <p className="mb-[27px]  group-hover:text-white break-words">{t(description)}</p>
      <a href="#" className="mt-auto font-semibold text-cardLink group-hover:text-white w-fit">
        {t('learnMore')}
      </a>
    </div>
  )
}
