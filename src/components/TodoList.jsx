import { TodoItem } from "./TodoItem"

export const TodoList = ({ todo = [], onRemoveTodo, onToggleClick }) => {
  return (
    <ul className="list-group">
      {
        todo.map( todo => 
          <TodoItem 
            key = { todo.id } 
            todo = { todo } 
            onRemoveTodo = { onRemoveTodo }
            onToggleClick = { onToggleClick }
          />
        )
      }
    </ul>
  )
}
