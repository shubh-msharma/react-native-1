import React, { useState } from 'react'
import {View,Text, StatusBar, Image} from 'react-native'
import { useSharedValue,withSpring } from 'react-native-reanimated'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Animated from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

export default function WelcomScreen() {
    const ring1Padding = useSharedValue(0);
    const ring2Padding = useSharedValue(0);
    const navigation = useNavigation();
    useState(()=>{
        ring1Padding.value = 0;
        ring2Padding.value = 0;
        setTimeout(()=>{ring1Padding.value = withSpring(ring1Padding.value + hp(6))},200)
        setTimeout(()=>{ring2Padding.value = withSpring(ring2Padding.value + hp(4))},250)
        setTimeout(()=>navigation.navigate("Home"),2500);
    },[]);
  return (
    <View className = 'flex-1 justify-center items-center space-y-10 bg-amber-500'>
        <StatusBar barStyle={"light-content"}/>

        <Animated.View className = "bg-white/20 rounded-full" style = {{padding:ring1Padding}}>
            <Animated.View className="bg-white/20 rounded-full" style = {{padding:ring2Padding}}>
                <Image source={require("../assets/images/welcome.png")}
                    style = {{height:hp(30),width:hp(30)}}
                />
            </Animated.View>
        </Animated.View>
        <View className = 'flex justify-center items-center'>
            <Text className = 'font-bold text-white tracking-widest text-6xl'>Foody</Text>
            <Text className = 'font-medium text-white text-2xl tracking-widest'>Food Is Life</Text>
        </View>
    </View>
  )
}
