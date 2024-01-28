import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsLogged } from '../../../store/selectors';

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isLogged = useSelector(getIsLogged);
  return isLogged ? (
    children
  ) : (
    <Navigate to={'/login'} replace state={{ from: location }} />
  );
};
