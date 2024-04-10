import { View, Text, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './ui/IconButton';
import { colors } from './theme/Colors';


const Stack = createNativeStackNavigator();

export default () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
                contentStyle:{
                    backgroundColor:colors.primary600
                },
                headerStyle:{
                    backgroundColor:colors.primary800
                },
                headerTintColor:colors.accent700,
                animation:'slide_from_bottom'
            }}>
                <Stack.Screen name="AllPlaces" component={AllPlaces} options={({ navigation }) => ({
                    title:"Your Favorite Places",
                    headerRight: ({ tintColor }) => <IconButton color={tintColor} size={24} icon="add" onPress={() => navigation.navigate("AddPlace")} />
                })} />
                <Stack.Screen name="AddPlace" component={AddPlace} options={{
                    title:"Add Your Favorite Place"
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})