import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Panel = () => {
    let navigate = useNavigate()
  return (
    <div style={{marginTop:"30px", textAlign: "center"}}>
    <h3>Panel is Private Page</h3>
    <Button variant='primary' onClick={() => navigate("/courses") }>Courses</Button>
    </div>
  )
}
