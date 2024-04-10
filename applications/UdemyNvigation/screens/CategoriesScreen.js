import { FlatList } from "react-native"
import CategoryGridTile from "../components/CategoryGrigTile"
import {CATEGORIES} from "../data/dummy-data"


function renderCategoryItem(itemData,navigation){

    function handleNavigation() {
        navigation.navigate("Meals",{
            catId:itemData.item.id
        })
    }

    return <CategoryGridTile 
                onPressHandler={handleNavigation}
                title={itemData.item.title} 
                color={itemData.item.color}/>
}


function CategoriesScreen({navigation}){

    return <FlatList
        data={CATEGORIES}
        keyExtractor = {(item)=>item.id}
        renderItem={(item)=>renderCategoryItem(item,navigation)}
        numColumns={2}
        columnWrapperStyle={{
            justifyContent:'space-between',
            marginHorizontal:4
        }}
    />
}

export default CategoriesScreen