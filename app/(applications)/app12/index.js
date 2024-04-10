import { Stack } from 'expo-router'
import {SafeAreaView, StatusBar}  from 'react-native'
import ExpenseTrackerMain from '../../../applications/ExpenseTracker/ExpenseTracker'

export default ()=>{
    return (
        <SafeAreaView className = "w-full h-full">
            <StatusBar barStyle={'light-content'}/>
            <Stack.Screen options={{
                headerShown:false
            }}/>
            <ExpenseTrackerMain/>
        </SafeAreaView>
    )
}