import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './action.types'
// add todo
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
})
// delete
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
})
// update
export const updateTodo = (todo, id) => ({
  type: UPDATE_TODO,
  payload: { todo: todo, todoId: id }
})
