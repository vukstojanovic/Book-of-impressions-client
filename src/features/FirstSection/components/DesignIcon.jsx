import * as SvgSprite from '@/assets/SvgSprite'

export const DesignIcon = () => {
  return (
    <div className="w-fit relative">
      <div className="bg-designRectangle w-[62px] h-[66px] rounded-md"></div>
      <div className="absolute -top-2 left-[5px]">
        <SvgSprite.DesignIcon color={'#04375B'} />
      </div>
    </div>
  )
}
