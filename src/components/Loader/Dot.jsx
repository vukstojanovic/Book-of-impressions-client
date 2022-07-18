export const Dot = ({ rotateClass, animationDelayClass }) => {
  return (
    <div className={`absolute top-0 left-0 transform ${rotateClass} h-full w-full`}>
      <div
        className={`absolute w-6 h-6 bg-spinnerLoader top-0 left-0 rounded-full scale-0 animate-spinLoader ${animationDelayClass}`}
      ></div>
    </div>
  )
}
