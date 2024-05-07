import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import DetailForum from "./pages/DetailForum"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootPage from "./pages/RootPage"
import LeaderBoards from "./pages/LeaderBoards"
import AddDiscuss from "./pages/AddDiscuss"

export default function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element: <RootPage/>,
    errorElement: <h1>Ada Error Gaiisss..</h1>,
    children:[
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "/login",
        element: <LoginPage/>
      },
      {
        path: "/register",
        element: <RegisterPage/>
      },
      {
        path:"/leaderboards",
        element: <LeaderBoards/>
      },
      {
        path:"/threads/:id",
        element: <DetailForum/>
      },
      {
        path:"/add-discussion",
        element: <AddDiscuss/>
      }
    ].filter((item)=> item)
  },
])

  return <RouterProvider router={router}/>;
}


