import { Link, Stack } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Text, View,StyleSheet,Pressable, Button, FlatList,Image, TouchableOpacity, TextInput} from "react-native";
import { Gesture, 
        GestureDetector,
     GestureHandlerRootView, 
     PanGestureHandler, 
     TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
    withTiming,useSharedValue,withRepeat, Easing, 
    withSpring,useAnimatedProps, useAnimatedStyle,
     withDecay, interpolate, interpolateColor, withSequence, withDelay, useAnimatedGestureHandler, FadeIn, FadeInUp
} from "react-native-reanimated";
import { cities, nameStatus} from "./constants";
import {HeartIcon,ArchiveBoxArrowDownIcon} from 'react-native-heroicons/solid'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'


export default ()=>{


    const initPos = useSharedValue(0);

    const[flag,setFlag] = useState(false);

    const animatedStyle = useAnimatedStyle(()=>{
        return {
            transform:[{rotate:`${initPos.value}deg`}]
        }
    })

    const getAnimationFunction = (val = 50) => {
        // return withDecay({
        //     clamp:[10,20],
        //     deceleration:10,
        //     rubberBandEffect:true,
        //     velocityFactor:4,
        //     rubberBandFactor:3
        // })
        return withSpring(val)
        // return withRepeat(withSpring(val),6,true)
        // return withRepeat(withSpring(val),6,true)
        // return withSpring(val)
        // return withTiming(val,{
        //     duration:500,
        //     easing:Easing.bounce
        // })
    }

    const AnimateBox = () => {
        return (
            <View style = {{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Animated.View style={[{
                    width:100,
                    height:100,
                    backgroundColor:'black'
                },animatedStyle]}></Animated.View>
                <View style={{
                    marginTop:20
                }}>
                    <Button 
                    onPress={()=>{
                        if(flag){
                                initPos.value = getAnimationFunction(100)
                        }else{
                            initPos.value = getAnimationFunction(-50)
                        }
                        setFlag(pre=>!pre)
                    }}
                    title="touch to animate"/>
                </View>
                
            </View>
        )
    }

    const Comp = ({animatedProps})=>{
        return(
            <Animated.View animatedProps={animatedProps}>
                <Text>hello i am animated prop</Text>
            </Animated.View>
        )
    }

    const sv = useSharedValue(1);

    const animatedProp = useAnimatedProps(()=>{
        return {
            opacity: withTiming(sv.value === 1?1:0,{
                duration:2000,
                easing:Easing.bounce
            }),
        }
    })

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         // sv.value = withSpring(sv.value + 30)
    //         // sv.value = withTiming(sv.value + 30,{
    //         //     duration:1500,
    //         //     easing:Easing.bounce
    //         // })
    //         // sv.value = withRepeat(withSpring(sv.value + 40),6,true);
    //         sv.value = withRepeat(withTiming(0,{
    //             duration:2000,
    //             easing:Easing.bounce
    //         }),10,true)
    //     },3000)
        
    // },[])

    const renderItem = ({ item }) => (
        <View style={styles.cityContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.cityImage} />
          <Text style={styles.cityName}>{item.cityName}</Text>
        </View>
      );

      const initSize = useSharedValue(1)
      const interolateAnimatedStyle = useAnimatedStyle(()=>{
        const itrtWidth = interpolate(initSize.value,[1,0],[100,200])
        const itrtRadius = interpolate(initSize.value,[1,0],[0,100])
        const bgColor = interpolateColor(initSize.value,[1,0],["black","green"])
        // return {
        //     height:initSize.value,
        //     width:initSize.value,
        // }
        return {
            height:itrtWidth,
            width:itrtWidth,
            backgroundColor:bgColor,
            borderRadius:itrtRadius
        }
      })

      const InterpolationAnimation = () => {
        return (
            <View style = {{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Animated.View style = {[{
                    height:100,
                    width:100,
                    backgroundColor:"red"
                },interolateAnimatedStyle]}/>
                <View style={{
                    marginTop:30
                }}>
                    <Button onPress={()=>{
                        if(flag){
                            initSize.value = withSpring(1)
                        }else{
                            initSize.value = withSpring(0)
                        }
                        setFlag(pre=>!pre);
                    }}  title="Animate"/>
                </View>
                
            </View>
        )
    }

    const isPressed = useSharedValue(false);
    const offset = useSharedValue({x:0,y:0})


    const animatedBall = useAnimatedStyle(()=>{
        return {
            transform:[
                {
                    translateX: withSpring(offset.value.x)
                },
                {
                    translateY:withSpring(offset.value.y)
                },
                {
                    scale:withSpring(isPressed.value ? 1.2 : 1)
                },
                // {
                //     rotateX:`${isPressed.value ? withSpring(10): 0}deg`
                // }
            ],
            backgroundColor:isPressed?'red':'green'
        }
    })

    const gesture = Gesture.Pan()
        .onBegin(() => {
            console.warn("pressed")
            isPressed.value = true;
        })
        .onUpdate((e) => {
        offset.value = {
            x: e.translationX ,
            y: e.translationY ,
        };
        })
        .onEnd(() => {
        offset.value = {
            x: 0,
            y: 0,
        };
        })
        .onFinalize(() => {
            console.warn("released")
            isPressed.value = false;
        });

    const GestureHandlerExploration = () => {
        return (
            <GestureDetector gesture={gesture}>
                <Animated.View style = {[styles.ball,animatedBall]}>
                    {/* <Pressable style={{flex:1}} onPress={()=>{

                    }}/> */}
                </Animated.View>
            </GestureDetector>
        )
    }

    const initOpacity = useSharedValue(0)
    const initHeartSize = useSharedValue(0)

    const onDoubleTap = useCallback(()=>{
        console.warn("tapped")
        // initOpacity.value = 1
        initHeartSize.value = withSpring(1,undefined,(flag)=>{
            if(flag){
                initHeartSize.value = withDelay(200,withSpring(0));
            }
        })
    },[])

    const instaLikeGesture = Gesture.Tap()
        .numberOfTaps(2)
        .onBegin((e)=>{
            console.log("tapped",e)
            initOpacity.value = 1
            initHeartSize.value = 1
        })
        .onFinalize(()=>{
            console.warn("done tapping")
            initOpacity.value = 0
            initHeartSize.value = 0
        })

    const instagramDoubleTap = useAnimatedStyle(()=>{
        return {
            transform:[{
                scale:initHeartSize.value
                // withSequence(,withTiming(0,{
                //     duration:500,easing:Easing.linear
                // }))
            }]
        }
    })

    const InstagramDoubleTap = () => {
        return (
            <GestureHandlerRootView
               style = {{width: 300,height:300,backgroundColor:'orange',padding:10,marginBottom:5}}
            >
                <TapGestureHandler 
                    onFinalize = {()=>{
                        console.warn("finalize")
                        initOpacity.value = 0
                        initHeartSize.value = 0
                    }}
                    numberOfTaps={2}
                    // maxDelayMs={250}
                    onActivated={onDoubleTap}
                    // style={{flex:1,backgroundColor:"green"}}
                    >
                    <View style={{flex:1,backgroundColor:"black"}}>
                        <Animated.View 
                            style={[{justifyContent:'center',alignItems:'center'},
                            instagramDoubleTap
                        ]}>
                            <HeartIcon size={"100%"} color="red"/>  
                        </Animated.View>
                    </View>
                    
                </TapGestureHandler>
                
                <View style={{marginTop:30}}>
                   <Button onPress={()=>{
                        initOpacity.value = 1
                        initHeartSize.value = 1
                        // if(flag){
                        //         initOpacity.value = 1
                        // }else{
                        //     initOpacity.value = 0
                        // }
                        // setFlag(pre=>!pre)
                   }} 
                   title="Like"/> 
                </View>
            </GestureHandlerRootView>

            )
    }

    const animatedSearchbarProp = useSharedValue(1)

    const animatedSearchBarStyle = useAnimatedStyle(()=>{
        return {
            width:animatedSearchbarProp.value === 1?withTiming(350,{
                duration:300
            }):withTiming(0,{
                duration:300
            }),
            // opacity: animatedSearchbarProp.value
        }
    })

    const AnimatedSearchBar = () => {
        return (
            <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Animated.View style = {[{
                    width:350,
                    backgroundColor:'#e8e4e3',
                    height:50,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    // gap:5
                },animatedSearchBarStyle]}>
                    <TextInput placeholder="type here ... " style={{width:'80%',fontSize:20,padding:5}}/>
                    <Pressable 
                        onPress={()=>{
                            console.warn("pressed")
                            if(animatedSearchbarProp.value === 1){
                                animatedSearchbarProp.value = 0
                            }else{
                                animatedSearchbarProp.value = 1
                            }
                        }}
                    
                        style={{justifyContent:'center',alignItems:'center'}}>
                        <MagnifyingGlassIcon size={40} color="black"/>
                    </Pressable>
                </Animated.View>
            </View>
        )
    }

    const SwipeableComp = ({name,status}) => {

        const swipePos = useSharedValue(0);
        const swipeIconScale = useSharedValue(0.5);

        const swipeAnimation = useAnimatedStyle(()=>{
            return {
                transform:[{
                    translateX:swipePos.value
                }]
            }
        })
        const swipeSideIconAnimation = useAnimatedStyle(()=>{
            return {
                transform:[{
                    scale:swipeIconScale.value
                }]
            }
        })

        const panHandlers = useAnimatedGestureHandler({
            onActive:(event,ctx)=>{
                swipePos.value = event.translationX
                if(event.translationX > 62 || event.translationX < -60){
                    swipeIconScale.value = withSpring(1.3)
                }else{
                    swipeIconScale.value = withSpring(0.5)
                }
            },
            onFinish:(event,ctx)=>{
                swipePos.value = withTiming(0)
                swipeIconScale.value = withSpring(0)
            }
        })

        return (
            <View style = {{flex:1,backgroundColor:'red',paddingHorizontal:15}}>
                <GestureHandlerRootView
                    style = {{
                        flex:1,justifyContent:'center',alignItems:'center',
                        position:'relative'
                    }}
                >
                    <PanGestureHandler onGestureEvent={panHandlers}>
                        <Animated.View 
                        style={{
                                width:"100%",
                                height:100,
                                backgroundColor:'green',
                                flexDirection:'row',
                                justifyContent:'space-between',
                                borderRadius:20
                            }}>
                            <Animated.View style={
                                    [
                                        {
                                            justifyContent:'center',alighItems:'center',
                                            padding:10,marginLeft:5,width:60,
                                        },
                                        swipeSideIconAnimation
                                    ]
                                }>
                                <ArchiveBoxArrowDownIcon size={40} color="white"/>
                            </Animated.View>
                            <Animated.View style={
                                    [
                                        {
                                            justifyContent:'center',alighItems:'center',
                                            padding:10,marginRight:5,width:60,
                                        },
                                        swipeSideIconAnimation
                                    ]
                                }>
                                <ArchiveBoxArrowDownIcon size={40} color="white"/>
                            </Animated.View>
                            <Animated.View 
                            style={[
                                    {
                                        width:"100%",
                                        height:"100%",
                                        elevation:5,
                                        backgroundColor:"white",
                                        position:'absolute',
                                        borderRadius:10,
                                        flexDirection:'row',
                                        alignItems:'center',
                                        paddingHorizontal:15,
                                        gap:10
                                    },
                                    swipeAnimation
                                ]}>
                                    <View style={{
                                        width:65,
                                        height:65,
                                        backgroundColor:'purple',
                                        justifyContent:'center',
                                        alignItems:'center',
                                        borderRadius:50
                                    }}>
                                        <Text style = {{color:'white',fontWeight:"600",fontSize:30}}>{name.charAt(0)}</Text>
                                    </View>
                                    <View>
                                        <Text style = {{color:'black',fontWeight:"600",fontSize:25}}>{name}</Text>
                                        <Text style = {{color:'grey',fontSize:15}}>{status}</Text>
                                    </View>
                            </Animated.View>
                        </Animated.View>
                    </PanGestureHandler>
                </GestureHandlerRootView>
            </View>
        )
    }

    const AnimatedGallary = () => {
        return (
            <View>
                <Text>Animated gallary</Text>
                <FlatList
                    data={cities}
                    renderItem = {({item,index})=>{
                        return (
                            <Animated.View 
                                entering={FadeInUp.springify()}
                                style={{
                                    flex:1,justifyContent:'center',
                                    alignItems:'center',gap:2,
                                    // borderRadius:10,
                                    borderTopEndRadius:10,
                                    elevation:2,
                                    padding:10
                                }}>
                                <Animated.Image 
                                sharedTransitionTag='tag'
                                source={{uri:item.imageUrl}} style={{
                                    width:"100%",
                                    // aspectRatio:"1/1",
                                    height:300,
                                    // flex:1
                                }}/>
                                <Link href={`/app4/pages/${item.id}`} asChild>
                                    <Text style={{fontSize:20,fontWeight:'500'}}>{item.cityName}</Text>
                                </Link>
                                
                            </Animated.View>
                        )
                    }}
                    numColumns={2}
                    contentContainerStyle = {{gap:20}}
                    columnWrapperStyle = {{gap:10}}
                />
            </View>
        )
    }

    return (
        <View style={styles.page}>
            <Stack.Screen  options={{title:"remanimated tutorial",headerShown:false}}/>
            {/* <AnimateBox/> */}
            {/* <InterpolationAnimation /> */}
            {/* <GestureHandlerExploration/> */}
            {/* <InstagramDoubleTap /> */}
            {/* <AnimatedSearchBar/> */}
            {/* <SwipeableComp name={"shubham sharma"} status={"learning react native"}/> */}
            {/* <View style = {{flex:1}}>
                <FlatList
                data={nameStatus}
                renderItem = {({item,index})=> <SwipeableComp key = {index} name={item.name} status={item.status}/>}
            />
            </View> */}
            <AnimatedGallary />
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        paddingTop:20,
        paddingHorizontal:5,
        position:'relative',
        flex:1
    },
    box:{
        height:100,
        width:100,
        backgroundColor:"green",
        position:'absolute',
        top:100,
        borderRadius:20
    },
    box1:{
        backgroundColor:"blue",
        height:200,
        width:200,
        // justifyContent:'center',
        // alignItems:'center',
        // flex:1,
    },
    box2:{
        backgroundColor:"green",
        flex:1,
        // padding:20,
        margin:'auto'
    },
    container: {
        flex: 1,
        padding: 10,
      },
    cityContainer: {
        flex: 1,
        margin: 8,
        alignItems: 'center',
      },
    cityImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 8,
      },
      cityName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      ball:{
        width:100,
        height:100,
        borderRadius:20,
        backgroundColor:'green'
      }
})