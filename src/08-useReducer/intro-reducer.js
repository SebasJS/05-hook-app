
const initialValue = [{
  id: 1,
  todo: 'recuperar la gema del alma',
  done: false
}]

const todoReducer = (state = initialValue, action = {}) => {
  if (action.type === '[TODO] add todo') {
    return [...state, action.payload]
  }
  return state
}

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: 'recuperar la gema de la piedra',
  done: false
}

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log({ state: todos })
