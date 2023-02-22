import { todoReducer } from '../../src/08-useReducer/todoReducer'

describe('Pruebas todoReducer', () => {
  const initialValue = [{
    id: 1,
    todo: 'pruebas test',
    done: false
  }]

  test('debe retornar el estado inicial', () => {
    const newState = todoReducer(initialValue, {})
    expect(newState).toBe(initialValue)
  })

  test('debe retornar agregar un todo', () => {
    const action = {
      type: '[TODO] add todo',
      payload: {
        id: 2,
        todo: 'todo agregada #2',
        done: false
      }
    }
    const newState = todoReducer(initialValue, action)
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
  })

  test('debe eliminar un TODO', () => {
    const action = {
      type: '[TODO] remove Todo',
      payload: 1
    }
    const newState = todoReducer(initialValue, action)
    expect(newState.length).toBe(0)
  })

  test('debe de realizar el cambio del todo', () => {
    const action = {
      type: '[TODO] toggle Todo',
      payload: 1
    }
    const newState = todoReducer(initialValue, action)
    expect(newState[0].done).toEqual(true)

    const newState2 = todoReducer(newState, action)
    expect(newState2[0].done).toEqual(false)
  })
})
