import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo_horizontal.svg';
import { UseAuth } from '../../pages/auth/context';
import { ConfirmComponent } from '../sharedComponents/ConfirmComponent';
import styles from './header.module.css';
const Header = ({ className }) => {
  const { isLogged, onLogout } = UseAuth();
  const [confirm, setconfirm] = useState(false);
  const confirmedLogout = () => {
    setconfirm(true);
  };
  const resetFunction = () => {
    setconfirm(false);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
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
          <li className={styles.logout} onClick={confirmedLogout}>
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
