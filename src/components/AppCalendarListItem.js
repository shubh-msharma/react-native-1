import {View,Text,StyleSheet,Pressable} from 'react-native'
import {AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc'
import {Link} from 'expo-router'
export default ({data}) => {
    return (
        <Link href={`/app${data}`} asChild>
            <Pressable style = {styles.box}>
                <Text style = {styles.boxText}>{data}</Text>
            </Pressable>
        </Link>
    )
}


const styles = StyleSheet.create({
    box:{
        backgroundColor:"#eddeb4",
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:10,
        borderColor:"#9e8f64",
        alignItems:'center',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        aspectRatio:1
    },
    boxText:{
      fontSize:85,
      color:"#706954",
      fontFamily:'AmaticSC_700Bold'
    }
  })