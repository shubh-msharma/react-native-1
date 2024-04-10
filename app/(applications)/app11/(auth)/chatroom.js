import { useLocalSearchParams, useRouter } from "expo-router"
import { View, Text, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import ChatRoomHeader from "../../../../applications/realTimeChat/components/ChatRoomHeader";
import MessageList from "../../../../applications/realTimeChat/components/MessageList";
import { Ionicons } from '@expo/vector-icons';
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useRef } from "react";
import { sendMessage } from "../../../../applications/realTimeChat/firebase/userFirebase";
import MessageContextProvider, { useMessageState } from '../../../../applications/realTimeChat/context/messageContext'

const ChatRoom =  () => {
    const data = useLocalSearchParams();
    const router = useRouter();
    const receiver = JSON.parse(data.receiver)
    const sender = JSON.parse(data.sender)
    const room = JSON.parse(data.room)
    const msgRef = useRef("");
    const inputRef = useRef();
    const {setCurrentMessage} = useMessageState()

    const handleSendMessage = () =>{
        if(!msgRef.current) return;
        const msg = sendMessage(sender.id,receiver.id,room.chatId,msgRef.current);
        setCurrentMessage(msg)
        inputRef.current.clear();
    }
    return (
        <View className = "flex-1 bg-white">
            <ChatRoomHeader router={router} user={receiver} />
            <View className="w-full border-b border-neutral-300"/>

            <View className="flex-1">
                <MessageList 
                    chatId={room["chatId"]}
                    receiverId = {receiver.id}
                    senderId = {sender.id}
                />
            </View>
            <View className="flex-row justify-between items-center rounded-full m-1 p-1 bg-white border border-black overflow-hidden">
                <TextInput
                    ref={inputRef}
                    className="flex-1 p-1 bg-white"
                    placeholder="enter message..."
                    style={{
                        fontSize:heightPercentageToDP(2.8)
                    }}
                    onChangeText={(val)=>msgRef.current = val}
                />
                <TouchableOpacity className="rounded-full bg-neutral-200 p-2 mr-[1px]" onPress={handleSendMessage}>
                    <Ionicons name="send" size={heightPercentageToDP(3.8)} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default ()=>{
    return (
        <MessageContextProvider>
                <ChatRoom/>
        </MessageContextProvider>
    )
}