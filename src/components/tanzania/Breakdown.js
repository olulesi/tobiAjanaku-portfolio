import React from 'react'
import umBreakdown from '../../images/tanzaniaImages/umbreakdown.png'

function Breakdown() {
  return (
    <>
      <div className="breakdown-container">
        <div className="leftSide-names">
          <div className="joseph-container">
            <h3 className="umName">joseph mbowe</h3>
            <p>Joseph is the organizations founder. Being a resident of Arusha who has spent his entire life there, he has seen firsthand the difficulties in providing education to the community and has made it his goal to guarantee that more kids have access to education.</p>
          </div>
          <div className="joseph-container">
            <h3 className="umName">qaim rajwani</h3>
            <p>The coordinator of the programme is Qaim. From helping develop the school curriculum to growing the overall business, his responsibility is to make sure that the organisation is operating efficiently and that the goals of capacity building and community development are at the forefront of every outcome.</p>
          </div>
          <div className="joseph-container">
            <h3 className="umName">innocent (the farmer)</h3>
            <p>The permaculture farms are managed by the farmer, Innocent. He is among the community pioneers who have received training in growing food for the school and certain residents.</p>
          </div>
        </div>
        <div className="umImg-container">
          <img src={umBreakdown} alt="sauce gardener" className="" />
        </div>
        <div className="leftSide-names right-side">
          <div className="joseph-container">
            <h3 className="umName">teacher jessica</h3>
            <p>The two schools that Umoja Maono operates in Sinoni are led by teachers Jessica and Joana. They are a result of capacity building once more. In order to grow the NGO operation, they are now training teachers in the hope that their knowledge can then be dispersed around the village.</p>
          </div>
          <div className="joseph-container">
            <h3 className="umName">sara stojkanovic</h3>
            <p>Sara is the lead architect. She works to make sure local builders have access to the use of sustainable building techniques. Her motivation centres on collaborating with the community in a way that enables them to learn and develop things on their own without assistance from outsiders. She wants to provide local builders with knowledge about cutting-edge materials so they can be independent decision-makers.Sara is the lead architect. She works to make sure local builders have access to the use of sustainable building techniques. Her motivation centres on collaborating with the community in a way that enables them to learn and develop things on their own without assistance from outsiders. She wants to provide local builders with knowledge about cutting-edge materials so they can be independent decision-makers.</p>
          </div>
          <div className="joseph-container">
            <h3 className="umName">chief elebereki</h3>
            <p>The chiefs serve as a symbol of the linkages to the Maasai communities in Oldonyasambu. My project was completed here. They were the backbones of their towns, and they welcomed us into their bomas to learn about their way of life. By doing so, we were able to understand more about what they needed and how we might best assist them.</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Breakdown
