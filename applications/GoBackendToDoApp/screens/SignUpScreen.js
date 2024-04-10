import { View, StyleSheet } from 'react-native'
import RegisterSignUpGuide from '../components/RegisterSignUpGuide'
import Button from '../ui/Button'
import FormTextElement from '../ui/FormTextElement'
import UpperRoundedBottonCard from '../ui/UpperRoundedBottonCard'
export default ({navigation}) => {
    return (
        <UpperRoundedBottonCard>
            <View style={styles.formContainer}>
                <FormTextElement
                    label={"Name"}
                    placeholder={"Enter your name"}
                />
                <FormTextElement
                    label={"Organization"}
                    placeholder={"Enter your organization"}
                />
                <FormTextElement
                    label={"Email"}
                    placeholder={"Enter your email"}
                />
                <FormTextElement
                    label={"Password"}
                    placeholder={"Enter your password"}
                />
                <Button
                    label={"Register"}
                />
            </View>
            <RegisterSignUpGuide
                msg={"Already have an Account? "}
                btnMsg={"SingIn here"}
                onPress={() => { navigation.navigate("SignInScreen") }}
            />
        </UpperRoundedBottonCard>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        // flex:1,
        paddingHorizontal: 4,
        paddingBottom: 16
    },
})