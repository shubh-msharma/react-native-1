import {View,Text,StyleSheet} from 'react-native'

const CardItem = ({text}) => {
    console.log(text)
    return (
        <View style = {styles.todoCardItem}>
            <Text>{text}</Text>
         </View>
    )
}

const styles = StyleSheet.create({
    todoCardItem:{

    },
})

export default CardItem