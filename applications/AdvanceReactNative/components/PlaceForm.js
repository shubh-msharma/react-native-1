import { useState } from 'react'
import {View,Text, ScrollView, TextInput,StyleSheet} from 'react-native'
import { colors } from '../theme/Colors'

export default ()=>{
    const [title,setTitle] = useState("")
    return (
        <ScrollView style={styles.form}>
            <View style={styles.element}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>setTitle(text)}
                    value = {title}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form:{
        flex:1,
        paddingHorizontal:4,
        paddingVertical:8
    },
    label:{
        fontWeight:'bold',
        fontSize:17,
        marginBottom:4,
        color:colors.accent800
    },
    input:{
        marginVertical:3,
        paddingHorizontal:6,
        paddingVertical:4,
        fontSize:18,
        backgroundColor:colors.primary100
    },
    element:{
        paddingHorizontal:12
    }
})