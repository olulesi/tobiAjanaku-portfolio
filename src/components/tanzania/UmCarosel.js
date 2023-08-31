import React from 'react'
import classRoom from '../../images/tanzaniaImages/classRoom.png'
import chiefMeet from '../../images/tanzaniaImages/chiefMeet.png'
import Concrete from '../../images/tanzaniaImages/Concrete.png'
import highfive from '../../images/tanzaniaImages/highfive.png'

// import { useRef } from 'react'

function UmCarosel() {

  const caroselCards = [
    {
      url: classRoom,
      id: 1,
    },
    {
      url: chiefMeet,
      id: 2,
    },
    {
      url: Concrete,
      id: 3,
    },
    {
      url: highfive,
      id: 4,
    }

  ]

  //   const targetRef = useRef < HTMLDivElement | null > (null)
  //   const { scrollYProgress } = useScroll({
  //     target: targetRef,
  //   })

  //   const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%'])

  return (
    <>
      <div className='carosel-container'>
        <div className='card-container'>
          {caroselCards.map((card) => (
            <div
              key={card.index}
              className='cardImg'
            >
              <img src={card.url} alt='' />
            </div>
          )
          )}
        </div>
      </div>
    </>
  )
}
export default UmCarosel