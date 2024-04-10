import {View,Text, useWindowDimensions} from 'react-native'
import { ActivityIndicator } from "react-native"
import Loading from "../../../applications/realTimeChat/components/Loading"
export default ()=> {
    const {width,height} = useWindowDimensions()
    return (
        <View 
            style={{
                height:"100%",
                width:"100%",
            }}
            className='justify-center items-center'>
            {/* <ActivityIndicator size={'large'} color="black"/> */}
            <Loading />
        </View>
    )
}