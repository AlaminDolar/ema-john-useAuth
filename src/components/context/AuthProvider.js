import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';
 export const Authcontext = createContext();

 const AuthProvider = ({children}) => {
     const Allcontext = useFirebase();
   
    return (
        <Authcontext.Provider value={Allcontext}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;
