import {View,StyleSheet} from 'react-native'
import { getColorScheme } from '../theme/theme'

export default ({children})=>{
    return (
        <View style={styles.root}>
            <View style={styles.signInCard}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        justifyContent:'flex-end',
        flex:1,
        backgroundColor:getColorScheme().accent100
    },
    signInCard:{
        // height:"60%",
        backgroundColor:getColorScheme().primary400,
        borderTopStartRadius:60,
        borderTopEndRadius:60,
        paddingTop:"14%",
        paddingHorizontal:10
    },
})