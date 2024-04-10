import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useAuth } from "../../../../applications/realTimeChat/context/authContext"
import Loading from '../../../../applications/realTimeChat/components/Loading'
import UsersList from "../../../../applications/realTimeChat/components/UsersList"
import { heightPercentageToDP } from "react-native-responsive-screen"
import { useEffect } from "react"
import {fetchUsersExcept} from '../../../../applications/realTimeChat/firebase/userFirebase'
export default ()=>{
    const {user} = useAuth();
    const [users,setUsers] = useState([])
    const [fetchingUser,setFetchingUser] = useState(false);
    useEffect(()=>{
        if(user?.id){
          setFetchingUser(true)
          fetchUsers(user.id)
        }
    },[user])

    const fetchUsers = async (id)=> {
       const data = await fetchUsersExcept(id);
       console.log(data)
       setUsers(data)
       setFetchingUser(false)
    }

    return <View>
        {
            fetchingUser ? (
                <View className="h-full justify-center items-center">
                    <Loading size={heightPercentageToDP(10)}/>
                </View>
            ) : (
                users?.length > 0 ? (
                    <UsersList currentUser={user} users = {users}/>
                ) : (
                    <View className="h-full justify-center items-center">
                        <Text className="text-xl text-neutral-600 text-center">no users found</Text>
                    </View>
                ))
        }
    </View>
}

/*



*/