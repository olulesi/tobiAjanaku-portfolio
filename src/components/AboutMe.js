import React from 'react'

import uol from '../images/iconsGifs/UoL.png'
import arch from '../images/iconsGifs/intro-arch.gif'
import udemy from '../images/iconsGifs/Udemy.png'
import fiver from '../images/iconsGifs/Fiverr.png'

import { Swiper, SwiperSlide } from 'swiper/react'



function useOnScreen(options) {

  const ref = React.useRef()
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }

  }, [ref, options])

  return [ref, visible]
}




function AboutMe() {

  const [ref, visible] = useOnScreen({ rootMargin: '700px' })

  return (

    <>
      <div className="black-container">
        <Swiper
          direction={'horizontal'}
          effect={'cube'}
          grabCursor={true }
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={true}
        >
          <SwiperSlide>
            <div className="category-container">
              <div className="category-gif arch" style={{ backgroundImage: `url(${arch})` }}></div>
              <div className="info-wrapper">
                <div className="info">
                  <div
                    ref={ref}
                    className={`info-logo ${visible ? 'fade-inLogo' : 'fade-outLogo'}`}>
                    <img src={uol} />
                  </div>
                  <div
                    ref={ref}
                    className={`info-text ${visible ? 'fade-inLogo' : 'fade-outLogo'}`}>
                    <p>Student at XJTLU/ graduate of the University of Liverpool specialising in architecture practice.</p>
                    <p>I am skilled in special programs and design development is a strong interest for me.</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category-container">
              <div className="category-gif arch" style={{ backgroundImage: `url(${arch})` }}></div>
              <div className="info-wrapper">
                <div className="info">
                  <div
                    ref={ref}
                    className="info-logo-gd">
                    <img src={udemy} />
                    <img src={fiver} />
                  </div>
                  <div
                    ref={ref}
                    className="info-text">
                    <p>I am currently studying China Studies as part of my year abroad.  </p>
                    <p>My goal is to practice my knowledge and learn a new skill set at an architectural practice in London.</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>

      </div>
      <div className="gd-container">
        

      </div>
    </>
  )


}
export default AboutMe
