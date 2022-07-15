import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import styles from './MainAccordion.module.css'

import { accordions } from './data'

export const MainAccordion = () => {
  const [selected, setSelected] = useState(null)

  const toggleAccordion = (i) => {
    if (selected === i) {
      setSelected(null)
      return
    }

    setSelected(i)
  }

  return (
    <div className="container mx-auto w-96 mt-10">
      <div className={`${styles.upperAccordion} ${styles.wrapper}`}>
        <div className="flex justify-between items-center p-6 text-white">
          <div className="flex">
            <p>LOGO</p>
            <p className="ml-2">About Garni</p>
          </div>
          <div className="flex items-center">
            <p>Read more</p>
            <IoIosArrowDown className="ml-2" />
          </div>
        </div>
      </div>
      <div>
        {accordions.map((accordion, i) => {
          const { title, content } = accordion
          return (
            <div className="item" key={i}>
              <div
                className="flex justify-between title cursor-pointer p-4 bg-gray-400"
                onClick={() => toggleAccordion(i)}
              >
                <h2>{title}</h2>
                <span>{selected === i ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              </div>
              <div
                className={
                  selected === i ? 'h-auto visible p-4 shadow-md bg-gray-300' : 'h-0 invisible'
                }
              >
                <p>{content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
