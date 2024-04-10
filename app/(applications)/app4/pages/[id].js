import {View,Text,Button, Image, ScrollView, TouchableOpacity} from 'react-native'
import { cities } from '../../../../applications/animationLearning/constants'
import {Stack, useGlobalSearchParams,useRouter} from 'expo-router'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import Animated, { FadeInDown, FadeInUp, SlideInRight, SlideOutLeft } from 'react-native-reanimated'


export default ()=>{

    const router = useRouter();
    const {id} = useGlobalSearchParams()

    const city = cities.find((item)=>item.id == id);

    return (
        <ScrollView style= {{flex:1,position:'relative'}}>
            <Stack.Screen options={{headerShown:false}}/>
            <Animated.View 
            // entering={SlideInRight.springify().duration(400)}
            style = {{flex:1}}>
                <Animated.Image
                sharedTransitionTag='tag'
                style={{
                    // width:"100%",
                    // aspectRatio:"1/1",
                    height:300,
                    // position:'absolute',
                    // top:0
                    // flex:1
                }}
                source={{uri:city.imageUrl}}/>
            </Animated.View>
            <Animated.View 
            //  entering={SlideInRight.delay(300).springify().duration(400)}
            style = {{paddingHorizontal:10,flex:1}}>
                <Text style={{fontSize:30,fontWeight:'900'}}>{city.cityName}</Text>
                <Text style={{fontSize:20}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda unde vitae vel voluptatem, ratione excepturi quas earum inventore tempora? Dolore enim consequatur dolorem aperiam doloremque sit aliquam eveniet obcaecati, beatae rem excepturi labore id illum consequuntur et quas laudantium neque saepe voluptatem nisi inventore. Perferendis consequatur repudiandae maiores numquam ex sunt reiciendis illum itaque alias ut, error architecto ad rerum necessitatibus sit nihil, officiis quam blanditiis velit harum, quos totam enim facilis! Ipsum doloribus officiis omnis, iure quae, accusamus voluptatibus, quas reiciendis ad autem repellat expedita repellendus sed! Corrupti nemo nobis eos explicabo, tempora nostrum illum rem architecto sunt odio harum laudantium quidem alias excepturi voluptates, laborum assumenda incidunt velit? Ab at, itaque sint aliquam, officia deserunt hic assumenda beatae adipisci minus, odit similique mollitia! Fuga possimus hic odit voluptatem officiis accusantium maiores, nam cupiditate qui. Quaerat, quidem sit illo ab ad nobis id eveniet alias, provident porro repudiandae neque? Sit dolor eum iure ea nam consequatur blanditiis ipsam sapiente reiciendis, recusandae aut maiores voluptatibus quia dignissimos iusto culpa? Labore ipsa magni accusantium harum debitis repellat asperiores minus ratione dolor animi, sunt assumenda quidem! Placeat deserunt beatae impedit eos est rem mollitia totam inventore accusamus qui. Veniam voluptatum dolorum ex harum quos ullam quia sunt reprehenderit cum! Dignissimos dolorem consectetur sed recusandae dolore ipsam. Debitis a consectetur, ipsa tempore dolorum voluptatem vero sit beatae! Qui magnam illo iure, dolores eaque consequatur distinctio optio autem recusandae excepturi placeat minus ut minima architecto suscipit earum tempora impedit sed sapiente provident ullam labore omnis pariatur? Inventore, nemo reprehenderit! Dicta animi voluptas fuga id harum. Reiciendis ipsam molestiae, ratione voluptatum animi exercitationem aspernatur placeat, quisquam quam voluptatem debitis tempore soluta corporis nesciunt magni qui delectus voluptate non dignissimos iste amet illo possimus ut eum. Reprehenderit architecto mollitia magni dolore neque? Libero quod minima delectus temporibus eveniet ea commodi alias? Necessitatibus vitae possimus deserunt repellendus. Aspernatur voluptate dignissimos debitis? Voluptatibus repellendus inventore adipisci. Quibusdam officia pariatur similique dolor necessitatibus voluptate laboriosam accusamus nulla molestias expedita exercitationem libero at aspernatur, tenetur nisi assumenda natus cumque repellendus molestiae temporibus tempora! A consectetur delectus suscipit ipsa repellat in laboriosam accusantium incidunt eos corporis veniam recusandae earum, expedita iusto provident voluptates! Modi accusantium qui minima quas? Adipisci repudiandae architecto officia nostrum aspernatur suscipit deserunt nulla rem quod autem culpa iusto unde necessitatibus veritatis, consequuntur hic dolore sed. Aspernatur consequuntur impedit sapiente, id odio autem inventore reiciendis eius, omnis quam provident quo asperiores dolores nihil delectus excepturi nisi, quibusdam magni quia accusamus repudiandae officia architecto iusto! Voluptatibus dolorem sunt commodi debitis fugiat facilis tempore animi, dignissimos officia nesciunt odit? Assumenda, sit aperiam fugit facere architecto perspiciatis nulla cupiditate recusandae? Illo hic nobis iste veniam odit assumenda tempore ducimus recusandae nihil, itaque nesciunt culpa architecto expedita debitis laudantium voluptas esse! Harum velit numquam quam debitis a vel voluptas doloribus molestiae adipisci voluptate. Et iste similique possimus eligendi vitae. Nemo, quasi est libero quibusdam ratione, alias, minus ullam corporis eveniet non corrupti molestias? Dolorum, illum provident perferendis pariatur earum reiciendis dicta velit?
                </Text>  
            </Animated.View>
            
            <TouchableOpacity onPress={()=>{
                router.back();
            }} style={{
                    backgroundColor:'red',
                    position:'absolute',
                    left:20,
                    top:40,
                }}>
                <ArrowLeftIcon size={50} color="white"/>
            </TouchableOpacity>
        </ScrollView>
    )

}