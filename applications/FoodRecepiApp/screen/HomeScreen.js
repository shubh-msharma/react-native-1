import React, { useEffect, useState } from 'react'
import { View,Text,StatusBar, ScrollView,Image,TextInput } from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {BellIcon,MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import { getCategories, getMeals } from '../apis'
import Recipes from '../components/Recipes'
// import { categories } from '../constants'

export default function HomeScreen() {

  const [activeCategory,setActiveCategory] = useState("Beef")
  const [categories,setCategories] = useState([]);
  const [meals,setMeals] = useState([]);

  useEffect(()=>{
      getCategories((data)=>{
        setCategories((pre=>data))
        getMealByCategory(activeCategory)
      }
    )
  },[])

  const getMealByCategory = (newCategory) => {
      getMeals(newCategory,(fetchedMeals)=>{
        setMeals((pre)=>fetchedMeals)
    })
  }

  const switchCategory = (newCategory) => {
    setActiveCategory(pre=>newCategory)
    setMeals(pre=>[])
    getMealByCategory(newCategory)
  }

  return (
    <View className = "flex-1 bg-white">
        <StatusBar barStyle='light-content'/>
        <ScrollView
          showsVerticalScrollIndicator = {false}
          contentContainerStyle = {{paddingBottom:30}}
          className = 'space-y-3 pt-3'
        >
          {/* avatar and bell icon */}
          <View className="flex flex-row justify-between items-center mx-4">
            <Image  source={require("../assets/images/avatar.png")} style={{height:hp(6),width:hp(6.5)}}/>
            <BellIcon size={hp(5.5)} color ="grey" />
          </View>

          {/* greeting and punchline */}
          <View className= "mx-4 space-y-1 mb-2">
            <Text style={{fontSize:hp(2.5)}} className="text-neutral-700">hello shubham !</Text>
            <Text style={{fontSize:hp(3.8)}} className="font-semibold text-neutral-700">Make your own food</Text>
            <Text style={{fontSize:hp(3.8)}} className="font-semibold text-neutral-700">stay at <Text style={{fontSize:hp(4.2)}} className="font-bold text-amber-800">home</Text></Text>
          </View>

          {/* search bar */}
          <View className="flex-1 flex-row justify-between bg-black/20 rounded-full p-[2px] mx-2">
              <TextInput 
              placeholder='Search any recepi'
              placeholderTextColor={"grey"}
              className="flex-1 pl-3 text-base tracking-wider"
            />
              <View className="bg-white rounded-full p-3">
                  <MagnifyingGlassIcon color={"grey"} strokeWidth={3} size={hp(3.5)}/>
              </View>
          </View>
          {/* categories */}
          <View>
            {categories && categories.length > 0 && <Categories categories={categories}  
                                                                switchCategory = {switchCategory}
                                                                activeCategory = {activeCategory} 
                                                                setActiveCategory = {setActiveCategory}/>
            }
          </View>       
             {/* recepies */}
          {
            categories && categories.length > 0 && <View>
              <Recipes recipe={meals}/>
            </View>
          }
        </ScrollView>
    </View>
  )
}
