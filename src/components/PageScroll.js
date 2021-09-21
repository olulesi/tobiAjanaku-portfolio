import React from 'react'

import IntroSpinner from './IntroSpinner'
import FinalPage from './FinalPage'
import AboutMe from './AboutMe'
import Bubbles from './Bubbles'
import 'react-typist/dist/Typist.css'


// import tb from '../images/tb2.png'

// import Typical from 'react-typical'

function PageScroll() {

  // const [scrollValue, setScrollValue] = React.useState(0)
  // const [slideValue, setSlideValue] = React.useState(0)
  const [loading, setLoading] = React.useState(true)
  // const [typing, setTyping] = React.useState(true)
  // const [logoSlide, setLogoSlide] = React.useState(false)
  // const [blackSlide, setBlackSlide] = React.useState(false)
  // const [logoValue, setLogoValue] = React.useState(0)





  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 8500)
    // const handleIsScrolling = () => {

    //   window.scrollY <= 100 ? setScrollValue(window.scrollY) : setScrollValue(100)

    //   setSlideValue(window.scrollY)

    //   window.scrollY >= 180 ? setLogoSlide(true) : setLogoSlide(false)

    //   // window.scrollY > 0 ? setTyping(false) : setTyping(true)


    //   setLogoValue(window.scrollY)

    //   // window.scrollY >= 690 ? setBlackSlide(true) : setBlackSlide(false)


    // }
    // window.addEventListener('scroll', handleIsScrolling)

  }, [])

  return (
    <>
      <section className="body">
        {
          loading ?
            <section className="intro-wrapper">
              <IntroSpinner loading={loading} />
            </section>         
            :
            <>
              <div className="typing-page">
                <Bubbles loading={loading} />
              </div>
              {/* <h3 className="text" style={{ 'left': `${100 - slideValue / 5}%` }}>Hey There Welcome to My Portfolio</h3>
              <>
                {
                  logoSlide ?
                    <section className="first-page-text" style={{
                      'clipPath': `circle(${scrollValue}px at center center)`, 'left': `${36 - logoValue / 5}%`,
                    }}>
                    </section>

                    :

                    <section className="first-page-text" style={{
                      'clipPath': `circle(${scrollValue}px at center center)`,
                    }}>
                    </section>
                }
              </>              */}

              <AboutMe />
              <div className="container">
                <FinalPage />
              </div>
            </>
        }
      </section>
    </>
  )


}
export default PageScroll
