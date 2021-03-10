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
        <ul>{dayHours.join(" - ")}</ul>
      )
  }

  function formatTime(time){
    const ampm = time < 12 ? "AM" : "PM"
    return (
      `${time%12}:00${ampm}`
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