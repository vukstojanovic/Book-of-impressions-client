import { Dot } from '@/components/Loader'

export const Loader = () => {
  const rings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  return (
    <>
      <div className="w-36 h-36 relative m-auto">
        {rings.map((ring) => {
          return <Dot key={ring} number={ring} />
        })}
      </div>
    </>
  )
}
