import { onSnapshot } from "firebase/firestore";
import { useRef } from "react";
import { forwardRef, useEffect } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react"
import { View, Text, FlatList } from "react-native"
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useMessageState } from "../context/messageContext";
import { getLastMessageQuery, getAllMessagesByChatId } from '../firebase/userFirebase'
export default forwardRef(({ chatId, receiverId, senderId, currentMessage }, ref) => {
    const { msg } = useMessageState()
    console.log(msg, "obtained last message dependency")
    const [messages, setMessages] = useState([]);
    const [fetchedMessages, setFetchedMessages] = useState(false)
    const listRef = useRef()
    useEffect(() => {
        getAllMessagesByChatId(chatId, setMessages, setFetchedMessages)
    }, [])

    // useEffect(() => {
    //     if (messages.length > 10) {
    //         listRef.current?.scrollToIndex({
    //             index: messages.length === 0 ? 1 : messages.length - 1,
    //             animation: true,
    //             viewPosition:0,
    //             viewOffset:0
    //         })
    //     }
    // }, [messages.length])

    useEffect(() => {
        console.log(msg, "running for state msg <<<<<<<<<<<<<")
        if (msg && msg.id) {
            console.log("found message")
            setMessages([...messages, msg])
        }
    }, [msg.createdOn])


    useEffect(() => {
        if (fetchedMessages) {
            const unsub = onSnapshot(getLastMessageQuery(senderId, chatId), (snp) => {
                const temp = snp.docs
                if (temp && temp.length > 0) {
                    const arr = temp.map(item => {
                        return item.data()
                    })
                    if (messages.length > 0) {
                        if (arr[0].createdOn > messages[messages.length - 1].createdOn) {
                            setMessages([...messages, ...arr])
                        }
                    } else {
                        setMessages([...arr])
                    }

                }

            }, () => { })
            return unsub
        }
    }, [fetchedMessages])

    return <FlatList
        ref={listRef}
        data={messages}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
            return <MessageItem currentUser={senderId} msg={item} />
        }}
        // initialScrollIndex = {messages.length}
    />
})

const MessageItem = ({ currentUser, msg }) => {
    const t = new Date(msg?.createdOn)
    return (
        <View className={`my-1 ${msg.senderId === currentUser ? "items-end" : "items-start"} mx-2`}>
            <View
                style={{
                    maxWidth: "80%",
                }}
                className={`flex-row justify-between items-end gap-x-1 border-neutral-200 rounded-lg  px-2 py-1 ${msg.senderId === currentUser ? "bg-pink-300" : "bg-indigo-300"}`}>
                <Text style={{
                    fontSize: heightPercentageToDP(3.2)
                }} className={`${msg.senderId === currentUser ? "text-end" : "text-start"} font-bold tracking-wider`}>{msg?.content}</Text>

                <Text>{`${t.getHours()}:${t.getMinutes()}`}</Text>
            </View>
        </View>
    )
}