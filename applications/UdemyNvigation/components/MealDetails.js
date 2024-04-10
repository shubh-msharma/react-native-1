import {View,Text,StyleSheet} from 'react-native'
export default ({
    affordability, duration, complexity, textStyle
})=>{
    return (
        <View style={styles.detailsContainer}>
            <Text style={[styles.detailsItem,textStyle]}>{duration}s</Text>
            <Text style={[styles.detailsItem,textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailsItem,textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsItem: {
        marginHorizontal: 5,
        marginVertical: 4,
        fontSize: 15,
    }
})