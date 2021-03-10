import React from 'react'

const BusinessHours = ({business}) => {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

  function displayDayHours(dayIdx) {
      const dayHours = []
      business.operation_hours.forEach(operating_hour =>{
        if(operating_hour.day == dayIdx){
          const formattedTime = formatTime(operating_hour.biz_time)
          dayHours.push(formattedTime)
        }
      })
      if(dayHours.length == 0) dayHours.push("Closed")
      return(
        <ul>{dayHours}</ul>
      )
  }

  function formatTime(time){
    return (
      `${time%12}:00`
    )
  }

  return(
    <ul>
      {days.map((day, idx) =>(
        <li key={day}>
          {day}
          {displayDayHours(idx)}
        </li>
      ))}
    </ul>
  )
}

export default BusinessHours