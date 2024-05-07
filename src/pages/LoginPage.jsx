import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { useDispatch } from 'react-redux';

import { asyncLoginAction } from '../states/authUser/action';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function EventHandlerLogin({ email, password }) {
    dispatch(asyncLoginAction({ email, password }));
    navigate('/');
  }

  return (
    <section className="login-page">
      <div className="login-page__title">
        <h1>Form Login</h1>
      </div>
      <div className="login-page__input">
        <LoginInput onLogin={EventHandlerLogin} />
        <p>
          Belum punya akun?
          <Link to="/register">daftar disini</Link>
        </p>
      </div>

    </section>
  );
}
