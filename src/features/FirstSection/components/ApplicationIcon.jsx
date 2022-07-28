import * as SvgSprite from '@/assets/SvgSprite'

export const ApplicationIcon = () => {
  return (
    <div className="w-fit relative">
      <div className="bg-applicationRectangle w-[62px] h-[66px] rounded-xl"></div>
      <div className="absolute -top-2.5 -left-1">
        <SvgSprite.ApplicationIcon color={'#0093A0'} />
      </div>
    </div>
  )
}
