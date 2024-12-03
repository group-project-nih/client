import { createBrowserRouter } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import AddMovie from './pages/AddMovie'

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/add",
    element: <AddMovie />
  }
])

export default router
