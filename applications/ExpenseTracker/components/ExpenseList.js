import { useNavigation } from "@react-navigation/native"
import { View , Text, FlatList} from "react-native"
import { GlobalStyles } from "../constants/styles"
import ExpenseListItem from "./ExpenseListItem"



export default ({expenses})=>{
    const navigation = useNavigation();
    return (
        <View style={{
            marginBottom:25
        }}>
            <FlatList
                data={expenses}
                keyExtractor={(item)=>item.id}
                renderItem={(data)=><ExpenseListItem navigation={navigation} data={data}/>}
            />
        </View>
    )
}
