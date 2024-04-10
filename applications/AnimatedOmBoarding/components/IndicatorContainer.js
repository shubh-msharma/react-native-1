import {View,StyleSheet} from 'react-native'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default ({screens, selectedScreen})=>{
    return (
        <View style={style.container}>
            {
                screens.map((item,index)=>{
                    return <View key={index} style={[style.line,{backgroundColor:index===selectedScreen?'#877322':'#f0ebd3'}]}/>
                })
            }
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        marginVertical:hp(3),
        flexDirection:'row',
        gap:hp(0.9),
        marginHorizontal:hp(1)
    },
    line:{
        // flex:1,
        backgroundColor:'white',
        flex:1,
        height:5,
        borderRadius:30
    }
});