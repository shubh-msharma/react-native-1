import {View,Text,StyleSheet,FlatList,Dimensions} from 'react-native'
import AppCalendarListItem from './AppCalendarListItem';

export default function AppCalendar() {
  const data = [... Array(50)].map((item,index)=>index+1)
  const deviceWidth = Dimensions.get("window").width
  let cols = 2;
  if(deviceWidth > 1000){
    cols = 5
  }else if(deviceWidth > 400){
    cols = 3
  }
  return (
   <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={cols}
        renderItem = {({item})=>{
            return <AppCalendarListItem data={item}/>
          }
        }
        columnWrapperStyle = {styles.columnWrapperStyle}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // flexDirection:'column',
    paddingHorizontal:10
  },
  contentContainer:{
    gap:10,
  },
  columnWrapperStyle:{
    gap:10
  }
})