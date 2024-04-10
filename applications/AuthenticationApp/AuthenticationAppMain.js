import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import AuthContextProvider, { useAuth } from './store/Authentication-context';

const Stack = createNativeStackNavigator();

function AuthenticationRouts() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
        </Stack.Navigator>
    )
}
function AuthenticatedRouts() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    )
}
function ContainerRouts() {
    const { isAuthenticated } = useAuth()
    return (
        <NavigationContainer independent={true}>
            {!isAuthenticated() && <AuthenticationRouts />}
            {isAuthenticated() && <AuthenticatedRouts />}
            {/* <AuthenticatedRouts /> */}
        </NavigationContainer>
    )
}

function AuthenticationAppMain() {
    return (
        <AuthContextProvider>
            <ContainerRouts />
        </AuthContextProvider>

    )
}


export default AuthenticationAppMain;