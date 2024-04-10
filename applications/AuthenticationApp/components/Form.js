import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import Input from './Input'

export default ({inputs})=>{
    return (
        <View style={styles.formContainer}>
            {
                inputs.map((input,index)=>{
                    return (
                        <Input 
                            key={index}
                            placeholder={input.placeholder}
                            config={input.config}
                            onChangeText={input.onChangeText}
                            value = {input.value}
                        />
                    )
                })
            }
        </View>
    )
}


const styles = StyleSheet.create({
    formContainer: {
        // flex:1
    },
})