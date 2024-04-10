import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Form from '../components/Form'
import SignInSignUpInstr from '../components/SignInSignUpInstr'
import { useAuth } from '../store/Authentication-context'
import { colors1 } from '../theme/Styles'
import Button from '../ui/Button'
function SignInScreen({navigation}) {

    const {signin} = useAuth()

    const [formData,setFormData] = useState({
        email:"",
        pass:""
    })

    const handleOnTextChange = (identifier,val)=>{
        setFormData(pre=>{
            return {
                ...pre,
                [identifier]:val
            }
        })
    }

    const handleSignIn = () => {
        signin(formData.email,formData.pass);
    }

    return (
        <View style={styles.constainer}>
            {/* card */}
            <Card
                body={
                    <Form
                        inputs={[
                            {
                                placeholder:"Enter you Email",
                                config:{},
                                onChangeText:handleOnTextChange.bind(this,"email"),
                                value:formData.email
                            },
                            {
                                placeholder:"Enter you Password",
                                config:{
                                    autoCapitalize: "none",
                                    autoCorrect: false
                                },
                                onChangeText:handleOnTextChange.bind(this,"pass"),
                                value:formData.pass
                            },
                        ]}
                    />
                }
                footer={
                    <>
                        <Button onPress={handleSignIn} >Sign In</Button>
                        <SignInSignUpInstr
                            btnInst={"SignUp Here"}
                            inst={"Don't have an account ?"}
                            onPress = {()=>{
                                navigation.navigate("SignUp")
                            }}
                        />
                    </>
                }
            />
            
        </View>
    )
}
export default SignInScreen

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: colors1.primary300
    }
})
