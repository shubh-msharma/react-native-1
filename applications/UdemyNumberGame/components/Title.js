import {View,Text} from 'react-native'
import {wp,hp} from '../utils/dimensionUtil'

const Title = ({children,style}) => {
    return (
                <Text style = {[{
                    fontSize:hp(3),
                    textAlign:'center',
                    color:"white",
                    fontWeight:'bold',
                    borderWidth:2,
                    borderColor:"white",
                    padding:15,
                    borderRadius:10,
                    maxWidth:wp(60)
                },style]}>
                    {children}
                </Text>
    )
}

export default Title;