import React from 'react'

import uol from '../../images/landingPageImages/iconsGifs/UoL.png'
import write from '../../images/landingPageImages/iconsGifs/intro-write.gif'
import arch from '../../images/landingPageImages/iconsGifs/intro-arch.gif'
import art from '../../images/landingPageImages/iconsGifs/intro-art.gif'
import gd from '../../images/landingPageImages/iconsGifs/intro-gd.gif'
import fiver from '../../images/landingPageImages/iconsGifs/Fiverr.png'
import adobe from '../../images/landingPageImages/iconsGifs/Adobe.png'
import wordPress from '../../images/landingPageImages/iconsGifs/Wordpress.png'

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
                    <p>Tobi has recently finished his undergraduate degree, in which he studied BA (Hons) Architecture at the University of Liverpool.</p>
                    <p>He is due to start his Masters in Architecture this coming September in London, with the hope that this continues his pursuit towards accreditation.</p>
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
                    <p>Tobi has been a freelance Graphic Designer for 3+ years. He transitioned his skillset in Architecture to Graphic Design to provide a professional service.</p>
                    <p>He used the Fiverr platform in creating logo designs, banner designs and animations. Since starting on the platform in October 2020, Tobi has dealt with over 50 clients from all over the world and maintained a 5-star rating.</p>
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
                    <p>Tobi is known to speak his mind and make it known where he stands in certain situations (respectfully).</p>
                    <p>In 2018 he started a blog in which he spoke about socio-economic problems that his generation face.</p>
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
                    <p>Tobi is inspired by multiple types of art, from surrealism to satirical comic drawings, his eye for art is ever-widening.</p>
                    <p> Recently he has been particularly interested in Pop Art and the capabilities of doing so using geometrical shapes.He also likes to experiment with collages that mix real images as well as hand-drawn pictures.</p>
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