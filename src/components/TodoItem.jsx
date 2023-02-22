
export const TodoItem = ({ todo, onRemoveTodo, onToggleClick }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
          onClick={ () => onToggleClick(todo.id) }
          aria-label='span'
        >
          { todo.description }
        </span>
        <button
          className="btn btn-danger"
          onClick={ () => onRemoveTodo(todo.id) }
          aria-label='button'
          >
            Borrar</button>
      </li>
    </>
  )
}

