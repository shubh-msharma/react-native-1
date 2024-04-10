import { View,Text,StyleSheet } from "react-native"
import { useAuth } from "../store/Authentication-context"
import { colors1 } from "../theme/Styles"
import Button from "../ui/Button"

function HomeScreen(){
    const {logout} = useAuth()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome Home</Text>
            <Button onPress={()=>{
                logout()
            }}> LogOut</Button>
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:colors1.primary200
    },
    text:{
        fontSize:26,
        color:colors1.primary800
    },
})