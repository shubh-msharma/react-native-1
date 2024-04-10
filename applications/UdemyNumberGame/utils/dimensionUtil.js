import {Dimensions} from 'react-native'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export function wp(num){
    return (width * num) / 100;
}

export function hp(num){
    return (height * num) / 100;
}