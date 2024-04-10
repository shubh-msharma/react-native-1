import { StyleSheet, Text, View } from "react-native";
import AppCalendar from "../src/components/AppCalendar";
import {Stack} from 'expo-router'
export default function Page() {
  console.log("into calendar")
  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        title:"App Calendar"
      }}/>
      <AppCalendar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
