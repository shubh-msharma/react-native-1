import { useRouter } from "expo-router"
import { useEffect } from "react"
import { FlatList } from "react-native"
import { heightPercentageToDP } from "react-native-responsive-screen"
import UserListItem from "./UserListItem"

export default ({users,currentUser})=>{
    const router  = useRouter()
    return <FlatList
        data={users}
        // keyExtractor={(item)=>item.uid}
        keyExtractor={(item)=>Math.round(100)}
        showsVerticalScrollIndicator={false}
        renderItem={({item,index})=><UserListItem 
                                        router={router} 
                                        index={index}
                                        receiver={item}
                                        sender={currentUser}
                                    />
                        }
        contentContainerStyle={{
            paddingVertical: 30
        }}
    />
}