import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks'
import { useCounter, useFetch } from '../../src/hooks'

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('test a custom hook MultipleCustomHook', () => {
  const mockIncrement = jest.fn()
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })

  test('debe mostrar el componente correcto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null
    })
    render(<MultipleCustomHooks />)

    expect(screen.getByText('Loading...'))
    expect(screen.getByText('BreakinBad Quotes'))

    const nextButton = screen.getByRole('button', { name: 'next quote' })
    expect(nextButton.disabled).toBeTruthy()

    screen.debug()
  })

  test('debe mostrar el elemento cargado', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Joan', quote: 'Hola mundo' }],
      isLoading: false,
      error: null
    })

    render(<MultipleCustomHooks />)
    expect(screen.getByText('Joan')).toBeTruthy()
    expect(screen.getByText('Hola mundo')).toBeTruthy()

    const nextButton = screen.getByRole('button', { name: 'next quote' })
    expect(nextButton.disabled).toBeFalsy()
    screen.debug()
  })

  test('debe de llamar la funcion increment', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Joan', quote: 'Hola mundo' }],
      isLoading: false,
      error: null
    })

    render(<MultipleCustomHooks />)

    const nextButton = screen.getByRole('button', { name: 'next quote' })
    fireEvent.click(nextButton)

    expect(mockIncrement).toHaveBeenCalled()
  })
})
