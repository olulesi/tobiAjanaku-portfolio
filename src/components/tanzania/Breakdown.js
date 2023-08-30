import React from 'react'
import umBreakdown from '../../images/tanzaniaImages/umbreakdown.png'

function Breakdown() {
  return (
    <>
      <div className="breakdown-container">
        <div className="leftSide-names">
          <div className="joseph-container">
            <h3 className="umName">joseph mbowe</h3>
          </div>
          <div className="joseph-container">
            <h3 className="umName">joseph mbowe</h3>
          </div>
          <div className="joseph-container">
            <h3 className="umName">joseph mbowe</h3>
          </div>
        </div>
        <div className="umImg-container">
          <img src={umBreakdown} alt="sauce gardener" className="" />
        </div>
        <div className="leftSide-names right-side">
          <div className="joseph-container">
            <h3 className="umName">qaim</h3>
          </div>
          <div className="joseph-container">
            <h3 className="umName">qaim</h3>
          </div>
          <div className="joseph-container">
            <h3 className="umName">qaim</h3>
          </div>
        </div>
      </div>
    </>
  )
}
export default Breakdown
