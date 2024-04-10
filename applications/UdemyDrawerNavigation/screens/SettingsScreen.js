import { View, Text, StyleSheet } from "react-native"


export default ()=>{
    return <View style={{
        justifyContent:'center',
        alignItems:'center'
    }}>
        <Text style={{
            fontSize:30,
            fontWeight:'bold'
        }}>Settings <Text style={{
            fontSize:35,
            fontWeight:'bold',
            color:'red'
        }}>Screen</Text></Text>
    </View>
}