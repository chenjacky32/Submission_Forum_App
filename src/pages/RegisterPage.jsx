import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { Link, useNavigate } from 'react-router-dom';
import { asyncRegisterAction } from '../states/authUser/action';

export default function RegisterPage() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  function EventHandleRegister({ name, email, password }) {
    dispatch(asyncRegisterAction({ name, email, password }));
    Navigate('/login');
  }
  return (
    <section className="register-page">
      <div className="register-page__title">
        <h1>Register Akun</h1>
      </div>
      <div className="register-page__input">
        <RegisterInput onRegister={EventHandleRegister} />
        <p>
          Sudah Punya Akun
          <Link to="/login">login disini</Link>
        </p>
      </div>
    </section>
  );
}
