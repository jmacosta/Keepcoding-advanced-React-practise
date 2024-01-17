import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo_horizontal.svg';
import { UseAuth } from '../../pages/auth/context';
import { ConfirmComponent } from '../sharedComponents/ConfirmComponent';
import './header.css';
const Header = ({ className }) => {
  const { isLogged, onLogout } = UseAuth();
  const [confirm, setconfirmed] = useState(false);
  const confirmedLogout = () => {
    setconfirmed(true);
  };
  const resetFunction = () => {
    setconfirmed(false);
  };
  return (
    <header className={'header'}>
      <div className='logo'>
        <Link to='/adverts'>
          <img src={logo} />
        </Link>
      </div>
      <nav>
        <ul>
          <NavLink to='/adverts' end>
            <li>Ver últimos anuncios</li>
          </NavLink>

          <NavLink to='/adverts/new'>
            <li>Crear anuncio</li>
          </NavLink>
          <li className='logout' onClick={confirmedLogout}>
            Logout
          </li>
        </ul>
      </nav>
      {confirm && (
        <ConfirmComponent execFunction={onLogout} resetFunction={resetFunction}>
          ¿Está seguro que desea desconectar?
        </ConfirmComponent>
      )}
    </header>
  );
};
export default Header;
