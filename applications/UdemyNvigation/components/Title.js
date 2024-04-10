import { StyleSheet, Text } from "react-native"

export default ({children,customStyles})=>{
    return <Text style={[styles.title,customStyles]}>{children}</Text>
}
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 5,
        paddingHorizontal: 5,
        textAlign: 'center'
    }
})