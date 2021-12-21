import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
// import { AiOutlineClose } from 'react-icons/ai'

import TALogo from '../../images/logos/ta.png'

function NavBar() {

  return (

    <>
      <header className='nav-header'>
        <div className='nav-logo'>
          <img src={TALogo} alt="Tobi Ajanaku" />
        </div>
        <div className='nav-toggleNav'>
          <BiMenuAltRight />
        </div>
      </header>
    </>
  )

}
export default NavBar