import { fireEvent, render, screen } from '@testing-library/react'
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

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).toContain('align-self-center ')
  })

  test('debe llamar el ToggleTodo con el argumento', () => {
    render(
      <TodoItem
        todo={ todo }
        onRemoveTodo={ onRemoveTodoMock }
        onToggleClick={ onToggleClickMock }
      />
    )

    const spanElement = screen.getByLabelText('span')
    fireEvent.click(spanElement)
    expect(onToggleClickMock).toHaveBeenCalledWith(todo.id)
  })

  test('debe llamar el RemoveTodo con el argumento', () => {
    render(
      <TodoItem
        todo={ todo }
        onRemoveTodo={ onRemoveTodoMock }
        onToggleClick={ onToggleClickMock }
      />
    )

    const buttonElement = screen.getByLabelText('button')
    fireEvent.click(buttonElement)
    expect(onRemoveTodoMock).toHaveBeenCalledWith(todo.id)
  })
})
