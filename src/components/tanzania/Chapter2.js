import React from 'react'
import UmVideo from './UmVideo'
import Diagram from './Diagram'

// videos
import meetingMaasai from '../../images/tanzaniaVideos/meetingMaasai.mov'
import waterBuilders from '../../images/tanzaniaImages/waterBuilders.png'
import classRoom from '../../images/tanzaniaImages/classRoom.png'

//images



function Chapter2() {
  return (
    <>
      <section className="sections">
        <UmVideo content={meetingMaasai} />
      </section>
      <section className="sections">
        <Diagram content={classRoom}  />
      </section>
      <section className="sections">
        <Diagram content={waterBuilders} />
      </section>
    </>
  )
}
export default Chapter2
