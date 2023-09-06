import React from 'react' // import NavBar from '../navBar/nB-index'
import Diagram from './Diagram'

import spatialPractice from '../../images/tanzaniaImages/spatialPracticeSummary.png'
import unitSummary from '../../images/tanzaniaImages/unitSummary.png'


function PrePlacement() {
  return (
    <>
      <section className="sections">
        <Diagram content={spatialPractice} />
      </section>
      <section className="sections">
        <Diagram content={unitSummary} />
      </section>
    </>
  )
}
export default PrePlacement