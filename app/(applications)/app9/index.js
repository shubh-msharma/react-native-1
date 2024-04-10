import { View } from 'react-native';
import UdemyNavigationMain from '../../../applications/UdemyNvigation/UdemyNavigationMain';
import {NavigationContainer}  from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Stack as ExpoStack} from 'expo-router'
import MealsScreen from '../../../applications/UdemyNvigation/screens/MealsScreen';
import CategoriesScreen from '../../../applications/UdemyNvigation/screens/CategoriesScreen';
const Stack = createNativeStackNavigator();

export default ()=>{
    return (
        <View style={{
            width:"100%",
            height:"100%"
        }}>
            <ExpoStack.Screen options={{headerShown:false}}/>
            <UdemyNavigationMain/>
        </View>
    )
}