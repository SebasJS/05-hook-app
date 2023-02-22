import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../src/08-useReducer/TodoApp'
import { useTodos } from '../../src/hooks/useTodos'

jest.mock('../../src/hooks/useTodos')

describe('Pruebas a componente TodoApp', () => {
  useTodos.mockReturnValue({
    todo: [
      { id: 1, description: 'Todo #1', done: false },
      { id: 2, description: 'Todo #2', done: true }
    ],
    pendingTodos: 1,
    todosCount: 2,
    handleNewTodo: jest.fn(),
    handleRemoveTodo: jest.fn(),
    handleToggleClick: jest.fn()
  })

  test('debe de mostrar el componente correctamente', () => {
    render(<TodoApp />)

    expect(screen.getByText('Todo #1')).toBeTruthy()
    expect(screen.getByText('Todo #2')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})
