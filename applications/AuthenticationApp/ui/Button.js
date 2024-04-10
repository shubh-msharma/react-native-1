import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import { colors1 } from '../theme/Styles'

export default ({children,onPress}) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={onPress} style={({pressed})=>[styles.buttonPressable,pressed ? {backgroundColor:colors1.primary200} : {}]}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center'
    },
    buttonPressable: {
        backgroundColor: colors1.primary100,
        padding: 8,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: colors1.text800,
        fontWeight: 'bold'
    }
})