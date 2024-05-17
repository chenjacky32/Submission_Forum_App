import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

export default function RegisterInput({ onRegister }) {
  const [name, onChangeName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  return (
    <form className="register-page__form">
      <input type="text" placeholder="Name" value={name} onChange={onChangeName} id="NameRegister" />
      <input type="text" placeholder="Email" value={email} onChange={onChangeEmail} id="EmailRegister" />
      <input type="password" placeholder="Password" value={password} onChange={onChangePassword} id="PasswordRegister" />
      <button type="button" onClick={() => onRegister({ name, email, password })}>Register</button>
    </form>
  );
}

// validate props
RegisterInput.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
