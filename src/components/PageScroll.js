import React from 'react'

import IntroSpinner from './IntroSpinner'
import Mouse from './Mouse'
import 'react-typist/dist/Typist.css'

import Typical from 'react-typical'

function PageScroll() {

  const [scrollValue, setScrollValue] = React.useState(0)
  const [loading, setLoading] = React.useState(false)
  const [typing, setTyping] = React.useState(true)




  React.useEffect(() => {
    setLoading(true)
    setTyping(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000) 
    const handleIsScrolling = () => {
      setScrollValue(window.scrollY)
      if (window.scrollY > 0){
        setTyping(false)
      } else {
        setTyping(true)
      }

    }
    window.addEventListener('scroll', handleIsScrolling)

  }, [])



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
                          steps={['Hi there,', 1000, 'Welcome to my Construction Page.', 1000, 'Portfolio is on the way this is just a litte promo.', 1000, 'Scroll Down.']}
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
              <h3 className="text" style={{ 'left': `${100 - scrollValue / 5}%` }}>Hey There Welcome to My Portfolio</h3>
              <section className="first-page-text" style={{ 'clipPath': `circle(${scrollValue}px at center center)` }}>
                <h3 className="inner-text" style={{ 'left': `${100 - scrollValue / 5}%` }}>Hey There Welcome to My Portfolio</h3>
              </section>
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
