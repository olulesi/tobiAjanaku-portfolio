import React from 'react'
// import masaiBomba from '../../images/tanzaniaImages/masaiBomba.png'
// import bombaDrawing from '../../images/tanzaniaImages/bombaDrawing.png'
// import bombaKitchen from '../../images/tanzaniaImages/bombaKitchen.png'
// import bomaWindow from '../../images/tanzaniaImages/bomaWindow.png'
// import bomaPartition from '../../images/tanzaniaImages/bomaPartition.png'
// import bomaRoad from '../../images/tanzaniaImages/bomaRoad.png'
// import bomaBedroom from '../../images/tanzaniaImages/bomaBedroom.png'

// import { useRef } from 'react'

function UmCarosel(props) {
  //   const targetRef = useRef < HTMLDivElement | null > (null)
  //   const { scrollYProgress } = useScroll({
  //     target: targetRef,
  //   })

  //   const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%'])

  return (
    <>
      <div className='carosel-container'>
        <div className='card-container'>
          {props.content.map((card) => (
            <div
              style={{
                backgroundImage: `url(${card.url})`,
              }}
              key={card.index}
              className='cardImg umoja-container'
            >
              {/* <img src={card.url} alt='' /> */}
              <div className={`${card.text === 'none' ? 'container-hide' : 'umojaText-container timetable'} `}>
                <p>
                  {card.text}
                </p>
              </div> 
            </div>
          )
          )}
        </div>
      </div>
    </>
  )
}
export default UmCarosel