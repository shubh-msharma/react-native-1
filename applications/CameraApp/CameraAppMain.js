import { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import {requestPermissionsAsync} from 'expo-media-library'
import * as Cam from 'expo-camera'

function CameraAppMain() {
    // const [hasCameraPermission,setHasCameraPermission] = useState(null);
    // const [cameraType,setCameraType] = useState(null);
    // const [flashOn, setFlashOn] = useState(null);
    // const cameraRef = useRef(null);

    useEffect(() => {
        requestPermissionsAsync()
        // async function requestCameraPermissions(){
        //     const res = await requestCameraPermissionsAsync();
        //     if(res.status === "granted") setHasCameraPermission(true)
        // }
        // requestCameraPermissions();
    })
    const hasCameraPermission = false

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
        }}>
           { 
           hasCameraPermission ? (
            <></>
           ) : (
                <Text style={{
                    textAlign: 'center',
                    fontSize: 19
                }}>
                     please grant camera and media file permissions to use features
                </Text>
            )
        }

        </View>
    )
}

export default CameraAppMain;