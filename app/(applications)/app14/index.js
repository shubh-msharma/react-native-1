import { Stack } from 'expo-router'
import {View} from 'react-native'
import GoBackEndToDoApp from '../../../applications/GoBackendToDoApp/GoBackEndToDoAppMain'


export default ()=>{
    return (
        <View style={{
            width:"100%",
            height:"100%"
        }}>
            <Stack.Screen options={{
                headerShown:false
            }}/>
            <GoBackEndToDoApp/>
        </View>
    )
}