import { useState } from 'react'
import {View,TextInput,StyleSheet} from 'react-native'
import {EllipsisHorizontalCircleIcon as CheckBoxOutLine,ShieldCheckIcon,} from 'react-native-heroicons/outline'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'


export default ({style,addNewTask})=>{
    const[newTask,setNewTask] = useState("");
    const handleEndEditing = (task) => {
        if(task && task.length){
            setNewTask(pre=>"");
            addNewTask(newTask); 
        }
        
    }
    return (
        <View style={style}>
            <CheckBoxOutLine size={hp(4)} color={"grey"}/>
            <TextInput
                style = {styles.input}
                placeholder='to do .....'
                value={newTask}
                onChangeText = {(enteredText)=>setNewTask(()=>enteredText)}
                onSubmitEditing = {()=>handleEndEditing(newTask)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        fontSize: hp(2),
        fontFamily:"AmaticSC_400Regular",
        fontWeight:'900',
        flex:1
      }
})