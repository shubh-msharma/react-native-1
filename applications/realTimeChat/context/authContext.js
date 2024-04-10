import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import {onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut, updateCurrentUser} from 'firebase/auth'
import { auth } from "../../../configs/firebase-config";
import { saveUser , getUserById } from "../firebase/userFirebase";

export const AuthContext = createContext({
    user:null,
    isAuthenticated:false,
    login:(email,pass)=>{},
    logout:()=>{},
    register:(email,username,pass,profileurl)=>{}
})

function AuthContextProvider({children}){
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(undefined);

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(user)=>{
            if(user){
                setIsAuthenticated(true)
                setUser(user)
                updateUser(user.uid)
            }else{
                setIsAuthenticated(false)
                setUser(null)
            }
        })
        return unsub
    },[])

    const updateUser = async (id) => {
        const tempUser = await getUserById(id)
        if(tempUser){
            setUser({...tempUser})
        }
    }

    const login = async (email,pass)=>{
        try {
            const res = await signInWithEmailAndPassword(auth,email,pass);
            return {success:true}
        }catch(e) {
            return {success:false,reason:e.message}
        }

    }
    const logout = async ()=>{
        signOut(auth)
    }
    const register = async (email,username,pass,profileurl)=>{
        try {
            const res = await createUserWithEmailAndPassword(auth,email,pass)
            await saveUser({
                id:res.user.uid,
                email,username,
                password:pass,
                profileurl
            })
            return {success:true}
        } catch (error) {
            return {success:false,reason:error.message}
        }
    }

    return (
        <AuthContext.Provider value={{
            user,isAuthenticated,login,logout,register
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

export const useAuth = () => {
    const val = useContext(AuthContext);
    if(!val){
        throw new Error("auth context is being used in componenet which was not wrapped in AuthenticationContextProvider")
    }
    return val;
}