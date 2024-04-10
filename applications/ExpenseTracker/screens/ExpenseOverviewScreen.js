import { View, Text } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RecentExpenseScreen from "./RecentExpenseScreen";
import AllExpenseScreen from "./AllExpenseScreen";
import { GlobalStyles } from '../constants/styles'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ExpenseOverviewScreenHeader from "../components/ExpenseOverviewScreenHeader";



const BottomTabs = createBottomTabNavigator();

export default () => {
    return (
                <BottomTabs.Navigator  
                    screenOptions={{
                        header: ({options})=>{
                            return <ExpenseOverviewScreenHeader
                                title={options.title}
                                headerRight = {options.headerRight}
                                showAddButton={true}
                            />
                        },
                        tabBarStyle: {
                            backgroundColor: GlobalStyles.colors.primary500,
                            borderTopEndRadius: 40,
                            borderTopStartRadius: 40,
                        },
                        headerTintColor: 'white',
                        tabBarActiveTintColor: GlobalStyles.colors.accent500
                    }}
                >
                    <BottomTabs.Screen  options={{
                        title: "Recent Expenses",
                        tabBarLabel: "Recent",
                        tabBarIcon: ({ color, size }) => <AntDesign name="hourglass" size={size} color={color} />
                    }} name="RecentExpemse" component={RecentExpenseScreen} />
                    <BottomTabs.Screen options={{
                        title: "All Expenses",
                        tabBarLabel: "All",
                        tabBarIcon: ({ color, size }) => <Entypo name="text-document" size={size} color={color} />
                    }} name="AllExpense" component={AllExpenseScreen} />
                </BottomTabs.Navigator>
    )
}
