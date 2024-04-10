import React from 'react'
import {Image, Pressable, Text,View} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import MasonryList from '@react-native-seoul/masonry-list';
// import { recipe } from '../constants';
import Animated,{FadeInDown} from 'react-native-reanimated'
import Loader from './Loader';

export default function Recipes({recipe}) {
  return (
    <View className="mx-2 space-y-2">
        <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-600">Recipes</Text>
        {
            recipe && recipe.length > 0 ? 
            // // <View className="">
               
            // {/* </View> */}
            <MasonryList
            contentContainerStyle = {{alignItems:'flex-start'}}
            data={recipe}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item,i}) => <RecipeCard key={item.idMeal+i} recipe={item} index={i}/>}
            // refreshing={isLoadingNext}
            // onRefresh={() => refetch({first: ITEM_CNT})}
            onEndReachedThreshold={0.1}
            // onEndReached={() => loadNext(ITEM_CNT)}
        />
             : 
            <Loader size = "large" className = "mt-40"/>
        }
    </View>
  )
}

const RecipeCard = ({recipe,index}) =>{
    const isEven = index % 2 === 0;
    const isThird = index % 3 === 0;
    return (
        <Animated.View entering={FadeInDown.delay(index+100).duration(200).springify().damping(12)}>
            <Pressable
                className='flex justify-center mb-4 space-y-1'
                style={{width:'100%', paddingLeft:isEven ? 0 : 8 , paddingRight: isEven ? 8:0}}>
                    <Image source={{uri:recipe.strMealThumb}}
                        style={{width:'96%', height:isThird ? hp(35):hp(45),borderRadius:35}}
                    />
                    <Text style={{fontSize:hp(2.3)}} className="font-semibold text-neutral-400 ml-4">{
                        recipe.strMeal.length > 15 ? recipe.strMeal.substr(0,15)+"..." : recipe.strMeal
                    }</Text>
            </Pressable>
        </Animated.View>
       
    )
}
