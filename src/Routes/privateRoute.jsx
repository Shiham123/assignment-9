import { useContext } from 'react';
import { AppContext } from '../context/context';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const PrivateRoute = ({ children }) => {
  const context = useContext(AppContext);
  const location = useLocation();

  const { user, isLoading } = context;
  const routeLocation = location.pathname;

  if (isLoading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }
  return <Navigate state={routeLocation} to="/login"></Navigate>;
};

export default PrivateRoute;
