import React from 'react'

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
        <div className="container1">
          <div className="details">
            <div className="logo-wrapper">
              <img src='' alt="Brand Logo" />
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
          <div className="img1 img" style={{ 'transform': `translateX(${(xValue * -9) / 250 }px) translateY(${(yValue * -9 ) / 250}px)` }}></div>
          <div className="img2 img" style={{ 'transform': `translateX(${(xValue * 6) / 250 }px) translateY(${(yValue * 6) / 250}px)` }}></div>
          <div className="img3 img" style={{ 'transform': `translateX(${(xValue * 4) / 250 }px) translateY(${(yValue * 4) / 250}px)` }}></div>
          <div className="img4 img" style={{ 'transform': `translateX(${(xValue * -6) / 250 }px) translateY(${(yValue * -6) / 250}px)` }}></div>
          <div className="img5 img" style={{ 'transform': `translateX(${(xValue * 8) / 250 }px) translateY(${(yValue * 8) / 250}px)` }}></div>
          <div className="img6 img" style={{ 'transform': `translateX(${(xValue * -4) / 250 }px) translateY(${(yValue * -4) / 250 }px)` }}></div>
        </div>
      </header>
    </>
  )


}
export default Mouse