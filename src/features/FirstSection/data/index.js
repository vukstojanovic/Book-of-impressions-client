import * as SvgSprite from '@/assets/SvgSprite'

export const cardsData = [
  {
    icon: (
      <div className="w-fit relative">
        <div className="bg-designRectangle w-[62px] h-[66px] rounded-md"></div>
        <div className="absolute -top-2 left-[5px]">
          <SvgSprite.DesignIcon color={'#04375B'} />
        </div>
      </div>
    ),
    name: 'design',
    description: 'designText',
  },
  {
    icon: (
      <div className="w-fit relative">
        <div className="bg-ecommerceRectangle w-[62px] h-[66px] rounded-md"></div>
        <div className="absolute top-0 -left-2">
          <SvgSprite.EcommerceIcon color={'#1893fc'} />
        </div>
      </div>
    ),
    name: 'ecommerce',
    description: 'ecommerceText',
  },
  {
    icon: (
      <div className="w-fit relative">
        <div className="bg-applicationRectangle w-[62px] h-[66px] rounded-xl"></div>
        <div className="absolute -top-2.5 -left-1">
          <SvgSprite.ApplicationIcon color={'#0093A0'} />
        </div>
      </div>
    ),
    name: 'application',
    description: 'applicationText',
  },
]

export const images = ['/img/Coffee.png', '/img/Laptop.png']
