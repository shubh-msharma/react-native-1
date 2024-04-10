import { useState } from 'react';
import {View,TextInput,Button,StyleSheet,Text} from 'react-native'
import CardItemList from './CardItemList';

const ToDoInput = ({onCancle,onSaveToDoItem}) => {

    const[toDoItems,setToDoItems] = useState([])

    const[enteredToDoItem,setEnteredToDoItem] = useState("");
    const[enteredToDoTitle,setEnteredToDoTitle] = useState("");

    function handleEnteredToDoItem(enteredText){
        setEnteredToDoItem(()=>enteredText)
    }
    function handleEnteredToDoTitle(enteredTitle){
        setEnteredToDoTitle(()=>enteredTitle)
    }

    function cancleAddUpdateNoteItem(){
        onCancle()
    }

    function handleSaveToDoItem(){
        onSaveToDoItem({
            id:Date.now().toString(),
            title:enteredToDoTitle,
            notes:toDoItems
        })
        clearLocalStates();
    }

    function clearLocalStates(){
        setToDoItems(()=>[])
        handleEnteredToDoItem("");
        handleEnteredToDoTitle("");
    }

    function addToDoItem(){
        setToDoItems(os => {
            return [
                ...os,
                {
                    text:enteredToDoItem,
                    id:Date.now().toString()
                }
            ]
        })
        handleEnteredToDoItem("");
    }

    return (
        <View style = {styles.inputContainer}>
            <View style = {styles.inputController}>
                <TextInput 
                    style = {styles.textInputEle}
                    placeholder="Enter To-Do Item Title"
                    value={enteredToDoTitle}
                    onChangeText = {handleEnteredToDoTitle}
                />
                <TextInput 
                    style = {styles.textInputEle}
                    placeholder="Enter To-Do Item"
                    value={enteredToDoItem}
                    onChangeText = {handleEnteredToDoItem}
                />
                <View style = {styles.inputBtnContainer}>
                    <Button onPress={addToDoItem} title="Add Item"/>
                    <Button onPress={handleSaveToDoItem} title="Save ToDo"/>
                    <Button onPress={cancleAddUpdateNoteItem} title="Cancel"/>
                </View>
            </View>
            <View style = {styles.toDoItems}>
                <Text>Your Entered Item</Text>
                <CardItemList items={toDoItems}/>
            </View>
         </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        // width:'100%',
        // backgroundColor:'green',
        flex:1
    },
    inputController:{
        justifyContent:'center',
        alignItems:'center',
        // width:'100%',
        backgroundColor:'green',
        padding:6,
        flex:1
    },
    inputBtnContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%'
    },
    textInputEle: {
        padding: 3,
        fontSize:20,
        marginTop:3,
        marginBottom:5,
        borderWidth:1,
        width:'100%'
    },
    toDoItems:{
        flex:4,
        backgroundColor:'red',
        padding:5
    }
});

export default ToDoInput;