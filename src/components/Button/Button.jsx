export const Button = ({ children, bgColor, color = 'text-white' }) => {
  return (
    <button
      className={`py-[15px] px-[47px] ${bgColor} ${color} font-semibold rounded-lg my-2 mr-2`}
    >
      {children}
    </button>
  )
}
