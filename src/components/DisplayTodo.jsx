import { useState } from 'react'
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

const DisplayTodo = ({ todos }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className='mt-3 shadow-sm'>
            <Card.Body>
              <h3>All Todos Are Here</h3>
              <ListGroup>
                {todos.map((todo, index) => (
                  <ListGroupItem key={index}>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
const mapStateToProps = (state) => {
  return { todos: state.todos }
}
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo)
