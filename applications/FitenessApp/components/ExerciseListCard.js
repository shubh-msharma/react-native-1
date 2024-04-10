import { Text, TouchableOpacity, View } from "react-native"
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {Image as ExpoImage} from 'expo-image'
import { useRouter } from "expo-router"
import Animated, { FadeInDown } from "react-native-reanimated"


export default ({data,index}) => {
    const router = useRouter();
    return (
        <Animated.View 
        entering={FadeInDown.duration(400).delay(index * 100).springify()} 
        
        className = "p-2 flex justify-end mb-2" 
            style = {{
        }}>
            <TouchableOpacity
                className = "rounded-[30px]" 
                style = {{
                    height:hp(30),
                    width:wp(44),
                    padding:2,
                }}
                onPress = {()=>{
                    router.push({
                        pathname:"/app5/pages/exerciseDetailsPage",
                        params:data
                    })
                }}
            >
                <ExpoImage
                    className = "rounded-[30px]"
                    source={data.gifUrl}
                    style = {{
                        height:"100%",
                        width:"100%",
                    }}
                    contentFit="cover"
                    transition={1000}
                />
            </TouchableOpacity>
            <View
             className = "justify-center items-center">
                    <Text className = "text-lg font-bold capitalize">
                        {data.name.length > 20 ? data.name.substring(0,18) + "...": data.name}
                    </Text>
                </View>
        </Animated.View>
    )
}