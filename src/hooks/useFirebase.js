import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut } from "firebase/auth";
import intialiceAuthentication from '../Firebase/firebase.init';

intialiceAuthentication();

const useFirebase =()=>{
    const [user,setUser]=useState({});

    const auth =getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = ()=>{
        return  signInWithPopup(auth,googleProvider);
         

    }

    useEffect(()=>{
        onAuthStateChanged (auth,(user)=>{
            if(user){
                setUser(user);
            }
        });
    },[auth]);

    const logout =()=>{
        signOut(auth)
        .then(()=>{

        })
        setUser({});
    }













    return{
        user,
        signInUsingGoogle,
        logout

    }
}
export default useFirebase;