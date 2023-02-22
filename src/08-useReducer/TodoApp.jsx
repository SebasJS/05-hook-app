import { TodoAdd } from '../components/TodoAdd'
import { TodoList } from '../components/TodoList'
import { useTodos } from '../hooks/useTodos'

export const TodoApp = () => {
  const { todo, todosCount, pendingTodos, handleNewTodo, handleRemoveTodo, handleToggleClick } = useTodos()

  return (
    <>
      <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodos }</small></h1>
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
            onNewTodo = { handleNewTodo }
          />
        </div>
      </div>
    </>
  )
}
