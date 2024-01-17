import { useNavigate } from 'react-router-dom';
import errorPage from '../assets/404.jpg';
import './error404.css';
export const Error404 = () => {
  const navigate = useNavigate();
  return (
    <main className='errorPage MainLoginPage'>
      <img src={errorPage} />
      <button
        className={'button button--primary '}
        onClick={() => {
          navigate('/');
        }}
      >
        {'Listado de Anuncios'}
      </button>
    </main>
  );
};
