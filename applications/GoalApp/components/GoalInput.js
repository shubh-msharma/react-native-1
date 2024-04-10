import {View,Button,TextInput,StyleSheet,Modal} from 'react-native'
import {useState} from 'react'

const GoalInput = ({handleAddGoal,modelVisibility,handlEndAddNewGoal}) => {

    const[enteredText, setEnteredText] = useState('');
  
    function handleEnterGoalText(enteredText){
      setEnteredText(()=> enteredText)
    }

    function handleAddGoalLocal(){
        handleAddGoal(enteredText)
        setEnteredText(()=>"")
    }
  
    return (
        <Modal visible = {modelVisibility} animationType = {"slide"}>
                <View style = {styles.container}>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder='enter your Goal !' 
                        onChangeText={handleEnterGoalText}
                        value = {enteredText}
                    />
                    <View style = {styles.btnContainer}>
                        <View style={styles.btn}>
                            <Button title='Save' onPress={handleAddGoalLocal}/>
                        </View>
                        <View style = {styles.btn}>
                            <Button title='Cancel' onPress={handlEndAddNewGoal}/>
                        </View>  
                    </View>
                </View>
        </Modal>
        
    );
}

const styles = StyleSheet.create({
    container:{
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 24,
        flex:1
      },
      textInput:{
        borderWidth:1,
        width : '70%',
        borderColor : '#cccccc',
        marginRight: 4,
        padding:5
      },
      btnContainer:{
        flexDirection:'row',
      },
      btn:{
        width:'30%',
        margin:5
      }
});

export default GoalInput;