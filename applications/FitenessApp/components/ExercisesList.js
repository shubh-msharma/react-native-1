import { FlatList } from "react-native"
import ExerciseListCard from "./ExerciseListCard";

export default  ({exercises}) => {
    return (
        <FlatList
            data = {exercises}
            renderItem = {({item,index})=>{
                return <ExerciseListCard data = {item} index = {index}/>
            }}
            numColumns = {2}
            columnWrapperStyle = {{
                justifyContent:"space-between",
            }}
            contentContainerStyle = {{
                marginHorizontal:5,
                paddingHorizontal:5,
            }}
            showsVerticalScrollIndicator = {false}
        />
    )
}