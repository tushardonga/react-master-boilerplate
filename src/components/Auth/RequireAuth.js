import { useLocation, Navigate, Outlet } from "react-router-dom";
// use Outlet if you need it
import useAuth from "../../hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.accessToken ? ( //changed from user to accessToken to persist login after refresh
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
