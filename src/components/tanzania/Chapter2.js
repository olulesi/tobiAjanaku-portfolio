import React from 'react'
import UmVideo from './UmVideo'
import Diagram from './Diagram'
import School from './School'
import Orientation from './Orientation'

// videos
import meetingMaasai from '../../images/tanzaniaVideos/meetingMaasai.mp4'
import waterBuilders from '../../images/tanzaniaImages/waterBuilders.png'
import classRoom from '../../images/tanzaniaImages/classRoom.png'
import chiefMeet from '../../images/tanzaniaImages/chiefMeet.png'
import Concrete from '../../images/tanzaniaImages/Concrete.png'
import highfive from '../../images/tanzaniaImages/highfive.png'
//images



function Chapter2() {
  return (
    <>
      <section className="sections">
        <UmVideo content={meetingMaasai} />
      </section>
      <section className="sections">
        <Diagram content={classRoom}  />
      </section>`
      `<section className="sections">
        <Diagram content={waterBuilders} />
      </section>`
      `<section className="sections">
        <Diagram content={chiefMeet} />
      </section>`
      `<section className="sections">
        <School />
      </section>`
      <section className="sections">
        <Orientation />
      </section>
      `<section className="sections">
        <Diagram content={Concrete} />
      </section>`
      <section className="sections">
        <Orientation />
      </section>
      `<section className="sections">
        <Diagram content={highfive} />
      </section>`
    </>
  )
}
export default Chapter2
