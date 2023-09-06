import React from 'react' // import NavBar from '../navBar/nB-index'
import Diagram from './Diagram'
import UmVideo from './UmVideo'
import UmImage from './UmImage'

import ChiefConfrontation from '../../images/tanzaniaVideos/ChiefConfrontation.mov'
import bubblesRoles from '../../images/tanzaniaImages/bubblesRoles.png'
import entranceDiagram from '../../images/tanzaniaImages/entranceDiagram.png'
import RoofStreetDiagram from '../../images/tanzaniaImages/RoofStreetDiagram.png'
import SchoolSection from '../../images/tanzaniaImages/SchoolSection.png'
import SchoolPlan from '../../images/tanzaniaImages/SchoolPlan.png'
import Model from '../../images/tanzaniaImages/Model.png'
import ngoSize from '../../images/tanzaniaImages/ngoSize.png'

function Chapter3() {
  return (
    <>
      <section className="sections">
        <Diagram content={bubblesRoles} />
      </section>
      <section className="sections">
        <UmVideo content={ChiefConfrontation} />
      </section>
      <section className="sections">
        <UmImage content={entranceDiagram} />
      </section>
      <section className="sections">
        <UmImage content={RoofStreetDiagram} />
      </section>
      <section className="sections">
        <UmImage content={SchoolSection} />
      </section>
      <section className="sections">
        <UmImage content={SchoolPlan} />
      </section>
      <section className="sections">
        <UmImage content={Model} />
      </section>
      <section className="sections">
        <Diagram content={ngoSize} />
      </section>
      {/* <section className="sections">
        <Diagram content={ngoSize} />
      </section> */}
    </>
  )
}
export default Chapter3