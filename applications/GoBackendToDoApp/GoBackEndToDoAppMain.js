import {View,Text,StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AuthContextProvider, { useAuth } from './store/authentication-store'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import HomeScreen from './screens/HomeScreen'
import TaskDetailsScreen from './screens/TaskDetailsScreen'

const Stack = createNativeStackNavigator()

function GoBackEndToDoApp(){
    return (
        <AuthContextProvider>
            <RootRouter/>
        </AuthContextProvider>
    )
}

export default GoBackEndToDoApp

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"red"
    },
    msg:{
        fontSize:30,
        fontWeight:'bold'
    }
})

const RootRouter = () => {
    const {authenticated} = useAuth()
    return <NavigationContainer independent={true}>

            {
                authenticated ? (
                    <SecureRoutes/>
                ) : (
                    <AuthenticationRoutes/>
                )
            }
    </NavigationContainer>
}

const AuthenticationRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SignInScreen' component={SignInScreen}/>
            <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
        </Stack.Navigator>
    )
}
const SecureRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='TaskDetailsScreen' component={TaskDetailsScreen}/>
        </Stack.Navigator>
    )
}