import Image from 'next/image'
import * as SvgSprite from '@/assets/SvgSprite'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import { Card } from '@/features/Benefits'
import { cardData } from '@/features/Benefits/data'

export const Benefits = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row md:items-center mb-[175px]">
        <div className="pr-6">
          <Heading>As a manager you can see each review online</Heading>
          <p className="text-2xl mb-[30px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident saepe libero,
            tempora rem at labore cumque
          </p>
          <div className="mb-[50px] lg:mb-0 flex flex-col sm:flex-row">
            <Button bgColor="bg-boiOrange">Get started</Button>
            <Button bgColor="bg-boiLightGray" color="text-boiGray">
              Learn more
            </Button>
          </div>
        </div>
        <div>
          <SvgSprite.ManagerImage className="md:w-full" />
          {/* <Image
            src="/img/Manager.png"
            alt="manager"
            width="100%"
            height={70}
            layout="responsive"
            priority
          /> */}
        </div>
      </section>
      <section className="mb-[160px]">
        <Heading>What can you do with Boi application</Heading>
        <p className="mb-[80px] p-2 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit harum obcaecati
          repudiandae ex error fuga libero totam aliquam asperiores
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {cardData.map((item, index) => (
            <Card key={`card-${index}`} {...item} />
          ))}
        </div>
      </section>
    </div>
  )
}
