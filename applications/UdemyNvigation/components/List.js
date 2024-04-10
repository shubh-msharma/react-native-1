import {View,Text} from 'react-native'

export default ({dataItems,listItemContainerStyle,listItemTextStyle})=>{
    return dataItems.map((item,index)=>{
        return <View style={listItemContainerStyle} key={index}>
            <Text style={listItemTextStyle}>{item}</Text>
        </View>
    })
}