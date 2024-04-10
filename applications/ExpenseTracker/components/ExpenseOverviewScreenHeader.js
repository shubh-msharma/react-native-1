import { View, Text, StyleSheet, Pressable } from "react-native"
import { GlobalStyles } from "../constants/styles"
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import IconButton from '../UI/IconButton'


export default ({ title, showAddButton, showBackButton }) => {
    const navigation = useNavigation()
    console.log("header >>>>>>>>>>>>> ", title)
    return (
        <View style={styles.container}>
            <View style={[styles.innerContainer, { justifyContent: 'center', }]}>
                {
                    showBackButton ? (
                        // <Pressable onPress={() => {
                        //     navigation.goBack();
                        // }} style={({pressed}) => pressed ? {opacity:0.6} : {}}>
                        //     <AntDesign name="back" size={24} color="white" />
                        // </Pressable>
                        <IconButton color={'white'} name={"back"} onPress={()=>{
                            navigation.goBack();
                        }} size={24} />
                    ) : (null)
                }

                <View style={{
                    flex: 1
                }}>
                    <Text style={styles.text}>{title}</Text>
                </View>
                {
                    showAddButton ? (
                    <IconButton color={'white'} name={"addfile"} onPress={()=>{
                        navigation.navigate("ManageExpense")
                    }} size={24} />
                    
                    ) : (null)
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // paddingTop:40,
        backgroundColor: GlobalStyles.colors.primary800,

    },
    innerContainer: {
        paddingTop: 40,
        backgroundColor: GlobalStyles.colors.primary500,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        paddingHorizontal: 20,
        paddingBottom: 8,
        borderBottomColor: GlobalStyles.colors.primary100,
        // borderBottomWidth:1,
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center'
    }
})