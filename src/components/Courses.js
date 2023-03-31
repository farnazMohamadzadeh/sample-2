import React from 'react'
import coursesData from '../coursesData'
import {Course} from './Course'

export const Courses = () => {
  return (
    <>
    <h2 style={{display:"flex", justifyContent:"center", color:"purple", marginTop: 20}}>Courses</h2>
    <div style={{display:"flex", justifyContent:"space-evenly"}}>

    {coursesData.map(course => (
        <Course key={course.id} {...course} />
    ))}
    </div>
    </>
  )
}
