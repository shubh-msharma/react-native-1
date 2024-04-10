import axios from "axios";
const apiKey = "AIzaSyC4V_wu40andInWnSzdmjp7J-9765R9-O4"
const signUpUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+apiKey;
const signInUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+apiKey;


export async function firebaesSignup(email,pass){
    const res = await axios.post(signUpUrl,{
        "email":email,
        "password":pass,
        "returnSecureToken":true
    })
    console.log(res)
    const data = {};
    data.idToken = res.data.idToken;
    data.refreshToken = res.data.refreshToken;
    data.userId = res.data.localId;
    return data;
}
export async function firebaseSignin(email,pass) {
    const res = await axios.post(signInUrl,{
        "email":email,
        "password":pass,
        "returnSecureToken":true
    })
    console.log(res)
    const data = {};
    data.idToken = res.data.idToken;
    data.refreshToken = res.data.refreshToken;
    return data;
}