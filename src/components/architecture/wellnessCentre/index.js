import React from 'react'
import NavBar from '../../navBar/nB-index'
import MoreInfo from '../../moreInfo/moreInfo-WC'
import Title from './sections/title'
import Concept from './sections/concept'

function WellnessCentre() {

  return (
    <>
      <div className='section-container'>
        <NavBar />  
        <section className='sections'>
          <Title />
          <MoreInfo />
        </section>
        <section className='sections'>
          <Concept />
        </section>
        <section className='sections s-three'>
          <h1>BITCH</h1>
        </section>
        <section className='sections s-four'>
          <h1>BITCH</h1>
        </section>
        <section className='sections s-five'>
          <h1>BITCH</h1>
        </section>
        <section className='sections s-six'>
          <h1>BITCH</h1>
        </section>
        <section className='sections s-seven'>
          <h1>BITCH</h1>
        </section>
        <section className='sections s-eight'>
          <h1>BITCH</h1>
        </section>
        <section className='sections s-nine'>
          <h1>BITCH</h1>
        </section>
      </div>
    </>
  )

}
export default WellnessCentre