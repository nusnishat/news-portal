import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home";
import Categories from "../Pages/Categories/Categories";
import NewsLayout from "../Pages/Layout/NewsLayout";
import News from "../Pages/News/News";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Categories></Categories>,
                loader: ()=> fetch(`https://the-news-dragon-server-jhankarphero.vercel.app/categories/0`)
            },
            {
                path: 'categories/:id',
                element: <Categories></Categories>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-jhankarphero.vercel.app/categories/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path:':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-jhankarphero.vercel.app/news/${params.id}`)
            }
        ]
    }
])
export default router;