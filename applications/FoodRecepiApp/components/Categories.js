import {View,Text, ScrollView, TouchableOpacity, Image} from 'react-native'
// import { categories } from '../constants'
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {FadeInDown} from 'react-native-reanimated'
import Animated from 'react-native-reanimated'

export default function Categories({categories,activeCategory,setActiveCategory,switchCategory}) {
  return (
   <Animated.View
   entering={FadeInDown.duration(500).springify()}
   >
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator = {false}
        contentContainerStyle = {{paddingHorizontal:15}}
        className="space-x-4"
        >
            {
                categories.map((category,index)=>{
                    conditionalCatClass = activeCategory === category.strCategory ? 'bg-amber-400' : 'bg-gray-300'
                    return (
                        <TouchableOpacity
                            key={category.idCategory}
                            className="flex items-center space-y-1"
                            onPress={()=>switchCategory(category.strCategory)}
                        >
                            <View className={`rounded-full p-[6px] ${conditionalCatClass}`}>
                                <Image 
                                style={{width:hp(7),height:hp(7)}}
                                source={{uri:category.strCategoryThumb}}
                                className="rounded-full"
                                />
                            </View>
                            <Text className="text-neutral-600" style={{fontSize:hp(2.3)}}>
                                {category.strCategory}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
   </Animated.View>
  )
}
