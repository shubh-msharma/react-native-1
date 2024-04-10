import { View, Text, Platform } from "react-native"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Image } from 'expo-image'
import { useAuth } from "../context/authContext"
import { blurhash } from "../utils/data"
import { AntDesign , Feather } from '@expo/vector-icons';

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import ContextMenuItem from "./ContextMenuItem"
  
export default () => {
    const isIos = Platform.OS === "ios"
    const { top } = useSafeAreaInsets()
    const { user , logout } = useAuth()

    const handleProfile = () => {

    }
    // console.log(user)
    return <View style={{
        paddingTop: isIos ? top : top + 20
    }} className="bg-indigo-300 flex-row justify-between rounded-b-3xl px-3 pb-6 shadow">
        <View>
            <Text style={{
                fontSize: heightPercentageToDP(3.4)
            }} className="font-medium text-white">
                Chats
            </Text>
        </View>
        <Menu>
            <MenuTrigger>
                <View>
                    <Image
                        style={{ height: heightPercentageToDP(5), aspectRatio: 1, borderRadius: 100 }}
                        source={user?.profileurl}
                        transition={200}
                        placeholder={blurhash}
                    />
                </View>
            </MenuTrigger>
            <MenuOptions customStyles={{
                optionsContainer:{
                    borderRadius:13,
                    borderCurve:'continuous',
                    marginTop:heightPercentageToDP(6),
                    marginLeft:-widthPercentageToDP(12)
                }
            
            }}>
                <ContextMenuItem 
                    action={handleProfile}
                    icon={<Feather name="user" size={24} color="black" />}
                    text={"Profile"}
                />
                <ContextMenuItem 
                    action={logout}
                    icon={<AntDesign name="logout" size={heightPercentageToDP(2.5)} color="black" />}
                    text={"Sign Out"}
                />
            </MenuOptions>
        </Menu>
        
    </View>
}