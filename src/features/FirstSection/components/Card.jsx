export const Card = ({ icon, name, description }) => {
  return (
    <div className="flex flex-col bg-cardBg hover:bg-cardBgHover hover:shadow-lg rounded-lg p-[45px] cursor-default group">
      <div className="mb-[30px]">{icon}</div>
      <h4 className="text-xl mb-[24px] font-medium  group-hover:text-white">{name}</h4>
      <p className="max-w-[200px] mb-[27px]  group-hover:text-white">{description}</p>
      <a href="" className="mt-auto font-medium text-cardLink group-hover:text-white">
        Learn more
      </a>
    </div>
  )
}
