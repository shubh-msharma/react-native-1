import {View,Pressable,Text} from 'react-native'

const PrimaryButton = ({ children, onPress}) => {
    return (
        <View style={{
            marginVertical: 10,
            backgroundColor: "#805b14",
            borderRadius: 20,
            marginHorizontal: 10,
            paddingVertical: 5
        }}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [{justifyContent:'center',alignItems:'center'} ,pressed ? { opacity: 0.3 }: null] }
                android_ripple={{ color: "rgba(0,0,0,0.6)", borderless: true }}>
               {children}
            </Pressable>
        </View>

    )
}

export default PrimaryButton