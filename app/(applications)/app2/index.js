import {View,StyleSheet} from 'react-native'
import FeedRecepiAppMain from '../../../applications/FoodRecepiApp/FeedRecepiAppMain'
import {Stack} from 'expo-router'
export default ()=>{
    return (
        <View style={styles.constainer}>
            <Stack.Screen options={{
                title:"Food Recipe App"
            }}/>
            <FeedRecepiAppMain/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    constainer:{
        flex:1
    }
})