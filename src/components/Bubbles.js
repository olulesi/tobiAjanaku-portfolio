import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

// import draft from '../images/bubbleImages/textFormat.jpg'
import tblogo from '../images/landingPageImages/bubbleImages/tbLogoIcon.png'
import line1 from '../images/landingPageImages/bubbleImages/line1.png'
import line2 from '../images/landingPageImages/bubbleImages/line2.png'
import line3 from '../images/landingPageImages/bubbleImages/line3.png'
import line4 from '../images/landingPageImages/bubbleImages/line4.png'
import line5 from '../images/landingPageImages/bubbleImages/line5.png'

import Tilt from 'react-parallax-tilt'

import TAWhite from '../images/landingPageImages/TAwhite.png'
// import TABlack from '../images/TABlack.png'



function Bubbles() {

  // const [text, setText] = React.useState(false)

  const [sideBar, setSideBar] = React.useState(null)

  const showSidebar = () => setSideBar(!sideBar)




 

  // React.useEffect(() => {
  //   // const handleIsScrolling = () => {
  //   //   // window.scrollY <= 30 && setText(true)
  //   // }
  //   // window.addEventListener('scroll', handleIsScrolling)
  // }, [messageNo])

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)

  // if (loading) {
  //   React.useEffect(() => {
  //     messageNo < images.length &&
  //       setTimeout(() => {
  //         setTyping(false)
  //         setMessageNo(messageNo + 1)
  //         console.log(images[messageNo])
  //         setTimeout(() => {
  //           setTyping(true)
  //         }, 1000)
  //       }, 2500)
  //   }, [messageNo])
  // }

  return (

    <>
      <div className="bubbles">
        <div className="i-message">
          <Tilt options={{ glare: true, scale: 4, max: 50, speed: 400 }}>
            <div className="section1-wrapper">
              <div className="tb-wrapper" >
                <div className="tb-logo" style={{ backgroundImage: `url(${tblogo})` }}>
                </div>
              </div>
              <div className="message-wrapper">
                <div className="line one" style={{ backgroundImage: `url(${line1})` }}>
                </div>

                <div className="line two" style={{ backgroundImage: `url(${line2})` }}>
                </div>

                <div className="line three" style={{ backgroundImage: `url(${line3})` }}>
                </div>

                <div className="line four" style={{ backgroundImage: `url(${line4})` }}>
                </div>
                
                <div className="line five" style={{ backgroundImage: `url(${line5})` }}>
                </div>
                {/* {
                  typing && messageNo < images.length ?
                    <div className="typing-bubble messageIn" style={{ backgroundImage: `url(${typingBubble})` }}>
                      <div className="dot one"></div>
                      <div className="dot two"></div>
                      <div className="dot three"></div>
                    </div>
                    :
                    <div className="typing-bubble messageOut" style={{ backgroundImage: `url(${typingBubble})` }}>
                    </div>
                } */}
              </div>
            </div>
          </Tilt>

          <div className="NavBar">
            <div className="navBar-wrapper">
              <div className="navBar-logo" onClick={showSidebar}>
                <img src={TAWhite} alt="Brand Logo" />
              </div>
              <ul className={sideBar ? 'contact-menu active' : 'contact-menu inactive'} >
                <li>
                  <a href="https://www.instagram.com/thetbdesigns/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="social" icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/tobi-ajanaku-69b79a1b3/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="social" icon={faLinkedinIn} />
                  </a>
                </li>
                <li>
                  <a href="mailto: tobiajanaku1@gmail.com" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="social" icon={faEnvelope} />
                  </a>
                </li>
              </ul>
              {/* <div className="navBar-inverse" onClick={showSidebar}>
                <img src={TABlack} alt="Brand Logo"/>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scroll-down"></div>
        {/* <div className="mouse"></div> */}
      </div>
    </>
  )


}
export default Bubbles
