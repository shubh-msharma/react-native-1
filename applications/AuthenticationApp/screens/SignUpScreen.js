import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Form from '../components/Form'
import SignInSignUpInstr from '../components/SignInSignUpInstr'
import { useAuth } from '../store/Authentication-context'
import { colors1 } from '../theme/Styles'
import Button from '../ui/Button'
function SignUpScreen({navigation}) {

    const {signup} = useAuth()

    const [formData,setFormData] = useState({
        name:"",
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

    const handleSignUp = () => {
        signup({
            email:formData.email,
            name:formData.name
        },formData.pass);
    }

    return (
        <View style={styles.constainer}>
            {/* card */}
            <Card
                body={
                    <Form
                        inputs={[
                            {
                                placeholder:"Enter you Name",
                                config:{},
                                onChangeText:handleOnTextChange.bind(this,"name"),
                                value:formData.name
                            },
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
                        <Button onPress={handleSignUp}>Sign Up</Button>
                        <SignInSignUpInstr
                            btnInst={"SignIn Here"}
                            inst={"Already have an account ?"}
                            onPress = {()=>{
                                navigation.navigate("SignIn")
                            }}
                        />
                    </>
                }
            />
            
        </View>
    )
}
export default SignUpScreen

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: colors1.primary300
    }
})
