import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import DetailForum from './pages/DetailForum';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/RootPage';
import LeaderBoards from './pages/LeaderBoards';
import AddDiscuss from './pages/AddDiscuss';
import ErrorPage from './pages/ErrorPage';
import ProfilePages from './pages/ProfilePages';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/register',
          element: <RegisterPage />,
        },
        {
          path: '/leaderboards',
          element: <LeaderBoards />,
        },
        {
          path: '/threads/:id',
          element: <DetailForum />,
        },
        {
          path: '/add-discussion',
          element: <AddDiscuss />,
        },
        {
          path: '/users/me',
          element: <ProfilePages />,
        },
      ].filter((item) => item),
    },
  ]);

  return <RouterProvider router={router} />;
}
