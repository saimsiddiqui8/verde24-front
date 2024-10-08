import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useEffect } from "react";

export default function AuthenticationRoutes() {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.token) {
      navigate(-1);
    }
  }, [navigate, user?.token]);
  return (
    <>
      <Outlet />
    </>
  );
}
