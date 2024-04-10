import { Stack } from "expo-router"
import HomeScreenHeader from "../../../../applications/realTimeChat/components/HomeScreenHeader"
export default ()=>{
    return <Stack>
        <Stack.Screen name="home" options={{
            header: ()=> <HomeScreenHeader/>
        }}/>
    </Stack>
}