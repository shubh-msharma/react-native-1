import { Text, View } from 'react-native'
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
// import Carousel from 'react-native-snap-carousel';
// import {Carousel,ParallaxImage} from 'react-native-snap-carousel'
import { sliderImage,sliderImageReq } from '../constants'

export default ()=>{
    console.log(sliderImageReq)
    return (
        // <Carousel 
        //         data={sliderImageReq}
        //         // sliderHeight = {hp(40)}
        //         sliderWidth = {wp(100)}
        //         // itemHeight = {hp(40)}
        //         itemWidth = {wp(100)- 70}
        //         renderItem = {ItemSlide}
        //         autoplayInterval = {4000}
        //         autoplay = {true}
        //         loop = {true}
        //         firstItem = {1}
        //         slideStyle = {{display:"flex",alignItems:'center'}}
        //     />
        <View></View>
    )
}

const ItemSlide = ({item,index},parallaxProps) => {
    return (
        <View style = {{
                height:hp(32),
                width:wp(100)-70,
            }}>
            <ParallaxImage 
                source={item}
                containerStyle = {{borderRadius:30,flex:1}}
                style = {{resizeMode:'contain'}}
                parallaxFactor = {1}
                {...parallaxProps}
            />
        </View>
    )
}