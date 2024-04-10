import {StyleSheet,View,Text, Pressable} from 'react-native'
import CardItemList from './CardItemList';

const Card = ({item}) =>{
    return (
        <Pressable style = {styles.todoCard}>
                <View>
                    <View style={styles.cardTitle}>
                        <Text style = {styles.cardTitleText}>{item.title}</Text> 
                    </View>
                    <CardItemList items={item.notes}/>
                </View> 
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    todoCard: {
        padding: 8,
        borderWidth: 2,
        backgroundColor:'light-grey',
        margin:2,
        // width:"49%",
        borderRadius:5,
        backgroundColor:'white'
    },
    cardTitle:{
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
        paddingBottom:4,
        marginBottom:2,
    },
    cardTitleText: {
        fontSize:25
    }
});

export default Card;