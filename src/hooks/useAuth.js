import { useContext } from "react";
import { Authcontext } from "../components/context/AuthProvider"


const useAuth =()=>{
    return useContext(Authcontext);
}

export default useAuth;