import React from 'react'
import conceptImg from '../../../../images/architectureImages/wcImages/ConceptStrategy.png'


function Concept() {

  const conceptStrategy = [
    {
      id: 0,
      image: conceptImg,
      title: 'Concept Strategy',
      content: 'Co-living, a modern day concept that aims to achieve sustainable and affordable ways of living. I wanted to target this co-living scheme towards creative university students and young adults that have started work within the creative field.',
    }
  ]

  return (
    <>
      <div className='s-two'>
        {conceptStrategy.map((concept) => (
          <div
            className="concept-container" key={concept.id}>
            <div className='concept-image'>
              <img src={concept.image} />
            </div>
            <div className='concept-title'>
              <h2>{concept.title}</h2>
            </div>
            <div className='concept-text'>
              <p>{concept.content}</p>
            </div>
          </div>
        ))}
        <footer className='pageName'>
          <h6>Wellness Centre</h6>
        </footer>
      </div>
    </>
  )

}
export default Concept