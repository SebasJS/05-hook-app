import { render, screen } from '@testing-library/react'
import { TodoItem } from '../../src/components/TodoItem'

describe('Pruebas en componente TodoItem', () => {
  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false
  }
  const onRemoveTodoMock = jest.fn()
  const onToggleClickMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('debe retornar el TODO completado', () => {
    todo.done = true

    render(
      <TodoItem
        todo={ todo }
        onRemoveTodo={ onRemoveTodoMock }
        onToggleClick={ onToggleClickMock }
      />
    )

    const liElement = screen.getByRole('listitem')
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).toBe('align-self-center ')
  })
})
