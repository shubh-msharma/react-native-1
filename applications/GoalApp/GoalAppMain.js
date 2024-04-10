import { StyleSheet, View, Button, FlatList } from 'react-native';
import {useState} from 'react'
import GoalItem from './components/GoaItem';
import GoalInput from './components/GoalInput';

export default function GoalAppMain() {
  const[goalList, updateGoalsList] = useState([]);
  const[modelVisibility, setModelVisibility] = useState(false);

  function handlEndAddNewGoal(){
      setModelVisibility(()=>false);
  }
 
  function handleAddGoal(enteredText){
    updateGoalsList((l)=> [
      ...l,
      {text:enteredText,id:Math.random().toString() + enteredText.length}
    ]);
    handlEndAddNewGoal();
  }

  function handleStartNewGoal(){
    setModelVisibility(()=>true);
  }

  function handleDeleteGoal(id){
    updateGoalsList((ol)=>{
      return ol.filter(item=> item.id != id);
    })
  }

  return (
    // text and button for goals

    <View style = {styles.appContainer}>
      <Button title='Add New Goal !' onPress={handleStartNewGoal}/>
     <GoalInput 
      handleAddGoal = {handleAddGoal}
      handlEndAddNewGoal = {handlEndAddNewGoal}
      modelVisibility = {modelVisibility}
     />
     <View  style = {styles.goalContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData)=>{
            return <GoalItem 
              item={itemData.item}
              onDeleteItem = {handleDeleteGoal}
            />
          }}
          keyExtractor={(item)=>{
            return item.id
          }}
        />
     </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop:30,
    paddingHorizontal:20,
    flex:1
  },
  goalContainer:{
    flex:5,
    marginTop:7
  }
});
