import { Stack } from 'expo-router'
import {View,StyleSheet,LogBox} from 'react-native'
import FitnessAppMainFile from '../../../applications/FitenessApp/FitnessAppMainFile'

export default ()=>{
    // LogBox.
    return (
        <View style={style.container}>
            <Stack.Screen options={{
                headerShown:false
            }}/>
            <FitnessAppMainFile/>
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1
    }
})