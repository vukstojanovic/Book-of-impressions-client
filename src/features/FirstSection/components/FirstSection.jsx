import Image from 'next/image'
import { Card } from '@/features/FirstSection'
import * as SvgSprite from '@/assets/SvgSprite'

export const FirstSection = () => {
  const cardsData = [
    {
      icon: <SvgSprite.DesignIcon color={'#04375B'} />,
      name: 'Design',
      description: 'Lorem ipsum bla bla bla bla dolor sit amet bla bla bla',
    },
    {
      icon: <SvgSprite.EcommerceIcon color={'#1893fc'} />,
      name: 'Ecommerce',
      description:
        'Lorem ipsum bla bla bla bla dolor sit amet bla bla bla artjeojdoerigjdoerigjeorgji',
    },
    {
      icon: <SvgSprite.ApplicationIcon color={'#0093A0'} />,
      name: 'Application',
      description: 'Lorem ipsum bla bla bla bla dolor sit amet bla bla bla',
    },
  ]

  return (
    <div>
      <section className="mb-[127px]">
        <h3 className="text-[40px] mb-[31px] font-medium">We build experience</h3>
        <p className=" mb-[82px] text-[23px]">
          Lorem ispum dolor sit amer, coectetur adipiscing elit. Suspendisse varius enim in er.
        </p>
        <div className="grid grid-cols-3 gap-11">
          {cardsData.map((item, index) => (
            <Card key={`card-${index}`} {...item} />
          ))}
        </div>
      </section>

      <section className="mb-[169px] flex">
        <div className="w-1/2 pr-[90px]">
          <h3 className="text-[40px] font-medium mb-[31px]">
            You can monitor other peoples reviews
          </h3>
          <p className="mb-[30px] text-[23px]">
            Lorem ipsum dolor sit amet, coectetur adipsicing elit. Suspendisse varius enimLorem
            ipsum dolor sit amet
          </p>
          <div className="flex">
            <button className="py-[15px] px-[47px] font-medium bg-boiOrange rounded-lg mr-[20px] text-white">
              Get started
            </button>
            <button className="py-[15px] px-[47px] font-medium bg-boiLightGray rounded-lg text-boiGray">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-1/2 relative bg-boiNavyBlue">
          <Image src={'/img/Rectangle.png'} width={400} height={400} alt="alt" />
        </div>
      </section>

      <section className="mb-[127px] bg-getStartedBg text-white px-[93px] py-[80px] rounded-lg flex flex-col items-center">
        <h3 className="text-[40px] mb-[31px] font-medium">
          Get started today and try 30 days free
        </h3>
        <p className=" mb-[82px] text-[21px]">
          No contact, no set-up costs, just awesome way to organise your business.
        </p>
        <div className="flex">
          <button className="py-[15px] px-[47px] bg-boiOrange rounded-lg mr-[20px]">
            Get started
          </button>
          <button className="py-[15px] px-[47px] bg-boiNavyBlue rounded-lg">Watch demo</button>
        </div>
      </section>
    </div>
  )
}
