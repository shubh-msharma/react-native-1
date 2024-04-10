import { StatusBar } from 'expo-status-bar'
import {View, Text, Image} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {BellIcon} from 'react-native-heroicons/solid'
import ImageSlider from '../components/ImageSlider'
import Exercises from "../components/Exercises"

export default ()=>{
    return (
        <View>
           <View className = "flex-row justify-between items-center mx-5 mt-2">
                <View className = "space-y-1">
                        <Text style={{fontSize:hp(6)}} className="font-bold tracking-wider text-neutral-500">READY TO</Text>
                        <Text style={{fontSize:hp(6)}} className="font-bold tracking-wider text-rose-500">WORKOUT</Text>
                </View>
                <View className="flex justify-center items-center space-y-2">
                        <Image 
                        className = "rounded-full"
                        style={{height:hp(7),width:hp(7)}}
                        source={require("../../../assets/fitnessAppAssets/images/avatar.png")}/>
                        <View className = "flex justify-center items-center bg-neutral-200 rounded-full border-[2px] border-neutral-300 p-1">
                            <BellIcon color={"grey"} size={hp(6)}/>
                        </View>
                </View>
            </View>   
            <View>
                <ImageSlider/>
           </View>  
           <View>
                <Exercises />
           </View>
        </View>
        
    )
}