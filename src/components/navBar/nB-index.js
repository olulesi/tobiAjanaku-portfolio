import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'


import TALogo from '../../images/logos/ta.png'

function NavBar() {

  const [menuOpen, setMenuOpen] = React.useState(false)
  const [outro, setOutro] = React.useState(false)

  React.useEffect(() => {
    setOutro(false)
    console.log(outro)
  },[])

  const menuToggleHandler = () => {
    setMenuOpen(p =>!p)
    setOutro(true)
  }


  // console.log(menuOpen)
  // console.log(outro)
  return (

    <>
      <header className='nav-header'>
        <div className='nav-content'>
          <img src={TALogo} alt="Tobi Ajanaku" />
          <nav className={`nav-toggle-content startMenu ${menuOpen ? 'isMenu' : `${outro ? 'noMenu' : ''}`}`}>
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