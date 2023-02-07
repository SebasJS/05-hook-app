import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialValue = []

const init = () => {
  return JSON.parse( localStorage.getItem('todos')) || [] 
}

export const useTodos = () => {

  const [todo, dispatch] = useReducer( todoReducer, initialValue, init )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todo ) || [] ) 
  }, [todo])

  const handleNewTodo = ( todo ) => {
    dispatch ({
      type: '[TODO] add todo',
      payload: todo
    })
  }

  const handleRemoveTodo = ( id ) => {
    dispatch({
      type: '[TODO] remove Todo',
      payload: id
    })
  }

  const handleToggleClick = ( id ) => {
    dispatch({
      type: '[TODO] toggle Todo',
      payload: id
    })
  }

  const pendingTodos = todo.filter( item => !item.done ).length

  return ({
    todo,
    pendingTodos,
    todosCount: todo.length, 
    handleNewTodo,
    handleRemoveTodo,
    handleToggleClick
  })
}
