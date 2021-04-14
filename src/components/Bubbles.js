import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

// import draft from '../images/bubbleImages/textFormat.jpg'
import tblogo from '../images/bubbleImages/tbLogoIcon.png'
import line1 from '../images/bubbleImages/line1.png'
import line2 from '../images/bubbleImages/line2.png'
import line3 from '../images/bubbleImages/line3.png'
import line4 from '../images/bubbleImages/line4.png'
import line5 from '../images/bubbleImages/line5.png'
import typingBubble from '../images/bubbleImages/bubbleTyping.png'

import TAWhite from '../images/TAwhite.png'
// import TABlack from '../images/TABlack.png'



function Bubbles(loading) {

  const [typing, setTyping] = React.useState(true)
  const [messageNo, setMessageNo] = React.useState(0)

  const images = ['image1', 'image2', 'image3', 'image4', 'image5']

  const [sideBar, setSideBar] = React.useState(null)

  const showSidebar = () => setSideBar(!sideBar)

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)

  if (loading) {
    React.useEffect(() => {
      messageNo < images.length &&
        setTimeout(() => {
          setTyping(false)
          setMessageNo(messageNo + 1)
          console.log(images[messageNo])
          setTimeout(() => {
            setTyping(true)
          }, 1000)
        }, 2500)
    }, [messageNo])
  }

  return (

    <>
      <div className="bubbles">
        <div className="i-message">
          <div className="tb-wrapper" >
            <div className="tb-logo" style={{ backgroundImage: `url(${tblogo})` }}>
            </div>
          </div>
          <div className="message-wrapper">
            {
              messageNo > 0 &&
              <div className="line one" style={{ backgroundImage: `url(${line1})` }}>
              </div>
            }
            {
              messageNo > 1 &&
              <div className="line two" style={{ backgroundImage: `url(${line2})` }}>
              </div>
            }
            {
              messageNo > 2 &&
              <div className="line three" style={{ backgroundImage: `url(${line3})` }}>
              </div>
            }
            {
              messageNo > 3 &&
              <div className="line four" style={{ backgroundImage: `url(${line4})` }}>
              </div>
            }
            {
              messageNo > 4 &&
              <div className="line five" style={{ backgroundImage: `url(${line5})` }}>
              </div>
            }
            {
              typing && messageNo < images.length ?
                <div className="typing-bubble messageIn" style={{ backgroundImage: `url(${typingBubble})` }}>
                  <div className="dot one"></div>
                  <div className="dot two"></div>
                  <div className="dot three"></div>
                </div>
                :
                <div className="typing-bubble messageOut" style={{ backgroundImage: `url(${typingBubble})` }}>
                  {/* <div className="dot one messageOut"></div>
                  <div className="dot two messageOut"></div>
                  <div className="dot three messageOut"></div> */}
                </div>
            }
          </div>
          <div className="NavBar">
            <div className="navBar-wrapper">
              <div className="navBar-logo" onClick={showSidebar}>
                <img src={TAWhite} alt="Brand Logo"/>
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
