import {View,StyleSheet} from 'react-native'
import { Stack } from 'expo-router'
import UltimateToDoAppMain from '../../../applications/ultimateToDoApp/UltimateToDoAppMain'

export default () => {
    return (
        <View style={styles.constainer}>
            <UltimateToDoAppMain />
        </View>
    )
}

const styles = StyleSheet.create({
    constainer:{
        flex:1
    }
})
