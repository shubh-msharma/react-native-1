import { View, Text, StyleSheet, Pressable } from 'react-native'
import { colors1 } from '../theme/Styles'

export default ({inst,btnInst,onPress}) => {
    return (
        <View style={styles.signupInstrContainer}>
            <Text style={styles.signupInstrText}>{inst}</Text>
            <Pressable onPress={onPress} style={styles.signupInstrPressable}>
                <Text style={styles.signupInstrPressableText}>{btnInst}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    signupInstrContainer: {
        flexDirection: 'row',
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
        gap: 4
    },
    signupInstrText: {
        color: colors1.text400,
        fontSize: 15
    },
    signupInstrPressableText: {
        color: colors1.text200,
        fontSize: 15
    },
    signupInstrPressable: {
        color: colors1.text200,
        fontSize: 15
    },
})