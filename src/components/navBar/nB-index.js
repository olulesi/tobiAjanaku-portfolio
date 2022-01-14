import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'


import TALogo from '../../images/logos/ta.png'

function NavBar() {

  const [menuOpen, setMenuOpen] = React.useState(false)

  const menuToggleHandler = () => {
    setMenuOpen(p =>!p)
  }


  console.log(setMenuOpen)
  return (

    <>
      <header className='nav-header'>
        <div className='nav-content'>
          <img src={TALogo} alt="Tobi Ajanaku" />
          <nav className={`nav-toggle-content startMenu ${menuOpen ? 'isMenu' : ''}`}>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Architecture</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
            </ul>
          </nav>
          <div className='nav-toggleNav'>
            {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler} />}
          </div>
        </div>
      </header>
    </>
  )

}
export default NavBar