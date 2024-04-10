import { View , StyleSheet} from "react-native"
import { colors1 } from "../theme/Styles"
import CardBody from "./CardBody"
import CardFooter from "./CardFooter"

export default ({body,footer})=>{
    return (
        <View style={styles.cardContainer}>
            <CardBody>{body}</CardBody>
            <CardFooter>{footer}</CardFooter>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors1.primary600,
        marginHorizontal: 12,
        borderWidth: 1,
        borderRadius: 9,
        justifyContent: 'center',
        padding: 12,
        marginTop: 30,
        overflow: 'hidden'
    },
})