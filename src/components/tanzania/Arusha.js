import React from 'react' // import NavBar from '../navBar/nB-index'
import MothersPrayer from './mothersPrayer'
import Orientation from './Orientation'
import Breakdown from './Breakdown'
import Overview from './Overview'

function CreativeRetrofit() {
  return (
    <>
      <div className="section-container">
        {/* <NavBar /> */}
        <div className="section-container">
          <section className="sections">
            <MothersPrayer />
          </section>
          <section className="sections">
            <Orientation />
          </section>
          `<section className="sections">
            <Breakdown />
          </section>`
          `<section className="sections">
            <Overview />
          </section>`
        </div>
      </div>
    </>
  )
}
export default CreativeRetrofit
