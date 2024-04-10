import { initializeApp } from 'firebase/app'
import { initializeAuth,getReactNativePersistence } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = initializeApp({

},"ToDo")

export const Auth = initializeAuth(App,{
    persistence: getReactNativePersistence(AsyncStorage)
})