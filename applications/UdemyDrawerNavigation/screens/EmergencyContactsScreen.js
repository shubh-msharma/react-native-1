import { View, Text, StyleSheet } from "react-native"


export default ()=>{
    return <View style={{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }}>
        <Text style={{
            fontSize:30,
            fontWeight:'bold'
        }}>Emergencey Contact <Text style={{
            fontSize:35,
            fontWeight:'bold',
            color:'red'
        }}>Screen</Text></Text>
    </View>
}