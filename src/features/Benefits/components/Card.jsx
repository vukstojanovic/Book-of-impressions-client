import React from 'react'

export const Card = ({ title, description }) => {
  return (
    <div className="flex flex-col rounded-md hover:shadow-lg hover:bg-boiLightBlue p-8 group">
      <h4 className="mb-[30px] group-hover:text-white uppercase text-2xl font-semibold">{title}</h4>
      <p className="group-hover:text-white mb-[20px]">{description}</p>
      <a href="#" className="mt-auto font-semibold text-boiNavyBlue group-hover:text-white w-fit">
        Learn more
      </a>
    </div>
  )
}
