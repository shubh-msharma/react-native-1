import {View,Text} from 'react-native'

const NumberContainer = ({children}) => {
    return (
        <View style = {{
            padding:10,
            marginVertical:10,
            borderWidth:2,
            borderColor: "#f0b565",
            borderRadius: 10,
        }}>
            <Text style = {{
                fontSize: 30,
                fontWeight:'bold',
                color:"#f0b565",
                textAlign:'center'
            }}>{children}</Text>
        </View>
    )
}

export default NumberContainer;