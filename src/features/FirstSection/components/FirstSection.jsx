import { Card } from '@/features/FirstSection'
import { Carousel } from '@/features/FirstSection'
import { cardsData, images } from '../data'

export const FirstSection = () => {
  // const cardsData = [
  //   {
  //     icon: (
  //       <div className="w-fit relative">
  //         <SvgSprite.DesignRectangle />
  //         <div className="absolute top-0 left-4">
  //           <SvgSprite.DesignIcon color={'#04375B'} />
  //         </div>
  //       </div>
  //     ),
  //     name: 'Design',
  //     description: 'Lorem ipsum bla bla bla bla dolor sit amet bla bla bla',
  //   },
  //   {
  //     icon: (
  //       <div className="w-fit relative">
  //         <SvgSprite.EcommerceRectangle />
  //         <div className="absolute top-0 -left-2">
  //           <SvgSprite.EcommerceIcon color={'#1893fc'} />
  //         </div>
  //       </div>
  //     ),
  //     name: 'Ecommerce',
  //     description:
  //       'Lorem ipsum bla bla bla bla dolor sit amet bla bla bla artjeojdoerigjdoerigjeorgji',
  //   },
  //   {
  //     icon: (
  //       <div className="w-fit relative">
  //         <SvgSprite.ApplicationRectangle />
  //         <div className="absolute -top-2 -left-1">
  //           <SvgSprite.ApplicationIcon color={'#0093A0'} />
  //         </div>
  //       </div>
  //     ),
  //     name: 'Application',
  //     description: 'Lorem ipsum bla bla bla bla dolor sit amet bla bla bla',
  //   },
  // ]

  // const images = ['/img/Coffee.png', '/img/Laptop.png']

  return (
    <div>
      <section className="mb-[127px]">
        <h3 className="text-[40px] mb-[31px] font-medium">We build experience</h3>
        <p className=" mb-[82px] text-[23px]">
          Lorem ispum dolor sit amer, coectetur adipiscing elit. Suspendisse varius enim in er.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-11">
          {cardsData.map((item, index) => (
            <Card key={`card-${index}`} {...item} />
          ))}
        </div>
      </section>

      <section className="mb-[169px] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-0 lg:pr-[90px] mb-7">
          <h3 className="text-[40px] font-medium mb-[31px]">
            You can monitor other peoples reviews
          </h3>
          <p className="mb-[30px] text-[23px]">
            Lorem ipsum dolor sit amet, coectetur adipsicing elit. Suspendisse varius enimLorem
            ipsum dolor sit amet
          </p>
          <div className="flex  flex-col sm:flex-row">
            <button className="py-[15px] px-[47px] font-medium bg-boiOrange rounded-lg text-white my-2 mr-2">
              Get started
            </button>
            <button className="py-[15px] px-[47px] font-medium bg-boiLightGray rounded-lg text-boiGray my-2 mr-2">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <Carousel imgList={images} />
        </div>
      </section>

      <section className="mb-[127px] bg-getStartedBg text-white px-[20px] py-[80px] rounded-lg flex flex-col text-center">
        <h3 className="text-[40px] mb-[31px] font-medium">
          Get started today and try 30 days free
        </h3>
        <p className=" mb-[82px] text-[21px]">
          No contact, no set-up costs, just awesome way to organise your business.
        </p>
        <div className="flex flex-col sm:flex-row sm:m-auto">
          <button className="py-[15px] px-[47px] bg-boiOrange rounded-lg my-2 mr-2">
            Get started
          </button>
          <button className="py-[15px] px-[47px] bg-boiNavyBlue rounded-lg my-2 mr-2">
            Watch demo
          </button>
        </div>
      </section>
    </div>
  )
}
