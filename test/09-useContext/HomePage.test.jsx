import { render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { HomePage } from '../../src/09-useContext/HomePage'

describe('pruebas en el componente HomePage', () => {
  const user = {
    id: 1,
    name: 'fernando'
  }

  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }} >
        <HomePage />
      </UserContext.Provider>
    )

    const preText = screen.getByLabelText('pre')
    expect(preText.innerHTML).toBe('null')

    screen.debug()
  })

  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user }} >
        <HomePage />
      </UserContext.Provider>
    )

    const h1Text = screen.getByLabelText('h1-name')
    expect(h1Text.innerHTML).toContain(user.name)
    screen.debug()
  })
})
