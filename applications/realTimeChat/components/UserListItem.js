import { View, Text, TouchableOpacity, Image, Alert } from "react-native"
import { heightPercentageToDP } from "react-native-responsive-screen"
import { getChatRoom } from "../firebase/userFirebase"
export default ({ sender, receiver, index, router }) => {
    const handleOpenChat = async () => {
        const room = await getChatRoom(sender.id, receiver.id, true)
        if (room) {
            console.log("obtained room",room)
            router.push({
                pathname: "/app11/chatroom",
                params: {
                    sender: JSON.stringify(sender),
                    receiver: JSON.stringify(receiver),
                    room:JSON.stringify(room)
                }
            })
        }else{
            Alert.alert("Failed to open messages","unable to open messages try again after some time")
        }
    }
    return (
        <TouchableOpacity onPress={handleOpenChat} className="flex-row items-center gap-3 mb-2 pb-3 border-b border-b-neutral-300 px-2">
            {/* image */}
            <Image source={require("../assets/avatar.png")}
                style={{
                    height: heightPercentageToDP(6),
                    width: heightPercentageToDP(6),
                    // aspectRatio:1
                }}
                className="rounded-full"
            />
            {/* name last message and tme */}
            <View className="flex-1 flex-row justify-between">
                {/* name and last messate */}
                <View className="flex justify-between">
                    <Text style={{ fontSize: heightPercentageToDP(1.8) }} className="font-semibold text-neutral-700">{receiver?.username}</Text>
                    <Text style={{ fontSize: heightPercentageToDP(1.6) }} className="font-semibold text-neutral-500">hello how are you</Text>
                </View>
                {/* time */}
                <Text>10:44 pm</Text>
            </View>
        </TouchableOpacity>
    )
}