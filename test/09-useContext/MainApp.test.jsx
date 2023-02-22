import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { getRoutes } from '../../src/09-useContext/Routes'

describe('pruebas en el componente MainApp', () => {
  test('debe de mostrar el componente HomePage', () => {
    const router = createMemoryRouter(getRoutes, { initialEntries: ['/'] })

    render(<RouterProvider router={router}/>)
    const head = screen.getByRole('heading', { level: 1 })
    expect(head.innerHTML).toContain('HomePage')
  })

  test('debe de mostrar el componente HomePage', () => {
    const router = createMemoryRouter(getRoutes, { initialEntries: ['/login'] })

    render(<RouterProvider router={router}/>)
    const head = screen.getByRole('heading', { level: 1 })
    expect(head.innerHTML).toContain('Login')
  })
})
