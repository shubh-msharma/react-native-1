import { Image as ExpoImage} from "expo-image"
import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import {  Text,TouchableOpacity,View } from "react-native"
import { ArrowLeftIcon } from "react-native-heroicons/solid"
import { heightPercentageToDP as hp ,widthPercentageToDP as wp} from "react-native-responsive-screen"
import {ScrollView} from 'react-native-virtualized-view'

export default ()=>{
    const router = useRouter();
    const data = useLocalSearchParams()
    return (
        <ScrollView 
        showsVerticalScrollIndicator=  {false}
        style = {{
            paddingBottom:50,
            marginTop:60,
            borderTopStartRadius:30
        }}>
            <Stack.Screen options={{
                headerShown:false,
                presentation:'modal',
                animation:'slide_from_bottom'
                }}/>
            <View className = "bg-neutral-200 rounded-b-[40px]">
                    <ExpoImage
                            className = "rounded-b-[40px]"
                            source={data.gifUrl}
                            style = {{
                                height:wp(100),
                                width:wp(100),
                            }}
                            contentFit="cover"
                        />
            </View>
            <TouchableOpacity
                    className = "bg-rose-500 rounded-full border-rose-700 border-[5px] absolute z-10 mt-4 ml-3"
                    onPress={()=>{
                        router.back()
                    }}
                    >
                <ArrowLeftIcon size={hp(5)} color="black"/>
            </TouchableOpacity>
            <View 
                className = "mx-3 space-y-2 mt-3"
            >
                    <Text style = {{
                        fontSize:hp(4)
                        }}
                        className = "font-bold text-neutral-700 tracking-wider  capitalize">
                        {data.name}
                    </Text>

                    <Text 
                    style = {{
                        fontSize:hp(2)
                        }}
                    className = "text-neutral-700 tracking-wider  capitalize">
                        Target Muscle: <Text className = "font-bold">{data.target}</Text>
                    </Text>

                    <Text 
                    style = {{
                        fontSize:hp(2)
                        }}
                    className = " text-neutral-700 tracking-wider  capitalize">
                        Equipment: <Text className = "font-bold">{data.equipment}</Text>
                    </Text>

                    <Text 
                    style = {{
                        fontSize:hp(2)
                        }}
                    className = "text-neutral-700 tracking-wider capitalize">
                        Secondary Muscles: <Text   className = "font-bold">{data.secondaryMuscles}</Text>
                    </Text>

                    <Text
                     style = {{
                        fontSize:hp(3)
                        }}
                        className = "font-bold text-neutral-700 tracking-wider capitalize">
                        Instructions
                     </Text>
                    {
                        data?.instructions.split(",").map((item,index)=>{
                            return <Text
                                    key={Math.random(100)}
                                    style = {{
                                        fontSize:hp(2)
                                        }}
                                        className = " text-neutral-700 tracking-wider capitalize"
                                    >
                                    {item.trim()}
                                </Text>
                        })
                    }
            </View>
            
        </ScrollView>
    )
}