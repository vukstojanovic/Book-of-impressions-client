import Image from 'next/Image'

export const LanguagePicker = () => {
  return (
    <div className="w-6 mx-3">
      <Image src="/img/f-en.png" width={34} height={20} layout="responsive" alt="en" />
    </div>
  )
}
