import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import WelcomScreen from '../screen/WelcomScreen';

const Stack = createNativeStackNavigator();

function AppNavigation(){
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='Welcome' component={WelcomScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;