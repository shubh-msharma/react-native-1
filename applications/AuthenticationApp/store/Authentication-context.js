import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { firebaesSignup, firebaseSignin } from '../apis/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = createContext({
    user: null,
    tokens: {
        idToken: null,
        refreshToken: null
    },
    signin: (email, pass) => { },
    signup: (user, pass) => { },
    logout: () => { },
    isAuthenticated: () => { },
})

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState({})

    useState(()=>{
        async function loadTokens(){
            const data = await AsyncStorage.getItem("token")
            if(data){
                setAuthToken(JSON.parse(data))
            }
        }
        loadTokens();
    },[])

    function signin(email, pass) {
        firebaseSignin(email, pass)
            .then(data => {
                const tempToken = {
                    idToken: data.idToken,
                    refreshToken: data.refreshToken
                }
                setAuthToken(tempToken)
                AsyncStorage.setItem("token", JSON.stringify(tempToken));
            })
    }
    function signup(user, pass) {
        firebaesSignup(user.email, pass)
            .then(data => {
                const tempToken = {
                    idToken: data.idToken,
                    refreshToken: data.refreshToken
                }
                setAuthToken(tempToken)
                AsyncStorage.setItem("token", JSON.stringify(tempToken));
            })
    }

    function isAuthenticated() {
        return authToken && authToken.idToken
    }

    function logout() {
        setAuthToken(null)
        AsyncStorage.removeItem("token");
    }

    return <AuthContext.Provider value={{
        authToken, signin, signup, logout, isAuthenticated
    }}>
        {children}
    </AuthContext.Provider>
}
export default AuthContextProvider


export const useAuth = () => {
    const val = useContext(AuthContext);
    if (!val) throw new Error()
    return val;
}