import { uuidv4 } from '@firebase/util'
import { collection, setDoc, addDoc, doc, getDoc, query, where, getDocs, and, limit, orderBy } from 'firebase/firestore'
import { db, userRef } from '../../../configs/firebase-config'


export const saveUser = async (user) => {
    await setDoc(doc(db, "users", user.id), user)
    // addDoc(collection(db,"users",user.id),user)
}

export const getUserById = async (id) => {
    return (await getDoc(doc(db, "users", id))).data()
}

export const fetchUsers = async () => {
    const q = query(collection(db, "users"))
    const snp = await getDocs(q)
    const data = []
    snp.forEach(doc => {
        data.push({ ...doc.data() })
    })
    return data;
}
export const fetchUsersExcept = async (id) => {
    const q = query(collection(db, "users"), where("id", "!=", id))
    const snp = await getDocs(q)
    const data = []
    snp.forEach(doc => {
        data.push({ ...doc.data() })
    })
    return data;
}

export const getChatRoom = async (sender, reciever, createIdNotFound = false) => {

    const q = query(collection(db, "chat-rooms"), and(where("senderId", "==", sender), where("receiverId", "==", reciever)), limit(1))
    const snp = await getDocs(q)
    let room = undefined;
    snp.forEach((temp) => {
        room = temp.data();
        console.log(temp.data());
    });
    if (!room && createIdNotFound) {
        const id1 = uuidv4()
        const id2 = uuidv4()
        const chatId = [sender, reciever].sort().join("_");
        room = {
            id: id1,
            senderId: sender,
            receiverId: reciever,
            createdOn: Date.now(),
            chatId: chatId
        }
        setDoc(doc(db, "chat-rooms", id1), room)

        setDoc(doc(db, "chat-rooms", id2), {
            id: id2,
            senderId: reciever,
            receiverId: sender,
            createdOn: Date.now(),
            chatId: chatId
        })
        return room;
    }
    return room;
}

export const sendMessage = (senderId, receiverId, chatId, content) => {
    const id = uuidv4();
    const msg = {
        id, senderId, receiverId, chatId, content, createdOn: Date.now(),
    }
    setDoc(doc(db, "messages", id), msg)
    return msg;
}

export const getLastMessageQuery = (receiverId, chatId) => {
    return query(collection(db, "messages"), and(where("receiverId", "==", receiverId), where("chatId", "==", chatId)), orderBy("createdOn", "desc"), limit(1))
}

export const getAllMessagesByChatId = async (chatId,callback,callback2) => {
    const q = query(collection(db, "messages"), where("chatId", "==", chatId),orderBy("createdOn","asc"))
    const snps = await getDocs(q) 
    const data = []
    snps.forEach(temp=>{
        data.push(temp.data())
    })
    callback(data)
    callback2(true)
}