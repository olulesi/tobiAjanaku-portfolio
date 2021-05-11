import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Columns() {

  return (

    <>
      <footer>
        <div className="chat-message">
          <p>
            I am currently open to Full Time or Freelance opportunities.
          </p>
        </div>
        <div className="footer-icons">
          <div className="footer-icon">
            <a href="https://www.instagram.com/thetbdesigns/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social" icon={faInstagram} />
            </a>
          </div>
          <div className="footer-icon">
            <a href="https://www.linkedin.com/in/tobi-ajanaku-69b79a1b3/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social" icon={faLinkedinIn} />
            </a>
          </div>
          <div className="footer-icon">
            <a href="mailto: tobiajanaku1@gmail.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social" icon={faEnvelope} />
            </a>
          </div>
        </div>
        <div className="copyright-wrapper">
          <p>Built by 
            <a href="https://www.fiverr.com/tobilesi?up_rollout=true" target="_blank" rel="noreferrer">
              <span className="creator-wrapper">Tobi Lesi</span>
            </a>
             using React © 2021
          </p>
        </div>

      </footer>
    </>
  )


}
export default Columns