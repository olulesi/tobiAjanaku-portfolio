import React from 'react' // import NavBar from '../navBar/nB-index'
import UmVideo from './UmVideo'
import Orientation from './Orientation'
import Breakdown from './Breakdown'
import Overview from './Overview'
import Timetable from './Timetable'
import UmTeam from './UmTeam'
import UmFarm from './UmFarm'
import UmSchool from './UmSchool'
import UmPlayground from './UmPlayground'
import Chapter2 from './Chapter2'

//videos
import AmothersPrayer from '../../images/tanzaniaVideos/mothersPrayer.mov'
import convoAtTheHub from '../../images/tanzaniaVideos/convoAtTheHub2.mov'
import Initiation from '../../images/tanzaniaVideos/initiation.mov'



function CreativeRetrofit() {


  return (
    <>
      <div className="section-container">
        <div className="section-container">
          <section className="sections">
            <UmVideo content={AmothersPrayer} />
          </section>
          <section className="sections">
            <Orientation />
          </section>
          <section className="sections">
            <Breakdown />
          </section>
          `<section className="sections">
            <Overview />
          </section>`
          `<section className="sections">
            <Timetable />
          </section>`
          `<section className="sections vid">
            <UmVideo content={Initiation} />
          </section>`
          `<section className="sections">
            <UmTeam />
          </section>`
          `<section className="sections">
            <UmFarm />
          </section>`
          <section className="sections">
            <UmSchool />
          </section>
          <section className="sections">
            <UmPlayground />
          </section>
          <section className="sections">
            <Orientation />
          </section>
          <section className="sections">
            <UmVideo content={convoAtTheHub}/>
          </section>
          <Chapter2 />
        </div>
      </div>
      
    </>
  )
}
export default CreativeRetrofit
