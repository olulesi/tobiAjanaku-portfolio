import React from 'react'

import hand from '../images/mainImages/hand.jpeg'
import damned from '../images/mainImages/damned.jpeg'
import pod from '../images/mainImages/interior.jpeg'
import garden from '../images/mainImages/garden.jpeg'

import AOS from 'aos'
import 'aos/dist/aos.css'


import Footer from './Footer'

function LandingPage() {

  // const [fade, setFade] = React.useState(false)

  // const [title, setTitle] = React.useState('Hover For Title')
  const [modal, setModal] = React.useState(false)

  const handleClick = () => setModal(!modal)

  console.log(modal)

  // const handleClose = () => {
  //   if (modal) {
  //     setModal(!modal)
  //   }
  // }
  AOS.init()

  return (
    <>
      <section className="landing">
        <div>
          <div onClick={handleClick} className="img-container">
            <img src={hand} alt="cool" />
          </div>
          <div className="interest-description">
            <p>I enjoy drawing and comp2020. </p>
          </div>
        </div>
        <div>
          <div onClick={handleClick} className="img-container">
            <img src={damned} alt="cool" />
          </div>
          {/* <div className="interest-description">
            <p>I enjoy drawing and complemented with my daily routine I was able to draw everyday for a whole year missing only one day from December 18th 2019 to 2020. </p>
          </div> */}
        </div>
        <div>
          <div onClick={handleClick} className="img-container">
            <img src={pod} alt="cool" />
          </div>
          {/* <div className="interest-description">
            <p>I enjoy drawing and complemented with my daily routine I was able to draw everyday for a whole year missing only one day from December 18th 2019 to 2020. </p>
          </div> */}
        </div>
        <div>
          <div onClick={handleClick} className="img-container">
            <img src={garden} alt="cool" />
          </div>
          {/* <div className="interest-description">
            <p>I enjoy drawing and complemented with my daily routine I was able to draw everyday for a whole year missing only one day from December 18th 2019 to 2020. </p>
          </div> */}
        </div>
      </section>
      <div onClick={handleClick} className={`${modal ? 'modals open' : 'modals'}`}>
        <img src={hand} alt="jump" className={`${modal ? 'full-img open' : 'full-img open'}`} />
        <p className="caption">Hand on the Moon</p>
      </div>
      <form data-aos="fade-up" data-aos-delay="100" className="column is-10 is-offset-1 contact-form">
        <div className="field form-field">
          <div className="field">
            <div className="control input-animation">
              <input
                className="input"
                placeholder="Name goes here"
                name="name"
              />
            </div>
          </div>
          <div className="field">
            <div className="control emailInput-animation">
              <input
                className="input"
                placeholder="Your email goes here"
                name="email"
              />
            </div>
          </div>
          <div className="field">
            <div className="control textInput-animation">
              <textarea
                className="textarea"
                placeholder="Your message goes here"
                name="comment"
                id="comment"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-danger button-form ">Submit My Review</button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  )


}
export default LandingPage
