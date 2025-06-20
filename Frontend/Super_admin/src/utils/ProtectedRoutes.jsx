import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../pages/Layout';

const ProtectedRoute = () => {
  const { token } = useSelector((state) => state.user);
  return token ? <Layout  /> : <Navigate to="/login-as-superadmin" />;
};

export default ProtectedRoute;
