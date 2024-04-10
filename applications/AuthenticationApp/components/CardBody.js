import { View , StyleSheet} from "react-native"
import { colors1 } from "../theme/Styles"

export default ({children})=>{
    return (
        <View style={styles.cardBodyContainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardBodyContainer: {
        backgroundColor: colors1.primary400,
        padding: 12,
        marginBottom: 8,
        borderRadius: 12
        // flex:1
    },
})