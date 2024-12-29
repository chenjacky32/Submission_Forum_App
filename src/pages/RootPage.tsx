import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../states';

export default function RootPage() {
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const history = useLocation();

  useEffect(() => {
    if (isLogin && ['/login', '/register'].includes(history.pathname)) {
      navigate('/');
    }
  }, [history.pathname, isLogin, navigate]);

  return (
    <div className="flex flex-col h-screen">
      <header>
        <Navigation />
      </header>
      <main className=" bg-blue-gray-50 grow">
        <Outlet />
      </main>
    </div>
  );
}
