import { Stack, Slot } from 'expo-router'
import React, { useEffect } from 'react'
import { useFonts, Inter_900Black, Inter_800ExtraBold } from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen';
import { AmaticSC_700Bold, AmaticSC_400Regular } from '@expo-google-fonts/amatic-sc'
import 'react-native-gesture-handler'
export default () => {
  SplashScreen.preventAutoHideAsync().then((data) => {
    console.log("splace screen success", data)
  }).catch((e) => {
    console.log("failed splash screen", e)
  })

  let [fontsLoaded, fontsError] = useFonts({
    Inter_900Black,
    AmaticSC_700Bold,
    Inter_800ExtraBold,
    AmaticSC_400Regular
  })

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      console.log("hiding splash screen")
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError])

  // if (!fontsLoaded || fontsError) {
  //   console.log("returning null")
  //   return null;
  // }
  console.log("returning stack")
  return (
    <Stack />
  )
}