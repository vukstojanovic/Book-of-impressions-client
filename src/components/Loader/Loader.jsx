import { Dot } from '@/components/Loader'

export const Loader = () => {
  return (
    <>
      <div className="w-32 h-32 relative">
        <Dot rotateClass={'rotate-[0deg]'} animationDelayClass={'animation-delay-100'} />
        <Dot rotateClass={'rotate-[30deg]'} animationDelayClass={'animation-delay-200'} />
        <Dot rotateClass={'rotate-[60deg]'} animationDelayClass={'animation-delay-300'} />
        <Dot rotateClass={'rotate-[90deg]'} animationDelayClass={'animation-delay-400'} />
        <Dot rotateClass={'rotate-[120deg]'} animationDelayClass={'animation-delay-500'} />
        <Dot rotateClass={'rotate-[150deg]'} animationDelayClass={'animation-delay-600'} />
        <Dot rotateClass={'rotate-[180deg]'} animationDelayClass={'animation-delay-700'} />
        <Dot rotateClass={'rotate-[210deg]'} animationDelayClass={'animation-delay-800'} />
        <Dot rotateClass={'rotate-[240deg]'} animationDelayClass={'animation-delay-900'} />
        <Dot rotateClass={'rotate-[270deg]'} animationDelayClass={'animation-delay-1000'} />
        <Dot rotateClass={'rotate-[300deg]'} animationDelayClass={'animation-delay-1100'} />
        <Dot rotateClass={'rotate-[330deg]'} animationDelayClass={'animation-delay-1200'} />
      </div>
    </>
  )
}
