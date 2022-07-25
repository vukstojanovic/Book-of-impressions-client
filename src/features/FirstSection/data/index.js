import * as SvgSprite from '@/assets/SvgSprite'

export const cardsData = [
  {
    icon: (
      <div className="w-fit relative">
        <SvgSprite.DesignRectangle />
        <div className="absolute top-0 left-4">
          <SvgSprite.DesignIcon color={'#04375B'} />
        </div>
      </div>
    ),
    name: 'Design',
    description: 'Lorem ipsum bla bla bla bla dolor sit amet bla bla bla',
  },
  {
    icon:
      // <div className="w-fit relative">
      //   <SvgSprite.EcommerceRectangle />
      //   <div className="absolute top-0 -left-2">
      //     <SvgSprite.EcommerceIcon color={'#1893fc'} />
      //   </div>
      // </div>
      'img',
    name: 'Ecommerce',
    description:
      'Lorem ipsum bla bla bla bla dolor sit amet bla bla bla artjeojdoerigjdoerigjeorgji',
  },
  {
    icon:
      // <div className="w-fit relative">
      //   <SvgSprite.ApplicationRectangle />
      //   <div className="absolute -top-2 -left-1">
      //     <SvgSprite.ApplicationIcon color={'#0093A0'} />
      //   </div>
      // </div>
      'img',
    name: 'Application',
    description: 'Lorem ipsum bla bla bla bla dolor sit amet bla bla bla',
  },
]

export const images = ['/img/Coffee.png', '/img/Laptop.png']
