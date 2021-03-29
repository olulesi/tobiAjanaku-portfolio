import React from 'react'

import dam from '../images/mainImages/Dam.jpg'
import tog from '../images/mainImages/FemmeFatale.jpg'
import hand from '../images/mainImages/Hands.jpg'
import fire from '../images/mainImages/Fire.jpg'
import pod from '../images/mainImages/Pod.jpg'
import garden from '../images/mainImages/Garden.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'

function FinalPage() {

  return (

    <>
      <section className="finalPage-wrapper">
        <Swiper
          direction={'horizontal'}
          effect={'cube'}
          grabCursor={ true }
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="container-general">
              <div className="gallery-wrap wrap-effect-1">
                <div className="item" style={{ backgroundImage: `url(${tog})` }}></div>
                <div className="item" style={{ backgroundImage: `url(${fire})` }}></div>
                <div className="item" style={{ backgroundImage: `url(${hand})` }}></div>
                <div className="item" style={{ backgroundImage: `url(${dam})` }}></div>
                <div className="item" style={{ backgroundImage: `url(${garden})` }}></div>
                <div className="item" style={{ backgroundImage: `url(${pod})` }}></div>
              </div>
            </div>

          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )


}
export default FinalPage