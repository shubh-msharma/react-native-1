import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import ExpenseOverviewScreenHeader from './components/ExpenseOverviewScreenHeader';
import ExpenseOverviewScreen from './screens/ExpenseOverviewScreen';
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import ExpenseContextProvider from './store/ExpenseContext';

const Stack = createNativeStackNavigator();

function ExpenseTrackerMain() {
    return (
        <View style={{
            flex: 1
        }}>
            <ExpenseContextProvider>
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName='ExpenseOverview'>
                        <Stack.Screen options={{
                            headerShown: false
                        }} name="ExpenseOverview" component={ExpenseOverviewScreen} />
                        <Stack.Screen name="ManageExpense" component={ManageExpenseScreen} options={{
                            header: ({ options }) => {
                                return <ExpenseOverviewScreenHeader
                                    showBackButton={true}
                                    {...options}
                                // title={options.title ? options.title : "Manage Expense"}
                                />
                            },
                            presentation: 'modal'
                        }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ExpenseContextProvider>
        </View>
    )
}

export default ExpenseTrackerMain;