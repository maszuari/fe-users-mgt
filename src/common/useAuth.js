// Hook (useAuth.js)
import React, { useState, useEffect, useContext, createContext } from "react";
import {ApiAuth} from '../api/ApiAuth';

const AuthContext = createContext();

// export function useAuth(){
//     return useContext(AuthContext);
// }

function useAuth(){
    const [user,setUser] = useState(null);

    return {
        user,
        login(username, password) {
            return new Promise((res)=>{
                let newUser = {
                    firstName: username,
                    lastName: 'Doe'
                };
                setUser(newUser);
                res();
            });
        },
        logout() {
            return new Promise((res)=>{
                setUser(null);
                res();
            });
        }
    };
}

export function AuthProvider({ children }) {
    // let [user, setUser] = useState(null);
    const auth = useAuth();

    // let signin = (username,password) => {
    //     console.log('Username ',username, password)
    //     return ApiAuth.signin((username,password) => {
    //         let newUser = {
    //             firstName: 'John',
    //             lastName: 'Doe'
    //         }
    //         setUser(newUser);
    //     //   callback();
    //     });
    // };


    // let signout = () => {
    //     return ApiAuth.signout(() => {
    //       setUser(null);
    //     //   callback();
    //     });
    // };

    // let value = { user, signin, signout };

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default function AuthConsumer() {
    return React.useContext(AuthContext);
}