import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../../Components/sharedComponents/Button';

import Logo from '../../../assets/logo_portrait.svg?react';
import {
  authLoginFailure,
  authLoginRequest,
  authLoginSuccess,
  uiResetError
} from '../../../store/actions';
import { getUi } from '../../../store/selectors';
import { login } from '../service';
import AtIcon from './components/AtIcon';
import LockIcon from './components/LockIcon';
import './login.css';

function LoginPage() {
  const iconOptions = {
    fill: '#2e2e2e',
    height: '16',
    width: '16',
    class: 'inputIcon'
  };
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    rememberMe: ''
  });

  const dispatch = useDispatch();
  const { error, isFetching } = useSelector(getUi);
  const disabled = !(credentials.email && credentials.password && !isFetching);
  const location = useLocation();
  const navigate = useNavigate();
  const to = location?.state?.from || '/';
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      dispatch(authLoginRequest());
      await login(credentials);
      dispatch(authLoginSuccess());
      navigate(to, { replace: true });
    } catch (error) {
      dispatch(authLoginFailure(error));
    }
  };
  const handleCredentialsChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };
  const handleRememberMeChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.checked
    });
  };
  const resetError = () => {
    dispatch(uiResetError());
  };

  return (
    <main className='MainLoginPage'>
      <form
        className='form_main'
        action=''
        id='form-login'
        onSubmit={handleSubmit}
      >
        <div className='form_main__logo'>
          <Logo height={'10vh'} />
        </div>
        <p className='heading'>Iniciar sesión</p>

        <div className='inputContainer'>
          <AtIcon iconOptions={iconOptions} />
          <input
            placeholder='Email'
            id='email'
            className='inputField'
            type='email'
            name='email'
            onChange={handleCredentialsChange}
            value={credentials.email}
          />
        </div>

        <div className='inputContainer'>
          <LockIcon iconOptions={iconOptions} />
          <input
            placeholder='Password'
            id='password'
            className='inputField'
            type='password'
            name='password'
            onChange={handleCredentialsChange}
            value={credentials.password}
          />
        </div>
        <Button type='submit' className='submitButton' disabled={disabled}>
          {isFetching ? 'Connecting...' : 'Enviar'}
        </Button>

        <div className='signupContainer'>
          <label>
            <input
              type='checkbox'
              name='rememberMe'
              onChange={handleRememberMeChange}
              checked={credentials.rememberMe}
            />
            Recuérdame en este dispositivo
          </label>
        </div>
        {error && (
          <div className='error' onClick={resetError}>
            🚫 {error.message}
          </div>
        )}
      </form>
    </main>
  );
}
export default LoginPage;
