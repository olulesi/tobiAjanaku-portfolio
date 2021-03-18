import React from 'react'

// import uol from '../images/iconsGifs/UoL.png'
import arch from '../images/iconsGifs/intro-arch.gif'

function AboutMe() {

  return (

    <>
      <div className="black-container">
        <div className="category-gif arch" style={{ backgroundImage: `url(${arch})` }}></div>
        <div className="info-wrapper">
          <div className="info">
            <div className="info-logo"></div>
            <div className="info-text"></div>
          </div>
          <div className="info">
            <div className="info-logo"></div>
            <div className="info-text"></div>
          </div>
        </div>
      </div>
    </>
  )


}
export default AboutMe
