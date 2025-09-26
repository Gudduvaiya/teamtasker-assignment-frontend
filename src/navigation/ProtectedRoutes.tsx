import { Navigate, Outlet } from "react-router-dom";
import type { UserDataType } from "../lib/types";

const ProtectedRoutes = () => {
	let loggedInUser:UserDataType = JSON.parse(sessionStorage.getItem("userData"));

	return loggedInUser ? <Outlet /> : <Navigate to="/signin" />;

};
export default ProtectedRoutes;