import { useEffect, useReducer } from "react"
import { TodoAdd } from "../components/TodoAdd"
import { TodoList } from "../components/TodoList"
import { todoReducer } from "./todoReducer"

const initialValue = [/*{
    id: new Date().getTime(),
    description: 'Encontrar la piedra del alma',
    done: false,
  },
  {
    id: new Date().getTime() * 2,
    description: 'Encontrar la piedra del poder',
    done: false,
  }*/
]

const init = () => {
  return JSON.parse( localStorage.getItem('todos')) || [] 
}

export const TodoApp = () => {

  const [todo, dispatch] = useReducer( todoReducer, initialValue, init )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todo ) || [] ) 
  }, [todo])
  

  const handleNewTodo = ( todo ) => {

    const action = {
      type: '[TODO] add todo',
      payload: todo
    }

    dispatch( action )
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

  return (
    <>
      <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList 
            todo = { todo } 
            onRemoveTodo = { handleRemoveTodo }
            onToggleClick = { handleToggleClick }
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd 
            onNewTodo = { (todo) => handleNewTodo(todo)} 
          />
        </div>
      </div>
    </>
  ) 
}
