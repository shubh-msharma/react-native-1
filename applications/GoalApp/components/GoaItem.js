import {View,Text,StyleSheet,Pressable} from 'react-native'

const GoalItem = ({item, onDeleteItem}) => {
    return (
            <View style={styles.goal} >
                <Pressable 
                    android_ripple={{color:'white'}} 
                    onPress={onDeleteItem.bind(this,item.id)}
                    style = {({pressed})=> pressed && styles.pressItem}
                >
                        <Text style={styles.goalText}>{item.text}</Text>
                </Pressable>
            </View>
    )
}

const styles = StyleSheet.create({
    goal:{
        borderBottomWidth:1,
        borderBottomColor:"#cccccc",
        marginBottom:8,
        backgroundColor:"grey",
        color:"white",
        borderRadius:5
      },
      goalText:{
        color:"white",
        fontSize:40,
        padding:5
      },
      pressItem:{
        opacity:0.5
      }
});

export default GoalItem;