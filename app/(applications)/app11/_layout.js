import { Slot, Stack, useRouter, useSegments } from 'expo-router'
import { useEffect, useLayoutEffect } from 'react';
import 'react-native-gesture-handler'
import AuthContextProvider, { useAuth } from '../../../applications/realTimeChat/context/authContext'
import { MenuProvider } from 'react-native-popup-menu';

function MainLayout() {
    const { isAuthenticated } = useAuth();
    const router = useRouter()
    const segment = useSegments()
    useEffect(() => {
        if (typeof isAuthenticated == 'undefined') return;
        const isInAuthenticatedRoutes = segment.includes("(auth)")
        setTimeout(() => {
            if (isAuthenticated && false === isInAuthenticatedRoutes) {
                // setTimeout(()=>{router.replace("/app11/home")},1000)
                console.log("routing to home")
                router.replace("/app11/home")
            } else if (false === isAuthenticated) {
                console.log('routing to signin')
                router.replace("/app11/signin")
                // setTimeout(()=>{router.replace("/app11/signin")},1000)
            }
        }, 300)

    }, [isAuthenticated])

    return (
        <Slot />
    )
}


export default () => {
    return (
        <>
            <Stack.Screen options={{
                headerShown: false
            }} />
            <AuthContextProvider>
                <MenuProvider>
                    <MainLayout />
                </MenuProvider>
            </AuthContextProvider>
        </>

    )
}