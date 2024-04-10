import {} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import DashboardScreen from './screens/DashboardScreen'
import ProfileScreen from './screens/ProfileScreen'
import AttendanceScreen from './screens/AttendanceScreen'
import TimetableScreen from './screens/TimetableScreen'
import SubjectsScreen from './screens/SubjectsScreen'
import AssignmentsScreen from './screens/AssignmentsScreen'
import ResultsScreen from './screens/ResultsScreen'
import LibraryScreen from './screens/LibraryScreen'
import FeeScreen from './screens/FeeScreen'
import SuggestionsScreen from './screens/SuggestionsScreen'
import SettingsScreen from './screens/SettingsScreen'
import HelpScreen from './screens/HelpScreen'

const Drawer =createDrawerNavigator();

function UdemyDrawerNavigationMain(){
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName='Dashboard'>
                <Drawer.Screen name='Dashboard' component={DashboardScreen}/>
                <Drawer.Screen name='Profile' component={ProfileScreen}/>
                <Drawer.Screen name='Attendance' component={AttendanceScreen}/>
                <Drawer.Screen name='Timetable' component={TimetableScreen}/>
                <Drawer.Screen name='Subjects' component={SubjectsScreen}/>
                <Drawer.Screen name='Assignments' component={AssignmentsScreen}/>
                <Drawer.Screen name='Results' component={ResultsScreen}/>
                <Drawer.Screen name='Library' component={LibraryScreen}/>
                <Drawer.Screen name='Fee' component={FeeScreen}/>
                <Drawer.Screen name='Suggestions' component={SuggestionsScreen}/>
                <Drawer.Screen name='Settings' component={SettingsScreen}/>
                <Drawer.Screen name='Help' component={HelpScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default UdemyDrawerNavigationMain;