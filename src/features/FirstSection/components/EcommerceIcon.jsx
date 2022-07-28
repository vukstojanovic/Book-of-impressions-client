import * as SvgSprite from '@/assets/SvgSprite'

export const EcommerceIcon = () => {
  return (
    <div className="w-fit relative">
      <div className="bg-ecommerceRectangle w-[62px] h-[66px] rounded-md"></div>
      <div className="absolute top-0 -left-2">
        <SvgSprite.EcommerceIcon color={'#1893fc'} />
      </div>
    </div>
  )
}
