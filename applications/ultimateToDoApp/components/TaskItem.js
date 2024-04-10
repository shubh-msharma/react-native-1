import {Text,StyleSheet,
    Pressable
  } from 'react-native'
  import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
  import {EllipsisHorizontalCircleIcon as CheckBoxOutLine,ShieldCheckIcon,} from 'react-native-heroicons/outline'
  import {CheckCircleIcon as CheckBoxSolid} from 'react-native-heroicons/solid'

export default ({item,index, handleOnTaskPressEvent, taskContainerStyle})=>{
    return (
        <Pressable onPress={()=>handleOnTaskPressEvent(index)} style={taskContainerStyle}>
            {
                item.isFinished ? <CheckBoxSolid size={hp(4)} color={"green"}/> : <CheckBoxOutLine size={hp(4)} color={"grey"}/>
            }
            <Text style={[styles.taskTitle,{
              textDecorationLine:item.isFinished?'line-through':'none',
              color:item.isFinished ? 'lightgrey' : 'black'
              }]}>{item.title}</Text>
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    taskTitle:{
        fontSize: hp(2),
        fontFamily:"AmaticSC_400Regular",
        // letterSpacing:hp(0.4),
        fontWeight:'900',
    }
})