import React from 'react'

import IntroSpinner from './IntroSpinner'
import Mouse from './Mouse'
import 'react-typist/dist/Typist.css'

// import tb from '../images/tb2.png'

import Typical from 'react-typical'

function PageScroll() {

  const [scrollValue, setScrollValue] = React.useState(0)
  const [slideValue, setSlideValue] = React.useState(0)
  const [loading, setLoading] = React.useState(false)
  const [typing, setTyping] = React.useState(true)
  const [logoSlide, setLogoSlide] = React.useState(false)
  const [blackSlide, setBlackSlide] = React.useState(false)
  const [logoValue, setLogoValue] = React.useState(0)





  React.useEffect(() => {
    setLoading(true)
    setTyping(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    const handleIsScrolling = () => {

      window.scrollY <= 100 ? setScrollValue(window.scrollY) : setScrollValue(100)

      setSlideValue(window.scrollY)

      window.scrollY >= 180 ? setLogoSlide(true) : setLogoSlide(false)

      window.scrollY > 0 ? setTyping(false) : setTyping(true)


      setLogoValue(window.scrollY)

      window.scrollY >= 690 ? setBlackSlide(true) : setBlackSlide(false)


    }
    window.addEventListener('scroll', handleIsScrolling)

  }, [])
  console.log(window.scrollY)

  return (
    <>
      <section className="body">
        {
          loading ?
            <IntroSpinner loading={loading} />
            :
            <>
              <div className="typing-page">
                <div className="scroll">
                  {
                    typing ?
                      <div>
                        <Typical
                          steps={['', 500, 'Hi there,', 1000, 'Welcome to my Construction Page.', 1000, 'Portfolio is on the way this is just a litte promo.', 1000, 'Scroll Down.']}
                          wrapper="p"
                        />
                      </div>
                      :
                      <div className="scroll-down">
                        <span>Keep Scrolling</span>
                        <Typical
                          loop={0}
                          steps={['Keep Scrolling']}
                          wrapper="p"
                        />
                      </div>
                  }
                </div>
              </div>
              <h3 className="text" style={{ 'left': `${100 - slideValue / 5}%` }}>Hey There Welcome to My Portfolio</h3>
              <>
                {
                  logoSlide ?
                    <section className="first-page-text" style={{
                      'clipPath': `circle(${scrollValue}px at center center)`, 'left': `${36 - logoValue / 5}%`,
                    }}>
                      <h3 className="inner-text" style={{ 'left': `${100 - slideValue / 5}%` }}>Hey There Welcome to My Portfolio</h3>
                    </section>

                    :

                    <section className="first-page-text" style={{
                      'clipPath': `circle(${scrollValue}px at center center)`,
                    }}>
                      <h3 className="inner-text" style={{ 'left': `${100 - slideValue / 5}%` }}>Hey There Welcome to My Portfolio</h3>
                    </section>
                }
              </>
              {
                blackSlide ?
                  <div className="black-container">
                    <div className="black-slide" style={{ 'left': `${280 - slideValue / 4}%` }}>

                    </div>
                  </div>
                  :
                  <div className="black-container">
                    <div className="black-slide"></div>
                  </div>
              }
              <div className="container">
                <Mouse />
              </div>
            </>
        }
      </section>
    </>
  )


}
export default PageScroll
