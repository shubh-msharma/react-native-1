import { Pressable, View , Image} from 'react-native'

export default ({place})=>{
    return (
        <Pressable>
            <Image source={{uri:place.image}}/>
            <View>
                <Text>
                    {place.title}
                </Text>
                <Text>
                    {place.address}
                </Text>
            </View>
        </Pressable>
    )
}