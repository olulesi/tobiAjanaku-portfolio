import React from 'react'

import damStreet from '../images/mainImages/damStreets.jpeg'
import tog from '../images/mainImages/femme.jpeg'
import hand from '../images/mainImages/hand.jpeg'
import damned from '../images/mainImages/damned.jpeg'
import pod from '../images/mainImages/interior.jpeg'
import garden from '../images/mainImages/garden.jpeg'

import tobi from '../images/tobiajanaku.png'

function FinalPage() {

  const [title, setTitle] = React.useState('Hover For Title')

  const galleryImages = [
    {
      id: 0,
      image: tog,
      title: 'Femme Fetale',
      subtitle: 'This is an album cover created for TOG',
    },
    {
      id: 1,
      image: damned,
      title: 'The Damned',
      subtitle: 'Another commissioned Album Cover for TOG. The artwork and song were made in collaboration in response to the recent events that took place in Nigeria (ENDSARS)',
    },
    {
      id: 2,
      image: hand,
      title: 'Hand On The Moon',
      subtitle: 'A personal piece that I created in my free time. It combines graphic art with a conventional hand-drawing style',
    },
    {
      id: 3,
      image: damStreet,
      title: 'Dam Streets',
      subtitle: 'Another personal piece that was inspired by my trip to Amsterdam',
    },
    {
      id: 4,
      image: garden,
      title: 'Stylistic Collage Render',
      subtitle: 'This is an external render from one of my design modules. This collage render style shows particular freedom that photorealistic renders can sometimes neglect.',
    },
    {
      id: 5,
      image: pod,
      title: 'Prefabricated Room Interiors',
      subtitle: 'A proposed interior design for a prefabricated room. My focus was minimalism, I wanted to create a space where everything was within touching distance.',
    }
  ]

  return (

    <>
      <section className="finalPage-wrapper">
        <div className="container-general">
          <div className="brand-title" >
            <img src={tobi} alt="Brand Logo" />
          </div>
          <div className="gallery-title">
            <div className="gallery-name">
              <h2>{title.title}</h2>
            </div>
            {/* <div className="gallery-subtitle">
              <h3>{title.subtitle}</h3>
            </div> */}
          </div>
          <div className="gallery-wrap wrap-effect-1">
            {galleryImages.map((user) => (
              <div
                onMouseEnter={
                  () => setTitle(galleryImages[user.id])
                }
                className="item" key={user.id}
                style={{
                  backgroundImage: `url(${user.image})`,
                }}></div>
            ))}
          </div>
        </div>
      </section>
    </>
  )


}
export default FinalPage