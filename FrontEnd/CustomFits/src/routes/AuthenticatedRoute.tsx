import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";

const AuthenticatedRoute = () => {
	const { user } = useUser();

  return (
    user ? (
      <Outlet />
    ) : (
      <Navigate to="/login" replace />
    )
  );
};

export default AuthenticatedRoute;