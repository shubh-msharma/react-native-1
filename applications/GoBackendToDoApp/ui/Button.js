import { Pressable, View, Text, StyleSheet } from 'react-native'
import { getColorScheme } from '../theme/theme'

export default ({label}) => {
    return (
        <Pressable style={({pressed})=>[styles.btnContainer , pressed ? {backgroundColor:getColorScheme().primary300} : {}]}>
            <View style={styles.btnTitleContainer}>
                <Text style={styles.btnTitle}>{label}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: getColorScheme().primary200,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 9,
        borderRadius: 12,
        marginVertical:9
    },
    btnTitleContainer: {
    },
    btnTitle: {
        fontSize: 22,
        color:getColorScheme().text600
    },
})