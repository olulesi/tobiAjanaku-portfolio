import React from 'react'
import Footer from './Footer'

import damStreet from '../images/landingPageImages/mainImages/damStreets.jpeg'
import tog from '../images/landingPageImages/mainImages/femme.jpeg'
import hand from '../images/landingPageImages/mainImages/hand.jpeg'
import damned from '../images/landingPageImages/mainImages/damned.jpeg'
import pod from '../images/landingPageImages/mainImages/interior.jpeg'
import garden from '../images/landingPageImages/mainImages/garden.jpeg'

import tobi from '../images/landingPageImages/tobiajanaku.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

function FinalPage() {

  const [title, setTitle] = React.useState('Hover For Title')

  AOS.init()

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
          <div className="brand-title" data-aos="fade-up">
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
          <div className="gallery-wrap wrap-effect-1" data-aos="fade-up">
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
        <Footer />
      </section>
    </>
  )


}
export default FinalPage