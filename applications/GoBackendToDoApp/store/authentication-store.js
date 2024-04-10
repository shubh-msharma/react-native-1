import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import { useEffect } from "react";
import {Auth} from '../configs/firebase'

const AuthContext = createContext({
    user:null,
    authenticated:false,
    authToken:null,
    login : (email,pass)=>{},
    logout : ()=>{},
    register : ({
        email,usename,pass,
    })=>{},
})


function AuthContextProvider({children}){
    const [authState,setAuthState] = useState({
        user:undefined,
        authenticated:undefined,
        authToken:undefined,
    })

    useEffect(()=>{
        const unsub = onAuthStateChanged(Auth,(user)=>{
            if(user){
                setAuthStates(user)
            }
        })
        return unsub;
    },[])

    const setAuthStates = async (user) => {
            const idToken = await user.getIdToken();
            setAuthState({
                user:user,
                authenticated:true,
                authToken:idToken,
            });
    }

    const login = async (email,pass)=>{
        const res = await signInWithEmailAndPassword(Auth,email,pass);
        setAuthStates(res.user);
    }
    const logout = ()=>{
        setAuthState({
            user:undefined,
            authenticated:undefined,
            authToken:undefined,
        })
    }
    const register = async ({
        email,usename,pass,
    })=>{
        const res = await createUserWithEmailAndPassword(Auth,email,pass);
        setAuthStates(res.user);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,login,logout,register
        }}>
            {
                children
            }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

export const useAuth = () =>{
    const val = useContext(AuthContext)
    if(!val) throw new Error("no auth context found")
    return val
}