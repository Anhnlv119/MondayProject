import { createBrowserRouter, redirect } from "react-router-dom"
import Home from "../page/Home"
import NotFound from "../page/NotFound"
const router = createBrowserRouter([
    {
        path: '/',
        loader: () => {
            return redirect('/home')
        }
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '*',
        element: <NotFound/>
    }

])

export default router