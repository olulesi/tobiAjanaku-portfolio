import React from 'react' // import NavBar from '../navBar/nB-index'
import Diagram from './Diagram'

import projectImpact from '../../images/tanzaniaImages/projectImpact.png'
import practiceImpact from '../../images/tanzaniaImages/practiceImpact.png'


function PostPlacement() {
  return (
    <>
      <section className="sections">
        <Diagram content={projectImpact} />
      </section>
      <section className="sections">
        <Diagram content={practiceImpact} />
      </section>
    </>
  )
}
export default PostPlacement