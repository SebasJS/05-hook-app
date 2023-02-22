import { Navigate } from 'react-router-dom'
import { MainApp, LoginPage, AboutPage, HomePage } from './index'

export const getRoutes = [
  {
    path: '/',
    element: <MainApp />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: '/*',
        element: <Navigate to="about" />
      }
    ]
  }
]
