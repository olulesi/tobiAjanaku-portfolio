import React from 'react'

// import draft from '../images/bubbleImages/textFormat.jpg'
import tblogo from '../images/bubbleImages/tbLogo1.png'
import line1 from '../images/bubbleImages/line1.png'
import line2 from '../images/bubbleImages/line2.png'
import line3 from '../images/bubbleImages/line3.png'
import line4 from '../images/bubbleImages/line4.png'
import line5 from '../images/bubbleImages/line5.png'
import typingBubble from '../images/bubbleImages/bubbleTyping.png'



function Bubbles(loading) {

  const [typing, setTyping] = React.useState(true)
  const [messageNo, setMessageNo] = React.useState(0)

  const images = ['image1', 'image2', 'image3', 'image4', 'image5']




  if (loading) {
    React.useEffect(() => {
      messageNo < images.length &&
        setTimeout(() => {
          setTyping(false)
          setMessageNo(messageNo + 1)
          console.log(images[messageNo])
          setTimeout(() => {
            setTyping(true)
          }, 500)
        }, 1000)
    }, [messageNo])
  }

  return (

    <>
      <div className="bubbles">
        <div className="i-message">
          <div className="logo-wrapper" >
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
                <div className="typing-bubble" style={{ backgroundImage: `url(${typingBubble})` }}>
                  <div className="dot one"></div>
                  <div className="dot two"></div>
                  <div className="dot three"></div>
                </div>
                :
                <div className="typing-bubble">
                </div>
            }
          </div>
          <div className="dead-weight">
          </div>
        </div>
        <div className="scroll-down"></div>
        {/* <div className="mouse"></div> */}
      </div>
    </>
  )


}
export default Bubbles
