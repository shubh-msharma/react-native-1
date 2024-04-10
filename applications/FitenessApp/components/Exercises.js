import {FlatList, Image, Text,TouchableOpacity,View} from 'react-native'
import {exercisesDbParts,bodyPartWithImage,exportExercisesList} from "../constants"
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { useEffect } from 'react'
import {ArrowLeftIcon} from "react-native-heroicons/solid"
import Animated, { FadeInDown } from 'react-native-reanimated'

export default () => {
    const router = useRouter()
    const [exercisesList, setExercisesList] = useState([]);

    useEffect(()=>{
        getExercisesList()
    },[])

    const getExercisesList = async () =>{
        console.log("fetching data")
        const data = await exportExercisesList();
        console.log("obtained data")
        console.log(data)
        console.log("obtained data, setting to list")
        setExercisesList(pre=>data)
    }
    return (
        <View 
            className = "flex mt-2 mx-1"
        >
           <FlatList
                data={exercisesList}
                renderItem = {({item,index})=>{
                    return (
                        <Card onPressHandler = {()=>{
                            router.push({
                                pathname:"/app5/pages/selectedExercisePage",
                                params:item
                            })
                        }} item={item} index = {index}/>
                    )
                }}
                contentContainerStyle = {{
                    paddingBottom:1050,
                    display:'flex',
                }}
                numColumns = {2}
                showsVerticalScrollIndicator = {false}
                columnWrapperStyle = {{
                    justifyContent:'space-between',
                }}
                style = {{
                    flexGrow:0
                }}
           />
        </View>
    )
}

const Card = ({item,onPressHandler,index}) => {
    return <Animated.View 
        entering={FadeInDown.duration(400).delay(index * 100).springify()}
        style = {{
            marginBottom:1, 
            justifyContent:'center',
            alignItems:'center',
        }}
    >
            <TouchableOpacity
                style = {{
                    height:hp(33),
                    width:wp(48),
                }}
                className = "flex justify-end p-2 items-center" 
                onPress={onPressHandler}
            >
                <Image 
                    resizeMode='cover'
                    source={item.imageUrl}
                    style = {{
                        height:"100%",
                        width:"100%"
                    }}
                    className = "rounded-[40px] absolute"
                />
                <LinearGradient
                    colors={["transparent","rgba(0,0,0,0.8)"]}
                    style = {{
                        height:"100%",
                        width:"100%"
                    }}
                    start = {{x:0.5,y:0}}
                    end = {{x:0.5,y:1}}
                    className = "rounded-[40px] absolute"
                />
                <Text
                    style = {{fontSize : hp(2.7)}}
                    className = "font-bold text-center text-white tracking-wide"
                > 
                    {item.bodyPart}
                </Text>
            </TouchableOpacity>
    </Animated.View>
}