import * as SvgSprite from '@/assets/SvgSprite'
import { RingContainer } from '@/components/RingContainer'

export const Success = () => {
  return (
    <div className="max-w-[15.625rem] m-auto">
      <div className="m-auto w-fit">
        <RingContainer>
          <SvgSprite.CheckedSymbol />
        </RingContainer>
      </div>
      <p className="mt-16 text-center">Lorem impsum dolor sit amet, consectet adipiscing elit!</p>
    </div>
  )
}
