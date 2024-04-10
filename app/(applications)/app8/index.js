import { LinearGradient } from 'expo-linear-gradient'
import { Stack } from 'expo-router'
import { ImageBackground, View } from 'react-native'
import UdemyNumberGameMain from '../../../applications/UdemyNumberGame/UdemyNumberGameMain'

export default () => {
    return (
        <LinearGradient
            colors={["#783e36", "#cf7b06"]}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={{
                backgroundColor: "#f0c756",
                height: "100%",
            }}
        >
            <ImageBackground
                source={require('../../../assets/udemy/dice.jpg')}
                style={{
                    flex: 1,

                }}
                imageStyle={{
                    resizeMode: 'cover',
                    opacity: 0.3
                }}
            >
                <Stack.Screen options={{ headerShown: false }} />
                <UdemyNumberGameMain />
            </ImageBackground>
        </LinearGradient>
    )
}