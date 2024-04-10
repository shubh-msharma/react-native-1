import {View,Text,StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { Stack } from 'expo-router';
import { useState } from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
import TaskInput from './components/TaskInput';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import TaskItem from './components/TaskItem';
import {TrashIcon} from 'react-native-heroicons/solid'

const taskData = [
    {
      "title": "Complete Project Report",
      "description": "Compile and analyze data, draw conclusions, and write the final project report.",
      "due_date": "2024-01-31",
      "notes": "Include visualizations and key findings.", 
      "isFinished":false
    },
    {
      "title": "Grocery Shopping",
      "description": "Purchase essential groceries including milk, eggs, bread, and fresh fruits.",
      "due_date": "2024-02-05",
      "notes": "Check for any ongoing discounts at the local store.", 
      "isFinished":true
    },
    {
      "title": "Prepare for Team Meeting",
      "description": "Review agenda and prepare a status update for the upcoming team meeting.",
      "due_date": "2024-01-20",
      "notes": "Highlight key accomplishments and challenges.", 
      "isFinished":false
    },
    {
      "title": "Gym Workout Session",
      "description": "Engage in a comprehensive gym workout, focusing on both cardio and strength training.",
      "due_date": "2024-01-25",
      "notes": "Follow the personalized fitness plan.", 
      "isFinished":false
    },
    {
      "title": "Read Chapter of 'The Great Gatsby'",
      "description": "Read a chapter from the novel 'The Great Gatsby' as part of the reading list.",
      "due_date": "2024-02-10",
      "notes": "Reflect on the symbolism and character development.", 
      "isFinished":true
    },
    {
      "title": "Submit Expense Reports",
      "description": "Compile and submit all expense reports, ensuring all receipts are attached.",
      "due_date": "2024-01-28",
      "notes": "Double-check for accuracy and compliance.", 
      "isFinished":false
    },
    {
      "title": "Plan Weekend Trip",
      "description": "Research potential weekend trip destinations and accommodations for an upcoming getaway.",
      "due_date": "2024-02-15",
      "notes": "Consider preferences and budget constraints.", 
      "isFinished":false
    },
    {
      "title": "Call Family for Gathering",
      "description": "Reach out to family members to discuss and plan an upcoming family gathering.",
      "due_date": "2024-01-22",
      "notes": "Coordinate dates and activities.", 
      "isFinished":false
    },
    {
      "title": "Write Blog Post",
      "description": "Select a topic, outline content, and start writing a new blog post.",
      "due_date": "2024-02-08",
      "notes": "Incorporate personal experiences and insights.", 
      "isFinished":false
    },
    {
      "title": "Renew Subscriptions",
      "description": "Review current subscriptions and renew those due for extension.",
      "due_date": "2024-01-30",
      "notes": "Check for any available discounts before renewal.", 
      "isFinished":true
    }
  ]
export default ()=>{

    const [tasks,setTasks] = useState(taskData);

    const handleOnTaskPressEvent = (index) => {
        setTasks(pre=>{
            const updatedSate =  [...pre]
            updatedSate[index].isFinished = !pre[index].isFinished
            console.log(updatedSate)
            return updatedSate;
        })
    }

    const addNewTask = (newTask) => {
        setTasks(pre=> [...pre,{
          "title": newTask,
          "description": "",
          "due_date": "",
          "notes": "", 
          "isFinished":false
        }])
    }

    const RightAction = () => {
      return (
        <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'red',paddingHorizontal:5}}>
            <TrashIcon size={hp(4)} color="black"/>
        </View>
      )
    }
    
    return (
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? 'padding':'height'}
        style={styles.page}
        >
            <Stack.Screen options={{title:"The Ultimate ToDo App",headerShown:false}}/>
            <FlatList
                data={tasks}
                renderItem = {({item,index})=>{
                    return (
                        // <TaskItem taskContainerStyle={styles.taskContainer} item={item} index={index} handleOnTaskPressEvent = {handleOnTaskPressEvent}/>
                        <Swipeable renderRightActions={()=><RightAction/>} >
                            <TaskItem taskContainerStyle={styles.taskContainer} item={item} index={index} handleOnTaskPressEvent = {handleOnTaskPressEvent}/>
                        </Swipeable>
                    )
                }}
                contentContainerStyle = {styles.contentContainerStyle}
                ListFooterComponent = {()=>{
                  return (
                    <TaskInput style = {styles.taskContainer} addNewTask={addNewTask}/>
                  )
                }}
            />
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    page:{
        flex:1,
        paddingTop:25,
        paddingHorizontal:4,
        backgroundColor:"#EEF5FF",
    },
    contentContainerStyle:{
        gap:4
    },
    taskContainer:{
      backgroundColor:"#FFFFFF",
      borderColor:"#B4D4FF",
      borderBottomWidth:hp(0.2),
      padding:hp(1.5),
      flexDirection:'row',
      gap:hp(1.2),
      alignItems:'center'
  },
})