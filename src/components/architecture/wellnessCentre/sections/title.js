import React from 'react'
import mainImg from '../../../../images/architectureImages/wcImages/mainEntrance.png'


function Title() {

  return (
    <>
      <div className='s-one'>
        <div className='title-container'>
          <h1 className='title-content'>
            Wellness Centre
          </h1>
          <img src={mainImg} />
        </div>
        <footer className='pageName'>
          <h6>Wellness Centre</h6>
        </footer>
      </div>
    </>
  )

}
export default Title