import {View,StyleSheet} from 'react-native'
import AnimatedOnBoardingMain from '../../../applications/AnimatedOmBoarding/AnimatedOnBoardingMain'

export default ()=>{
    return (
            <View style={styles.container}>
                <AnimatedOnBoardingMain/>
            </View>        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})