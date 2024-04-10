import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import {View,Text, Image,StyleSheet, TouchableOpacity} from 'react-native'
import {Bars3BottomLeftIcon} from 'react-native-heroicons/solid'
import {LinearGradient} from 'expo-linear-gradient'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Animated, { SlideInDown, SlideInUp } from 'react-native-reanimated'
import {useRouter} from 'expo-router'
export default ()=>{
    const router = useRouter();
    return (
        <View className="flex-1 flex">
            <StatusBar style='light'/>
            <Image 
            className="h-full w-full absolute" 
            source={require("../../assets/fitnessAppAssets/images/welcome.png")}/>

            <LinearGradient
                colors={['transparent','rgba(0,0,0,0.5)']}
                start = {{x:0.5,y:0}}
                end={{x:0.5,y:0.7}}
                style={{width:wp(100),height:hp(70)}}
                className = "flex flex-1  justify-end pb-3 space-y-8"
            >
                <Animated.View 
                    entering={SlideInDown.delay(600).springify().duration(300)}
                className = "flex items-center">
                    <Text style={{fontSize:hp(6)}} className="text-white font-bold">Your <Text className="text-rose-500">Body</Text>, Your <Text className="text-rose-500">Gym</Text> </Text>
                    <Text style={{fontSize:hp(3)}} className="text-white">Empowering Your <Text style={{fontSize:hp(4)}} className = "text-rose-500">Fitness Revolution </Text> </Text>
                </Animated.View>

                <Animated.View
                 entering={SlideInDown.springify().delay(800).duration(300)}
                >
                    <TouchableOpacity
                        onPress={()=>{
                            router.push("/app5/pages/home")
                        }}
                        style = {{
                            width:wp(80),
                            height:hp(12)
                        }}
                        className="bg-rose-500 flex justify-center items-center mx-auto rounded-full border-[2px] border-neutral-200"
                    >
                        <Text style={{fontSize:hp(4)}} className = "text-white font-bold tracking-widest">
                            Unleash the Fit Vibes
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    )     
}

const styles = StyleSheet.create({
    textContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      display:'flex',
    //   backgroundColor:"red"
    },
    elevate: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#3498db', // Cool Blue Color
    },
    fitness: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#e74c3c', // Bold Red Color
    },
    oneRep: {
      fontSize: 27,
      fontWeight: 'bold',
      color: '#2ecc71', // Vibrant Green Color
    },
    oneDay: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#f39c12', // Energetic Orange Color
    },
  });