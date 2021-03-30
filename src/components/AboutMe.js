import React from 'react'

import uol from '../images/iconsGifs/UoL.png'
import arch from '../images/iconsGifs/intro-arch.gif'
import udemy from '../images/iconsGifs/Udemy.png'
import fiver from '../images/iconsGifs/Fiverr.png'

function AboutMe() {

  return (

    <>
      <div className="black-container">
        <div className="box-area">
          <div className="category-container">
            <div className="category">
              <div className="category-wrapper">
                <div className="info">
                  <div
                    className="info-logo">
                    <img src={arch} />
                  </div>
                </div>
              </div>
              <div className="info-wrapper">
                <div className="info">
                  <div
                    className="info-logo">
                    <img src={uol} />
                  </div>
                  <div
                    className="info-text">
                    <p>Student at XJTLU/ graduate of the University of Liverpool specialising in architecture practice.</p>
                    <p>I am skilled in special programs and design development is a strong interest for me.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category-container">
            <div className="category">
              <div className="category-wrapper">
                <div className="info">
                  <div
                    className="info-logo">
                    <img src={arch} />
                  </div>
                </div>
              </div>
              <div className="info-wrapper">
                <div className="info">
                  <div
                    className="info-logo">
                    <img src={uol} />
                  </div>
                  <div
                    className="info-text">
                    <p>Student at XJTLU/ graduate of the University of Liverpool specialising in architecture practice.</p>
                    <p>I am skilled in special programs and design development is a strong interest for me.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category-container">
            <div className="category">
              <div className="category-wrapper">
                <div className="info">
                  <div
                    className="info-logo">
                    <img src={arch} />
                  </div>
                </div>
              </div>
              <div className="info-wrapper gd">
                <div className="gd-item">
                  <div className="gd-logo" >
                    <img src={udemy} />
                  </div>
                  <div className="gd-content">
                    <p>I am currently studying China Studies as part of my year abroad.</p>
                  </div>
                </div>
                <div className="gd-item">
                  <div className="gd-logo">
                    <img src={fiver} />
                  </div>
                  <div className="gd-content">
                    <p>My goal is to practice my knowledge and learn a new skill set at an architectural practice in London.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AboutMe
