import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
export const Testimonials = () => {
  const testemonials = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: 'Avatar',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: 'Avatar',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: 'Avatar',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: 'Avatar',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
    {
      id: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: 'Avatar',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
    {
      id: 6,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: 'Avatar',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
    {
      id: 7,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore neque similique atque repellat suscipit voluptates expedita vel sit veritatis doloremque dolore, ipsum repellendus architecto veniam id perferendis, et adipisci!',
      avatar: 'Avatar',
      name: 'Firstname Lastname',
      company: 'Wolt Customer',
    },
  ]
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{ delay: 1000, pauseOnMouseEnter: true, disableOnInteraction: false }}
      spaceBetween={35}
      slidesPerView={1}
      loop
      pagination={{
        type: 'bullets',
        clickable: true,
      }}
      setWrapperSize
    >
      {testemonials.map((testemonial) => (
        <SwiperSlide key={testemonial.id}>
          <div className="grid">
            <p>{testemonial.text}</p>
            <div className="flex">
              <div>{testemonial.avatar}</div>
              <div>
                <p>{testemonial.name}</p>
                <p>{testemonial.company}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
