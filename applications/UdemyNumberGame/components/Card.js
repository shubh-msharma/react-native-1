import { View } from "react-native"


export default ({children,style})=>{
    return (
        <View
            style={[{
                backgroundColor: "#b38505",
                borderRadius: 5,
                marginTop: 20,
                marginHorizontal: 10,
                padding: 5,
                elevation: 4,
                shadowColor: "rgba(0,0,0,0.7)",
                shadowRadius: 10,
                shadowOpacity: 0.5,
                shadowOffset: { height: 10, width: 10 },
                alignItems: "center"
            },style]}
        >
            {children}
        </View>
    )
}