import { Navigate, useLocation } from 'react-router-dom';
import { UseAuth } from '../context';

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isLogged } = UseAuth();
  return isLogged ? (
    children
  ) : (
    <Navigate to={'/login'} replace state={{ from: location }} />
  );
};
