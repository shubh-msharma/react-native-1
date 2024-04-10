import { View, Text, StyleSheet } from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import FAQsScreen from "./FAQsScreen";
import MentorScreen from "./MentorScreen";
import PeerSupportScreen from "./PeerSupportScreen";
import ForumScreen from "./ForumScreen";
import CounselingScreen from "./CounselingScreen";
import EmergencyContactsScreen from "./EmergencyContactsScreen";
import {PaperAirplaneIcon,StopCircleIcon} from "react-native-heroicons/solid"

const BottomNav = createBottomTabNavigator();

export default ()=>{
    return (
        <NavigationContainer independent={true}>
            <BottomNav.Navigator >
                <BottomNav.Screen name='FAQs' component={FAQsScreen} options={{
                    tabBarIcon: ({focused,color,size})=>{
                        return <PaperAirplaneIcon size={size} color={color}/>
                    },
                    headerShown:false
                }}/>
                <BottomNav.Screen name='Ask a Mentor' component={MentorScreen} options = {{
                    headerShown:false,
                    tabBarIcon:({size,color})=>{
                        return <StopCircleIcon size={size} color={color}/>
                    }
                }}/>
                <BottomNav.Screen name='Peer Support' component={PeerSupportScreen}/>
                <BottomNav.Screen name='Student Forum' component={ForumScreen}/>
            </BottomNav.Navigator>
        </NavigationContainer>
    )
    
    
    // <View style={{
    //     justifyContent:'center',
    //     alignItems:'center'
    // }}>
    //     <Text style={{
    //         fontSize:30,
    //         fontWeight:'bold'
    //     }}>Help <Text style={{
    //         fontSize:35,
    //         fontWeight:'bold',
    //         color:'red'
    //     }}>Screen</Text></Text>

    // </View>
}