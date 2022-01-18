import React from 'react'

import { Link } from 'react-router-dom'
import { AiFillFolder } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

import { moreInfoData } from '../architecture/wellnessCentre/moreInfoData'

function MoreInfo() {

  const [sidebar, setSidebar] = React.useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className='moreInfo-container'>
        <div className='moreInfo'>
          <Link to='#' className='moreInfo-button'>
            <AiFillFolder onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'info-menu live' : 'info-menu'}>
          <ul className='info-menu-items' onClick={showSidebar}>
            <li className='moreInfo-toggle'>
              <Link to='#' className='moreInfo-button'>
                <AiOutlineClose />
              </Link>
            </li>
            {moreInfoData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <img src={item.image} />
                  <span>{item.title}</span>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )

}
export default MoreInfo