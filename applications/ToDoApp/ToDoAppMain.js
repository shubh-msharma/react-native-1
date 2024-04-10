import { View, Text, StyleSheet, Pressable } from "react-native"
import { useState } from "react";
import CardContainer from "./components/CardContainer";
import ToDoInput from "./components/ToDoInput";
import ToDoModal from "./components/ToDoModal";
import Card from "./components/Card";

function ToDoAppMain(){
    const data = [
        {
            id:Date.now().toString,
            title:"title 1",
            notes: [
                {
                    id:Date.now().toString(),
                    text:"note text 1"
                },
                {
                    id:Date.now().toString(),
                    text:"note text 2"
                },
                {
                    id:Date.now().toString(),
                    text:"note text 3"
                },
                {
                    id:Date.now().toString(),
                    text:"note text 4"
                },
            ]
        },
        {
            id:Date.now().toString,
            title:"title 2",
            notes: [
                {
                    id:Date.now().toString(),
                    text:"note text 1"
                },
                {
                    id:Date.now().toString(),
                    text:"note text 2"
                },
            ]
        },
        {
            id:Date.now().toString,
            title:"title 2",
            notes: [
                {
                    id:Date.now().toString(),
                    text:"note text 1"
                },
                {
                    id:Date.now().toString(),
                    text:"note text 2"
                },
                {
                    id:Date.now().toString(),
                    text:"note text 3"
                },
            ]
        },
    ]
    const[toDoNotes , setToDoNotes] = useState(data);
    const[inputToDoModalStatus,setInputToDoModalStatus] = useState(false);
    const[singleCardModalStatus,setSingleCardModalModalStatus] = useState(false);
    
    function handleShowInputToDoModalStatus(){
        setInputToDoModalStatus(()=>true);
    }

    function handleCloseInputToDoModalStatus(){
        setInputToDoModalStatus(()=>false);
    }

    function handleSaveToDoItem(toDo){
        setToDoNotes((ol=>{
            return [
                ...ol,
                toDo
            ]
        }));
        handleCloseInputToDoModalStatus();
    }

    return (
        <View style = {styles.appContainer}>
            <ToDoModal
                Element={()=> <ToDoInput 
                    onCancle = {handleCloseInputToDoModalStatus}
                    onSaveToDoItem = {handleSaveToDoItem}
                    />
                }
                visibility = {inputToDoModalStatus}
            />
            <CardContainer data={toDoNotes}/>
            <Pressable onPress={handleShowInputToDoModalStatus} style={styles.addNotesBtn}>
                <Text style = {styles.addNotesBtnTxt}>+</Text>
            </Pressable>
            {/* <Card item={data[0]}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop:20,
        padding:10,
        position:"relative",
        flex:1
    },
    addNotesBtn:{
        position:"absolute",
        right:0,
        bottom:0,
        margin:10,
        backgroundColor:"#0caccc",
        width:60,
        height:60,
        borderRadius:50,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    addNotesBtnTxt:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'justify',
        color:'white'
    }
});
export default ToDoAppMain