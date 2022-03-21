import { Navigate, Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";

const ProtectedRoute = ( { redirectPath = '/' } ) => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;