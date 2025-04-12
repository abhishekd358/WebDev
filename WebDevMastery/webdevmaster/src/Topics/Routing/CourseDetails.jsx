import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const CourseDetails = () => {
    console.log(useLocation());
    
    // data
    const arr = [
        { id: "PYTON999", course: "Python On Your Brain", Price: "Rs.999" },
        { id: "WEB1000", course: "Web Master", Price: "Rs.1999" },
        { id: "DSA001", course: "DSA Cracking", Price: "Rs.1000" },
      ];


    const {id} = useParams()
    //   we use params to capture the route ide on that we fetch other related data to the route i.e course id using filter 
    const course_Details = arr.filter((courseData) =>courseData.id == id)
    console.log(course_Details)

  return (
    <div>CourseDetails
        <p>{course_Details[0].id}</p>
        <p>{course_Details[0].course}</p>
        <p>{course_Details[0].Price}</p>
    </div>
  )
}

export default CourseDetails