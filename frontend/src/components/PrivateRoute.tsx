import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hook";

const PrivateRoute = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  return userInfo._id !== "no user" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};
export default PrivateRoute;
