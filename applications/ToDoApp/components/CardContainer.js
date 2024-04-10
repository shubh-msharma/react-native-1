import {View,FlatList,StyleSheet, Pressable} from 'react-native'
import Card from './Card';

const CardContainer = ({data}) =>{
    return (
        <Pressable>
            <View style={styles.todoCardContainer}>
                <FlatList
                    numColumns={2}
                    
                    data={data}
                    renderItem = {(item=>{
                        return (
                            <Card item={item.item}/>         
                        )
                    })}
                    keyExtractor = {item=>item.id}
                />
           </View>
        </Pressable>
        
    );
}

const styles = StyleSheet.create({
    todoCardContainer:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:"red"
    },
});

export default CardContainer;