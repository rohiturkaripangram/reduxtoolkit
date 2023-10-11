import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const RequireAuth = ({ children }) => {
    const {  isAuthenticated} = useAuth0();

  const location = useLocation();
  return isAuthenticated? (
    children
  ) : (
    <Navigate to="/profile" state={{ from: location }} />
  );
};

export default RequireAuth;
