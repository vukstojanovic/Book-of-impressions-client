import { Dot } from '@/components/Loader'

import styles from '@/styles/Loader.module.css'

export const Loader = () => {
  const rings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  return (
    <>
      <div className="w-36 h-36 relative m-auto">
        {/* {rings.map((ring) => {
          return <Dot key={ring} number={ring} />
        })} */}
        <div className={`absolute top-0 left-0 transform rotate-[0deg] h-full w-full`}>
          <div
            className={`absolute w-6 h-6 bg-yellow-500 top-0 left-0 rounded-full ${styles.dot} delay-75`}
          ></div>
        </div>
        <div className={`absolute top-0 left-0 transform rotate-[30deg] h-full w-full`}>
          <div
            className={`absolute w-6 h-6 bg-yellow-500 top-0 left-0 rounded-full  ${styles.dot} delay-100`}
          ></div>
        </div>
        <div className={`absolute top-0 left-0 transform rotate-[60deg] h-full w-full`}>
          <div
            className={`absolute w-6 h-6 bg-yellow-500 top-0 left-0 rounded-full  ${styles.dot} delay-300`}
          ></div>
        </div>
        <div className={`absolute top-0 left-0 transform rotate-[90deg] h-full w-full`}>
          <div
            className={`absolute w-6 h-6 bg-yellow-500 top-0 left-0 rounded-full  ${styles.dot}  delay-400 `}
          ></div>
        </div>
        <div className={`absolute top-0 left-0 transform rotate-[120deg] h-full w-full`}>
          <div
            className={`absolute w-6 h-6 bg-yellow-500 top-0 left-0 rounded-full  ${styles.dot}  delay-500 `}
          ></div>
        </div>
        <div className={`absolute top-0 left-0 transform rotate-[150deg] h-full w-full`}>
          <div
            className={`absolute w-6 h-6 bg-yellow-500 top-0 left-0 rounded-full  ${styles.dot}  `}
          ></div>
        </div>
        <div className={`absolute top-0 left-0 transform rotate-[180deg] h-full w-full`}>
          <div
            className={`absolute w-6 h-6 bg-yellow-500 top-0 left-0 rounded-full  ${styles.dot}  `}
          ></div>
        </div>
        <div className={`absolute top-0 left-0 transform rotate-[210deg] h-full w-full`}>
          <div
            className={`absolute w-6 h-6 bg-yellow-500 top-0 left-0 rounded-full  ${styles.dot} `}
          ></div>
        </div>
        <div className={`absolute top-0 left-0 transform rotate-[240deg] h-full w-full`}>
          <div
            className={`absolute w-6 h-6 bg-yellow-500 top-0 left-0 rounded-full  ${styles.dot}  `}
          ></div>
        </div>
        <div className={`absolute top-0 left-0 transform rotate-[270deg] h-full w-full`}>
          <div
            className={`absolute w-6 h-6 bg-yellow-500 top-0 left-0 rounded-full  ${styles.dot} `}
          ></div>
        </div>
        <div className={`absolute top-0 left-0 transform rotate-[300deg] h-full w-full`}>
          <div
            className={`absolute w-6 h-6 bg-yellow-500 top-0 left-0 rounded-full  ${styles.dot}  `}
          ></div>
        </div>
        <div className={`absolute top-0 left-0 transform rotate-[330deg] h-full w-full`}>
          <div
            className={`absolute w-6 h-6 bg-yellow-500 top-0 left-0 rounded-full  ${styles.dot} `}
          ></div>
        </div>
      </div>
    </>
  )
}
