import {View,Text,Image,StyleSheet,ScrollView, Button, Pressable} from 'react-native'
import List from '../components/List'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/SubTitle'
import Title from '../components/Title'
import {useLayoutEffect,useContext} from 'react'
import {StarIcon} from 'react-native-heroicons/solid'
import {FavoritesContext} from '../store/context/favorites-context'


function MealDetailsScreen({route,navigation}){
    const favoritesMealCtx = useContext(FavoritesContext)
    const meal = route.params.meal
    const isFavorite = favoritesMealCtx.ids.includes(meal.id);
    console.log(meal.id,isFavorite)

    function handleFavoriteStatus(){
        console.log(favoritesMealCtx)
        if(isFavorite) {
            console.log("removing",meal.id)
            favoritesMealCtx.removeFavorites(meal.id)
        } else {
            console.log("adding",meal.id)
            favoritesMealCtx.addFavorites(meal.id);
        }
    }


    useLayoutEffect(()=>{
       navigation.setOptions({
        title:meal.title,
        headerRight:()=>{
            return (
                <Pressable 
                    onPress={handleFavoriteStatus}
                    style = {({pressed})=>{
                        return [
                            pressed ? {opacity:0.7} : null
                        ]
                    }}
                >
                    <StarIcon size={30} color={isFavorite ? "red" :"white"}/>
                </Pressable>
            )
        }
    }) 
    },[meal,navigation,isFavorite,handleFavoriteStatus])
    
    return (
        <ScrollView style = {styles.root}>
            {/* image */}
                <Image style={styles.image} source={{uri:meal.imageUrl}}/>
            {/* title */}
                <Title customStyles={styles.title}>{meal.title}</Title>
            {/* details */}
                <MealDetails 
                    textStyle={styles.mealDetaisTextStyle}
                    affordability={meal.affordability}
                    complexity={meal.complexity}
                    duration={meal.duration}
                 />
                <View style={styles.ingStpContainer}>
                    <SubTitle 
                        textStyle={styles.textStyle}
                        containerStyle={styles.subTitleContainerStyle}
                        >
                            {"Ingredients"}
                    </SubTitle>
                    <List 
                        listItemContainerStyle={styles.listItemContainerStyle}
                        listItemTextStyle={styles.listItemTextStyle}
                        dataItems={meal.ingredients}/>
                    <SubTitle 
                        textStyle={styles.textStyle}
                        containerStyle={styles.subTitleContainerStyle}>
                            {"Steps"}
                    </SubTitle>
                    <List 
                        listItemContainerStyle={styles.listItemContainerStyle}
                        listItemTextStyle={styles.listItemTextStyle}
                        dataItems={meal.steps}/>
                </View>
                
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        // paddingBottom:30
    },
    image: {
        width: "100%",
        // height: 250,
        aspectRatio:1/1
    },
    title:{
        color:'white'
    },
    subTitleContainerStyle:{
        borderBottomWidth:2,
        marginVertical:10,
        marginHorizontal:25,
        padding:5,
        alignItems:'center',
        borderColor:"#cfb17e",
        width:"70%"
    },
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:"#cfb17e",
    },
    listItemContainerStyle:{
        padding:3,
        width:"66%",
        borderWidth:1,
        backgroundColor:"#cfb17e",
        marginVertical:2,
        borderRadius:10,
    },
    listItemTextStyle:{
        textAlign:'center',
        fontSize:17
    },
    ingStpContainer:{
        alignItems:"center"
    },
    mealDetaisTextStyle:{
        color:"white"
    }
})

export default MealDetailsScreen