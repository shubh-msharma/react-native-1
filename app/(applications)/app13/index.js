import { Stack } from "expo-router"
import { View } from "react-native"
import AuthenticationAppMain from "../../../applications/AuthenticationApp/AuthenticationAppMain"

export default () => {
    return <View style={{
        height:"100%",
        width:"100%"
    }}>
        <Stack.Screen options={{
            headerShown:false
        }}/>
        <AuthenticationAppMain />
    </View>
}