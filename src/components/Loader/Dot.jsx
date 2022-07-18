export const Dot = ({ number }) => {
  return (
    <div className={`absolute top-0 left-0 transform rotate-[${number * 30}deg] h-full w-full`}>
      <div className="absolute w-6 h-6 bg-yellow-500 top-0 left-0 rounded-full"></div>
    </div>
  )
}
