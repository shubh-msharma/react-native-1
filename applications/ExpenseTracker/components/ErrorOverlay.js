import { View , Text , StyleSheet} from "react-native"
import { GlobalStyles } from "../constants/styles"
import Button from "../UI/Button"

export default ({errTitle,errMsg,onPress})=>{
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>{errTitle}</Text>
            <Text style = {[styles.text,styles.errText]}>{errMsg}</Text>
            <Button onPress={onPress}>{"Try Again"}</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:GlobalStyles.colors.primary800
    },
    text: {
        fontSize:24,
        textAlign:'center',
        color:'white',
        // marginVertical:4,
        marginVertical:12
    },
    errText: {
        color:GlobalStyles.colors.error50
    },
})