import React from 'react'
import umTimetable from '../../images/tanzaniaImages/umtimetable1.png'

function Timetable() {
  return (
    <>
      <div className="dots-container timetable-container">
        <div className="umTimetable-container">
          <img src={umTimetable} alt="sauce gardener" className="" />
        </div>
        <div className="umojaText-container timetable">
          <p>
            Throughout the duration of my placement I was mainly working in isolation. The NGO was rather small and in the process of developing. This meant that aside from the volunteers the rest of the main figure heads still had other obligations and jobs to attend too. This meant that I was left to my own accord when it came to planning trips and proposing strategies for engagement with the community. Despite the NGO still being established, they had cultivated a strong network of people within the community that have identified themselves as pillars, these people are ready to be trained or train in order to preserve and elongate the existing knowledge.
            <br></br>
            <br></br>
          In the course of my placement, I worked in a variety of capacities. We organized training sessions, site visits, community gatherings, and design workshops. I communicated with my supervisor primarily through zoom meetings. Together, my coworkers and I were able to efficiently organize all of these things thanks to our plans and schedules. My supervisor taught me a lot about managing people, and she also contributed to a positive work environment.
          </p>
        </div>
      </div>
    </>
  )
}
export default Timetable
