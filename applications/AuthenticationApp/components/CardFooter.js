import { View , StyleSheet} from "react-native"
import { colors1 } from "../theme/Styles"

export default ({children})=>{
    return (
        <View style={styles.cardFooterContainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardFooterContainer: {
        backgroundColor: colors1.primary400,
        padding: 12,
        borderRadius: 12
    },
})