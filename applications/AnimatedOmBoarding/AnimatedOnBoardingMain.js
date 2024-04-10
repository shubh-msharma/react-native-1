import { View, Text, StyleSheet, Button, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { } from 'react-native-heroicons/solid'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { router } from 'expo-router'
import IndicatorContainer from './components/IndicatorContainer'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GestureDetector, Gesture, Directions, GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated, { FadeIn, FadeOut, SlideInRight, SlideOutLeft } from 'react-native-reanimated'

const onboardingData = [
  {
    title: "Effortless Resume Parsing",
    description: "Let our advanced parsing technology effortlessly extract key details from your resume, making the onboarding process a breeze",
    image: require("./assets/1810238.jpg")
  },
  {
    title: "Discover Diverse Skills",
    description: "Explore and choose from a comprehensive list of skills tailored to your career aspirations. We cover a wide range to suit every professional journey.",
    image: require("./assets/4445139.jpg")
  },
  {
    title: "Master New Skills",
    description: "Dive deep into detailed insights and resources for each skill. Our learning index equips you with the knowledge to excel in your chosen domain.",
    image: require("./assets/5484597.jpg")
  },
  {
    title: "Ace Your Interviews",
    description: "Access a curated collection of interview questions for your selected skills. Prepare with confidence and increase your chances of success.",
    image: require("./assets/8669041.jpg")
  },
]

export default function AnimatedOnBoardingMain() {

  const [currestScreen, setCurrentScreen] = useState(0);
  const [screenData, setOnScreenData] = useState(onboardingData[currestScreen])
  const onForward = () => {
    setCurrentScreen(pre => {
      console.log("previous state", pre)
      const st = (pre + 1) % onboardingData.length
      setOnScreenData(pre => onboardingData[st])
      return st
    })
    if (currestScreen === onboardingData.length - 1) {
      router.back();
    }
  }
  const onBackward = () => {
    if (currestScreen === 0) return;
    setCurrentScreen(pre => {
      console.log("previous state", pre)
      const st = (pre - 1) % onboardingData.length
      setOnScreenData(pre => onboardingData[st])
      return st
    })
  }
  const rightSwipe = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(onBackward);
  const leftSwipe = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(onForward);

  const img = screenData.image;
  const composed = Gesture.Simultaneous(leftSwipe, rightSwipe)
  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={composed}>
        <View style={styles.page}>
          <Stack.Screen options={{ headerShown: false }} />
          <StatusBar style='light' />
          <IndicatorContainer screens={onboardingData} selectedScreen={currestScreen} />

          <Animated.View
            entering={SlideInRight.duration(500).springify()}
            exiting={SlideOutLeft.duration(500).springify()}
            key={currestScreen} >
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={screenData.image} />
            </View>
            <Text style={styles.title}  >
              {screenData.title}
            </Text>
            <Text style={styles.description}> {screenData.description}</Text>
          </Animated.View>

          <View style={styles.buttonRow}>
            <Text onPress={() => { router.back() }} style={styles.buttonText}>Skip</Text>
            <Pressable onPress={() => onForward()} style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>


  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#a18c35",
    paddingHorizontal: hp(2),
    paddingTop: hp(2)
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal:5
  },
  image: {
    width: hp(40),
    height: hp(40),
    resizeMode: 'contain',
    borderRadius: 50,
    marginBottom: 20
  },
  title: {
    fontFamily: "Inter_900Black",
    fontSize: hp(5.5),
    color: '#ede0ab'
  },
  description: {
    color: '#c9c7bd',
    fontSize: hp(2.8)
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 35,
    paddingBottom: 10
  },
  button: {
    paddingHorizontal: hp(10),
    backgroundColor: "#f0ebd3",
    borderRadius: 60
  },
  buttonText: {
    fontSize: hp(3.5),
    fontFamily: "Inter_900Black",
    color: "#a69b6d",
    padding: hp(1.1)
  }
})
/*
        Inter_900Black, 
        AmaticSC_700Bold,
        Inter_800ExtraBold,
        AmaticSC_400Regular
*/