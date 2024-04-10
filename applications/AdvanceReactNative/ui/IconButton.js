import { Pressable,StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default ({icon,size,color,onPress}) => {
    return (
        <Pressable onPress={onPress}>
            <Ionicons
                name={icon}
                size={size}
                color={color}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        margin:3
    }
})