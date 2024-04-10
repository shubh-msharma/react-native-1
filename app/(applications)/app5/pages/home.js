import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import {View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeScreen from '../../../../applications/FitenessApp/screens/HomeScreen'

export default ()=>{
    return (
        <SafeAreaView 
        edges={["top"]}
        className="flex-1 space-y-5"
        // style = {{backgroundColor:"red"}}
        >
            <Stack.Screen options={{headerShown:false}}/>
            <StatusBar style='dark'/>
            <HomeScreen/>
        </SafeAreaView>
    )
}