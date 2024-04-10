import CategoriesScreen from "./screens/CategoriesScreen"
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsScreen from "./screens/MealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from './store/context/favorites-context'
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="All Categories" screenOptions={{
            headerStyle: {
                backgroundColor: "#5c370b",
            },
            headerTitleStyle: {
                color: 'white'
            },
            sceneContainerStyle: {
                backgroundColor: "#735838"
            },
            drawerContentStyle: {
                backgroundColor: "#5c370b"
            },
            drawerActiveBackgroundColor: "#dbcbb8",
            drawerActiveTintColor: "#735838",
            drawerInactiveTintColor: "white"
        }}>
            <Drawer.Screen name="All Categories" component={CategoriesScreen} options={{
                title: "Cuisine Categories",
            }} />
            <Drawer.Screen name="Favorite Meals" component={FavoritesScreen} />
        </Drawer.Navigator>
    )
}

export default () => {
    return (
        <View style={{
            flex: 1
        }}>
            <FavoritesContextProvider>
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName="Categories" screenOptions={{
                        headerStyle: {
                            backgroundColor: "#5c370b",
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                        contentStyle: {
                            backgroundColor: "#735838"
                        },
                        animation: "slide_from_right"
                    }}>
                        <Stack.Screen
                            name='Drawer'
                            component={DrawerNavigator}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen name='Meals' component={MealsScreen} />
                        <Stack.Screen name='MealsDetails'
                            options={{
                                title: "Meals Details"
                            }}
                            component={MealDetailsScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavoritesContextProvider>
        </View>
    )
}