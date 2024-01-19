import { createBrowserRouter,  } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import UnprotectedRoutes from './routes/UnprotectedRoutes'
import ProtectedRoutes from './routes/ProtectedRoutes'

export const router = createBrowserRouter([
    {
        element: <ProtectedRoutes />,
        children:[
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        element: <UnprotectedRoutes />,
        children:[
            {
                path: 'sign-in',
                element: <SignIn />
            },
            {
                path: 'sign-up',
                element: <SignUp />
            }
        ]
    }
])