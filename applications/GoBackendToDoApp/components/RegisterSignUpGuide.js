import { View, Text, StyleSheet ,Pressable} from 'react-native'
import { getColorScheme } from '../theme/theme'


export default ({msg, btnMsg,onPress}) => {
    return (
        <View style={styles.registerSignupMsgContainer}>
            <View>
                <Text style={styles.registerSignupMsgText}>{msg} </Text>
            </View>
            <View>
                <Pressable onPress={onPress} >
                    <Text style={styles.registerSignupBtnText}>{btnMsg}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    registerSignupMsgContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 3,
        paddingBottom: 12
    },
    registerSignupMsgText: {
        fontSize: 17,
        color: getColorScheme().accent700
    },
    registerSignupBtnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: getColorScheme().accent800
    }
})