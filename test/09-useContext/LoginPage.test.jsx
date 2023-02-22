import { fireEvent, render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { LoginPage } from '../../src/09-useContext/LoginPage'

describe('pruebas en LoginPage', () => {
  const user = {
    email: 'user1@abc.com',
    id: 1,
    name: 'User 1'
  }

  const setUserMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    )
    const preText = screen.getByLabelText('pre')
    expect(preText.innerHTML).toBe('null')
    screen.debug()
  })

  test('debe de llamar el setUser cuando se hace click en el boton', () => {
    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )
    const button = screen.getByLabelText('button')
    fireEvent.click(button)
    expect(setUserMock).toHaveBeenCalledWith(user)
    screen.debug()
  })
})
