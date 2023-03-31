import React from 'react'
import {useParams} from 'react-router-dom'
import coursesData from '../coursesData'
import {Container, Row, Col} from 'react-bootstrap'

export const MainCourse = () => {
    let params=useParams()
    let courseInfo = coursesData.find(course => course.id == params.id)
    console.log(courseInfo.img)
  return (
    <Container className='mt-5'>
        <Row>
            <Col>
            <h3>{courseInfo.title}</h3>
            <p>{courseInfo.Desc}</p>
            </Col>
            <Col>
         <img src={courseInfo.img} width="80%" />
             </Col>
        </Row>
    </Container>
  )
}
