import { FlatList } from 'react-native';
import MealItem from "./MealItem"
import {useNavigation} from '@react-navigation/core'

function renderMeal(itemData,navigation){

    function handleMealDetailsNavigation(){
        navigation.navigate("MealsDetails",{
            meal:itemData.item
        })
    }

    return (
        <MealItem
            title = {itemData.item.title}
            imageUrl = {itemData.item.imageUrl}
            duration = {itemData.item.duration}
            complexity = {itemData.item.complexity}
            affordability = {itemData.item.affordability}
            handleMealDetailsNavigation = {handleMealDetailsNavigation}
        />
    )
}

function MealList({meals}){
    const nav = useNavigation();
    return (
        <FlatList
            data={meals}
            keyExtractor = {(item)=>item.id}
            renderItem={(data)=>renderMeal(data,nav)}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default MealList