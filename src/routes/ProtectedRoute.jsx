/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ needAdmin, needSuperAdmin }) {
  const { infoUser } = useSelector((state) => state.userSlice);

  if (needAdmin) {
    if (
      infoUser != null &&
      (infoUser?.Role == "admin" || infoUser?.Role == "super-admin")
    ) {
      return <Outlet />;
    }
    if (!infoUser) {
      return <Navigate to={"/"} />;
    }
  }

  if (needSuperAdmin) {
    if (infoUser != null && infoUser?.Role == "super-admin") {
      return <Outlet />;
    }
    if (!infoUser) {
      return <Navigate to={"/"} />;
    }
  }
  return <Navigate to="/" />;
}
