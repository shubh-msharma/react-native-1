import {View,Text,StyleSheet} from 'react-native'

export default ()=>{
    return (
        <View style={styles.root}>
            <Text style={styles.title}>task details screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:25,
        fontWeight:'bold'
    }
})