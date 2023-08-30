import React from 'react' // import NavBar from '../navBar/nB-index'

function Diagram(props) {
  return (
    <>
      <div className='dots-container'>
        <img
          src={props.content}
          alt=''
          className=''
        />

      </div>
    </>
  )
}
export default Diagram