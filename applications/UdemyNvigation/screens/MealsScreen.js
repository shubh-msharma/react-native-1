import {MEALS,CATEGORIES} from '../data/dummy-data'
import { useLayoutEffect } from 'react';
import MealList from '../components/MealList';

function MealsScreen({route,navigation}){
    const catId = route.params.catId;
    const mealsToDisplay = MEALS.filter((item)=>{
        return item.categoryIds.indexOf(catId) >= 0
    })
    useLayoutEffect(()=>{
       navigation.setOptions({
        title: CATEGORIES.find((item)=>item.id === catId).title
    }) 
    },[catId,navigation])

    return (
        <MealList meals={mealsToDisplay}/>
    )
}

export default MealsScreen