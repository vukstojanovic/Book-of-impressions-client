import { useState } from 'react'
import Image from 'next/image'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import styles from './MainAccordion.module.css'
import { RatingStars } from '@/components/RatingStars'

import icon from '@/assets/G.svg'

import { questions } from './data'

export const MainAccordion = () => {
  const [innerAccordion, setInnerAccordion] = useState(null)

  return (
    <div className="container mx-auto max-w-sm mt-10">
      <div className={`${styles.upperAccordion} ${styles.wrapper}`}>
        <div className="flex justify-between items-center p-6 text-white">
          <div className="flex items-center">
            <div className={`${styles.elipse} flex items-center justify-center`}>
              <Image src={icon} />
            </div>
            <p className="ml-2">About Garni</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <p>Read more</p>
            <IoIosArrowDown className="ml-2" />
          </div>
        </div>
      </div>
      <div onClick={() => setInnerAccordion(!innerAccordion)}>
        <div className="flex justify-between items-center p-5 cursor-pointer">
          <h4>See other reviews</h4>
          {innerAccordion ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div className="p-3">
        {innerAccordion && (
          <div>
            {questions.map((q, i) => {
              const { name, question, rating } = q
              return (
                <div key={i} className="p-3 my-3.5 shadow-lg">
                  <h4 className="mb-2 ">{name}</h4>
                  <p>{question}</p>
                  <RatingStars value={rating} />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
