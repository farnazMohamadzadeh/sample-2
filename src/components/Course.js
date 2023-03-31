import React from 'react'
import { Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const Course = (props) => {
  return (
    <Link to={`/course/${props.id}`}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={150} src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.Desc}
        </Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
    </Link>
  )
}

