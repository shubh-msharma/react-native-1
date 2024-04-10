import { Pressable, Text, View , StyleSheet, Platform} from "react-native";

function CategoryGridTile({title, color, onPressHandler}){


    return <View style={[styles.outerGridTileContainer]}>
        <Pressable 
                android_ripple={{
                    color:"#ccc"
                }} 
                style={({pressed})=>[
                    styles.button,
                    pressed ? {opacity:0.5} : null
                ]}
                onPress = {onPressHandler}
            >
            <View style={
                [
                    styles.innterGridTileContainer,
                    {backgroundColor:color}
                ]
                }>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>

}

const styles = StyleSheet.create({
    outerGridTileContainer: {
        flex:1,
        borderColor:"black",
        borderRadius:20,
        aspectRatio:1/1,
        marginVertical:3,
        marginHorizontal:4,
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowRadius:5,
        shadowOffset:{width:0,height:10},
        overflow:'hidden',
        backgroundColor:"white"
    },
    button: {
        flex:1
    },
    innterGridTileContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontWeight:'bold',
        fontSize:24
    }
})

export default CategoryGridTile;