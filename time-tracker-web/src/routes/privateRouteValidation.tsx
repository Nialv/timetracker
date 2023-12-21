import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'

const PrivateRouteValidation = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = Cookies.get("token");

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRouteValidation;
