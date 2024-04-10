import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { getExercisesBodyPart } from "../apis/exercisesDb";
import {tempData} from '../constants'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {ScrollView} from 'react-native-virtualized-view'
import ExercisesList from "../components/ExercisesList";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'

export default () => {

    const router = useRouter();
    const item = useLocalSearchParams()
    const [exercises, setExercises] = useState([])
    useEffect(()=>{
        getExercises()
    },[]) 

    const getExercises = async () => {
        data = await getExercisesBodyPart(item.bodyPart);
        setExercises(pre => data)
    }

    return (
        <ScrollView>
            <Stack.Screen options={{
                    headerShown:false,
                    // presentation:"fullScreenModal"
                }}/>
            <StatusBar  style="dark"/>
           
            <Image
                source={item.imageUrl}
                style = {{
                    height:hp(45),
                    width:wp(100),
                    borderBottomWidth:10,
                    borderColor : "black",
                }}
                className = "rounded-b-[40px]"
            />
             <TouchableOpacity
                    className = "bg-rose-500 rounded-full border-rose-700 border-[5px] absolute z-10 mt-4 ml-3"
                    onPress={()=>{
                        router.back()
                    }}
                    >
                <ArrowLeftIcon size={hp(5)} color="black"/>
            </TouchableOpacity>
            <Text style = {{
                fontSize: hp(4)
            }} className = "ml-2 mt-3 text-xl font-bold capitalize">
                {item.bodyPart} Exercises
            </Text>
            <ExercisesList exercises={exercises} />
        </ScrollView>
    )
}
