import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../components/Loader/Loader";

const useAdmin = () => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <Loader></Loader>
    }
    if(user?.email == "rabbi35-946@diu.edu.bd" || user?.email == "mdchanchal5675@gmail.com"){
        return true
    }else{
        return
    }
    
};

export default useAdmin;