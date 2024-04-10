import { View , Text , StyleSheet} from "react-native"
import { GlobalStyles } from "../constants/styles"

export default ({period,periodCount,moneyAmount})=>{
    return <View style={styles.container}>
        <Text style={styles.period}>{periodCount > 0 ? `Last ${periodCount}` : ""} {period}</Text>
        <Text style={styles.amount}>$ {moneyAmount}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding:9,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:GlobalStyles.colors.primary100,
        borderRadius:10
    },
    period:{
        fontSize:17,
        fontWeight:'500',
        color:GlobalStyles.colors.primary500
    },
    amount:{
        fontSize:22,
        fontWeight:'bold',
        color:GlobalStyles.colors.primary700
    }
})