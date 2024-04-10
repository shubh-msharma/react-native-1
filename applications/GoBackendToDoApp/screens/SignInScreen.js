import { View, StyleSheet,} from 'react-native'
import RegisterSignUpGuide from '../components/RegisterSignUpGuide'
import Button from '../ui/Button'
import FormTextElement from '../ui/FormTextElement'
import UpperRoundedBottonCard from '../ui/UpperRoundedBottonCard'
export default ({ navigation }) => {
    return (
        <UpperRoundedBottonCard>
            <View style={styles.formContainer}>
                <FormTextElement
                    label={"Email"}
                    placeholder={"Enter your email"}
                />
                <FormTextElement
                    label={"Password"}
                    placeholder={"Enter your password"}
                />
                <Button
                    label={"Sign In"}
                />
            </View>
            <RegisterSignUpGuide
                msg={"Don't have an Account? "}
                btnMsg={"Register here"}
                onPress={() => { navigation.navigate("SignUpScreen") }}
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