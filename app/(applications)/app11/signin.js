import { Image } from "expo-image"
import { Alert, Pressable, Text, TextInput, View } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useRef } from "react";
import { useState } from "react";
import Loading from "../../../applications/realTimeChat/components/Loading";
import CustomKeyboardView from "../../../applications/realTimeChat/components/CustomKeyboardView";
import { useAuth } from "../../../applications/realTimeChat/context/authContext";

export default () => {
    const router = useRouter();
    const formElementClass = "flex-row bg-neutral-200 rounded-lg items-center p-3";
    const emailRef = useRef("");
    const passRef = useRef("");
    const [loading, setLoading] = useState(false)
    const {login}  = useAuth()
    const handleLogin = async () => {
        if (!emailRef.current || !passRef.current) {
            Alert.alert("Invalid Credentials", "please enter required fields")
        }
        setLoading(true)
        const res = await login(emailRef.current,passRef.current);
        if(res.success){
            router.replace("/app11/home")
        }else{
            Alert.alert("Failed Sign in", res.reason)
        }
        setLoading(false)
    }
    return <CustomKeyboardView>
        <View className='flex-1 mx-3 '>
            {/* image */}
            <View className="items-center px-2">
                <Image style={{
                    height: hp(40),
                    aspectRatio: 1
                }} source={require("../../../applications/realTimeChat/assets/login.png")} />
            </View>
            <View>
                {/* tag */}
                <Text style={{
                    fontSize: hp(5)
                }} className="tracking-wider capitalize text-center">Sign in</Text>

                {/* form */}
                <View className="mt-2 p-1">
                    {/* email*/}
                    <View className={formElementClass}>
                        {/* icon */}
                        <Fontisto name="email" size={hp(6)} color="black" />
                        {/* input */}
                        <TextInput
                            style={{
                                fontSize: hp(3.3)
                            }}
                            className="ml-3"
                            placeholder="email address"
                            // value={emailRef.current}
                            onChangeText={(val) => {
                              emailRef.current = val
                            }}
                        />
                    </View>
                    {/* password */}
                    <View className={formElementClass + " mt-3"}>
                        {/* icon */}
                        <AntDesign name="lock1" size={hp(6)} color="black" />
                        {/* input */}
                        <TextInput
                            style={{
                                fontSize: hp(3.3)
                            }}
                            className="ml-3"
                            placeholder="password"
                            onChangeText={(val) => passRef.current = val}
                            // value = {passRef.current}
                            secureTextEntry={true}

                        />
                    </View>
                    {/* forget password */}
                    <Pressable className="mt-1 mr-2">
                        <Text style={{
                            fontSize: hp(2.2)
                        }} className="capitalize text-right">forget password ?</Text>
                    </Pressable>
                    {/* sign in button */}
                    {
                        loading ? (
                            <View style={{
                            }} className="flex-row justify-center">
                                <Loading size={hp(10)} />
                            </View>
                        ) : (
                            <View className="flex-row bg-blue-500 rounded-l items-center p-3 mt-3">
                                <Pressable className="flex-1 justify-center items-center" onPress={handleLogin}>
                                    <Text style={{
                                        fontSize: hp(3.6)
                                    }} className="tracking-wide text-neutral-200">
                                        Sign in
                                    </Text>
                                </Pressable>
                            </View>
                        )
                    }

                    <View className="flex-row mt-3">
                        <Text style={{
                            fontSize: hp(2.4)
                        }}>Dont have an account ? </Text>
                        <Pressable onPress={() => router.replace("/app11/signup")}>
                            <Text className="text-blue-500 font-bold" style={{
                                fontSize: hp(2.4)
                            }}>Sign up</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            {/* form close */}
        </View>
    </CustomKeyboardView>
}