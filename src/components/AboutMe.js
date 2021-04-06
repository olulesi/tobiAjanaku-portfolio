import React from 'react'

import uol from '../images/iconsGifs/UoL.png'
import write from '../images/iconsGifs/intro-write.gif'
import arch from '../images/iconsGifs/intro-arch.gif'
import art from '../images/iconsGifs/intro-art.gif'
import gd from '../images/iconsGifs/intro-gd.gif'
import fiver from '../images/iconsGifs/Fiverr.png'
import adobe from '../images/iconsGifs/Adobe.png'
import wordPress from '../images/iconsGifs/Wordpress.png'

function AboutMe() {

  return (

    <>
      <div className="black-container">
        <div className="section2-wrapper">
          <div className="box-area">
            <div className="category-container arch">
              <div className="category">
                <div className="category-wrapper">
                  <div className="info">
                    <div
                      className="info-logo">
                      <img src={arch} />
                    </div>
                  </div>
                </div>
                <div className="logo-wrapper">
                  <div
                    className="info-logo">
                    <img src={uol} />
                  </div>
                </div>
                <div className="info-wrapper">
                  <div className="info-text">
                    <p>Student at XJTLU/ graduate of the University of Liverpool specialising in architecture practice.</p>
                    <p>I am skilled in special programs and design development is a strong interest for me.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="category-container gd">
              <div className="category">
                <div className="category-wrapper">
                  <div className="info">
                    <div
                      className="info-logo">
                      <img src={gd} />
                    </div>
                  </div>
                </div>
                
                <div className="fiver-wrapper">
                  <img src={fiver} />
                </div>
              
                <div className="info-wrapper">
                  <div className="info-text">
                    <p>Student at XJTLU/ graduate of the University of Liverpool specialising in architecture practice.</p>
                    <p>I am skilled in special programs and design development is a strong interest for me.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="category-container write">
              <div className="category">
                <div className="category-wrapper">
                  <div className="info">
                    <div
                      className="info-logo">
                      <img src={write} />
                    </div>
                  </div>
                </div>
                <div className="wordPress-wrapper">
                  <img src={wordPress} />
                </div>
                <div className="info-wrapper">
                  <div className="info-text">
                    <p>Student at XJTLU/ graduate of the University of Liverpool specialising in architecture practice.</p>
                    <p>I am skilled in special programs and design development is a strong interest for me.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="category-container art">
              <div className="category">
                <div className="category-wrapper">
                  <div className="info">
                    <div
                      className="info-logo">
                      <img src={art} />
                    </div>
                  </div>
                </div>
                <div className="logo-wrapper">
                  <div
                    className="info-logo">
                    <img src={adobe} />
                  </div>
                </div>
                <div className="info-wrapper">
                  <div className="info-text">
                    <p>Student at XJTLU/ graduate of the University of Liverpool specialising in architecture practice.</p>
                    <p>I am skilled in special programs and design development is a strong interest for me.</p>
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