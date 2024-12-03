import { createBrowserRouter } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import AddMovie from './pages/AddMovie'
import Movies from './pages/Movies'


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
  },
  {
    path: "/movies",
    element: <Movies />
  }
])

export default router
