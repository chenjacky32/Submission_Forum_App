import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function LoginInput({ onLogin }) {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  return (
    <form className="login-page__form">
      <input type="text" placeholder="Email" value={email} onChange={onChangeEmail} />
      <input type="password" placeholder="Password" value={password} onChange={onChangePassword} />
      <button type="button" onClick={() => onLogin({ email, password })}>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
