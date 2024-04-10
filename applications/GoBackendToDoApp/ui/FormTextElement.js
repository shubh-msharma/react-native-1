import { useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { getColorScheme } from '../theme/theme'

export default ({ placeholder, label }) => {
    const [val,setVal] = useState("");
    return (
        <View style={styles.formTextEleContainer}>
            <View style={styles.formEleLabelContainer}>
                <Text style={styles.formEleLabel}>{label}</Text>
            </View>
            <TextInput
                placeholder={placeholder}
                style={styles.formTextEle}
                onChangeText = {(val)=>{
                    console.log(val)
                    setVal(val)
                }}
                value={val}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formTextEleContainer: {
        backgroundColor:getColorScheme().primary200,
        borderRadius: 9,
        // overflow:'hidden',
        borderWidth: 1,
        position: 'relative',
        marginVertical:12
    },
    formEleLabelContainer: {
        position: 'absolute',
        top: -10,
        left: 9,
        backgroundColor:getColorScheme().primary200,
        paddingHorizontal: 7,
        borderTopStartRadius:3,
        borderTopEndRadius:3,
    },
    formEleLabel: {
    },
    formTextEle: {
        paddingVertical: 8,
        fontSize: 21,
        paddingHorizontal: 9
    },
})