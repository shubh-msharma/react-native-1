import {View,StyleSheet} from 'react-native'
import AnimationLearning from '../../../applications/animationLearning/AnimationLearning'

export default ()=>{
    return (
        <View style = {styles.container}>
            <AnimationLearning/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})