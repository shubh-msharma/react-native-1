import { KeyboardAvoidingView, Platform, ScrollView } from "react-native"

export default ({children}) => {
    const isIos = Platform.OS === "ios"
    return (
        <KeyboardAvoidingView
            behavior={isIos ? "padding" : "height"}
            style = {{flex:1}}
        >
            <ScrollView 
                showsVerticalScrollIndicator={false}
                bounces={false}
                style = {{flex:1}}>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}