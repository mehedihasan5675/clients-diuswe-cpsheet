import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../components/Loader/Loader";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    
    const isAdmin=useAdmin()
    if(loading){
        return <Loader></Loader>
    }

    if(isAdmin){
        return children
    }
    return <Navigate to="/" state={{from:location}} replace={true}></Navigate>
};

export default AdminRoute;