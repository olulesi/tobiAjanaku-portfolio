import React from 'react'
import logo from '../images/logo.png'
import bkImg from '../images/Desktop.jpg'
import dam from '../images/mainImages/Dam.jpg'
import tog from '../images/mainImages/FemmeFatale.jpg'
import hand from '../images/mainImages/Hands.jpg'
import fire from '../images/mainImages/Fire.jpg'
import pod from '../images/mainImages/Pod.jpg'
import garden from '../images/mainImages/Garden.jpg'

function Mouse() {

  const [xValue, setXvalue] = React.useState(0)
  const [yValue, setYvalue] = React.useState(0)

  React.useEffect(() => {
    const parallax = (e) => {
      setXvalue(e.clientX)
      setYvalue(e.clientY)
    }

    window.addEventListener('mousemove', parallax)

  }, [])


  return (

    <>
      <header className="main-body">
        <div className="container1" style={{ 
          backgroundImage: `url(${bkImg})`,
        }}>
          <div className="details">
            <div className="logo-wrapper">
              <img src={logo} alt="Brand Logo" />
            </div>
            <div className="message-wrapper">
              <p>
                Coming Soon <br />
                <span>Got Something In the works ...</span>
                <br />
                <span>Stay Tuned</span>

              </p>
            </div>
          </div>
          <div className="img1 img" style={{ backgroundImage: `url(${tog})`, 'transform': `translateX(${(xValue * 19) / 250}px) translateY(${(yValue * 19) / 250}px)` }}></div>
          <div className="img2 img" style={{ backgroundImage: `url(${hand})`,'transform': `translateX(${(xValue * 19) / 250}px) translateY(${(yValue * 19) / 250}px)` }}></div>
          <div className="img3 img" style={{ backgroundImage: `url(${pod})`,'transform': `translateX(${(xValue * 44) / 250}px) translateY(${(yValue * 28) / 250}px)` }}></div>
          <div className="img4 img" style={{ backgroundImage: `url(${garden})`, 'transform': `translateX(${(xValue * 36) / 250}px) translateY(${(yValue * 36) / 250}px)` }}></div>
          <div className="img5 img" style={{ backgroundImage: `url(${fire})`, 'transform': `translateX(${(xValue * 28) / 250}px) translateY(${(yValue * 28) / 250}px)` }}></div>
          <div className="img6 img" style={{ backgroundImage: `url(${dam})`, 'transform': `translateX(${(xValue * 44) / 250}px) translateY(${(yValue * 44) / 250}px)` }}></div>
        </div>
      </header>
    </>
  )


}
export default Mouse