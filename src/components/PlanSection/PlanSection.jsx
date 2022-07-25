import { Card } from './Card'

export const PlanSection = () => {
  return (
    <section className="pb-36">
      <p className="text-[40px] pb-9 font-semibold">
        Choose the plan that&apos;s right for your business
      </p>
      <p className="text-[23px] pb-28 lg:w-[70%]">
        Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in er.
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-7">
        <Card
          type="1"
          title={'Started plan'}
          price="Free"
          desc={'Lorem ipsum dolor sit amet, coectetur adipiscing elit.'}
        />
        <Card
          type="2"
          title={'Started plan'}
          price="$20.00"
          desc={'Lorem ipsum dolor sit amet, coectetur adipiscing elit.'}
        />
        <Card
          type="2"
          title={'Started plan'}
          price="$50.00"
          desc={'Lorem ipsum dolor sit amet, coectetur adipiscing elit.'}
        />
      </div>
    </section>
  )
}
