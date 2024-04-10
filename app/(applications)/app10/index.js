import { Stack } from "expo-router"
import { View } from "react-native"
import UdemyDrawerNavigationMain from "../../../applications/UdemyDrawerNavigation/UdemyDrawerNavigationMain"

export default ()=>{
    return <View style={{
        width:"100%",
        height:"100%"
    }}>
        <Stack.Screen  options={{
            headerShown:false
        }}/>
        <UdemyDrawerNavigationMain/>
    </View>
}