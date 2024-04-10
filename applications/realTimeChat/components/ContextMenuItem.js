import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Text ,View } from 'react-native';


  export default ({text , icon , action, value}) => {
    return <MenuOption onSelect={()=>action(value)}>
        <View className="flex-row justify-between px-1 py-2">
            <Text style={{
                fontSize:heightPercentageToDP(2.5)
            }}>{text}</Text>
            {icon}
        </View>
    </MenuOption>
  }