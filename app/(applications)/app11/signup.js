import { Image } from "expo-image"
import { Alert, Pressable, Text, TextInput, View } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import CustomKeyboardView from "../../../applications/realTimeChat/components/CustomKeyboardView";
import { useRef } from "react";
import { useAuth } from "../../../applications/realTimeChat/context/authContext";
import { useState } from "react";


export default () => {
    const router = useRouter();
    const formElementClass = "flex-row bg-neutral-200 rounded-lg items-center p-3";
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passRef = useRef("");
    const repeatPassRef = useRef("");
    const profilePicRef = useRef("");
    const [loading,setLoading] = useState(false);

    const {register} = useAuth();

    const handleRegister = async () => {
        if(!nameRef.current || !emailRef.current || !passRef.current || !repeatPassRef.current || passRef.current !== repeatPassRef.current){
            Alert.alert("Invalid form value","please enter proper values");
            return
        }
        setLoading(true);
        const res = await register(emailRef.current,nameRef.current,passRef.current,profilePicRef.current)
        if(res.success){
            router.replace("/app11/home")
        }else{
            Alert.alert("Failed Sign up", res.reason)
        }
        setLoading(false);
    }

    return (
        <CustomKeyboardView>
            <View className='flex-1 mx-3 '>
                {/* image */}
                <View className="items-center px-2">
                    <Image style={{
                        height: hp(30),
                        aspectRatio: 1
                    }} source={require("../../../applications/realTimeChat/assets/register.png")} />
                </View>
                <View>
                    {/* tag */}
                    <Text style={{
                        fontSize: hp(3.5)
                    }} className="tracking-wider capitalize text-center">Sign up</Text>

                    {/* form */}
                    <View className="mt-2 py-1">
                        {/* name*/}
                        <View className={formElementClass}>
                            {/* icon */}
                            <Ionicons name="person" size={hp(4)} color="black" />
                            {/* input */}
                            <TextInput
                                style={{
                                    fontSize: hp(3.3)
                                }}
                                className="ml-3"
                                placeholder="name"
                                onChangeText={val=>nameRef.current = val}
                            />
                        </View>
                        {/* email*/}
                        <View className={formElementClass + " mt-3"}>
                            {/* icon */}
                            <Fontisto name="email" size={hp(4)} color="black" />
                            {/* input */}
                            <TextInput
                                style={{
                                    fontSize: hp(3.3)
                                }}
                                className="ml-3"
                                placeholder="email address"
                                onChangeText={val=>emailRef.current = val}
                            />
                        </View>
                        {/* password */}
                        <View className={formElementClass + " mt-3"}>
                            {/* icon */}
                            <AntDesign name="lock1" size={hp(4)} color="black" />
                            {/* input */}
                            <TextInput
                                style={{
                                    fontSize: hp(3.3)
                                }}
                                className="ml-3"
                                placeholder="password"
                                secureTextEntry={true}
                                onChangeText={val=>passRef.current = val}

                            />
                        </View>
                        {/* repeat password */}
                        <View className={formElementClass + " mt-3"}>
                            {/* icon */}
                            <AntDesign name="lock1" size={hp(4)} color="black" />
                            {/* input */}
                            <TextInput
                                style={{
                                    fontSize: hp(3.3)
                                }}
                                className="ml-3"
                                placeholder="repeat password"
                                onChangeText={val=>repeatPassRef.current = val}

                            />
                        </View>
                        {/* picture link */}
                        <View className={formElementClass + " mt-3"}>
                            {/* icon */}
                            <AntDesign name="picture" size={hp(4)} color="black" />
                            {/* input */}
                            <TextInput
                                style={{
                                    fontSize: hp(3.3)
                                }}
                                className="ml-3"
                                placeholder="profile picture link"
                                onChangeText={val=>profilePicRef.current = val}

                            />
                        </View>

                        {/* sign up button */}
                        <View className="flex-row bg-blue-500 rounded-l items-center p-3 mt-3">
                            <Pressable className="flex-1 justify-center items-center" onPress={handleRegister}>
                                <Text style={{
                                    fontSize: hp(3.6)
                                }} className="tracking-wide text-neutral-200">
                                    Sign up
                                </Text>
                            </Pressable>
                        </View>
                        <View className="flex-row mt-3">
                            <Text style={{
                                fontSize: hp(2.4)
                            }}>Alredy have an account ? </Text>
                            <Pressable onPress={() => router.replace("/app11/signin")}>
                                <Text className="text-blue-500 font-bold" style={{
                                    fontSize: hp(2.4)
                                }}>Sign in</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                {/* form close */}
            </View>
        </CustomKeyboardView>
    )
}