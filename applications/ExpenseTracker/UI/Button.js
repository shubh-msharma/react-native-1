import { Pressable, View, StyleSheet , Text} from "react-native"
import { GlobalStyles } from "../constants/styles"

export default ({ children, mode , onPress}) => {
    return (
        <View style={
            styles.container
        }>
            <Pressable onPress={onPress} style={({pressed})=>[mode==="flat" ? styles.flatPressabel : styles.normalPressable,styles.pressable,pressed ? {opacity:0.7}:{}]}>
                <Text style={[mode==="flat" ? styles.flatText : styles.normalText,styles.text]}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius:5,
        overflow:'hidden'
    },
    pressable:{
        paddingVertical:12,
        paddingHorizontal:18
    },
    normalPressable: {
        backgroundColor:GlobalStyles.colors.primary200
    },
    flatPressabel: {
        backgroundColor:'transparent'
    },
    text:{
        textAlign:'center',
        fontSize:18
    },
    flatText: {
        color:'white'
    },
    normalText:{
        color:GlobalStyles.colors.primary400
    }
})