import Image from 'next/image'

export const ExampleSection = () => {
  return (
    <section className="pb-20 lg:pb-44">
      <p className="text-[40px] font-semibold pb-7 lg:pb-9">Example section for preview purpose</p>
      <p className="text-2xl pb-7 lg:pb-[125px] leading-[36px]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem harum distinctio, assumenda
        cum delectus incidunt quidem consectetur.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:gap-[4.25rem] 2xl:gap-40 justify-center min-h-full">
        <Image src={'/img/Coffee.png'} width={555} height={485} alt="" />
        <Image src={'/img/Laptop.png'} width={555} height={485} alt="" />
      </div>
    </section>
  )
}
