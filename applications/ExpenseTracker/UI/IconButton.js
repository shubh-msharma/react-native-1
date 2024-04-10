import { Pressable,StyleSheet } from "react-native"
import { AntDesign } from '@expo/vector-icons';

export default ({name,size,color, onPress})=>{
    return (
        <Pressable style={({pressed})=>{
            return pressed ? styles.pressed : {}
        }} onPress={onPress}>
            <AntDesign name={name} size={size} color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7
    }
})