import { FlatList, View, Text, StyleSheet } from 'react-native'
import PlaceItem from './PlaceItem'

export default ({ places }) => {
    if (!places) {
        return (
            <View style={styles.noPlaceTextBox}>
                <Text style={styles.noPlaceText}>No places are added yet - add new places</Text>
            </View>
        )
    }
    return <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ index, item }) => <PlaceItem
            place={item}
        />}
    />
}

const styles = StyleSheet.create({
    noPlaceTextBox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    noPlaceText:{
        fontSize:19
    },
})