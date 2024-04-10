import { View, Text, StyleSheet, TextInput } from "react-native"
import { GlobalStyles } from "../constants/styles"

export default (props) => {
    const inputStyle = [styles.input]
    if (props.multiline) {
        inputStyle.push(styles.inputMultiline)
    }
    return (
        <View style={[styles.inputContainer,(props.label === "Category" || props.label === "Amount") ? {flex:1} : {}, false == props.isValid ? {backgroundColor:GlobalStyles.colors.error500} : {}]}>
            <Text style={styles.layout}>{props.label}</Text>
            <TextInput
                placeholder={props.label}
                {...props}
                style={inputStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: GlobalStyles.colors.primary100,
        // flexDirection: "row",
        // justifyContent: 'space-between',
        gap: 5,
        borderWidth: 2,
        marginVertical: 10,
        position: 'relative',
        marginHorizontal: 8,
        borderRadius: 7,
    },
    layout: {
        fontSize: 14,
        // textAlign: 'center',
        position: 'absolute',
        top: -12,
        padding: 1,
        // borderWidth:1,
        marginLeft: 4,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4
    },
    input: {
        // flex:1,
        padding: 1,
        fontSize: 19,
        marginTop: 4,
        marginLeft: 3,
        paddingLeft: 4,
        paddingBottom:3,
        color:GlobalStyles.colors.primary700
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
})