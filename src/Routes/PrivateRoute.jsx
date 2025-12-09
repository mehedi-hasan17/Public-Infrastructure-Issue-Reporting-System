import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Componets/Hook/useAuth";
 // path ঠিক করুন

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <h1>Loading...</h1>;
  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
