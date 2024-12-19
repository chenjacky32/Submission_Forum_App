import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function RootPage() {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const history = useLocation();

  useEffect(() => {
    if (isAuth && ['/login', '/register'].includes(history.pathname)) {
      navigate('/');
    }
  }, [history.pathname, isAuth, navigate]);

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
