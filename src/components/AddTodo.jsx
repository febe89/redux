import { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { addTodo } from '../redux/actions/todo'
import { connect } from 'react-redux'
const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: '',
    description: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(todo)
    addTodo(todo)
    // store
    setTodo({
      title: '',
      description: ''
    })
  }
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className='shadow-sm'>
            <Card.Body>
              <h3>Add Todo Here</h3>
              <DisplayCount />
              <Form onSubmit={handleSubmit}>
                {/* title */}
                <Form.Group>
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control value={todo.title} type='text' onChange={(e) => setTodo({ ...todo, title: e.target.value })} placeholder='Enter title'></Form.Control>
                </Form.Group>
                {/* description */}
                <Form.Group className='mt-3'>
                  <Form.Label>Todo Description</Form.Label>
                  <Form.Control as={'textarea'} value={todo.description} onChange={(e) => setTodo({ ...todo, description: e.target.value })} type='text' placeholder='Enter description'></Form.Control>
                </Form.Group>
                <Container>
                  <Button type='submit'>Add Todo</Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
