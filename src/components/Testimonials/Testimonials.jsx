import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import Image from 'next/image'

export const Testimonials = () => {
  const testemonials = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: '/img/Coffee.png',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: '/img/Coffee.png',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: '/img/Coffee.png',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: '/img/Coffee.png',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
    {
      id: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: '/img/Coffee.png',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
    {
      id: 6,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: '/img/Coffee.png',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
    {
      id: 7,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: '/img/Coffee.png',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
  ]
  return (
    <div>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
        spaceBetween={35}
        slidesPerView={1}
        loop
        pagination={{
          type: 'bullets',
          clickable: true,
          el: '.testemonial-pagination',
        }}
        setWrapperSize
      >
        {testemonials.map((testemonial, i) => {
          if (i >= 5) {
            return
          }
          return (
            <SwiperSlide key={testemonial.id}>
              <div className="grid space-y-10">
                <p className="italic text-[24px]">{testemonial.text}</p>
                <div className="flex items-center">
                  <div className="relative">
                    <Image
                      src={testemonial.avatar}
                      alt={testemonial.avatar}
                      width={'85px'}
                      height={'85px'}
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-[21px] ml-6">
                    <p className="font-semibold">{testemonial.name}</p>
                    <p>{testemonial.company}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
        <div className="testemonial-pagination text-center space-x-3 mt-11 [&>span]:bg-boiOrange [&>span]:w-5 [&>span]:h-5"></div>
      </Swiper>
    </div>
  )
}
