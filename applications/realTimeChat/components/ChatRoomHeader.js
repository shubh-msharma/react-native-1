import { Stack } from "expo-router"
import { TouchableOpacity, View, Text } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Image } from "expo-image";
import { blurhash } from "../utils/data";
import { Entypo } from '@expo/vector-icons';


export default ({ user,router }) => {
    console.log("in header")
    console.log(user)
    return (
        <Stack.Screen
            options={{
                title: "",
                headerShadowVisible: false,
                headerLeft: () => {
                    return (<View className="flex flex-row items-center gap-x-4">
                        <TouchableOpacity onPress={()=>router.back()} className = "p-1">
                            <FontAwesome name="chevron-left" size={heightPercentageToDP(4)} color="#737373" />
                        </TouchableOpacity>
                        <View className="flex flex-row items-center gap-x-3 p-1">
                            <Image
                                source={user?.profileurl}
                                placeholder={blurhash}
                                style={{
                                    height: heightPercentageToDP(5.1),
                                    aspectRatio: 1,
                                    borderRadius: 100
                                }}
                            />
                            <Text style={{
                                fontSize: heightPercentageToDP(3.5)
                            }} className="text-neutral-600 font-medium capitalize">{user?.username}</Text>
                        </View>
                    </View>)
                },
                headerRight:()=>{
                    return (
                        <View className="flex-row gap-x-4">
                            <Entypo name="phone" size={heightPercentageToDP(4)} color="black" />
                            <FontAwesome name="video-camera" size={heightPercentageToDP(4)} color="black" />                      
                        </View>
                    )
                }
            }}

        />
    )
}