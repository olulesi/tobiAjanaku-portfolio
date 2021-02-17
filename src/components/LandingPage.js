import React from 'react'
import logo from '../images/logo.png'

function LandingPage() {

  return (

    <>
      <section>
        <div className="image-wrapper">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="content-wrapper">
          <div className="logo-wrapper">
            <img src={logo} alt="Brand Logo"/>
          </div>
          <div className="message-wrapper">
            <p>
              Coming Soon <br/>
              Got Something In the works ...<br/>
              Stay Tuned
            </p>
          </div>
        </div>
      </section>
    </>
  )


}
export default LandingPage
