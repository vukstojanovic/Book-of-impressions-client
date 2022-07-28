export const Card = ({ title, price, desc, type }) => {
  return (
    <div
      className={`grid ${
        type === '1' ? 'text-white bg-getStartedBg' : 'text-black bg-boiLightGray'
      } justify-items-center pt-10 pb-14 px-[4.25rem]`}
    >
      <p className="pb-16 text-[23px] ">{title}</p>
      <p
        className={`${
          type === '1' ? 'text-white' : 'text-boiNavyBlue'
        } text-[2.5625rem] text-center font-bold grid space-y-[0.3rem] pb-7`}
      >
        {price}
        <span className={`${type === '1' ? 'text-white' : 'text-black'} text-base font-normal`}>
          per month
        </span>
      </p>
      <p className="pb-16">{desc}</p>
      <button
        className={`${
          type === '1' ? 'bg-boiOrange' : 'bg-boiNavyBlue'
        } px-11 py-4 rounded-md text-white hover:bg-opacity-90`}
      >
        Get Started
      </button>
    </div>
  )
}
