import { useContext } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import { FavoritesContext } from '../store/context/favorites-context'

function FavoritesScreen(){
    const favoritesCtx = useContext(FavoritesContext)
    const mealsToDisplay = MEALS.filter(meal=> favoritesCtx.ids.includes(meal.id));
    if(mealsToDisplay.length === 0 ){
        return (
            <View style = {styles.msgRoot}>
                <Text style = {styles.msgText}>You have no favorites Meals yet :(</Text>
            </View>
        )
    }
    return (
        <MealList meals={mealsToDisplay}/>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    msgRoot:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    msgText:{
        fontSize:23,
        color:'white'
    }
})