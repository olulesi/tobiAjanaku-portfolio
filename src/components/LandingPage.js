import React from 'react'
import logo from '../images/logo.png'

import ParallaxMousemove from 'react-parallax-mousemove'

function LandingPage() {

  return (
    <>
      <section className="landing">
        <div className="image-wrapper">
          <div className="img-container1"></div>
          <div className="img-container2"></div>
          <div className="img-container3"></div>
        </div>
        <div className="content-wrapper">
          <div className="logo-wrapper">
            <img src={logo} alt="Brand Logo" />
          </div>
          <div className="message-wrapper">
            <p>
              Coming Soon <br />
              Got Something In the works ...<br />
              Stay Tuned
            </p>
          </div>
        </div>
        <div className="image-wrapper">
          <div className="img-container4"></div>
          <ParallaxMousemove >
            <div className="img-container5"></div>
            <ParallaxMousemove.Layer config={{
              xFactor: 233,
              yFactor: 233,
              springSettings: {
                stiffness: 40,
                damping: 100,
              },
            }} ></ParallaxMousemove.Layer>
          </ParallaxMousemove>
          <div className="img-container6"></div>
        </div>
      </section>
    </>
  )


}
export default LandingPage
