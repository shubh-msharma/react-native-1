
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import {FlatList, Text, TouchableOpacity, View} from 'react-native'
import { indianPoliticsWords } from './constants'

export default () => {
    const [itemIndex,setIndex] = useState(0);
    const [selelctedIndexPosition,setItemPosition] = useState(0);
    const ref = useRef();
    useEffect(()=>{
        ref.current?.scrollToIndex({
            index:itemIndex,
            animation:true,
            viewPosition:selelctedIndexPosition,
            viewOffset:selelctedIndexPosition === 1 ? 0 : 30
        })
    },[itemIndex,selelctedIndexPosition])
    return (
        <View className = "p-3 justify-center h-full">
            <View className = "">
                <FlatList
                    ref={ref}
                    data = {indianPoliticsWords}
                    renderItem = {({item,index})=>{
                        return (
                            <TouchableOpacity 
                                onPress={()=>{
                                    setIndex(pre=>index)
                                }}
                                className={`border-blue-500 p-2 mx-1 border-[3px] rounded-[20px] ${index === itemIndex ? "bg-orange-400" : ""}`}>
                                <Text className = "font-bold text-xl text-neutral-700">{item}</Text>
                            </TouchableOpacity>
                        );
                    }}
                    contentContainerStyle = {{
                        // backgroundColor:"red"
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    initialScrollIndex = {itemIndex}
                />
            </View>

            <View className = "flex-row justify-around items-center mt-5 flex-wrap space-y-1">
                    <TouchableOpacity 
                        onPress={()=>{
                            if(itemIndex === 0)return;
                            setIndex(pre=>pre-1)
                        }}
                        className = "p-2 border-[2px] border-rose-600 bg-rose-400 rounded-[10px]">
                        <Text className = "capitalize text-xl font-bold tracking-wider">left index</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                         onPress={()=>{
                            if(itemIndex === indianPoliticsWords.length-1)return;
                            setIndex(pre=>pre+1)
                        }}
                        className = "p-2 border-[2px] border-rose-600 bg-rose-400 rounded-[10px]">
                        <Text className = "capitalize text-xl font-bold tracking-wider">right index</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                         onPress={()=>{
                            setItemPosition(0)
                        }}
                        className = "p-2 border-[2px] border-rose-600 bg-rose-400 rounded-[10px]">
                        <Text className = "capitalize text-xl font-bold tracking-wider">left pos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                         onPress={()=>{
                            setItemPosition(0.5)
                        }}
                        className = "p-2 border-[2px] border-rose-600 bg-rose-400 rounded-[10px]">
                        <Text className = "capitalize text-xl font-bold tracking-wider">center pos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                         onPress={()=>{
                            setItemPosition(1)
                        }}
                        className = "p-2 border-[2px] border-rose-600 bg-rose-400 rounded-[10px]">
                        <Text className = "capitalize text-xl font-bold tracking-wider">right pos</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}