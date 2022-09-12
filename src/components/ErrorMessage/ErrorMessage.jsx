import { useTranslations } from 'next-intl'

export const ErrorMessage = () => {
  const t = useTranslations('ErrorMessage')

  return (
    <div className="w-11/12 max-w-xl border border-solid mx-auto mt-6 text-black rounded-lg shadow-md">
      <h3 className="text-base p-8 text-center">{t('errorMessage')}</h3>
    </div>
  )
}
