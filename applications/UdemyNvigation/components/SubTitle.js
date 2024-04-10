import {View,Text} from 'react-native'

export default ({children, containerStyle, textStyle})=>{
    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{children}</Text>
        </View>
    )
}