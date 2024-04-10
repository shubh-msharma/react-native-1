import { ActivityIndicator, View , StyleSheet} from "react-native"
import { GlobalStyles } from "../constants/styles"

export default ()=>{
    return (
        <View style = {styles.container}>
            <ActivityIndicator size={"large"} color="white"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:GlobalStyles.colors.primary800
    }
})