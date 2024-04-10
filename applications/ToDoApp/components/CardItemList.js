import {
    FlatList,
    StyleSheet
} from 'react-native'
import CardItem from './CardItem'


const CardItemList = ({items}) => {
    console.log(items)
    return ( < FlatList 
        data = {items}
        renderItem = {
            (item) => {
                return ( 
                < CardItem text = {item.item.text}/>
                )
            }
        }
        keyExtractor = {
            item => item.id
        }
        /> 
    )
}

const styles = StyleSheet.create({

});

export default CardItemList;